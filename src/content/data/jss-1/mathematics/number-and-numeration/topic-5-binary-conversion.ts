import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "binary-conversion",
  title: "Conversion of Base-ten Numerals to Binary Numbers",
  order: 5,
  data: {
    performanceObjective: "Students should be able to convert base-ten numerals to binary numbers and understand the binary number system.",
    contents: [
      "Understanding the binary number system",
      "Base-ten (decimal) number system",
      "Converting decimal to binary",
      "Place value in binary system",
      "Applications of binary numbers in computers"
    ],
    teacherActivities: [
      "Explain the concept of different number bases (base-10 vs base-2).",
      "Demonstrate step-by-step conversion of decimal numbers to binary.",
      "Show how computers use binary numbers.",
      "Provide practice problems on decimal to binary conversion.",
      "Use visual aids to illustrate binary place values."
    ],
    studentActivities: [
      "Learn the binary number system (0s and 1s).",
      "Practice converting decimal numbers to binary using division method.",
      "Understand place values in binary (1, 2, 4, 8, 16, 32...).",
      "Complete conversion exercises from base-10 to base-2.",
      "Explore how binary is used in technology and computers."
    ],
    materials: [
      "Binary conversion charts",
      "Place value charts for binary",
      "Calculators",
      "Computer or tablet for demonstrations",
      "Worksheets on binary conversion",
      "Interactive binary games/apps"
    ],
    evaluationGuide: [
      "Convert given decimal numbers to binary",
      "Explain the binary number system",
      "Identify place values in binary numbers",
      "Apply binary concepts to simple computer-related problems"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Binary Numbers",
        blocks: [
          { type: "intro", content: "Welcome to Binary Numbers! In this topic, we'll learn about the number system that computers use - binary (base-2)." },
          { type: "heading", content: "What is Binary?" },
          { type: "paragraph", content: "Binary is a number system that uses only two digits: 0 and 1. Our normal number system (decimal) uses ten digits: 0-9. Binary is also called base-2, while decimal is called base-10." },
          { type: "heading", content: "Why Learn Binary?" },
          { type: "paragraph", content: "Computers use binary because they work with electrical signals that are either ON (1) or OFF (0). Every piece of data in a computer - numbers, letters, pictures, videos - is stored as binary!" },
          { type: "example", title: "Example", content: "Convert 5 (decimal) to binary:\n\n5 ÷ 2 = 2 remainder 1\n2 ÷ 2 = 1 remainder 0\n1 ÷ 2 = 0 remainder 1\n\nRead remainders from bottom to top: 101\n\nSo, 5 in decimal = 101 in binary" }
        ]
      }
    ]
  }
};

export default topic;

