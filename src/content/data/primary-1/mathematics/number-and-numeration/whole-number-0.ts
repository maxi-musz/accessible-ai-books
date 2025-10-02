import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-number-0",
  title: "Whole Number 0 (Zero)",
  order: 2,
  data: {
    performanceObjective:
      "Learners recognize that 0 stands for nothingness, can read and write the number 0.",
    contents: ["Symbol 0"],
    teacherActivities: [
      "Put one stone in a bag, two stones in another, three in a third, and none in the fourth bag",
      "Lead learners to recognize the symbol 0",
      "Demonstrate writing the number 0",
      "Remove stones from the bags until nothing is left",
    ],
    studentActivities: [
      "Place stones into the bags as directed",
      "Say and trace the symbol 0",
      "Remove objects until none remain",
    ],
    materials: ["Stones", "Seeds", "Bottle covers", "Bags or containers"],
    evaluationGuide: [
      "Removes objects until nothing is left",
      "Writes and pronounces 0",
      "Gives an example of a zero situation at home",
    ],
    pages: [
      {
        number: 1,
        title: "UNDERSTANDING ZERO (0)",
        blocks: [
          {
            type: "intro",
            content:
              "Zero shows that there is nothing. When a bag is empty, it has zero stones.",
          },
          {
            type: "heading",
            content: "What is Zero?",
          },
          {
            type: "html",
            html: '<div class="definition-box"><h2>🎯 Zero (0)</h2><p><strong>Zero</strong> means nothing is there. Empty = 0.</p></div>',
          },
          {
            type: "objectsGrid",
            groups: [
              { label: "One stone", icons: "🪨" },
              { label: "Two stones", icons: "🪨 🪨" },
              { label: "Zero stones", icons: "" },
            ],
          },
          {
            type: "assessmentItem",
            title: "Try This",
            html:
              '<div style="text-align:center; font-size:24px;">👜 = <strong>0</strong> stones</div><p style="text-align:center;">Is the bag empty? Write the number: <span class="dotted-line"></span></p>',
          },
          {
            type: "heading",
            content: "Read and Write 0",
          },
          {
            type: "html",
            html:
              '<div class="content-box"><div style="display:flex; gap:20px; justify-content:center; align-items:center;">\
<div style="text-align:center; border:2px solid #2196F3; border-radius:10px; padding:12px;">\
  <h3 style="margin:4px 0;">Reading</h3><div style="font-size:48px;">0</div><p>Say: <strong>Zero</strong></p>\
</div>\
<div style="text-align:center; border:2px solid #4CAF50; border-radius:10px; padding:12px;">\
  <h3 style="margin:4px 0;">Writing</h3><div style="font-size:48px; color:#e74c3c;">0</div><p>Trace and write 0</p>\
</div>\
</div></div>',
          },
          {
            type: "assessmentItem",
            title: "Practice",
            html:
              '<div style="display:flex; justify-content:space-around; margin:10px 0;">\
<div style="text-align:center;">\
  <p>Count the apples:</p><div style="font-size:28px;"> </div>\
  <p>Number: <span class="dotted-line"></span></p>\
</div>\
<div style="text-align:center;">\
  <p>Trace and write:</p>\
  <div style="display:flex; gap:10px; font-size:42px; color:#ddd;">0 0 0</div>\
</div>\
</div>',
          },
        ],
      },
    ],
  },
};

export default topic;
