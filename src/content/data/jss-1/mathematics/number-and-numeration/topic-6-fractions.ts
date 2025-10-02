import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "fractions",
  title: "Fractions",
  order: 6,
  data: {
    performanceObjective: "Students should be able to identify and represent fractions, compare fractions, convert between improper fractions and mixed numbers, and apply fractions in real-life situations.",
    contents: [
      "Understanding fractions (numerator and denominator)",
      "Types of fractions (proper, improper, mixed)",
      "Equivalent fractions",
      "Comparing and ordering fractions",
      "Converting between improper fractions and mixed numbers",
      "Real-life applications of fractions"
    ],
    teacherActivities: [
      "Introduce fractions using visual models (fraction bars, circles).",
      "Demonstrate different types of fractions with examples.",
      "Guide students to identify equivalent fractions.",
      "Show how to compare fractions using common denominators.",
      "Teach conversion between improper fractions and mixed numbers.",
      "Provide real-life contexts for using fractions (sharing food, measuring, etc.)."
    ],
    studentActivities: [
      "Identify and write fractions using diagrams and real objects.",
      "Practice representing fractions visually.",
      "Find equivalent fractions by multiplying or dividing.",
      "Compare fractions with same and different denominators.",
      "Convert improper fractions to mixed numbers and vice versa.",
      "Solve word problems involving fractions in daily life.",
      "Work in groups to share objects and express shares as fractions."
    ],
    materials: [
      "Fraction bars or strips",
      "Fraction circles",
      "Number line",
      "Real objects for sharing (oranges, paper, etc.)",
      "Fraction cards",
      "Worksheets on fractions",
      "Visual fraction models"
    ],
    evaluationGuide: [
      "Identify and write fractions correctly",
      "Distinguish between proper fractions, improper fractions, and mixed numbers",
      "Find equivalent fractions",
      "Compare and order fractions",
      "Convert between improper fractions and mixed numbers",
      "Solve real-life problems involving fractions"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Fractions",
        blocks: [
          { type: "intro", content: "Welcome to Fractions! In this topic, we'll learn how to represent parts of a whole and use fractions in everyday life." },
          { type: "image", src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-bar-1-2.svg", alt: "Fraction bar showing one-half (1/2)", caption: "Fraction bar model for 1/2", style: "inline", width: 700 },
          { type: "heading", content: "What is a Fraction?" },
          { type: "paragraph", content: "A fraction represents a part of a whole. It has two parts: the numerator (top number) tells us how many parts we have, and the denominator (bottom number) tells us how many equal parts the whole is divided into." },
          { type: "example", title: "Example", content: "If you cut a pizza into 8 equal slices and eat 3 slices:\n\nNumerator = 3 (slices you ate)\nDenominator = 8 (total slices)\nFraction = 3/8\n\nWe say 'three-eighths' of the pizza was eaten." },
          { type: "heading", content: "Types of Fractions" },
          { type: "paragraph", content: "1. Proper Fraction: Numerator < Denominator (Example: 3/4)\n2. Improper Fraction: Numerator ≥ Denominator (Example: 7/4)\n3. Mixed Number: Whole number + Fraction (Example: 1¾)" }
        ]
      }
    ]
  }
};

export default topic;

