import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "lcm",
  title: "Lowest Common Multiples (LCM)",
  order: 2,
  data: {
    performanceObjective: "Students should be able to identify multiples and common multiples of two or more whole numbers, find the LCM of two or more whole numbers, and determine common multiples of whole numbers.",
    contents: [
      "Multiple of whole numbers",
      "LCM of whole numbers",
      "Factor method for finding LCM",
      "Multiple method for finding LCM",
      "Index method for finding LCM"
    ],
    teacherActivities: [
      "Use blocks or Venn diagrams to demonstrate multiples of two or more whole numbers by showing overlapping multiples.",
      "Guide students to form multiples of numbers.",
      "Show short videos on simple ways to determine multiples of whole numbers.",
      "Facilitate group work to solve LCM problems using factor, multiple, and index methods."
    ],
    studentActivities: [
      "Use blocks or Venn diagram to identify multiples of two or more whole numbers by showing the overlapping multiples.",
      "Form multiples of numbers.",
      "Watch short videos on simple ways to determine multiples of whole numbers.",
      "In groups, solve LCM problems by using: factor method, multiple method, and index method, then compare answers."
    ],
    materials: [
      "Place value Number Charts",
      "Flash cards",
      "Number cards",
      "Venn diagram on multiples of two or more numbers",
      "Videos on LCM calculation methods"
    ],
    evaluationGuide: [
      "Use factor method to find LCM",
      "Use multiple method to find LCM",
      "Use index method to find LCM",
      "Solve real-world problems involving LCM"
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Multiples and LCM",
        blocks: [
          { type: "intro", content: "Welcome to Lowest Common Multiples! In this topic, we'll learn how to find the LCM of numbers and use it to solve real-world problems." },
          { type: "image", src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/venn-multiples.svg", alt: "Venn diagram showing common multiples", caption: "Common multiples visualized with a Venn diagram", style: "inline", width: 720 },
          { type: "heading", content: "What is a Multiple?" },
          { type: "paragraph", content: "A multiple of a number is the product of that number and any whole number. For example, multiples of 3 are: 3, 6, 9, 12, 15, 18, 21..." },
          { type: "heading", content: "What is LCM?" },
          { type: "paragraph", content: "The Lowest Common Multiple (LCM) of two or more numbers is the smallest number that is a multiple of all the given numbers." },
          { type: "example", title: "Example", content: "Find the LCM of 4 and 6.\n\nMultiples of 4: 4, 8, 12, 16, 20, 24...\nMultiples of 6: 6, 12, 18, 24, 30...\n\nCommon multiples: 12, 24, 36...\nLCM = 12 (the smallest common multiple)" }
        ]
      }
    ]
  }
};

export default topic;

