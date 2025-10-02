I have this project I need to do for my md 
it's based on primary SCHOOL AND secondary school book, I'm to start with primary 1

for each topic there is a performance/objective, Contents, Teachers activities, Students activities, teaching and learing material, Evauation guide that comes with it from the education board curriculum 

What I want to do is generate a visually appealing, best and most interesting clear creation ever that is very explanatory, fun to read and stiaght to point with vivid clear eamples that no matter how academically poor, dull or empty brain that student is, they will understand that topic perfectly well 👌, "This is a textbook I want to push to all schools in the world and that they will love to buy cause it will be the best for every subject and topic

what i want is to create the contents for the subjects and topics, for any topic, I will provide the necessary details for that topic like:
-- performance/objective, Contents, Teachers activities, Students activities, teaching and learing material, Evauation guide

## Project Structure
The application follows a 4-level hierarchy: Classes → Subjects → Chapters → Topics (e.g., Primary 1 → Mathematics → Number and Numeration → Numbers 1-5).

### Content Organization:
- **All Classes**: Individual topic files organized in `/src/content/data/[class]/[subject]/[chapter]/` structure
- **Chapter-based**: Topics are grouped by curriculum chapters (e.g., "Number and Numeration", "Basic Operations")
- **Curriculum Files**: Theme-based consolidated curriculum files in `/INSTRUCTIONS/CLASSES/[CLASS]/[SUBJECT]/` for planning
- The registry in `/src/lib/content.ts` manages the hierarchical organization and navigation between classes, subjects, chapters, and topics.
- Professional 4-level sidebar navigation allows easy browsing while maintaining clean PDF generation without sidebar interference.

### File Naming Conventions:
- **Individual Topics**: `topic-name.ts` (organized by chapter in folder structure)
- **Chapter Consolidation**: `pry[X]-chapter-name.md` (for curriculum planning)
- **Table of Contents**: `pry[X]-toc-[subject].md`

## PDF Download System
**ROBUST PDF GENERATION**: Advanced PDF system with proper pagination, multiple paper sizes, and publishing-ready formats.

### Key Features:
- **Complete Content**: Downloads ALL pages/topics (fixed single-page issue)
- **Layout Preservation**: Maintains grid layouts, side-by-side content boxes in PDF
- **Paper Sizes**: A4, A3, A5, Letter, Legal, Textbook (6×9, 7×10), Square formats
- **Publishing Presets**: Standard, Textbook Layout, Publishing Ready
- **Smart Pagination**: Automatic page breaks, content preservation, proper formatting
- **Enhanced Rendering**: Full page scrolling, dynamic content loading, CSS grid/flexbox support

### Usage:
1. **Quick Download**: Click "Download PDF" for standard A4
2. **Custom Options**: Click dropdown arrow → select paper size & preset → download
3. **Subject Downloads**: Visit `/classes/[class]/subjects/[subject]/all` for complete subject PDF
4. **Individual Topics**: Any topic page has download button for that specific topic

### Configuration Files:
- `/src/lib/pdf-config.ts` - Paper sizes and format presets
- `/src/app/api/pdf/route.ts` - PDF generation engine with Puppeteer
- Enhanced with proper viewport, print CSS, page breaks, and content optimization

### For Publishers:
- Change paper sizes easily in `pdf-config.ts`
- Modify margins, scale, and layout presets
- Professional textbook formatting with proper typography and spacing

Take note that i prepare icons than emojis

## Curriculum Extraction Guidelines

### For Primary 4+ Content Structure:
When extracting curriculum from images/documents, organize content into **THEME-BASED CONSOLIDATED FILES**:

#### Theme Organization Pattern:
- **Theme 1: Number and Numeration** → `pry[X]-number-numeration.md`
- **Theme 2: Basic Operations** → `pry[X]-basic-operations.md`
- **Theme 3: Mensuration** → `pry[X]-mensuration.md`
- **Theme 4: Geometry** → `pry[X]-geometry.md`
- **Theme 5: Everyday Statistics** → `pry[X]-everyday-statistics.md`

#### Content Extraction Standards:
1. **Extract ALL curriculum topics** from provided images/documents
2. **Consolidate by theme** - DO NOT create separate files for each topic
3. **Maintain official structure**: Performance Objective, Content-Knowledge & Skills, Key Competencies, Learning Activities, Teaching Resources, Evaluation Guide
4. **Enhance professionally** with detailed concept breakdowns, practical activities, assessment strategies, differentiation, real-world connections
5. **Update table of contents** to link all topics to their consolidated theme file

#### Essential Components for Each Topic:
- **Learning Outcome** - Overall curriculum goal
- **Focal Competency** - Specific skill focus  
- **Performance Objective** - What pupils should be able to do
- **Content - Knowledge and Skills** - Core curriculum content
- **Key Competencies and Values** - 21st-century skills (ICT, Collaboration, etc.)
- **Learning Activities** - Step-by-step guided activities for pupils
- **Teaching and Learning Resources** - Required materials and tools
- **Evaluation Guide** - Assessment criteria and methods

#### Professional Enhancement Requirements:
- **Detailed Concept Breakdown** - In-depth explanations of mathematical concepts
- **Practical Activities** - 5+ hands-on learning experiences per theme
- **Assessment Strategies** - Both formative and summative approaches
- **Differentiation Plans** - Support for advanced, struggling, and ELL learners
- **Real-world Connections** - Career and daily life applications
- **Technology Integration** - ICT competencies and digital tools
- **Cross-curricular Links** - Connections to other subjects

#### File Management:
- **Delete individual topic files** after consolidation
- **Update table of contents** with proper markdown links
- **Maintain official page numbering** from original curriculum
- **Use consistent theme-based file naming**

### Quality Assurance:
- **Accuracy**: 95-98% faithful to original curriculum content
- **Enhancement**: Significant educational value added through professional structuring
- **Completeness**: All topics covered with no gaps
- **Usability**: Ready for immediate classroom implementation
- **Assessment Ready**: Complete evaluation frameworks included

## Current Implementation Status

### Completed Classes:
- ✅ **Primary 1 Mathematics**: Complete with 2 topics (Whole Numbers 1-5, Number Zero)
- ✅ **Primary 4 Mathematics - Number and Numeration Theme**: Complete with 4 topics (12 pages total)
  - Topic 1: Whole Numbers - Counting to Millions (3 pages)
  - Topic 2: Whole Numbers - Place Value and Roman Numerals (3 pages) 
  - Topic 3: LCM, HCF, and Prime Numbers (3 pages)
  - Topic 4: Fractions - Types and Conversions (3 pages)

### In Progress:
- 🚧 **Primary 4 Mathematics**: Number and Numeration theme complete, ready for next theme (Basic Operations)

### Curriculum Files Available:
- **Primary 4 Mathematics Table of Contents**: `pry4-toc-maths.md`
- **Consolidated Theme Files**:
  - `pry4-number-numeration.md` (416 lines)
  - `pry4-basic-operations.md` (496 lines) 
  - `pry4-mensuration.md` (598 lines)
  - `pry4-geometry.md` (373 lines)
  - `pry4-everyday-statistics.md` (ready for extraction)

## Technical Architecture

### Tech Stack:
- **Frontend**: Next.js 14+ with TypeScript
- **UI**: Tailwind CSS with custom components
- **PDF Generation**: Puppeteer with advanced configuration
- **Content Management**: TypeScript-based with structured schema
- **Architecture**: File-based → Future PostgreSQL migration ready

### Key Files:
- **Content Registry**: `/src/lib/content.ts` - Central hub for all classes/subjects/topics
- **Content Schema**: `/src/content/schema.ts` - TypeScript interfaces for topic structure
- **Topic Data Files**: `/src/content/data/[topic-name].ts` - Individual topic implementations
- **PDF Configuration**: `/src/lib/pdf-config.ts` - Paper sizes and format presets
- **PDF Generation**: `/src/app/api/pdf/route.ts` - Puppeteer-based PDF engine

### Content Structure Pattern:
```typescript
Topic {
  class: string,           // e.g., "Primary 4"
  subject: string,         // e.g., "Mathematics"  
  slug: string,           // URL-safe identifier
  title: string,          // Display title
  order: number,          // Display order
  data: {
    performanceObjective: string,
    contents: string[],
    teacherActivities: string[],
    studentActivities: string[],
    materials: string[],
    evaluationGuide: string[],
    pages: Page[]           // 3 pages per topic standard
  }
}
```

### File Patterns:
- **All Classes**: Individual `.ts` files in `/src/content/data/[class]/[subject]/[chapter]/`
- **Curriculum Planning**: Chapter-based `.md` files in `/INSTRUCTIONS/CLASSES/[CLASS]/[SUBJECT]/`
- **Table of Contents**: `pry[X]-toc-[subject].md` with markdown links
- **Registry Updates**: Add new topics to `/src/lib/content.ts` for UI integration

### Folder Structure (NEW 4-Level Hierarchy):
```
/src/content/data/
├── primary-1/
│   └── mathematics/
│       └── number-and-numeration/          ← CHAPTER LEVEL
│           ├── whole-numbers-1-5.ts
│           └── whole-number-0.ts
├── primary-4/
│   └── mathematics/
│       └── number-and-numeration/          ← CHAPTER LEVEL
│           ├── pry4-whole-numbers-topic1.ts
│           ├── pry4-whole-numbers-topic2.ts
│           ├── pry4-whole-numbers-topic3.ts
│           └── pry4-fractions-topic4.ts
└── [future classes]/
    └── [subjects]/
        └── [chapters]/                     ← CHAPTER LEVEL
            └── [topics].ts
```

## Next Steps for New Chat:

### To Continue Primary 4 Mathematics:
1. **Review completed Number and Numeration chapter** in `/src/content/data/primary-4/mathematics/number-and-numeration/`
2. **Create Basic Operations chapter** folder: `/src/content/data/primary-4/mathematics/basic-operations/`
3. **Extract content for Basic Operations topics** from `pry4-basic-operations.md`
4. **Create TypeScript topic files** for Topics 5-12 (Addition/Subtraction, Multiplication, Division, Estimation, Open Sentence)
5. **Update content registry** to include new chapter and topics
6. **Test UI and PDF generation** for new content

### Implementation Pattern:
1. Create chapter folder in `/src/content/data/[class]/[subject]/[chapter]/`
2. Create topic TypeScript file with 3 pages of content
3. Import and add to `/src/lib/content.ts` registry under appropriate chapter
4. Test in UI at `http://localhost:3000/classes/Primary%204/subjects/Mathematics/chapters/[chapter]/topics/[slug]`
5. Verify PDF generation works correctly
6. Proceed to next topic

### Content Quality Standards:
- **3 pages per topic** with distinct learning focuses
- **Professional educational content** with real-world examples
- **Structured learning blocks** (intro, practice, assessment)
- **Side-by-side activity boxes** (Teacher Activities | Student Activities)
- **Rich content types**: definitions, examples, activities, assessments

## AI Integration Roadmap:
- **Current Phase**: Content development in TypeScript
- **Future Phase 1**: Database migration (PostgreSQL + JSONB)
- **Future Phase 2**: AI integration using structured content (NOT PDFs)
- **Architecture**: Ready for seamless AI chatbot integration with contextual responses

## For New AI Assistant:
1. **Tag this file** plus `/src/lib/content.ts` for current status
2. **Review completed topics** in `/src/content/data/primary-4/mathematics/number-and-numeration/` for patterns
3. **Use curriculum files** in `/INSTRUCTIONS/CLASSES/PRIMARY-4/MATHEMATICS-04/` for content extraction
4. **Follow 4-level hierarchy**: Class → Subject → Chapter → Topic
5. **Create chapter folders** before adding topics
6. **Update registry** with chapter structure: `chapters: { "Chapter Name": [topics] }`
7. **Test thoroughly** before proceeding to next topics

### Key Functions in `/src/lib/content.ts`:
- `listClasses()` - Get all classes
- `listSubjects(className)` - Get subjects for a class
- `listChapters(className, subject)` - Get chapters for a subject  
- `getAllTopicsInChapter(className, subject, chapter)` - Get topics in a chapter
- `getTopic(className, subject, chapter, slug)` - Get specific topic

**Ready for seamless handoff!** 🚀
