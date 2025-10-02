import { NextRequest } from "next/server";
import puppeteer from "puppeteer";
import { PAPER_SIZES, DEFAULT_PDF_OPTIONS, TEXTBOOK_PDF_OPTIONS, PUBLISHING_PDF_OPTIONS, PdfOptions } from "@/lib/pdf-config";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const url = searchParams.get("url");
  const filename = searchParams.get("filename") || "topic.pdf";
  const paperSize = searchParams.get("paperSize") || "A4";
  const preset = searchParams.get("preset") || "default"; // default, textbook, publishing

  if (!url) {
    return new Response("Missing url parameter", { status: 400 });
  }

  // Select PDF options based on preset
  let pdfOptions: PdfOptions;
  switch (preset) {
    case "textbook":
      pdfOptions = TEXTBOOK_PDF_OPTIONS;
      break;
    case "publishing":
      pdfOptions = PUBLISHING_PDF_OPTIONS;
      break;
    default:
      pdfOptions = DEFAULT_PDF_OPTIONS;
  }

  // Override paper size if specified
  if (paperSize && PAPER_SIZES[paperSize]) {
    pdfOptions = { ...pdfOptions, paperSize: paperSize as keyof typeof PAPER_SIZES };
  }

  const selectedPaper = PAPER_SIZES[pdfOptions.paperSize];

  const browser = await puppeteer.launch({
    args: [
      "--no-sandbox", 
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--disable-accelerated-2d-canvas",
      "--no-first-run",
      "--no-zygote",
      "--disable-gpu"
    ],
    headless: true,
  });

  try {
    const page = await browser.newPage();
    
    // Set larger viewport to ensure all content is rendered
    await page.setViewport({ 
      width: 1200, 
      height: 1600, // Fixed height to ensure consistent rendering
      deviceScaleFactor: 1 // Reduce scale factor for better performance
    });

    // Navigate and wait for full content load
    await page.goto(url, { 
      waitUntil: ["networkidle0", "domcontentloaded"],
      timeout: 90000 
    });

    // Wait for any dynamic content and fonts to load
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Wait for all images to load
    await page.evaluate(() => {
      return Promise.all(Array.from(document.images, img => {
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
          img.addEventListener('load', resolve);
          img.addEventListener('error', resolve);
        });
      }));
    });

    // Scroll through the entire page to ensure all content is rendered
    await page.evaluate(async () => {
      const distance = 100;
      const delay = 100;
      
      // Get total page height
      const totalHeight = document.body.scrollHeight;
      
      // Scroll through the entire page
      for (let i = 0; i < totalHeight; i += distance) {
        window.scrollTo(0, i);
        await new Promise(resolve => setTimeout(resolve, delay));
      }
      
      // Scroll back to top
      window.scrollTo(0, 0);
      await new Promise(resolve => setTimeout(resolve, 500));
      
      // Force reflow by accessing layout properties
      document.body.offsetHeight;
      
      // Ensure all lazy-loaded content is visible
      const allElements = document.querySelectorAll('*');
      allElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.visibility = 'visible';
        }
      });
    });

    // Inject CSS for better PDF formatting
    await page.addStyleTag({
      content: `
        @media print {
          * {
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          
          /* Ensure all content is visible */
          body {
            overflow: visible !important;
            height: auto !important;
            min-height: auto !important;
            max-height: none !important;
          }
          
          /* Force all containers to be visible */
          div, section, article, main {
            overflow: visible !important;
            height: auto !important;
            max-height: none !important;
            min-height: auto !important;
          }
          
          /* Each page div should be on its own page */
          .page {
            page-break-before: always !important;
            break-before: page !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
            min-height: 80vh !important;
            padding: 20px !important;
          }
          
          /* First page shouldn't have page break */
          .page:first-child {
            page-break-before: auto !important;
            break-before: auto !important;
          }
          
          /* Force page breaks between topics */
          .page-break {
            page-break-before: always !important;
            break-before: page !important;
            height: 0 !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          
          /* Topic title pages */
          .topic-title-page {
            page-break-before: always !important;
            break-before: page !important;
          }
          
          /* Avoid orphans and widows */
          h1, h2, h3, h4, h5, h6 {
            break-after: avoid !important;
            page-break-after: avoid !important;
          }
          
          /* Keep content together */
          .avoid-break {
            break-inside: avoid !important;
            page-break-inside: avoid !important;
          }
          
          /* Ensure images fit on page */
          img {
            max-width: 100% !important;
            height: auto !important;
          }
          
          /* Preserve Grid and Flexbox layouts */
          .grid {
            display: grid !important;
          }
          
          .grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .md\\:grid-cols-2 {
            grid-template-columns: 1fr 1fr !important;
          }
          
          .gap-8 {
            gap: 2rem !important;
          }
          
          .gap-4 {
            gap: 1rem !important;
          }
          
          .flex {
            display: flex !important;
          }
          
          .flex-row {
            flex-direction: row !important;
          }
          
          .flex-col {
            flex-direction: column !important;
          }
          
          .items-center {
            align-items: center !important;
          }
          
          .justify-between {
            justify-content: space-between !important;
          }
          
          .space-y-2 > * + * {
            margin-top: 0.5rem !important;
          }
          
          .space-y-3 > * + * {
            margin-top: 0.75rem !important;
          }
          
          .space-y-6 > * + * {
            margin-top: 1.5rem !important;
          }
          
          /* Prevent content boxes from stretching */
          .bg-blue-50,
          .bg-green-50,
          .bg-yellow-50,
          .bg-purple-50 {
            width: auto !important;
            min-height: auto !important;
            flex: 1 !important;
          }
          
          /* Ensure padding and margins are preserved */
          .p-6 {
            padding: 1.5rem !important;
          }
          
          .p-8 {
            padding: 2rem !important;
          }
          
          .mb-4 {
            margin-bottom: 1rem !important;
          }
          
          .mt-8 {
            margin-top: 2rem !important;
          }
          
          .rounded-lg {
            border-radius: 0.5rem !important;
          }
          
          /* Hide interactive elements */
          .sidebar,
          button,
          .print\\:hidden {
            display: none !important;
          }
        }
      `
    });

    // Add page break classes to content programmatically
    await page.evaluate(() => {
      // Force page breaks between major sections
      const pageBreakElements = document.querySelectorAll('.page-break');
      pageBreakElements.forEach(el => {
        (el as HTMLElement).style.pageBreakBefore = 'always';
        (el as HTMLElement).style.breakBefore = 'page';
      });

      // Each .page div should be on its own page
      const pageElements = document.querySelectorAll('.page');
      pageElements.forEach((el, index) => {
        if (index > 0) { // Skip first page
          (el as HTMLElement).style.pageBreakBefore = 'always';
          (el as HTMLElement).style.breakBefore = 'page';
        }
        (el as HTMLElement).style.pageBreakInside = 'avoid';
        (el as HTMLElement).style.breakInside = 'avoid';
      });

      // Add avoid-break to important elements
      const importantElements = document.querySelectorAll('.definition-box, .activity-box, .practice-section, .chapter-header, .avoid-break');
      importantElements.forEach(el => {
        (el as HTMLElement).style.pageBreakInside = 'avoid';
        (el as HTMLElement).style.breakInside = 'avoid';
      });

      // Ensure all content is visible and properly structured
      const allContent = document.querySelector('body');
      if (allContent) {
        (allContent as HTMLElement).style.minHeight = 'auto';
        (allContent as HTMLElement).style.overflow = 'visible';
        (allContent as HTMLElement).style.height = 'auto';
        (allContent as HTMLElement).style.maxHeight = 'none';
      }
      
      // Force expand any collapsed content
      const allDivs = document.querySelectorAll('div, section, article, main');
      allDivs.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.overflow = 'visible';
          el.style.height = 'auto';
          el.style.maxHeight = 'none';
          el.style.minHeight = 'auto';
          el.style.display = el.style.display === 'none' ? 'block' : el.style.display;
        }
      });
      
      // Ensure grid layouts are properly applied
      const gridElements = document.querySelectorAll('.grid, .md\\:grid-cols-2');
      gridElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'grid';
          if (el.classList.contains('md:grid-cols-2') || el.classList.contains('grid-cols-2')) {
            el.style.gridTemplateColumns = '1fr 1fr';
          }
          if (el.classList.contains('gap-8')) {
            el.style.gap = '2rem';
          }
          if (el.classList.contains('gap-4')) {
            el.style.gap = '1rem';
          }
        }
      });
      
      // Ensure flex layouts work properly
      const flexElements = document.querySelectorAll('.flex');
      flexElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.style.display = 'flex';
          if (el.classList.contains('items-center')) {
            el.style.alignItems = 'center';
          }
          if (el.classList.contains('justify-between')) {
            el.style.justifyContent = 'space-between';
          }
        }
      });
      
    });

    // Wait a bit more for any final renders
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Generate PDF with enhanced options
    const pdf = await page.pdf({
      width: selectedPaper.width,
      height: selectedPaper.height,
      printBackground: pdfOptions.printBackground,
      margin: pdfOptions.margin,
      preferCSSPageSize: false, // Force our dimensions
      displayHeaderFooter: false,
      scale: pdfOptions.scale,
      timeout: 120000, // Increase timeout for large content
      format: undefined // Use width/height instead of format
    });

    await browser.close();

    return new Response(pdf as any, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
        "X-Paper-Size": selectedPaper.name,
        "X-Paper-Dimensions": `${selectedPaper.width} × ${selectedPaper.height}`
      },
    });
  } catch (e) {
    await browser.close();
    console.error("PDF generation error:", e);
    return new Response(`Failed to generate PDF: ${e instanceof Error ? e.message : 'Unknown error'}`, { status: 500 });
  }
}
