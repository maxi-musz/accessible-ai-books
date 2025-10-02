# 📝 Edit Topic & Content - Complete Guide

## 🔄 Available Endpoints for Editing

### 1. **Update Entire Topic (Including Content)**
**Method:** `PATCH`  
**URL:** `http://localhost:4500/api/v1/topics/{topicId}`

**Use Case:** Update any field including the entire content

**Body Example:**
```json
{
  "title": "Updated Title",
  "content": {
    "performanceObjective": "Updated objective...",
    "pages": [...]
  }
}
```

---

### 2. **Update Only Topic Content**
**Method:** `PATCH`  
**URL:** `http://localhost:4500/api/v1/topics/{topicId}/content`

**Use Case:** Update ONLY the content field (pages, activities, etc.)

**Body Example:**
```json
{
  "performanceObjective": "Updated objective",
  "contents": ["item 1", "item 2"],
  "pages": [
    {
      "number": 1,
      "title": "Updated Page Title",
      "blocks": [...]
    }
  ]
}
```

---

### 3. **Update Topic Metadata Only**
**Method:** `PATCH`  
**URL:** `http://localhost:4500/api/v1/topics/{topicId}`

**Use Case:** Update title, slug, order, completion status, etc.

**Body Example:**
```json
{
  "title": "New Title",
  "order": 2,
  "completed": true,
  "isActive": true
}
```

---

### 4. **Toggle Topic Completion**
**Method:** `PATCH`  
**URL:** `http://localhost:4500/api/v1/topics/{topicId}/toggle-completion`

**Use Case:** Mark topic as complete/incomplete

**Body:** (Empty or none needed)

---

## 📁 Folder Structure Created

```
/temp
├── JSS-1/
│   ├── Mathematics/
│   │   ├── Number-and-Numeration/
│   │   │   ├── topic-1-whole-numbers.json
│   │   │   ├── topic-2-lcm.json (to be created)
│   │   │   ├── topic-3-hcf.json (to be created)
│   │   │   ├── topic-4-counting-in-twos.json (to be created)
│   │   │   ├── topic-5-binary-conversion.json (to be created)
│   │   │   └── topic-6-fractions.json (to be created)
│   │   ├── Basic-Operations/
│   │   │   ├── topic-1-addition-subtraction.json (to be created)
│   │   │   └── ... (more topics)
│   │   ├── Algebraic-Processes/
│   │   └── ... (other chapters)
│   └── ... (other subjects)
├── JSS-2/
│   └── ... (similar structure)
└── JSS-3/
    └── ... (similar structure)
```

---

## 🎯 How to Edit a Topic

### **Scenario 1: Edit a Specific Page**

If you want to edit **Page 3** of the "Whole Numbers" topic:

1. **Get Topic ID:**
   ```
   GET http://localhost:4500/api/v1/topics/path/JSS%201/Mathematics/Number%20and%20Numeration/whole-numbers
   ```
   Copy the `id` from response

2. **Prepare Updated Content:**
   - Open: `/temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json`
   - Edit the specific page in the `content.pages` array
   - Save changes

3. **Update via Postman:**
   ```
   PATCH http://localhost:4500/api/v1/topics/{topicId}/content
   ```
   **Body:** Paste the entire `content` object from your edited JSON file

---

### **Scenario 2: Edit Only One Block in a Page**

If you want to change just one paragraph on Page 2:

1. Get the full topic content
2. Locate the specific page and block
3. Modify only that block
4. Send the entire updated `content` object via PATCH

**Example:**
```json
{
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
        "title": "...",
        "blocks": [...]
      },
      {
        "number": 2,
        "title": "Updated Title Here",  // EDITED
        "blocks": [
          {
            "type": "paragraph",
            "content": "Updated paragraph content here"  // EDITED
          },
          // ... other blocks remain the same
        ]
      }
      // ... other pages
    ]
  }
}
```

---

### **Scenario 3: Edit Teacher Activities**

1. Open: `/temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json`
2. Locate `content.teacherActivities` array
3. Modify the activities
4. Update via Postman:

```
PATCH http://localhost:4500/api/v1/topics/{topicId}/content
```

**Body:**
```json
{
  "teacherActivities": [
    "Updated activity 1",
    "Updated activity 2",
    "New activity 3"
  ],
  // Include all other content fields as well
  "performanceObjective": "...",
  "pages": [...]
}
```

---

### **Scenario 4: Add New Page to Existing Topic**

1. Open topic JSON file
2. Add new page to `content.pages` array:
   ```json
   {
     "number": 9,
     "title": "Additional Practice",
     "blocks": [
       {
         "type": "heading",
         "content": "More Exercises"
       },
       {
         "type": "paragraph",
         "content": "Additional content here..."
       }
     ]
   }
   ```
3. Update via PATCH endpoint

---

## 🔍 How to Find Topic ID

### **Method 1: Get All Topics**
```
GET http://localhost:4500/api/v1/topics
```

### **Method 2: Get by Chapter**
```
GET http://localhost:4500/api/v1/topics/chapter/{chapterId}
```

### **Method 3: Get by Path (Recommended)**
```
GET http://localhost:4500/api/v1/topics/path/{className}/{subjectName}/{chapterName}/{topicSlug}
```

Example:
```
GET http://localhost:4500/api/v1/topics/path/JSS%201/Mathematics/Number%20and%20Numeration/whole-numbers
```

Response includes the topic `id` you need for editing.

---

## 📝 Editing Workflow

### **Step-by-Step Process:**

1. **Locate JSON File:**
   ```
   /temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json
   ```

2. **Edit Content:**
   - Open file in code editor
   - Make your changes
   - Save file

3. **Get Topic ID:**
   ```
   GET http://localhost:4500/api/v1/topics/path/JSS%201/Mathematics/Number%20and%20Numeration/whole-numbers
   ```

4. **Update in Database:**
   ```
   PATCH http://localhost:4500/api/v1/topics/{topicId}/content
   ```
   Paste updated content from JSON file

5. **Verify Changes:**
   ```
   GET http://localhost:4500/api/v1/topics/{topicId}
   ```

---

## 💡 Pro Tips

### **1. Incremental Edits**
- Edit one section at a time
- Test after each edit
- Keep backup of original JSON

### **2. Version Control**
- Create versions: `topic-1-whole-numbers-v1.json`, `topic-1-whole-numbers-v2.json`
- Document changes in comments

### **3. Batch Updates**
- Prepare all edits in JSON file first
- Then do single PATCH request
- More efficient than multiple small updates

### **4. Content Validation**
- Ensure JSON is valid before sending
- Check all required fields are present
- Verify block types are correct

---

## 🚨 Important Notes

1. **Full Content Update:** When updating content, you must send the ENTIRE content object, not just the changed parts

2. **Preserve Structure:** Maintain the same JSON structure as the original

3. **Topic ID Required:** Always need the topic ID for updates - get it via GET endpoint first

4. **Content Field:** The `content` field in the database is of type `Json?`, so it accepts any valid JSON structure

5. **Array Fields:** When updating arrays (pages, activities), include ALL items, not just new ones

---

## 📂 File Naming Convention

```
topic-{order}-{slug}.json
```

Examples:
- `topic-1-whole-numbers.json`
- `topic-2-lcm.json`
- `topic-3-hcf.json`

---

## 🎯 Quick Reference

| Action | Endpoint | Method |
|--------|----------|--------|
| Update full topic | `/topics/{id}` | PATCH |
| Update content only | `/topics/{id}/content` | PATCH |
| Toggle completion | `/topics/{id}/toggle-completion` | PATCH |
| Get topic by path | `/topics/path/{class}/{subject}/{chapter}/{slug}` | GET |
| Get topic by ID | `/topics/{id}` | GET |

---

**Current File Location:**  
`/Users/macbook/Desktop/accessible-books/frontend/src/temp/JSS-1/Mathematics/Number-and-Numeration/topic-1-whole-numbers.json`

