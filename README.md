# Accessible Books - Educational Content Platform

## Global Subject Structure Requirements

### 1. **Subject Contents Page (Chapters)**
- Every new subject MUST have a complete contents page showing all chapters
- Contents page appears as **PAGE 1** when viewing/downloading full content (like a real textbook)
- Must define complete chapter structure before starting content creation
- All content is in ONE continuous document for PDF generation

### 2. **Required Subject Setup Steps**
1. **Update contents map** in `/src/app/classes/[className]/[subject]/view-full/page.tsx`
2. **Add SUBJECT_CONTENTS_MAP entry** with:
   - `chapterNumber`: Sequential number (1, 2, 3...)
   - `title`: Chapter name
   - `topics`: Array of topic titles (exactly as they will appear)
   - `pages`: Page count estimate
3. **Create topic files** in `/src/content/data/[class]/[subject]/[chapter]/`
4. **Update content registry** if new class/subject

### 3. **Content Structure**
```
/src/content/data/
  ├── [class-name]/
      ├── [subject]/
          ├── [chapter]/
              ├── topic-1-name.ts
              ├── topic-2-name.ts
              └── ...
```

### 4. **Document Structure (PDF Flow)**
1. **Subject Page** → Click "📖 View Full Content"
2. **Page 1**: Contents Page (chapters + topics overview)
3. **Page 2+**: Chapter 1 title page + content
4. **Page N+**: Chapter 2 title page + content
5. **Single continuous document** - no separate navigation needed

### 5. **Component Files**
- **Contents Page**: `/src/components/SubjectContentsPage.tsx`
- **Full Content**: `/src/app/classes/[className]/[subject]/view-full/page.tsx` (contains SUBJECT_CONTENTS_MAP)
- **Subject Schema**: `/src/content/schema.ts`

### 6. **Key Features**
- ✅ Colored chapter cards (yellow, blue, green, pink rotation)
- ✅ Topic numbering within chapters
- ✅ Page count display
- ✅ Contents page as first page in PDF
- ✅ Clean print-friendly design
- ✅ Responsive design

### 7. **Key Concept: Textbook Structure**
- **NOT separate pages/routes** - it's ONE document like a real textbook
- Contents page is the **first page** you see when opening the book
- Then actual chapters follow in sequence 
- Perfect for PDF download as complete textbook

### 8. **Before Creating New Subject**
1. Plan complete chapter structure
2. List all topics for each chapter
3. Estimate page counts
4. Update SUBJECT_CONTENTS_MAP in view-full/page.tsx
5. Create content files
6. Test PDF generation

### 9. **PDF Configuration**
- Paper sizes available: A4, A3, A5, Letter, Textbook formats
- Default: A4 with 15mm margins
- Textbook: 6×9 inches optimized for publishing
- Configure in `/src/lib/pdf-config.ts`

## Quick Guide: Adding New Subject/Book (Chapters, Topics, TOC)

1. Define chapters + topics
   - Open `src/app/classes/[className]/[subject]/view-full/page.tsx`
   - Update `SUBJECT_CONTENTS_MAP[className][subject]` with an array of chapters:
     - `chapterNumber`: 1, 2, 3, ...
     - `title`: chapter title
     - `topics`: string[] (topic titles in order)
     - `pages`: string (estimate)

2. Create topic content files
   - Path: `src/content/data/[class]/[subject]/[chapter]/...`
   - Each topic file must export a `Topic` that matches `src/content/schema.ts`.

3. Contents table behavior (global)
   - Renders as PAGE 1 in full book view and PDF.
   - Shows up to 4 topics per chapter card; the rest are summarized as `+N more topic(s)`.
   - Cards are centered; PDF uses 2-column layout and prevents cards from splitting across pages.
   - Topic pill text: compact on web; wraps cleanly in PDF.

4. Chapter title pages (global)
   - Web: responsive height (not forced to full screen).
   - PDF: full-page title per chapter (`print:min-h-screen`).

5. Regenerate/preview
   - Visit `.../view-full` for the subject to preview.
   - Use the download button to export PDF; heading + table of contents start on the same page by design.

## Visuals (Images & Icons)

- Always add visuals where helpful (diagrams, fraction bars, number lines, Venns).
- Place assets under `public/images/...` or `public/icons/...`.
- Use the `image` block in topic pages:
  - `{ type: 'image', src: '/images/path.png', alt: 'desc', caption: 'caption', width: 720, style: 'inline' }`
- Web shows compact images; PDF renders full width by default. Ensure alt/captions are meaningful.
- CRITICAL rule: Text and shapes/images must NEVER overlap (web or PDF). Always leave adequate padding/margins so labels, captions, arrows, and shapes do not touch or cover one another.

### Asset Structure for Generated SVG/PNG
- `public/images/svg/{class}/{subject}/{chapter-slug}/topic-{n}/...`
- Example: `public/images/svg/jss-1/mathematics/number-and-numeration/topic-2/venn-multiples.svg`
- Reference in content with `/images/svg/...` paths

### SVG Creation Guidelines (keep editing minimal)
1. Titles centered above illustrations (use `text-anchor="middle"`).
2. Caption centered under diagram; concise and descriptive.
3. Use high-contrast colors and readable font sizes (≥16px for labels).
4. Keep canvas white; avoid drop shadows in SVG for clean print.
5. Prefer vectors (SVG) for math diagrams; set widths in the `image` block.
 6. PDF-first: ensure visuals scale nicely to page width; test export after adding.
 7. No overlap, ever: add internal padding around diagrams; leave clear space between labels and strokes; avoid placing text directly on lines unless there is a solid contrasting background.
 8. Use `viewBox` with generous margins and keep key elements within a visual safe-area; verify in both dark-on-light web view and print.

## Curriculum Tracking

- Open `src/app/curriculum/` to view progress overview.
- After finishing a topic/chapter/subject, update the curriculum status manually.
- Optional: the AI should prompt or remind you to mark progress in the curriculum.