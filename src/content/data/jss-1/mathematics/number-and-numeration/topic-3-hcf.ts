import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "hcf",
  title: "Highest Common Factor (HCF)",
  order: 3,
  data: {
    performanceObjective: "Students should be able to identify factors and common factors of whole numbers, find the HCF of whole numbers, identify differences between LCM and HCF, apply HCF concepts to real life, and solve quantitative aptitude problems.",
    contents: [
      "Factors and HCF of whole numbers",
      "Differences between LCM and HCF",
      "Quantitative Aptitude involving HCF",
      "Common factor method",
      "Prime factor method"
    ],
    teacherActivities: [
      "Guide students to brainstorm in groups to identify common factors of two or more whole numbers.",
      "Demonstrate prime factor method with examples.",
      "Show videos on differences between LCM and HCF.",
      "Provide real-life applications of HCF (measurement conversion, simplifying fractions).",
      "Assign quantitative aptitude problems involving HCF."
    ],
    studentActivities: [
      "Brainstorm in groups to identify common factors of two or more whole numbers using common factor method and prime factor method.",
      "Practice finding HCF of whole numbers (e.g., HCF of 15 and 80).",
      "Watch short videos on the difference between LCM and HCF and how to calculate them.",
      "Apply HCF in real-life situations such as measuring and conversion of measuring units or simplifying fractions.",
      "Solve problems on quantitative aptitude involving HCF."
    ],
    materials: [
      "Mathematics Open references",
      "Interactive HCF calculator",
      "Maths Is Fun website",
      "Coolmath - HCF lesson and practices",
      "LCM and HCF by CK-12 cardboard",
      "HCF Flash cards",
      "Videos on difference between LCM and HCF"
    ],
    evaluationGuide: [
      "Find HCF of given whole numbers",
      "Express given whole numbers as products of their prime factors",
      "Apply the concept of HCF to simplify fractions",
      "Solve problems on quantitative aptitude involving LCM and HCF"
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Factors and HCF",
        blocks: [
          { type: "intro", content: "Welcome to Highest Common Factor! In this topic, we'll learn how to find the HCF of numbers and understand how it differs from LCM." },
          { type: "heading", content: "What is a Factor?" },
          { type: "paragraph", content: "A factor of a number is a whole number that divides evenly into that number. For example, factors of 12 are: 1, 2, 3, 4, 6, 12." },
          { type: "heading", content: "What is HCF?" },
          { type: "paragraph", content: "The Highest Common Factor (HCF) of two or more numbers is the largest number that divides evenly into all the given numbers." },
          { type: "example", title: "Example", content: "Find the HCF of 12 and 18.\n\nFactors of 12: 1, 2, 3, 4, 6, 12\nFactors of 18: 1, 2, 3, 6, 9, 18\n\nCommon factors: 1, 2, 3, 6\nHCF = 6 (the largest common factor)" }
        ]
      }
    ]
  }
};

export default topic;

