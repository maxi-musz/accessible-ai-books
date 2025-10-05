import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "addition-in-base-2",
  title: "Addition of Numbers in Base 2",
  order: 12,
  completed: false,
  data: {
    performanceObjective:
      "Students add numbers in base 2 (binary) using the binary addition rules, understand carry operations, and convert between binary and decimal numbers for verification.",
    contents: [
      "Review of binary number system",
      "Binary addition rules (0+0, 0+1, 1+0, 1+1)",
      "Carry operations in binary addition",
      "Step-by-step binary addition process",
      "Verification using decimal conversion",
    ],
    teacherActivities: [
      "Demonstrate binary addition with visual aids.",
      "Show carry operations using place value charts.",
      "Guide students through verification using decimal conversion.",
    ],
    studentActivities: [
      "Practice binary addition with various examples.",
      "Verify answers by converting to decimal.",
      "Solve word problems involving binary addition.",
    ],
    materials: ["Binary addition charts, place value charts, calculator for verification"],
    evaluationGuide: [
      "Applies binary addition rules correctly",
      "Handles carry operations properly",
      "Verifies answers using decimal conversion",
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Binary Numbers",
        blocks: [
          { type: "intro", content: "Binary numbers use only two digits: 0 and 1. This is called base 2. Understanding binary addition is fundamental in computer science and digital electronics." },
          { type: "heading", content: "Binary Number System" },
          { type: "list", items: [
            "Only uses digits 0 and 1",
            "Each position represents a power of 2",
            "Rightmost position = 2⁰ (1)",
            "Next position = 2¹ (2)",
            "Next position = 2² (4), and so on",
          ] },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-6/binary-place-values.svg", alt: "Visual representation of binary place values and conversion to decimal", caption: "Binary place values and their decimal equivalents", width: 800, style: "inline" },
        ],
      },
      {
        number: 2,
        title: "Binary Addition Rules",
        blocks: [
          { type: "heading", content: "The Four Basic Rules" },
          { type: "paragraph", content: "Binary addition follows four simple rules. These are the only combinations possible when adding two binary digits." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-6/binary-addition-rules.svg", alt: "Visual chart showing the four binary addition rules", caption: "The four fundamental binary addition rules", width: 800, style: "inline" },
          { type: "list", title: "Binary Addition Rules", items: [
            "0 + 0 = 0 (no carry)",
            "0 + 1 = 1 (no carry)",
            "1 + 0 = 1 (no carry)",
            "1 + 1 = 10 (write 0, carry 1)",
          ] },
          { type: "note", content: "The key difference from decimal addition is that 1 + 1 = 10 in binary (which is 2 in decimal)." },
        ],
      },
      {
        number: 3,
        title: "Carry Operations",
        blocks: [
          { type: "heading", content: "Handling Carries in Binary" },
          { type: "paragraph", content: "When we get a carry in binary addition, we need to add it to the next column. Sometimes this creates additional carries." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-6/binary-carry-examples.svg", alt: "Examples showing how to handle carry operations in binary addition", caption: "Step-by-step carry operations in binary addition", width: 800, style: "inline" },
          { type: "example", title: "Example with Carry", content: "Adding 101 + 111: Start from right: 1+1=10 (write 0, carry 1). Next: 0+1+1=10 (write 0, carry 1). Last: 1+1+1=11 (write 1, carry 1). Result: 1100." },
        ],
      },
      {
        number: 4,
        title: "Step-by-Step Binary Addition",
        blocks: [
          { type: "heading", content: "Complete Addition Process" },
          { type: "paragraph", content: "Let's work through a complete binary addition problem step by step, showing all carries and calculations." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-6/binary-addition-steps.svg", alt: "Detailed step-by-step binary addition example with all intermediate steps", caption: "Complete binary addition process with carries", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice Problem", html: "<p>Add these binary numbers: 1101 + 1011</p><p class='mt-2'><strong>Step 1:</strong> 1 + 1 = 10 (write 0, carry 1)</p><p class='mt-2'><strong>Step 2:</strong> 0 + 1 + 1 = 10 (write 0, carry 1)</p><p class='mt-2'><strong>Step 3:</strong> 1 + 0 + 1 = 10 (write 0, carry 1)</p><p class='mt-2'><strong>Step 4:</strong> 1 + 1 + 1 = 11 (write 1, carry 1)</p><p class='mt-2'><strong>Result:</strong> 11000</p>" },
        ],
      },
      {
        number: 5,
        title: "Verification with Decimal",
        blocks: [
          { type: "heading", content: "Checking Your Answer" },
          { type: "paragraph", content: "Always verify your binary addition by converting both the addends and the result to decimal, then checking that the decimal addition is correct." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-6/binary-verification.svg", alt: "Example showing how to verify binary addition using decimal conversion", caption: "Verifying binary addition with decimal conversion", width: 800, style: "inline" },
          { type: "example", title: "Verification Example", content: "1101 + 1011 = 11000. Check: 1101₂ = 13₁₀, 1011₂ = 11₁₀, 11000₂ = 24₁₀. Decimal: 13 + 11 = 24 ✓" },
        ],
      },
      {
        number: 6,
        title: "Practice and Applications",
        blocks: [
          { type: "heading", content: "Real-World Applications" },
          { type: "list", title: "Where Binary Addition is Used", items: [
            "Computer processors perform binary arithmetic",
            "Digital circuits and electronics",
            "Data transmission and storage",
            "Cryptography and security systems",
          ] },
          { type: "list", title: "Practice Problems", items: [
            "a) 101 + 110",
            "b) 1110 + 1011",
            "c) 10101 + 11010",
            "d) Verify each answer using decimal conversion",
          ] },
          { type: "note", content: "Remember: Binary addition is the foundation for all computer arithmetic operations." },
        ],
      },
    ],
  },
};

export default topic;
