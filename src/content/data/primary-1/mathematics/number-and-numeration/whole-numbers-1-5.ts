import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers-1-5",
  title: "Numbers 1–5",
  order: 1,
  data: {
    performanceObjective:
      "Learners sort, count, recognize, write, and order numbers 1–5.",
    contents: [
      "Sorting and classifying objects",
      "Counting objects 1–5",
      "Number recognition 1–5",
      "Writing numbers 1–5",
      "Ordering numbers 1–5",
    ],
    teacherActivities: [
      "Demonstrate sorting by object type",
      "Lead counting aloud with objects",
      "Show number symbols and names",
      "Guide tracing and writing numbers",
      "Arrange numbers from smallest to biggest",
    ],
    studentActivities: [
      "Sort objects into groups",
      "Count objects 1–5",
      "Match numbers to groups",
      "Trace and write numbers",
      "Order numbers correctly",
    ],
    materials: ["Stones", "Leaves", "Cards with numbers", "Chalk/board"],
    evaluationGuide: [
      "Can sort by type",
      "Counts objects up to 5",
      "Recognizes symbols 1–5",
      "Writes numbers 1–5",
      "Orders numbers 1–5",
    ],
    pages: [
      {
        number: 1,
        title: "SORTING AND CLASSIFYING OBJECTS",
        blocks: [
          { type: "intro", content: "Numbers help us count things around us. Before we learn numbers, we need to learn how to sort and group objects that are the same." },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 What is Sorting?</h2><p><strong>SORTING</strong> means putting things that are the same together in one group.</p></div>',
          },
          {
            type: "heading",
            content: "Let\'s Learn to Sort!",
          },
          { type: "paragraph", content: "Look at these mixed objects:" },
          {
            type: "objectsGrid",
            groups: [
              { label: "Mixed Objects", icons: "🪨 🍃 🔴 🪨 🔴 🍃 🪨" },
              { label: "Stones Together", icons: "🪨 🪨 🪨" },
              { label: "Leaves Together", icons: "🍃 🍃" },
            ],
          },
          {
            type: "html",
            html: '<div style="text-align:center; margin:20px 0; font-size:16px;"><span style="background:#ffeb3b; padding:5px 10px; border-radius:5px;">We sorted them by putting same objects together!</span></div>',
          },
          {
            type: "html",
            html: '<div class="activity-box"><h2>🌟 Try This Activity!</h2><p>Sort these objects into groups:</p><div style="text-align:center; font-size:24px; margin:20px 0;">🟡 🔵 🟡 🔴 🔵 🔴 🟡 🔵</div><p>Put all the <span style="color:#ffeb3b;">●</span> together, all the <span style="color:#2196f3;">●</span> together, and all the <span style="color:#f44336;">●</span> together.</p></div>',
          },
          {
            type: "html",
            html: '<div class="practice-section"><h2>✏️ Practice Time</h2><p>1. Circle objects that belong together:</p><div style="text-align:center; font-size:30px; margin:20px 0;">🐱 🐶 🐱 🐶 🐱</div><p>2. Draw a line to connect same objects:</p><div style="display:flex; justify-content:space-around; margin:20px 0;"><div>🌸<br>🎾<br>🌸</div><div>🌸<br>🎾<br>🎾</div></div></div>',
          },
        ],
      },
      {
        number: 2,
        title: "COUNTING OBJECTS 1-5",
        blocks: [
          { type: "intro", content: "Now that we can sort objects, let's learn to count them! We will count from 1 to 5." },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 What is Counting?</h2><p><strong>COUNTING</strong> means finding out how many objects we have. We use numbers to count.</p></div>',
          },
          {
            type: "heading",
            content: "Let\'s Count Together!",
          },
          {
            type: "countingLines",
            lines: [
              { icons: "🍎", label: "One apple = 1" },
              { icons: "🍎 🍎", label: "Two apples = 2" },
              { icons: "🍎 🍎 🍎", label: "Three apples = 3" },
              { icons: "🍎 🍎 🍎 🍎", label: "Four apples = 4" },
              { icons: "🍎 🍎 🍎 🍎 🍎", label: "Five apples = 5" },
            ],
          },
          {
            type: "html",
            html: '<div class="activity-box"><h2>🌟 Count With Me!</h2><p>Point to each object and count out loud: "One, Two, Three..."</p><div style="margin:20px 0;"><p><strong>Count the stars:</strong></p><div style="font-size:40px; text-align:center;">⭐ ⭐ ⭐</div><p style="text-align:center;">How many stars? <span class="dotted-line"></span></p></div><div style="margin:20px 0;"><p><strong>Count the flowers:</strong></p><div style="font-size:40px; text-align:center;">🌸 🌸 🌸 🌸 🌸</div><p style="text-align:center;">How many flowers? <span class="dotted-line"></span></p></div></div>',
          },
          {
            type: "html",
            html: '<div class="practice-section"><h2>✏️ Practice Counting</h2><div style="display:grid; grid-template-columns:1fr 1fr; gap:20px;"><div><p>Count the balls:</p><div style="font-size:30px;">⚽ ⚽</div><p>Answer: <span class="dotted-line"></span></p></div><div><p>Count the cars:</p><div style="font-size:30px;">🚗 🚗 🚗 🚗</div><p>Answer: <span class="dotted-line"></span></p></div></div></div>',
          },
        ],
      },
      {
        number: 3,
        title: "NUMBER RECOGNITION 1-5",
        blocks: [
          { type: "intro", content: "Numbers have special symbols. Let's learn to recognize the numbers 1, 2, 3, 4, and 5!" },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 What are Number Symbols?</h2><p><strong>NUMBER SYMBOLS</strong> are special marks we use to write numbers. Each number has its own symbol.</p></div>',
          },
          {
            type: "heading",
            content: "Meet the Numbers!",
          },
          {
            type: "html",
            html: '<div style="display:grid; grid-template-columns:repeat(5,1fr); gap:15px; margin:20px 0;">\
<div style="text-align:center;"><div class="number-box">1</div><div style="font-size:30px;">🍎</div><p style="font-size:14px;">ONE</p></div>\
<div style="text-align:center;"><div class="number-box">2</div><div style="font-size:30px;">🍎🍎</div><p style="font-size:14px;">TWO</p></div>\
<div style="text-align:center;"><div class="number-box">3</div><div style="font-size:30px;">🍎🍎🍎</div><p style="font-size:14px;">THREE</p></div>\
<div style="text-align:center;"><div class="number-box">4</div><div style="font-size:20px;">🍎🍎🍎🍎</div><p style="font-size:14px;">FOUR</p></div>\
<div style="text-align:center;"><div class="number-box">5</div><div style="font-size:18px;">🍎🍎🍎🍎🍎</div><p style="font-size:14px;">FIVE</p></div>\
</div>',
          },
          {
            type: "html",
            html: '<div class="activity-box"><h2>🌟 Find the Numbers!</h2><p>Look for these numbers around you. Circle the number that matches:</p><div style="margin:20px 0;"><p>How many dots? 🔵🔵🔵</p><div style="font-size:24px;"><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">1</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">2</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">3</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">4</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">5</span></div></div><div style="margin:20px 0;"><p>How many hearts? ❤️❤️❤️❤️❤️</p><div style="font-size:24px;"><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">1</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">2</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">3</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">4</span><span style="border:2px solid #ccc; padding:10px; margin:5px; border-radius:5px;">5</span></div></div></div>',
          },
          {
            type: "html",
            html: '<div class="practice-section"><h2>✏️ Practice Recognition</h2><p>Draw a line to connect the number with the correct group of objects:</p><div style="display:flex; justify-content:space-between; align-items:center; margin:20px 0;"><div style="text-align:center;"><div class="number-box" style="margin:10px;">2</div><div class="number-box" style="margin:10px;">4</div><div class="number-box" style="margin:10px;">1</div></div><div style="text-align:center;"><div style="margin:20px; font-size:30px;">🌟🌟🌟🌟</div><div style="margin:20px; font-size:30px;">🌙</div><div style="margin:20px; font-size:30px;">⭐⭐</div></div></div></div>',
          },
        ],
      },
      {
        number: 4,
        title: "WRITING NUMBERS 1-5",
        blocks: [
          { type: "intro", content: "Now we will learn to write the numbers 1, 2, 3, 4, and 5. Follow the arrows to write each number correctly!" },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 How to Write Numbers</h2><p><strong>WRITING NUMBERS</strong> means making the number symbols with a pencil. Each number has a special way to write it.</p></div>',
          },
          {
            type: "heading",
            content: "Let\'s Learn to Write!",
          },
          {
            type: "html",
            html: '<div style="display:grid; grid-template-columns:1fr 1fr; gap:20px; margin:20px 0;">\
<div style="text-align:center; border:2px solid #4CAF50; border-radius:10px; padding:15px;"><h3 style="color:#4CAF50;">Writing Number 1</h3><div style="font-size:60px; color:#e74c3c;">1</div><p>Start at the top and draw a straight line down ↓</p><div style="border-top:2px dotted #ccc; margin:10px 0; padding-top:10px;">Practice: <span style="font-size:30px; color:#ccc;">1 1 1</span></div></div>\
<div style="text-align:center; border:2px solid #2196F3; border-radius:10px; padding:15px;"><h3 style="color:#2196F3;">Writing Number 2</h3><div style="font-size:60px; color:#e74c3c;">2</div><p>Curve around, then across →</p><div style="border-top:2px dotted #ccc; margin:10px 0; padding-top:10px;">Practice: <span style="font-size:30px; color:#ccc;">2 2 2</span></div></div>\
</div>',
          },
          {
            type: "html",
            html: '<div style="display:grid; grid-template-columns:1fr 1fr 1fr; gap:15px; margin:20px 0;">\
<div style="text-align:center; border:2px solid #ff9800; border-radius:10px; padding:15px;"><h3 style="color:#ff9800;">Number 3</h3><div style="font-size:50px; color:#e74c3c;">3</div><p style="font-size:12px;">Two curves ⌒</p></div>\
<div style="text-align:center; border:2px solid #9c27b0; border-radius:10px; padding:15px;"><h3 style="color:#9c27b0;">Number 4</h3><div style="font-size:50px; color:#e74c3c;">4</div><p style="font-size:12px;">Lines meet →|</p></div>\
<div style="text-align:center; border:2px solid #607d8b; border-radius:10px; padding:15px;"><h3 style="color:#607d8b;">Number 5</h3><div style="font-size:50px; color:#e74c3c;">5</div><p style="font-size:12px;">Line + curve ⌒</p></div>\
</div>',
          },
          {
            type: "html",
            html: '<div class="practice-section"><h2>✏️ Writing Practice</h2><p>Trace over these dotted numbers, then write your own:</p><div style="margin:30px 0;"><div style="display:flex; justify-content:space-around; align-items:center; margin:20px 0; font-size:48px; color:#ddd;"><span style="border-bottom:3px dotted #ccc;">1</span><span style="border-bottom:3px dotted #ccc;">2</span><span style="border-bottom:3px dotted #ccc;">3</span><span style="border-bottom:3px dotted #ccc;">4</span><span style="border-bottom:3px dotted #ccc;">5</span></div></div><div style="margin:30px 0;"><p>Now write the numbers yourself:</p><div style="display:flex; justify-content:space-around; margin:20px 0;"><div style="width:60px; height:80px; border:2px solid #ccc; border-radius:5px;"></div><div style="width:60px; height:80px; border:2px solid #ccc; border-radius:5px;"></div><div style="width:60px; height:80px; border:2px solid #ccc; border-radius:5px;"></div><div style="width:60px; height:80px; border:2px solid #ccc; border-radius:5px;"></div><div style="width:60px; height:80px; border:2px solid #ccc; border-radius:5px;"></div></div></div></div>',
          },
        ],
      },
      {
        number: 5,
        title: "ORDERING NUMBERS 1-5",
        blocks: [
          { type: "intro", content: "Numbers have an order from smallest to biggest. Let's learn to arrange numbers 1-5 in the correct order!" },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 What is Ordering?</h2><p><strong>ORDERING</strong> means putting numbers from the smallest to the biggest, or biggest to smallest.</p></div>',
          },
          {
            type: "heading",
            content: "Numbers in Order!",
          },
          {
            type: "html",
            html: '<div style="text-align:center; margin:30px 0;"><p style="font-size:18px; margin-bottom:20px;">From <strong>SMALLEST</strong> to <strong>BIGGEST</strong>:</p><div style="display:flex; justify-content:center; align-items:center; gap:20px;">\
<div style="text-align:center;"><div class="number-box">1</div><div style="font-size:20px;">🍎</div><p style="font-size:12px;">Smallest</p></div><span style="font-size:24px;">→</span>\
<div style="text-align:center;"><div class="number-box">2</div><div style="font-size:18px;">🍎🍎</div></div><span style="font-size:24px;">→</span>\
<div style="text-align:center;"><div class="number-box">3</div><div style="font-size:18px;">🍎🍎🍎</div></div><span style="font-size:24px;">→</span>\
<div style="text-align:center;"><div class="number-box">4</div><div style="font-size:16px;">🍎🍎🍎🍎</div></div><span style="font-size:24px;">→</span>\
<div style="text-align:center;"><div class="number-box">5</div><div style="font-size:16px;">🍎🍎🍎🍎🍎</div><p style="font-size:12px;">Biggest</p></div>\
</div></div>',
          },
          {
            type: "html",
            html: '<div class="activity-box"><h2>🌟 Ordering Activity</h2><p>Help put these numbers in the right order. Write them from smallest to biggest:</p><div style="text-align:center; margin:20px 0;"><div style="font-size:36px; margin:20px 0;">\
<span style="background:#ffeb3b; padding:10px; margin:5px; border-radius:10px;">3</span>\
<span style="background:#ffeb3b; padding:10px; margin:5px; border-radius:10px;">1</span>\
<span style="background:#ffeb3b; padding:10px; margin:5px; border-radius:10px;">5</span>\
<span style="background:#ffeb3b; padding:10px; margin:5px; border-radius:10px;">2</span>\
<span style="background:#ffeb3b; padding:10px; margin:5px; border-radius:10px;">4</span></div><p>Write in correct order:</p><div style="display:flex; justify-content:center; gap:15px; margin:20px 0;"><div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px;"></div><div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px;"></div><div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px;"></div><div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px;"></div><div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px;"></div></div></div></div>',
          },
          {
            type: "html",
            html: '<div class="practice-section"><h2>✏️ Final Practice</h2><div style="margin:20px 0;"><p><strong>1. Circle the biggest number:</strong></p><div style="font-size:30px; text-align:center;"><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">2</span><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">5</span><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">1</span></div></div><div style="margin:20px 0;"><p><strong>2. Circle the smallest number:</strong></p><div style="font-size:30px; text-align:center;"><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">4</span><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">3</span><span style="border:2px solid #ccc; padding:10px; margin:10px; border-radius:10px;">1</span></div></div><div style="margin:30px 0; text-align:center; padding:20px; background: linear-gradient(135deg, #4CAF50, #81C784); border-radius:15px; color:white;"><h2 style="color:white; margin:0;">🎉 Congratulations!</h2><p style="margin:10px 0; font-size:18px;">You have learned about numbers 1-5!</p><p style="margin:0; font-size:16px;">You can sort, count, recognize, write, and order numbers!</p></div></div>',
          },
        ],
      },
      {
        number: 6,
        title: "REVIEW AND PRACTICE",
        blocks: [
          { type: "intro", content: "Let's review everything we learned about numbers 1-5. Show what you know!" },
          {
            type: "assessmentItem",
            title: "1. Sort these objects by type:",
            html: '<div style="font-size:24px; text-align:center; margin: 10px 0;">🚗 ⭐ 🚗 ⭐ 🚗 ⭐ 🚗</div><div style="display:flex; justify-content:space-around; margin:10px 0;">\
<div style="border:2px dashed #4CAF50; padding:12px; border-radius:10px; width:45%; text-align:center;">Cars</div>\
<div style="border:2px dashed #2196F3; padding:12px; border-radius:10px; width:45%; text-align:center;">Stars</div>\
</div>',
          },
          {
            type: "assessmentItem",
            title: "2. Count and write the number:",
            html: '<div style="display:grid; grid-template-columns:1fr 1fr; gap:16px;">\
<div style="text-align:center; border:2px solid #ccc; border-radius:10px; padding:12px;">\
  <div style="font-size:30px; margin:10px 0;">🎈 🎈 🎈 🎈</div>\
  <p>Number: <span style="border-bottom:2px solid #ccc; width:40px; display:inline-block;"></span></p>\
</div>\
<div style="text-align:center; border:2px solid #ccc; border-radius:10px; padding:12px;">\
  <div style="font-size:30px; margin:10px 0;">🌸 🌸</div>\
  <p>Number: <span style="border-bottom:2px solid #ccc; width:40px; display:inline-block;"></span></p>\
</div>\
</div>',
          },
          {
            type: "assessmentItem",
            title: "3. Circle the correct number for each group:",
            html: '<div style="text-align:center; margin:10px 0;">\
<div style="font-size:30px; margin:10px 0;">🟣 🟣 🟣 🟣 🟣</div>\
<div style="font-size:24px;">\
  <span style="border:2px solid #ccc; padding:8px; margin:5px; border-radius:5px;">3</span>\
  <span style="border:2px solid #ccc; padding:8px; margin:5px; border-radius:5px;">4</span>\
  <span style="border:2px solid #ccc; padding:8px; margin:5px; border-radius:5px;">5</span>\
</div></div>',
          },
          {
            type: "assessmentItem",
            title: "4. Write the missing numbers:",
            html: '<div style="display:flex; gap:12px; justify-content:center; align-items:center; font-size:28px;">\
<span style="border:2px solid #e74c3c; padding:6px 14px; border-radius:10px;">1</span>\
<span style="width:50px; height:40px; border:2px dashed #4CAF50; border-radius:10px; display:inline-block;"></span>\
<span style="border:2px solid #e74c3c; padding:6px 14px; border-radius:10px;">3</span>\
<span style="width:50px; height:40px; border:2px dashed #4CAF50; border-radius:10px; display:inline-block;"></span>\
<span style="border:2px solid #e74c3c; padding:6px 14px; border-radius:10px;">5</span>\
</div>',
          },
          {
            type: "assessmentItem",
            title: "5. Arrange these numbers from smallest to biggest:",
            html: '<div style="text-align:center;">\
<div style="font-size:32px; margin:10px 0;">\
  <span style="background:#ffeb3b; padding:12px; margin:8px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.2);">4</span>\
  <span style="background:#ffeb3b; padding:12px; margin:8px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.2);">1</span>\
  <span style="background:#ffeb3b; padding:12px; margin:8px; border-radius:10px; box-shadow:0 2px 5px rgba(0,0,0,0.2);">3</span>\
</div>\
<p style="margin:10px 0;">Write in order:</p>\
<div style="display:flex; justify-content:center; gap:16px;">\
  <div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px; background:#f5fff5;"></div>\
  <div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px; background:#f5fff5;"></div>\
  <div style="width:50px; height:50px; border:3px solid #4CAF50; border-radius:10px; background:#f5fff5;"></div>\
</div></div>',
          },
        ],
      },
    ],
  },
};

export default topic;
