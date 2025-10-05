import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "multiplication-and-division-of-fractions",
  title: "Multiplication and Division of Fractions",
  order: 9,
  completed: false,
  data: {
    performanceObjective:
      "Students multiply and divide proper/improper fractions and mixed numbers, simplify answers, and solve contextual problems with clear working.",
    contents: [
      "Multiplying fractions: numerator×numerator, denominator×denominator",
      "Cancel common factors before multiplying",
      "Dividing fractions: multiply by reciprocal",
      "Mixed numbers: convert or use whole/fractional parts",
      "Applications to area/ratio and rate problems",
    ],
    teacherActivities: [
      "Demonstrate cancellation and reciprocal method on the board.",
      "Use area models for conceptual understanding of multiplication.",
      "Present multi-step word problems for discussion.",
    ],
    studentActivities: [
      "Practice cancellation before multiplying.",
      "Compute divisions using reciprocals.",
      "Explain solutions and check reasonableness by estimation.",
    ],
    materials: ["Fraction grids, area model SVGs, ratio tables"],
    evaluationGuide: [
      "Performs cancellation and simplifies results",
      "Correctly applies reciprocal in division",
      "Solves word problems with clear steps",
    ],
    pages: [
      {
        number: 1,
        title: "Multiply Fractions",
        blocks: [
          { type: "intro", content: "To multiply fractions, multiply the numerators together and the denominators together; then simplify." },
          { type: "example", title: "Example 1", content: "2/3 × 5/6 = (2×5)/(3×6) = 10/18 = 5/9 (divide by 2)." },
          { type: "example", title: "Example 2 (Cancellation)", content: "4/9 × 3/8 → cancel 3 with 9 (1/3), cancel 4 with 8 (1/2) ⇒ 1/3 × 1/2 = 1/6." },
          { type: "heading", content: "Area Model (Concept)" },
          { type: "html", html: `
            <div class='p-4 border rounded-lg bg-white'>
              <svg viewBox='0 0 260 160' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Area model two-thirds times five-sixths'>
                <rect x='20' y='20' width='200' height='120' fill='white' stroke='#94a3b8'/>
                ${Array.from({length:6}).map((_,i)=>`<line x1='${20+(i+1)*200/6}' y1='20' x2='${20+(i+1)*200/6}' y2='140' stroke='#cbd5e1'/>`).join("")}
                ${Array.from({length:3}).map((_,i)=>`<line x1='20' y1='${20+(i+1)*120/3}' x2='220' y2='${20+(i+1)*120/3}' stroke='#cbd5e1'/>`).join("")}
                <rect x='20' y='20' width='200*5/6' height='120*2/3' fill='#93c5fd' opacity='0.5'/>
                <text x='130' y='15' text-anchor='middle' font-size='12'>2/3 × 5/6 = 10/18 = 5/9</text>
              </svg>
              <p class='text-sm text-gray-600 mt-2'>Shaded area represents 2/3 of the height and 5/6 of the width.</p>
            </div>
          ` },
        ],
      },
      {
        number: 2,
        title: "Divide Fractions (Reciprocal Method)",
        blocks: [
          { type: "heading", content: "Keep, Change, Flip" },
          { type: "paragraph", content: "To divide by a fraction, multiply by its reciprocal (swap numerator and denominator)." },
          { type: "example", title: "Example 3", content: "3/4 ÷ 2/5 = 3/4 × 5/2 = 15/8 = 1 7/8." },
          { type: "example", title: "Example 4 (Cancellation)", content: "7/12 ÷ 14/9 = 7/12 × 9/14 → cancel 7 with 14 (1/2) ⇒ 9/(12×2) = 9/24 = 3/8." },
          { type: "note", content: "Never divide numerators and denominators separately; always multiply by the reciprocal." },
        ],
      },
      {
        number: 3,
        title: "Mixed Numbers",
        blocks: [
          { type: "paragraph", content: "Convert mixed numbers to improper fractions before multiplying or dividing, or operate using whole and fractional parts if structure permits." },
          { type: "example", title: "Example 5", content: "1 1/2 × 2 2/3 = 3/2 × 8/3 = 24/6 = 4." },
          { type: "example", title: "Example 6", content: "3 1/4 ÷ 1 1/2 = 13/4 × 2/3 = 26/12 = 13/6 = 2 1/6." },
        ],
      },
      {
        number: 4,
        title: "Applications",
        blocks: [
          { type: "heading", content: "Area and Scaling" },
          { type: "assessmentItem", title: "Area of a Garden", html: "<p>A rectangular garden is 3/5 m wide and 7/8 m long. What is its area?</p><p class='mt-2'>Area = 3/5 × 7/8 = 21/40 m².</p>" },
          { type: "assessmentItem", title: "Recipe Scaling", html: "<p>A recipe needs 3/4 cup of oil. For 2/3 of the recipe, how much oil is required?</p><p class='mt-2'>Amount = 2/3 × 3/4 = 1/2 cup.</p>" },
          { type: "assessmentItem", title: "Speed/Rate", html: "<p>A pump empties 5/6 of a tank in 3/4 hour. What fraction of the tank per hour?</p><p class='mt-2'>(5/6) ÷ (3/4) = 5/6 × 4/3 = 20/18 = 10/9 tank/hour.</p>" },
        ],
      },
      {
        number: 5,
        title: "Practice Set",
        blocks: [
          { type: "list", title: "Compute and simplify", items: [
            "a) 5/9 × 6/7",
            "b) 8/15 × 3/4",
            "c) 7/10 ÷ 14/25",
            "d) 2 1/3 × 1 1/2",
            "e) 4 5/6 ÷ 1 2/3",
          ] },
          { type: "note", content: "Cancel common factors before multiplying; convert mixed numbers when helpful." },
        ],
      },
      {
        number: 6,
        title: "Review and Common Errors",
        blocks: [
          { type: "list", title: "Avoid these mistakes", items: [
            "Multiplying denominators in division instead of flipping the divisor",
            "Forgetting to simplify answers",
            "Cancelling across addition/subtraction (only cancel across multiplication)",
          ] },
        ],
      },
    ],
  },
};

export default topic;


