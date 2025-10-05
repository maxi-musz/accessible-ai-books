import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "subtraction-in-base-2",
  title: "Subtraction of Numbers in Base 2",
  order: 13,
  completed: false,
  data: {
    performanceObjective:
      "Students subtract numbers in base 2 (binary) using borrow rules, handle consecutive borrows, and verify results by converting to decimal and by adding the difference to the subtrahend to recover the minuend.",
    contents: [
      "Review: binary place values",
      "Binary subtraction rules (0−0, 1−0, 1−1, 0−1 with borrow)",
      "Borrowing in binary and cascading borrows",
      "Step-by-step binary subtraction process",
      "Verification by addition and by decimal conversion",
    ],
    teacherActivities: [
      "Demonstrate binary subtraction with visual place-value aids.",
      "Model borrowing using blocks or marked columns.",
      "Guide verification by adding the difference to the subtrahend and via decimal conversion.",
    ],
    studentActivities: [
      "Practice binary subtraction with and without borrows.",
      "Show all working including borrow marks.",
      "Verify answers using addition and decimal conversions.",
    ],
    materials: [
      "Binary place value charts, subtraction rule chart, grid paper",
    ],
    evaluationGuide: [
      "Applies binary subtraction rules correctly",
      "Handles single and cascading borrows",
      "Verifies answers by addition/decimal conversion",
    ],
    pages: [
      {
        number: 1,
        title: "Binary Subtraction Rules",
        blocks: [
          { type: "intro", content: "Binary uses only 0 and 1, so subtraction sometimes requires borrowing from the next higher place value (2s, 4s, 8s...)." },
          { type: "heading", content: "The Four Basic Cases" },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-7/binary-subtraction-rules.svg", alt: "Chart showing binary subtraction rules", caption: "Binary subtraction rules", width: 800, style: "inline" },
          { type: "list", title: "Rules", items: [
            "1 − 0 = 1 (no borrow)",
            "1 − 1 = 0 (no borrow)",
            "0 − 0 = 0 (no borrow)",
            "0 − 1 = 1 with borrow 1 from next column (i.e., 2 in decimal)",
          ] },
        ],
      },
      {
        number: 2,
        title: "Borrowing in Binary",
        blocks: [
          { type: "heading", content: "How Borrowing Works" },
          { type: "paragraph", content: "If the top digit is 0 and you need to subtract 1, you borrow 1 from the next column. In binary, borrowing 1 makes the current column 2 (10₂)." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-7/binary-borrow-examples.svg", alt: "Examples of borrowing in binary subtraction, including cascading borrows", caption: "Borrowing and cascading borrows", width: 800, style: "inline" },
          { type: "example", title: "Example with Borrow", content: "Subtract 1010 − 0111. From right: 0−1 borrow → 10−1=1 (borrow from 1 making it 0). Next: 0−1 borrow again → 10−1=1 (borrow from next 0, cascading). Continue carefully to get 0011." },
        ],
      },
      {
        number: 3,
        title: "Step-by-Step Subtraction",
        blocks: [
          { type: "heading", content: "Worked Example" },
          { type: "paragraph", content: "Follow each column from right to left, marking borrows clearly and writing the result bits under the line." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-7/binary-subtraction-steps.svg", alt: "Step-by-step binary subtraction with borrow marks", caption: "Complete binary subtraction with borrows", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice Problem", html: "<p>Subtract these binary numbers: 11010 − 10101</p><p class='mt-2'><strong>Hint:</strong> Borrow where necessary; track cascading borrows.</p>" },
        ],
      },
      {
        number: 4,
        title: "Verification Methods",
        blocks: [
          { type: "heading", content: "Check Your Answer" },
          { type: "paragraph", content: "Verify by addition: subtrahend + difference should equal minuend. Also check by converting all numbers to decimal and verifying the subtraction." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-7/binary-subtraction-verification.svg", alt: "Verifying binary subtraction via addition and decimal conversion", caption: "Verification strategies", width: 800, style: "inline" },
          { type: "example", title: "Verification Example", content: "11010 − 10101 = 00101. Check: 10101 + 00101 = 11010 ✓. Decimal: 26 − 21 = 5 ✓" },
        ],
      },
      {
        number: 5,
        title: "Practice and Applications",
        blocks: [
          { type: "heading", content: "More Practice" },
          { type: "list", title: "Problems", items: [
            "a) 10101 − 10011",
            "b) 10000 − 00001",
            "c) 11110 − 01011",
            "d) Verify each using addition and decimal conversion",
          ] },
        ],
      },
    ],
  },
};

export default topic;


