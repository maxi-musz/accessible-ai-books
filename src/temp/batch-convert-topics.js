/**
 * Batch Convert Multiple Topics
 * Converts multiple topic files and generates individual JSON files
 * 
 * Usage: node batch-convert-topics.js <chapterId>
 * Then it will prompt you to select topics to convert
 */

const fs = require('fs');
const path = require('path');

const chapterId = process.argv[2];

if (!chapterId) {
  console.error('❌ Please provide a chapter ID');
  console.log('\nUsage: node batch-convert-topics.js <chapterId>');
  console.log('\nTo get chapter ID, run:');
  console.log('  GET http://localhost:4500/api/v1/classes/name/{className}/full-structure');
  process.exit(1);
}

// Example topic files - update this array with your actual files
const topicFiles = [
  '../content/data/primary-1/mathematics/number-and-numeration/whole-number-0.ts',
  '../content/data/primary-1/mathematics/number-and-numeration/whole-numbers-1-5.ts',
  '../content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic1.ts',
  '../content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic2.ts',
  '../content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic3.ts',
  '../content/data/primary-4/mathematics/number-and-numeration/pry4-fractions-topic4.ts',
];

console.log('🔄 Batch Converting Topics...\n');

const allTopics = [];

topicFiles.forEach((filePath, index) => {
  const absolutePath = path.resolve(__dirname, filePath);
  
  if (!fs.existsSync(absolutePath)) {
    console.log(`⏭️  Skipping (not found): ${filePath}`);
    return;
  }

  try {
    const content = fs.readFileSync(absolutePath, 'utf-8');
    const topicMatch = content.match(/const topic[:\s]*Topic\s*=\s*({[\s\S]*});/);
    
    if (!topicMatch) {
      console.log(`⏭️  Skipping (no topic found): ${filePath}`);
      return;
    }

    const Topic = {};
    const jsCode = topicMatch[1];
    const topic = eval(`(${jsCode})`);
    
    const completeTopicJson = {
      slug: topic.slug,
      title: topic.title,
      performanceObjective: topic.data.performanceObjective,
      chapterId: chapterId,
      order: topic.order || (index + 1),
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
    
    allTopics.push(completeTopicJson);
    
    // Save individual file
    const fileName = `topic-${topic.slug}.json`;
    const outputPath = path.join(__dirname, 'batch-output', fileName);
    
    // Create batch-output directory if it doesn't exist
    const outputDir = path.join(__dirname, 'batch-output');
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir);
    }
    
    fs.writeFileSync(outputPath, JSON.stringify(completeTopicJson, null, 2), 'utf-8');
    
    console.log(`✅ ${topic.title} → ${fileName}`);
    
  } catch (error) {
    console.log(`❌ Error processing ${filePath}: ${error.message}`);
  }
});

console.log(`\n📦 Total topics converted: ${allTopics.length}`);
console.log(`📂 Output directory: frontend/src/temp/batch-output/`);
console.log('\n🚀 Each file is ready to use in Postman!');
console.log('   POST http://localhost:4500/api/v1/topics');
console.log('   Body: Copy content from individual JSON files');

