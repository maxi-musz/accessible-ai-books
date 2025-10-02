# AI Content Generation Instructions

## Workflow

1. **AI reads curriculum** from `/INSTRUCTIONS/CLASSES/` folder
2. **AI generates complete topic content** following the template
3. **AI saves to** `generated-topic-content.json`
4. **Human copies JSON** from the generated file
5. **Human pastes in Postman** and sends PATCH request
6. **Content saved to database**

## AI Prompt Template

When asking AI to generate content, use:

```
Based on the curriculum in /INSTRUCTIONS/CLASSES/PRIMARY-4/MATHEMATICS-04/,
generate complete topic content for:

- Class: Primary 4
- Subject: Mathematics  
- Chapter: [CHAPTER_NAME]
- Topic: [TOPIC_TITLE]
- Performance Objective: [FROM_CURRICULUM]

Output the content following the structure in topic-template.json and save to generated-topic-content.json

Include:
- All learning outcomes
- Teacher activities
- Student activities  
- Required materials
- Evaluation criteria
- Multiple pages with varied block types (intro, heading, paragraph, html)
- Interactive elements where appropriate
```

## Block Types Available

### Text Blocks
```json
{ "type": "intro", "content": "Introduction text" }
{ "type": "heading", "content": "Section heading" }
{ "type": "paragraph", "content": "Regular text" }
```

### Rich Content
```json
{ "type": "html", "html": "<div>Custom HTML</div>" }
```

### Interactive Blocks
```json
{
  "type": "objectsGrid",
  "groups": [
    { "label": "Apples", "icons": "🍎🍎🍎" },
    { "label": "Oranges", "icons": "🍊🍊" }
  ]
}
```

```json
{
  "type": "countingLines",
  "lines": [
    { "icons": "⭐⭐⭐⭐⭐", "label": "5 stars" },
    { "icons": "🌟🌟🌟", "label": "3 stars" }
  ]
}
```

```json
{
  "type": "matchNumbers",
  "left": [1, 2, 3],
  "right": ["⭐", "⭐⭐", "⭐⭐⭐"]
}
```

```json
{
  "type": "assessmentItem",
  "title": "1. Count the objects",
  "html": "<div>Visual exercise content</div>",
  "content": "Alternative text description"
}
```

## Postman Setup

### Endpoint
```
PATCH {{base_url}}/api/v1/topics/:topicId/content
```

### Headers
```
Content-Type: application/json
```

### Body
Paste the entire content from `generated-topic-content.json`

### Example Request
```
PATCH http://localhost:3000/api/v1/topics/cmg6lrd7m0003vlxe2ms2u67n/content

Body:
{
  "performanceObjective": "...",
  "contents": [...],
  "teacherActivities": [...],
  "studentActivities": [...],
  "materials": [...],
  "evaluationGuide": [...],
  "pages": [...]
}
```

## Tips for AI Content Generation

1. **Read the curriculum first** - Understand the learning objectives
2. **Follow progression** - Start simple, build complexity
3. **Include variety** - Mix text, visuals, activities
4. **Use Nigerian context** - Local examples, currency (Naira), familiar scenarios
5. **Age-appropriate** - Language and concepts suitable for the grade level
6. **Include assessments** - Practice problems and evaluation items
7. **Add visual elements** - Use HTML blocks for tables, diagrams, colored boxes

## Quality Checklist

Before copying to Postman, verify:
- [ ] Performance objective is clear
- [ ] All required arrays have content
- [ ] At least 3-5 pages included
- [ ] Mix of block types used
- [ ] HTML is valid (no syntax errors)
- [ ] Content aligns with curriculum
- [ ] Age-appropriate language
- [ ] Nigerian/African context maintained
