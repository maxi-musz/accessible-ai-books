import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "counting-in-twos",
  title: "Counting in Twos",
  order: 4,
  data: {
    performanceObjective: "Students should be able to count in groups of twos.",
    contents: [
      "Counting in groups of twos",
      "Skip counting by 2s",
      "Even numbers pattern",
      "Real-life applications of counting in twos"
    ],
    teacherActivities: [
      "Demonstrate counting in twos using physical objects.",
      "Guide students to identify patterns when counting by 2s.",
      "Show real-life examples where counting in twos is useful.",
      "Provide practice exercises on skip counting."
    ],
    studentActivities: [
      "Practice counting in twos using counters or objects.",
      "Identify even numbers through skip counting.",
      "Complete worksheets on counting by 2s.",
      "Find real-life examples where counting in twos is useful (pairs of shoes, gloves, etc.)."
    ],
    materials: [
      "Counters or small objects",
      "Number line",
      "Flash cards with even numbers",
      "Worksheets on skip counting",
      "Real objects that come in pairs"
    ],
    evaluationGuide: [
      "Count correctly in groups of twos",
      "Identify even numbers through skip counting",
      "Apply counting in twos to solve simple problems",
      "Recognize patterns in counting by 2s"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Counting in Twos",
        blocks: [
          { type: "intro", content: "Welcome to Counting in Twos! In this topic, we'll learn how to count by 2s and discover the pattern of even numbers." },
          { type: "heading", content: "What is Skip Counting?" },
          { type: "paragraph", content: "Skip counting means counting by numbers other than 1. When we count in twos, we skip every other number." },
          { type: "example", title: "Example", content: "Counting in twos from 0:\n0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20...\n\nNotice how we skip 1, 3, 5, 7, 9, etc. These numbers we count (0, 2, 4, 6...) are called EVEN NUMBERS." }
        ]
      }
    ]
  }
};

export default topic;

