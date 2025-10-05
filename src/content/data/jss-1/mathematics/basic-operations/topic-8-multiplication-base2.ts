import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "multiplication-in-base-2",
  title: "Multiplication of Numbers in Base 2",
  order: 14,
  completed: false,
  data: {
    performanceObjective:
      "Students multiply numbers in base 2 using partial products (shift-and-add), understand place-value shifts, and verify results using decimal conversion.",
    contents: [
      "Binary place values and shifts",
      "Binary multiplication rules (by 0 and by 1)",
      "Partial products and left shifts",
      "Addition of partial products (with carries)",
      "Verification by decimal conversion",
    ],
    teacherActivities: [
      "Demonstrate shift-and-add method using place-value charts.",
      "Model partial products and alignment for addition.",
      "Guide verification by converting to decimal.",
    ],
    studentActivities: [
      "Compute partial products for each 1 in the multiplier.",
      "Left-shift partial products according to position.",
      "Add partial products carefully, showing carries.",
      "Verify answers by decimal conversion.",
    ],
    materials: [
      "Place-value charts, grid paper, multiplication rule chart",
    ],
    evaluationGuide: [
      "Forms correct partial products",
      "Aligns and shifts partial products correctly",
      "Adds partial products accurately with carries",
      "Verifies results using decimal conversion",
    ],
    pages: [
      {
        number: 1,
        title: "Binary Multiplication Rules",
        blocks: [
          { type: "intro", content: "Binary multiplication uses only two rules: multiply by 0 gives 0; multiply by 1 gives the other number. Place values are powers of 2, so shifting left multiplies by 2." },
          { type: "heading", content: "Core Rules" },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-8/binary-multiplication-rules.svg", alt: "Rules for binary multiplication by 0 and by 1", caption: "Binary multiplication rules", width: 800, style: "inline" },
          { type: "list", title: "Rules", items: [
            "0 × a = 0",
            "1 × a = a",
            "Left shift by one place = multiply by 2",
          ] },
        ],
      },
      {
        number: 2,
        title: "Shift-and-Add Method",
        blocks: [
          { type: "heading", content: "Partial Products" },
          { type: "paragraph", content: "For each 1 in the multiplier, copy the multiplicand and shift left by the position index; for a 0, the partial product is 0. Then add all partial products." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-8/binary-shift-and-add.svg", alt: "Illustration of creating partial products via shifts and adding them", caption: "Shift-and-add for binary multiplication", width: 800, style: "inline" },
          { type: "example", title: "Example Idea", content: "Multiply 1011 × 110: write partials for 0,1,1 (from right to left), shift for each position, then add to get the product." },
        ],
      },
      {
        number: 3,
        title: "Worked Example",
        blocks: [
          { type: "heading", content: "Step-by-Step" },
          { type: "paragraph", content: "We demonstrate 1011 × 110. Produce partial products, align by shifts, and add them with proper carries." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-8/binary-multiplication-steps.svg", alt: "Step-by-step binary multiplication example showing partial products and addition", caption: "Complete binary multiplication process", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice Problem", html: "<p>Compute: 1101 × 101</p><p class='mt-2'><strong>Hint:</strong> Create partial products for each 1 in the multiplier and shift accordingly.</p>" },
        ],
      },
      {
        number: 4,
        title: "Verification with Decimal",
        blocks: [
          { type: "heading", content: "Check Your Answer" },
          { type: "paragraph", content: "Convert the multiplicand, multiplier, and product to decimal. Check that the decimal multiplication matches." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-8/binary-multiplication-verification.svg", alt: "Verifying binary multiplication by converting to decimal", caption: "Decimal verification of binary multiplication", width: 800, style: "inline" },
          { type: "example", title: "Verification Example", content: "1011₂ × 110₂ = 1000010₂. Decimal: 11 × 6 = 66 ✓" },
        ],
      },
      {
        number: 5,
        title: "Practice",
        blocks: [
          { type: "heading", content: "Try These" },
          { type: "list", title: "Problems", items: [
            "a) 101 × 101",
            "b) 111 × 110",
            "c) 1001 × 1011",
            "d) Verify each answer using decimal conversion",
          ] },
        ],
      },
    ],
  },
};

export default topic;


