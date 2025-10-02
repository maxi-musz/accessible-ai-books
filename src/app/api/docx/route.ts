import { NextRequest } from "next/server";
import { Document, Packer, Paragraph, TextRun, HeadingLevel, PageBreak, SectionType } from "docx";
import { getTopic, getAllTopicsInSubject } from "@/lib/content";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const className = searchParams.get("class");
  const subject = searchParams.get("subject");
  const slug = searchParams.get("slug");
  const filename = slug === "all" ? `${subject}-Complete.docx` : `${slug || "topic"}.docx`;

  if (!className || !subject || !slug) {
    return new Response("Missing class/subject/slug", { status: 400 });
  }

  if (slug === "all") {
    // Handle complete subject download
    const topics = getAllTopicsInSubject(className, subject);
    if (!topics.length) return new Response("No topics found", { status: 404 });

    const allSections = topics.flatMap((topic, topicIndex) => 
      topic.data.pages.map((p, pageIndex) => ({
        properties: { type: SectionType.NEXT_PAGE },
        children: [
          // Add topic header for first page of each topic
          ...(pageIndex === 0 ? [
            new Paragraph({ text: `Topic ${topic.order}: ${topic.title}`, heading: HeadingLevel.TITLE }),
            new Paragraph({ text: topic.data.performanceObjective, heading: HeadingLevel.HEADING_2 }),
            new Paragraph(""),
          ] : []),
          new Paragraph({ text: `${p.number ?? ""} ${p.title}`.trim(), heading: HeadingLevel.HEADING_1 }),
          ...p.blocks.map((b) => {
            if (b.type === "intro" || b.type === "paragraph" || b.type === "heading") {
              const level = b.type === "heading" ? HeadingLevel.HEADING_2 : undefined;
              return new Paragraph({ text: b.content, heading: level });
            }
            if (b.type === "countingLines") {
              return new Paragraph({ text: b.lines.map((l) => `${l.icons} ${l.label}`).join("\n") });
            }
            if (b.type === "objectsGrid") {
              const lines = b.groups.map((g) => `${g.label}: ${g.icons}`).join("\n");
              return new Paragraph({ text: lines });
            }
            if (b.type === "html") {
              const text = b.html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
              return new Paragraph({ text });
            }
            return new Paragraph("");
          }),
          // Add topic summary at the end of last page of each topic
          ...(pageIndex === topic.data.pages.length - 1 ? [
            new Paragraph(""),
            new Paragraph({ children: [new TextRun({ text: "Performance Objective:", bold: true }), new TextRun({ text: ` ${topic.data.performanceObjective}` })] }),
            new Paragraph({ children: [new TextRun({ text: "Teacher Activities:", bold: true })] }),
            ...topic.data.teacherActivities.map((t) => new Paragraph({ text: `• ${t}` })),
            new Paragraph({ children: [new TextRun({ text: "Student Activities:", bold: true })] }),
            ...topic.data.studentActivities.map((s) => new Paragraph({ text: `• ${s}` })),
            new Paragraph({ children: [new TextRun({ text: "Materials:", bold: true }), new TextRun({ text: ` ${topic.data.materials.join(", ")}` })] }),
            new Paragraph({ children: [new TextRun({ text: "Evaluation Guide:", bold: true })] }),
            ...topic.data.evaluationGuide.map((e) => new Paragraph({ text: `• ${e}` })),
          ] : []),
          ...(topicIndex < topics.length - 1 && pageIndex === topic.data.pages.length - 1 ? [new Paragraph({ children: [new PageBreak()] })] : []),
        ],
      }))
    );

    const doc = new Document({ sections: allSections });
    const buffer = await Packer.toBuffer(doc);
    return new Response(new Uint8Array(buffer), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  }

  // Handle single topic download
  const topic = getTopic(className, subject, slug);
  if (!topic) return new Response("Topic not found", { status: 404 });

  const doc = new Document({
    sections: topic.data.pages.map((p, idx) => ({
      properties: { type: SectionType.NEXT_PAGE },
      children: [
        new Paragraph({ text: `${p.number ?? ""} ${p.title}`.trim(), heading: HeadingLevel.HEADING_1 }),
        ...p.blocks.map((b) => {
          if (b.type === "intro" || b.type === "paragraph" || b.type === "heading") {
            const level = b.type === "heading" ? HeadingLevel.HEADING_2 : undefined;
            return new Paragraph({ text: b.content, heading: level });
          }
          if (b.type === "countingLines") {
            return new Paragraph({ text: b.lines.map((l) => `${l.icons} ${l.label}`).join("\n") });
          }
          if (b.type === "objectsGrid") {
            const lines = b.groups.map((g) => `${g.label}: ${g.icons}`).join("\n");
            return new Paragraph({ text: lines });
          }
          if (b.type === "html") {
            // Strip HTML tags for DOCX plain text fallback
            const text = b.html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
            return new Paragraph({ text });
          }
          return new Paragraph("");
        }),
        new Paragraph({
          children: [
            new TextRun({ text: "Performance Objective:", bold: true }),
            new TextRun({ text: ` ${topic.data.performanceObjective}` }),
          ],
        }),
        new Paragraph({
          children: [new TextRun({ text: "Teacher Activities:", bold: true })],
        }),
        ...topic.data.teacherActivities.map((t) => new Paragraph({ text: `• ${t}` })),
        new Paragraph({
          children: [new TextRun({ text: "Student Activities:", bold: true })],
        }),
        ...topic.data.studentActivities.map((s) => new Paragraph({ text: `• ${s}` })),
        ...(idx < topic.data.pages.length - 1 ? [new Paragraph({ children: [new PageBreak()] })] : []),
      ],
    })),
  });

  const buffer = await Packer.toBuffer(doc);
  return new Response(new Uint8Array(buffer), {
    status: 200,
    headers: {
      "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      "Content-Disposition": `attachment; filename="${filename}"`,
      "Cache-Control": "no-store",
    },
  });
}
