/**
 * Script to convert TypeScript topic files to JSON for Postman
 * 
 * Usage: node convert-topic-to-json.js <topic-file-path>
 * Example: node convert-topic-to-json.js ../content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic1.ts
 */

const fs = require('fs');
const path = require('path');

// Get file path from command line argument
const filePath = process.argv[2];

if (!filePath) {
  console.error('❌ Please provide a topic file path');
  console.log('Usage: node convert-topic-to-json.js <topic-file-path>');
  process.exit(1);
}

const absolutePath = path.resolve(__dirname, filePath);

if (!fs.existsSync(absolutePath)) {
  console.error(`❌ File not found: ${absolutePath}`);
  process.exit(1);
}

// Read the TypeScript file
const content = fs.readFileSync(absolutePath, 'utf-8');

// Extract the topic object using regex (simple approach)
// This assumes the file exports a topic object
const topicMatch = content.match(/const topic[:\s]*Topic\s*=\s*({[\s\S]*});/);

if (!topicMatch) {
  console.error('❌ Could not find topic object in file');
  process.exit(1);
}

// Use eval to parse the object (in a controlled environment)
// Note: This is safe because we're only running it on our own files
try {
  // Replace TypeScript-specific syntax with JSON-compatible syntax
  let jsCode = topicMatch[1];
  
  // Create a sandboxed evaluation
  const Topic = {}; // Mock the Topic type
  const topic = eval(`(${jsCode})`);
  
  // Extract only the content part (data field)
  const jsonContent = {
    pages: topic.data.pages,
    contents: topic.data.contents,
    materials: topic.data.materials,
    evaluationGuide: topic.data.evaluationGuide,
    studentActivities: topic.data.studentActivities,
    teacherActivities: topic.data.teacherActivities,
    performanceObjective: topic.data.performanceObjective,
  };
  
  // Write to generated-topic-content.json
  const outputPath = path.join(__dirname, 'generated-topic-content.json');
  fs.writeFileSync(outputPath, JSON.stringify(jsonContent, null, 2), 'utf-8');
  
  console.log('✅ Successfully converted topic to JSON!');
  console.log(`📄 Output saved to: ${outputPath}`);
  console.log('');
  console.log('📋 Topic Info:');
  console.log(`   Class: ${topic.class}`);
  console.log(`   Subject: ${topic.subject}`);
  console.log(`   Chapter: ${topic.chapter}`);
  console.log(`   Title: ${topic.title}`);
  console.log(`   Slug: ${topic.slug}`);
  console.log(`   Order: ${topic.order}`);
  console.log('');
  console.log('🚀 To create this topic via Postman:');
  console.log('');
  console.log('1. First create the topic (without content):');
  console.log('   POST http://localhost:4500/api/v1/topics');
  console.log('   Body:');
  console.log(JSON.stringify({
    slug: topic.slug,
    title: topic.title,
    performanceObjective: topic.data.performanceObjective,
    chapterId: "YOUR_CHAPTER_ID_HERE",
    order: topic.order,
    completed: false
  }, null, 2));
  console.log('');
  console.log('2. Then add the content:');
  console.log('   PATCH http://localhost:4500/api/v1/topics/{TOPIC_ID}/content');
  console.log('   Body: Copy from generated-topic-content.json');
  console.log('');
  console.log('📊 Content Stats:');
  console.log(`   Pages: ${topic.data.pages.length}`);
  console.log(`   Contents: ${topic.data.contents.length}`);
  console.log(`   Materials: ${topic.data.materials.length}`);
  console.log(`   Student Activities: ${topic.data.studentActivities.length}`);
  console.log(`   Teacher Activities: ${topic.data.teacherActivities.length}`);
  
} catch (error) {
  console.error('❌ Error parsing topic:', error.message);
  process.exit(1);
}

