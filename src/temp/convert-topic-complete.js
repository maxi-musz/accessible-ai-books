/**
 * Complete Topic to JSON Converter
 * Generates ready-to-use JSON for creating a topic with all content in one request
 * 
 * Usage: node convert-topic-complete.js <topic-file-path> <chapterId>
 * Example: node convert-topic-complete.js ../content/data/primary-1/mathematics/number-and-numeration/whole-number-0.ts cmg6xyz123
 */

const fs = require('fs');
const path = require('path');

// Get arguments
const filePath = process.argv[2];
const chapterId = process.argv[3];

if (!filePath) {
  console.error('❌ Please provide a topic file path');
  console.log('\nUsage: node convert-topic-complete.js <topic-file-path> <chapterId>');
  console.log('Example: node convert-topic-complete.js ../content/data/primary-1/mathematics/number-and-numeration/whole-number-0.ts cmg6xyz123');
  process.exit(1);
}

if (!chapterId) {
  console.error('❌ Please provide a chapter ID');
  console.log('\nUsage: node convert-topic-complete.js <topic-file-path> <chapterId>');
  console.log('\nTo get chapter ID, run:');
  console.log('  GET http://localhost:4500/api/v1/classes/name/{className}/full-structure');
  process.exit(1);
}

const absolutePath = path.resolve(__dirname, filePath);

if (!fs.existsSync(absolutePath)) {
  console.error(`❌ File not found: ${absolutePath}`);
  process.exit(1);
}

// Read the TypeScript file
const content = fs.readFileSync(absolutePath, 'utf-8');

// Extract the topic object
const topicMatch = content.match(/const topic[:\s]*Topic\s*=\s*({[\s\S]*});/);

if (!topicMatch) {
  console.error('❌ Could not find topic object in file');
  process.exit(1);
}

try {
  // Parse the topic object
  const Topic = {}; // Mock type
  const jsCode = topicMatch[1];
  const topic = eval(`(${jsCode})`);
  
  // Create the complete topic JSON for the API
  const completeTopicJson = {
    slug: topic.slug,
    title: topic.title,
    performanceObjective: topic.data.performanceObjective,
    chapterId: chapterId,
    order: topic.order || 1,
    completed: topic.completed || false,
    content: {
      pages: topic.data.pages,
      contents: topic.data.contents,
      materials: topic.data.materials,
      evaluationGuide: topic.data.evaluationGuide,
      studentActivities: topic.data.studentActivities,
      teacherActivities: topic.data.teacherActivities,
      performanceObjective: topic.data.performanceObjective,
    }
  };
  
  // Write to complete-topic.json
  const outputPath = path.join(__dirname, 'complete-topic.json');
  fs.writeFileSync(outputPath, JSON.stringify(completeTopicJson, null, 2), 'utf-8');
  
  console.log('✅ Successfully converted topic to complete JSON!');
  console.log(`📄 Output saved to: ${outputPath}`);
  console.log('');
  console.log('📋 Topic Info:');
  console.log(`   Class: ${topic.class}`);
  console.log(`   Subject: ${topic.subject}`);
  console.log(`   Chapter: ${topic.chapter}`);
  console.log(`   Title: ${topic.title}`);
  console.log(`   Slug: ${topic.slug}`);
  console.log(`   Order: ${topic.order}`);
  console.log(`   Chapter ID: ${chapterId}`);
  console.log('');
  console.log('📊 Content Stats:');
  console.log(`   Pages: ${topic.data.pages.length}`);
  console.log(`   Contents: ${topic.data.contents.length}`);
  console.log(`   Materials: ${topic.data.materials.length}`);
  console.log(`   Student Activities: ${topic.data.studentActivities.length}`);
  console.log(`   Teacher Activities: ${topic.data.teacherActivities.length}`);
  console.log('');
  console.log('🚀 Ready to use in Postman!');
  console.log('');
  console.log('📮 API Request:');
  console.log('   Method: POST');
  console.log('   URL: http://localhost:4500/api/v1/topics');
  console.log('   Body: Copy entire content from complete-topic.json');
  console.log('');
  console.log('💡 This will create the topic with ALL content in ONE request!');
  
} catch (error) {
  console.error('❌ Error parsing topic:', error.message);
  process.exit(1);
}

