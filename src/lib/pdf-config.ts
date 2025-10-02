// PDF Configuration for different paper sizes and publishing needs

export interface PaperSize {
  name: string;
  width: string;
  height: string;
  description: string;
}

export const PAPER_SIZES: Record<string, PaperSize> = {
  A4: {
    name: "A4",
    width: "210mm",
    height: "297mm",
    description: "Standard A4 (210 × 297 mm)"
  },
  A3: {
    name: "A3",
    width: "297mm", 
    height: "420mm",
    description: "Large A3 (297 × 420 mm)"
  },
  A5: {
    name: "A5",
    width: "148mm",
    height: "210mm", 
    description: "Compact A5 (148 × 210 mm)"
  },
  LETTER: {
    name: "Letter",
    width: "8.5in",
    height: "11in",
    description: "US Letter (8.5 × 11 inches)"
  },
  LEGAL: {
    name: "Legal", 
    width: "8.5in",
    height: "14in",
    description: "US Legal (8.5 × 14 inches)"
  },
  TEXTBOOK_6X9: {
    name: "Textbook 6×9",
    width: "6in",
    height: "9in", 
    description: "Standard Textbook (6 × 9 inches)"
  },
  TEXTBOOK_7X10: {
    name: "Textbook 7×10",
    width: "7in",
    height: "10in",
    description: "Large Textbook (7 × 10 inches)"
  },
  CUSTOM_SQUARE: {
    name: "Square",
    width: "8in",
    height: "8in",
    description: "Square Format (8 × 8 inches)"
  }
};

export interface PdfOptions {
  paperSize: keyof typeof PAPER_SIZES;
  margin: {
    top: string;
    right: string; 
    bottom: string;
    left: string;
  };
  scale: number;
  printBackground: boolean;
  preferCSSPageSize: boolean;
}

export const DEFAULT_PDF_OPTIONS: PdfOptions = {
  paperSize: "A4",
  margin: {
    top: "15mm",
    right: "15mm", 
    bottom: "15mm",
    left: "15mm"
  },
  scale: 1,
  printBackground: true,
  preferCSSPageSize: true
};

export const TEXTBOOK_PDF_OPTIONS: PdfOptions = {
  paperSize: "TEXTBOOK_6X9",
  margin: {
    top: "12mm",
    right: "10mm",
    bottom: "12mm", 
    left: "15mm"
  },
  scale: 0.9,
  printBackground: true,
  preferCSSPageSize: false
};

export const PUBLISHING_PDF_OPTIONS: PdfOptions = {
  paperSize: "TEXTBOOK_7X10", 
  margin: {
    top: "20mm",
    right: "15mm",
    bottom: "20mm",
    left: "20mm"
  },
  scale: 1,
  printBackground: true,
  preferCSSPageSize: false
};
