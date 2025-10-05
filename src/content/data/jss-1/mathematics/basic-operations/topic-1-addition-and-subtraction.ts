import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "addition-and-subtraction",
  title: "Addition and Subtraction",
  order: 7,
  completed: false,
  data: {
    performanceObjective:
      "Students will correctly add and subtract whole numbers (up to millions) and fractions with like denominators, apply estimation to check results, and solve structured word problems using real-world contexts.",
    contents: [
      "Concept of addition and subtraction (join/remove, increase/decrease)",
      "Column method with place value alignment",
      "Regrouping (carrying/borrowing)",
      "Checking answers using estimation and inverse operations",
      "Word problems: money, measurement, and everyday contexts",
    ],
    teacherActivities: [
      "Demonstrate column addition/subtraction with place-value charts.",
      "Model regrouping using base-ten blocks or bundles.",
      "Guide students to estimate sums/differences before computing.",
      "Facilitate pair work on contextual problems and discuss solutions.",
    ],
    studentActivities: [
      "Align numbers by place value and compute with regrouping where necessary.",
      "Use estimation to predict results and to check reasonableness.",
      "Explain steps verbally and show working clearly in columns.",
      "Solve and present solutions to word problems.",
    ],
    materials: [
      "Place-value chart, base-ten blocks/bundles, grid paper",
      "Number cards and operation symbols",
      "Projector or board with column templates",
    ],
    evaluationGuide: [
      "Adds and subtracts multi-digit whole numbers accurately",
      "Shows correct regrouping steps and alignment",
      "Uses estimation/inverse operations to check answers",
      "Solves word problems correctly with clear working",
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Addition and Subtraction",
        blocks: [
          { type: "intro", content: "Addition means combining quantities; subtraction means finding the difference or what remains. We use these operations every day in money, time, distances and data." },
          { type: "heading", content: "Join and Remove Models" },
          { type: "paragraph", content: "We can model addition as joining two sets, and subtraction as removing from a set. The symbols used are + (plus) and − (minus)." },
          { type: "heading", content: "Place Value Reminder" },
          { type: "html", html: `
            <div class='pv-diagram my-3'>
              <style>
                .pv-diagram svg { width: 100%; height: auto; }
                .pv-diagram text { font-family: ui-sans-serif, system-ui; font-size: 12px; }
              </style>
              <svg viewBox='0 0 820 180' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Place value columns Ones Tens Hundreds Thousands'>
                <rect x='10' y='20' width='190' height='120' fill='#eef2ff' stroke='#93c5fd'/>
                <rect x='210' y='20' width='190' height='120' fill='#ecfeff' stroke='#67e8f9'/>
                <rect x='410' y='20' width='190' height='120' fill='#f0fdf4' stroke='#86efac'/>
                <rect x='610' y='20' width='190' height='120' fill='#fff7ed' stroke='#fdba74'/>
                <text x='105' y='50' text-anchor='middle'>Ones</text>
                <text x='305' y='50' text-anchor='middle'>Tens</text>
                <text x='505' y='50' text-anchor='middle'>Hundreds</text>
                <text x='705' y='50' text-anchor='middle'>Thousands</text>
                <text x='105' y='110' text-anchor='middle' font-weight='700'>3</text>
                <text x='305' y='110' text-anchor='middle' font-weight='700'>8</text>
                <text x='505' y='110' text-anchor='middle' font-weight='700'>4</text>
                <text x='705' y='110' text-anchor='middle' font-weight='700'>2</text>
              </svg>
              <p class='text-gray-600 text-sm mt-2'>Digits must align by place value when adding or subtracting.</p>
            </div>
          ` },
        ],
      },
      {
        number: 2,
        title: "Column Addition with Regrouping",
        blocks: [
          { type: "heading", content: "Example 1 (No Regrouping)" },
          { type: "html", html: `
            <div class='grid md:grid-cols-2 gap-4'>
              <div class='p-4 border rounded-lg bg-white'>
                <p><strong>Compute:</strong> 3,842 + 1,156</p>
                <pre class='mt-2 text-sm leading-6'>
   Thousands Hundreds Tens Ones
        3        8     4    2
   +    1        1     5    6
   ---------------------------
        4        9     9    8
                </pre>
                <p class='mt-1 text-sm text-gray-600'>Answer: 4,998</p>
              </div>
              <div class='p-4 border rounded-lg bg-white'>
                <p class='font-semibold mb-2'>Tips</p>
                <ul class='list-disc list-inside text-sm text-gray-700'>
                  <li>Align digits by place value.</li>
                  <li>Add from right to left.</li>
                  <li>Write the carry above the next column when needed.</li>
                </ul>
              </div>
            </div>
          ` },
          { type: "heading", content: "Example 2 (With Regrouping)" },
          { type: "html", html: `
            <div class='p-4 border rounded-lg bg-white'>
              <p><strong>Compute:</strong> 7,968 + 4,587</p>
              <pre class='mt-2 text-sm leading-6'>
   Carry:      1   1
   Thousands Hundreds Tens Ones
        7        9     6    8
   +    4        5     8    7
   ---------------------------
       12        5     5    5  → write 2 in thousands and carry 1 to ten-thousands
              </pre>
              <p class='mt-1 text-sm text-gray-600'>Answer: 12,555</p>
            </div>
          ` },
          { type: "note", title: "Check by Estimation", content: "8,000 + 5,000 ≈ 13,000. Our exact answer 12,555 is reasonable." },
        ],
      },
      {
        number: 3,
        title: "Column Subtraction with Borrowing",
        blocks: [
          { type: "heading", content: "Example 3 (Borrowing)" },
          { type: "html", html: `
            <div class='p-4 border rounded-lg bg-white'>
              <p><strong>Compute:</strong> 13,004 − 7,859</p>
              <pre class='mt-2 text-sm leading-6'>
   Borrow →    1    9    9 (after regrouping)
   Ten-Th  Thousands Hundreds Tens Ones
        1        3        0      0    4
   −             7        8      5    9
   -------------------------------------
                5        2      4    5
              </pre>
              <p class='mt-1 text-sm text-gray-600'>Answer: 5,145</p>
            </div>
          ` },
          { type: "warning", title: "Common Error", content: "For 0 − 9 you must borrow from the next non-zero place by cascading the borrow to the right." },
          { type: "example", title: "Inverse Operation", content: "Check: 5,145 + 7,859 = 13,004 (addition undoes subtraction)." },
        ],
      },
      {
        number: 4,
        title: "Addition and Subtraction of Fractions (Like Denominators)",
        blocks: [
          { type: "heading", content: "Same Denominator Rule" },
          { type: "paragraph", content: "When denominators are the same, add or subtract the numerators and keep the denominator. Always simplify the answer if possible." },
          { type: "html", html: `
            <div class='grid md:grid-cols-2 gap-4'>
              <div class='p-4 border rounded-lg bg-white'>
                <p><strong>Example:</strong> 3/8 + 2/8 = 5/8</p>
                <p><strong>Example:</strong> 7/10 − 3/10 = 4/10 = 2/5</p>
              </div>
              <div class='p-4 border rounded-lg bg-white'>
                <svg viewBox='0 0 300 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Fraction bars eighths and tenths'>
                  <rect x='10' y='20' width='280' height='20' fill='#eef2ff' stroke='#93c5fd'/>
                  <!-- eighths -->
                  ${Array.from({length:8}).map((_,i)=>`<line x1='${10+i*35}' y1='20' x2='${10+i*35}' y2='40' stroke='#94a3b8'/>`).join("")}
                  <rect x='10' y='20' width='175' height='20' fill='#60a5fa' opacity='0.6'/>
                  <text x='150' y='15' text-anchor='middle' font-size='12'>3/8 + 2/8 = 5/8</text>
                  <rect x='10' y='70' width='280' height='20' fill='#f0fdf4' stroke='#86efac'/>
                  <!-- tenths -->
                  ${Array.from({length:10}).map((_,i)=>`<line x1='${10+i*28}' y1='70' x2='${10+i*28}' y2='90' stroke='#94a3b8'/>`).join("")}
                  <rect x='10' y='70' width='112' height='20' fill='#34d399' opacity='0.6'/>
                  <text x='150' y='105' text-anchor='middle' font-size='12'>7/10 − 3/10 = 2/5</text>
                </svg>
              </div>
            </div>
          ` },
        ],
      },
      {
        number: 5,
        title: "Word Problems and Estimation",
        blocks: [
          { type: "heading", content: "Solve and Check" },
          { type: "assessmentItem", title: "Problem 1 (Money)", html: "<p>A laptop costs ₦185,750 and a printer costs ₦56,980. How much for both?</p><p class='mt-2'>Estimate: ₦186,000 + ₦57,000 ≈ ₦243,000</p><p class='mt-2'>Exact: 185,750 + 56,980 = <strong>242,730</strong> ✔</p>" },
          { type: "assessmentItem", title: "Problem 2 (Distance)", html: "<p>A school bus travelled 78,450 m in the morning and 65,975 m in the afternoon. What is the total distance?</p><p class='mt-2'>Answer: <strong>144,425 m</strong>.</p>" },
          { type: "assessmentItem", title: "Problem 3 (Difference)", html: "<p>A shop had 12,000 bags of rice and sold 7,845. How many remain?</p><p class='mt-2'>Answer: <strong>4,155 bags</strong>.</p>" },
        ],
      },
      {
        number: 6,
        title: "Practice and Review",
        blocks: [
          { type: "heading", content: "Mixed Practice" },
          { type: "html", html: `
            <ol class='list-decimal list-inside space-y-2'>
              <li>Compute: 45,678 + 34,925</li>
              <li>Compute: 604,000 − 278,955</li>
              <li>Compute: 9/12 − 4/12 (simplify)</li>
              <li>Check with estimation: 3,999 + 2,001 ≈ 6,000. Exact = ?</li>
              <li>Create a word problem that requires borrowing in subtraction.</li>
            </ol>
          ` },
          { type: "note", content: "Always align digits, compute from right to left, regroup when necessary, and check using estimation or the inverse operation." },
        ],
      },
    ],
  },
};

export default topic;


