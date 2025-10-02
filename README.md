# 📚 Accessible Books - AI-Powered Textbook Platform

A professional Next.js application for generating and managing accessible educational textbooks for Nigerian curriculum (Primary and JSS levels).

## 🎯 Project Overview

This platform generates complete, government-approved textbooks with:
- **Full curriculum alignment** (NERDC approved)
- **Rich multimedia content** (images, videos, interactive elements)
- **PDF generation** for offline use
- **Progress tracking** with localStorage
- **Responsive design** for all devices

---

## 🏗️ Tech Stack

- **Framework:** Next.js 15+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Content:** TypeScript files (version controlled)
- **PDF Generation:** Puppeteer
- **Icons:** Heroicons

---

## 📁 Project Structure

```
accessible-books/
├── src/
│   ├── app/                        # Next.js pages
│   │   ├── page.tsx               # Homepage/Dashboard
│   │   ├── curriculum/            # Curriculum tracking pages
│   │   └── classes/               # Class-based routes
│   │       └── [class]/
│   │           └── subjects/
│   │               └── [subject]/
│   │                   └── chapters/
│   │                       └── [chapter]/
│   │                           └── topics/
│   │                               └── [slug]/
│   │                                   └── page.tsx
│   │
│   ├── components/                 # Reusable React components
│   │   ├── AppLayout.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Loader.tsx
│   │   └── ui/
│   │
│   ├── content/                    # 📚 ALL CURRICULUM CONTENT
│   │   ├── schema.ts              # TypeScript types
│   │   └── data/
│   │       ├── primary-1/
│   │       ├── primary-4/
│   │       └── jss-1/             # ✅ NEW: JSS 1 content
│   │           └── mathematics/
│   │               ├── number-and-numeration/
│   │               │   └── topic-1-whole-numbers.ts ✅
│   │               ├── basic-operations/
│   │               ├── algebraic-processes/
│   │               ├── mensuration-and-geometry/
│   │               └── everyday-statistics/
│   │
│   ├── lib/
│   │   └── content.ts             # Content registry & helpers
│   │
│   └── temp/                       # Temporary content generation
│       ├── README.md
│       └── JSS-1/...
│
├── public/                         # Static assets
│   ├── images/                    # 🖼️ Add images here
│   ├── videos/
│   └── audio/
│
├── package.json
├── tsconfig.json
└── README.md (this file)
```

---

## 🚀 Quick Start

### **1. Install Dependencies**
```bash
npm install
```

### **2. Run Development Server**
```bash
npm run dev
```

Visit: `http://localhost:3000`

### **3. Build for Production**
```bash
npm run build
npm start
```

---

## 📖 Content Structure

### **Creating New Content**

Content is stored in TypeScript files for:
- ✅ Easy editing (just open and edit!)
- ✅ Version control (Git tracks all changes)
- ✅ Type safety (TypeScript catches errors)
- ✅ Fast loading (no database queries)
- ✅ Easy multimedia (drop images in `/public/`)

### **Example Topic File:**

```typescript
// src/content/data/jss-1/mathematics/number-and-numeration/topic-1-whole-numbers.ts

import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers",
  title: "Whole Numbers",
  order: 1,
  completed: false,
  data: {
    performanceObjective: "Students will...",
    contents: [...],
    teacherActivities: [...],
    studentActivities: [...],
    materials: [...],
    evaluationGuide: [...],
    pages: [
      {
        number: 1,
        title: "Introduction",
        blocks: [
          {
            type: "intro",
            content: "Welcome to whole numbers..."
          },
          {
            type: "image",
            src: "/images/jss-1/math/place-value.png",
            alt: "Place value chart"
          },
          {
            type: "html",
            html: "<div>...</div>"
          }
        ]
      }
    ]
  }
};

export default topic;
```

---

## 🎨 Adding Images & Media

### **1. Add Image File**
```
public/
└── images/
    └── jss-1/
        └── mathematics/
            └── place-value-chart.png  ← Drop your image here
```

### **2. Reference in Content**
```typescript
{
  type: "image",
  src: "/images/jss-1/mathematics/place-value-chart.png",
  alt: "Place value chart showing millions and billions",
  width: 800,
  height: 400,
  caption: "Understanding large numbers"
}
```

### **3. Done!** 
Image appears in textbook immediately (hot reload) ⚡

---

## ✏️ Editing Content

### **Quick Edit Workflow:**

1. **Open content file:**
   ```
   src/content/data/jss-1/mathematics/number-and-numeration/topic-1-whole-numbers.ts
   ```

2. **Make changes:**
   - Edit any text
   - Add/remove sections
   - Change images
   - Update exercises

3. **Save file**

4. **See changes instantly** (hot reload!)

5. **Commit to Git:**
   ```bash
   git add .
   git commit -m "Updated Topic 1: Whole Numbers"
   git push
   ```

---

## 📚 Current Content

### **Available Classes:**
- ✅ Primary 1 (Mathematics)
- ✅ Primary 4 (Mathematics)
- ✅ JSS 1 (Mathematics) - **NEW!**

### **JSS 1 Mathematics Topics:**

**Number and Numeration (6 topics):**
1. ✅ Whole Numbers - **COMPLETE with 8 pages**
2. ⏳ Lowest Common Multiples (LCM)
3. ⏳ Highest Common Factor (HCF)
4. ⏳ Counting in twos
5. ⏳ Conversion of Base-ten numerals to Binary numbers
6. ⏳ Fractions

**Basic Operations (8 topics)** - Coming soon
**Algebraic Processes (4 topics)** - Coming soon
**Mensuration and Geometry (4 topics)** - Coming soon
**Everyday Statistics (2 topics)** - Coming soon

---

## 🎯 Content Features

### **Each Topic Includes:**

✅ **Performance Objectives** - Government curriculum aligned
✅ **Teaching Activities** - For teachers
✅ **Student Activities** - For learners  
✅ **Learning Materials** - Required resources
✅ **Evaluation Guide** - Assessment criteria
✅ **Complete Pages** - Full textbook content with:
   - Introductions
   - Explanations
   - Examples
   - Exercises with solutions
   - Real-life applications (Nigerian context)
   - Visual aids (tables, charts, images)
   - Assessment items

### **Rich Content Types:**
- 📝 Text paragraphs
- 🎨 HTML formatted content
- 🖼️ Images (PNG, JPG, SVG)
- 📊 Tables and charts
- ✏️ Practice exercises
- 📋 Assessment items
- 🎥 Video embeds (coming soon)
- 🔊 Audio (coming soon)

---

## 📄 PDF Generation

Generate printable textbooks:

```typescript
// Visit any topic page and add ?pdf=true
http://localhost:3000/classes/JSS%201/subjects/Mathematics/chapters/Number%20and%20Numeration/topics/whole-numbers?pdf=true
```

Downloads complete PDF with:
- Professional formatting
- Page breaks
- Headers/footers
- All images included
- Print-optimized layout

---

## 🔄 Version Control

All content is Git-tracked:

```bash
# See content history
git log src/content/data/jss-1/

# Revert to previous version
git checkout HEAD~1 src/content/data/jss-1/mathematics/...

# Compare versions
git diff HEAD~1 src/content/data/jss-1/...
```

---

## 🎓 Government Curriculum Compliance

All content is aligned with:
- ✅ Nigerian Educational Research and Development Council (NERDC)
- ✅ JSS 1-3 Mathematics Curriculum
- ✅ Primary 1-6 Mathematics Curriculum
- ✅ Performance objectives
- ✅ Learning outcomes
- ✅ Assessment criteria
- ✅ Age-appropriate content
- ✅ Cultural relevance (Nigerian examples, Naira, local context)

---

## 🛠️ Development Scripts

```bash
# Development
npm run dev              # Start dev server (hot reload)

# Production
npm run build            # Build for production
npm start                # Start production server

# Linting
npm run lint             # Check code quality
```

---

## 📝 Adding New Topics

### **Step 1: Create TypeScript File**
```bash
src/content/data/jss-1/mathematics/number-and-numeration/topic-2-lcm.ts
```

### **Step 2: Write Content**
```typescript
import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "lcm",
  title: "Lowest Common Multiples",
  order: 2,
  // ... rest of content
};

export default topic;
```

### **Step 3: Register in Content Library**
```typescript
// src/lib/content.ts
import jss1LCM from "@/content/data/jss-1/mathematics/number-and-numeration/topic-2-lcm";

const registry: ClassRegistry = {
  "JSS 1": {
    subjects: {
      "Mathematics": {
        chapters: {
          "Number and Numeration": [
            { ...jss1WholeNumbers, completed: true, chapter: "Number and Numeration" },
            { ...jss1LCM, completed: false, chapter: "Number and Numeration" }, // Add here
          ]
        }
      }
    }
  }
};
```

### **Step 4: Done!**
Topic appears immediately in navigation and curriculum ✨

---

## 🎨 Curriculum Tracking

Visit: `http://localhost:3000/curriculum/jss1-math`

Features:
- ✅ Track completion with checkmarks
- ✅ View all topics and chapters
- ✅ See progress percentage
- ✅ Saved in browser localStorage
- ✅ Export/import curriculum data
- ✅ Professional table view with all curriculum details

---

## 🌟 Key Advantages of Frontend-Only Approach

1. **⚡ Instant Editing** - Open file, edit, save, see changes
2. **🖼️ Easy Media** - Drop images in `/public/`, reference them
3. **🔄 Version Control** - Full Git history of all content
4. **💾 No Database** - No backend, no hosting costs
5. **📦 Simple Backup** - Just push to GitHub
6. **👥 Easy Collaboration** - Share repo, edit content
7. **🎨 Maximum Flexibility** - Any content type, any layout
8. **🚀 Fast Loading** - No API calls, everything bundled
9. **📱 Works Offline** - Static site, no server needed
10. **💰 Zero Hosting Cost** - Deploy on Vercel/Netlify free tier

---

## 📦 Deployment

### **Deploy to Vercel (Recommended):**

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel

# Production deployment
vercel --prod
```

### **Deploy to Netlify:**

```bash
# Build
npm run build

# Upload `out` folder to Netlify
```

---

## 🤝 Contributing

To add new content:

1. Fork the repository
2. Create content files in `src/content/data/`
3. Add images to `public/images/`
4. Update content registry in `src/lib/content.ts`
5. Test locally
6. Submit pull request

---

## 📞 Support

For questions or issues:
- Create an issue on GitHub
- Check documentation in `/INSTRUCTIONS/`
- Review curriculum tracking guide

---

## 📜 License

This project is for educational purposes aligned with Nigerian curriculum standards.

---

## 🎉 Status

**Current Progress:**
- ✅ Platform architecture complete
- ✅ JSS 1 Mathematics structure ready
- ✅ Topic 1 (Whole Numbers) complete with 8 pages
- ✅ Curriculum tracking system functional
- ⏳ 23 more topics to create for JSS 1 Math

**Goal:** Create all 24 JSS 1 Mathematics topics with government-approved content!

---

**Built with ❤️ for Nigerian Students**
