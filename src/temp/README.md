# 📚 Curriculum Content Generation - Temp Folder

## 📁 Folder Structure

This folder contains organized curriculum content for all classes, subjects, chapters, and topics in JSON format, ready for Postman import into the database.

```
/temp
├── README.md (this file)
├── EDIT-ENDPOINTS-GUIDE.md
├── INSTRUCTIONS-POSTMAN.md
│
├── JSS-1/
│   ├── Mathematics/
│   │   ├── Number-and-Numeration/
│   │   │   ├── topic-1-whole-numbers.json ✅
│   │   │   ├── topic-2-lcm.json
│   │   │   ├── topic-3-hcf.json
│   │   │   ├── topic-4-counting-in-twos.json
│   │   │   ├── topic-5-binary-conversion.json
│   │   │   └── topic-6-fractions.json
│   │   │
│   │   ├── Basic-Operations/
│   │   │   ├── topic-1-addition-subtraction.json
│   │   │   ├── topic-2-addition-subtraction-fractions.json
│   │   │   ├── topic-3-multiplication-division-fractions.json
│   │   │   ├── topic-4-estimation.json
│   │   │   ├── topic-5-approximation.json
│   │   │   ├── topic-6-addition-base-2.json
│   │   │   ├── topic-7-subtraction-base-2.json
│   │   │   └── topic-8-multiplication-base-2.json
│   │   │
│   │   ├── Algebraic-Processes/
│   │   │   ├── topic-1-use-of-symbols.json
│   │   │   ├── topic-2-use-of-symbols-contd.json
│   │   │   ├── topic-3-simplification-algebraic.json
│   │   │   └── topic-4-simple-equations.json
│   │   │
│   │   ├── Mensuration-and-Geometry/
│   │   │   ├── topic-1-plane-shapes.json
│   │   │   ├── topic-2-three-dimensional-figures.json
│   │   │   ├── topic-3-construction.json
│   │   │   └── topic-4-angles.json
│   │   │
│   │   └── Everyday-Statistics/
│   │       ├── topic-1-needs-for-statistics.json
│   │       └── topic-2-data-representation.json
│   │
│   ├── English/
│   ├── Basic-Science/
│   └── ... (other subjects)
│
├── JSS-2/
│   └── ... (similar structure)
│
└── JSS-3/
    └── ... (similar structure)
```

---

## 🎯 Purpose

This folder serves as:

1. **Content Repository** - Store all generated curriculum content
2. **Version Control** - Track changes and maintain versions
3. **Easy Access** - Quickly locate and reference any topic
4. **Editing Workflow** - Edit content before/after database import
5. **Backup** - Keep copies of all curriculum materials

---

## 📝 File Naming Convention

```
topic-{order}-{slug}.json
```

**Examples:**
- `topic-1-whole-numbers.json`
- `topic-2-lcm.json`
- `topic-15-use-of-symbols.json`

**Rules:**
- Use lowercase
- Separate words with hyphens
- Match the topic slug from database
- Include topic order number

---

## 🔄 Workflow

### **Creating New Content:**

1. **Generate Content:**
   ```
   Tell AI: "Create complete textbook content for Topic 2: LCM in JSS-1 Mathematics"
   ```

2. **AI Creates:**
   - File: `/temp/JSS-1/Mathematics/Number-and-Numeration/topic-2-lcm.json`
   - Complete professional content
   - Government curriculum aligned

3. **Review & Edit:**
   - Open JSON file
   - Make any necessary edits
   - Save changes

4. **Import to Database:**
   - Use Postman
   - POST endpoint with JSON content
   - Topic saved to database

### **Editing Existing Content:**

1. **Locate File:**
   ```
   /temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json
   ```

2. **Make Edits:**
   - Open in code editor
   - Edit specific sections
   - Save file

3. **Update Database:**
   - Get topic ID from database
   - PATCH endpoint with updated content
   - Changes saved

4. **Keep Version:**
   - Optional: Create version file
   - `topic-1-whole-numbers-v2.json`

---

## 📚 Content Structure

Each topic JSON file contains:

```json
{
  "slug": "topic-slug",
  "title": "Topic Title",
  "performanceObjective": "Learning objectives...",
  "chapterId": "CHAPTER_ID_HERE",
  "order": 1,
  "completed": false,
  "isActive": true,
  "content": {
    "performanceObjective": "...",
    "contents": [...],
    "teacherActivities": [...],
    "studentActivities": [...],
    "materials": [...],
    "evaluationGuide": [...],
    "pages": [
      {
        "number": 1,
        "title": "Page Title",
        "blocks": [
          {
            "type": "intro|heading|paragraph|html|assessmentItem",
            "content": "..."
          }
        ]
      }
    ]
  }
}
```

---

## 🎓 Content Quality Standards

All generated content must:

✅ Align with Nigerian government curriculum  
✅ Be age-appropriate for target class  
✅ Include Nigerian context (Naira, local examples)  
✅ Have clear learning objectives  
✅ Include practical exercises  
✅ Provide real-life applications  
✅ Include assessment materials  
✅ Be professionally structured  
✅ Use proper pedagogical approach  
✅ Be ready for government approval  

---

## 📖 Page Types & Blocks

### **Block Types:**

1. **intro** - Introduction paragraph
2. **heading** - Section heading
3. **paragraph** - Regular text content
4. **html** - Rich HTML content (tables, lists, formatted text)
5. **assessmentItem** - Practice questions with solutions

### **Page Structure:**

Each page should have:
- Clear title
- Logical flow of content
- Mix of text and visuals
- Practice exercises
- Real-world examples

---

## 🔍 Quick Navigation

| Class | Subject | Chapters | Topics |
|-------|---------|----------|--------|
| JSS-1 | Mathematics | 5 chapters | 24 topics |
| JSS-1 | English | TBD | TBD |
| JSS-1 | Basic Science | TBD | TBD |
| JSS-2 | All subjects | TBD | TBD |
| JSS-3 | All subjects | TBD | TBD |

---

## 🚀 Next Steps

1. **Complete JSS-1 Mathematics:**
   - Create all 24 topics
   - Review and refine content
   - Import to database

2. **Expand to Other Subjects:**
   - English
   - Basic Science
   - Social Studies
   - etc.

3. **Add Other Classes:**
   - JSS-2
   - JSS-3
   - Primary classes

---

## 📞 How to Request Content

**Template:**
```
"Create complete textbook content for:
- Class: JSS-1
- Subject: Mathematics
- Chapter: Number and Numeration
- Topic: [Topic Name]
- Topic Number: [1-24]
Based on Nigerian government curriculum."
```

AI will:
1. Research curriculum requirements
2. Generate professional content
3. Create JSON file in proper folder
4. Provide Postman instructions

---

## ✅ Current Status

**Completed:**
- ✅ Topic 1: Whole Numbers (JSS-1 Mathematics)

**In Progress:**
- ⏳ Remaining 23 topics for JSS-1 Mathematics

**Planned:**
- 📋 All JSS-1 subjects
- 📋 JSS-2 and JSS-3
- 📋 Primary classes

---

## 📁 File Locations

**Main Guide:** `/temp/README.md` (this file)  
**Edit Guide:** `/temp/EDIT-ENDPOINTS-GUIDE.md`  
**Postman Guide:** `/temp/INSTRUCTIONS-POSTMAN.md`  
**First Topic:** `/temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json`

---

**Last Updated:** October 2025  
**Version:** 1.0  
**Status:** Active Development

