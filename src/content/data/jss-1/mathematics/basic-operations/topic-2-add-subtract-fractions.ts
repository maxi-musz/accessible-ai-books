import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "addition-and-subtraction-of-fractions",
  title: "Addition and Subtraction of Fractions",
  order: 8,
  completed: false,
  data: {
    performanceObjective:
      "Students add and subtract fractions with like and unlike denominators, including mixed numbers, using LCM for equivalent fractions and simplifying results.",
    contents: [
      "Proper, improper, and mixed numbers",
      "Finding equivalent fractions and simplifying",
      "Like denominators: add/subtract numerators",
      "Unlike denominators: use LCM to obtain common denominator",
      "Mixed numbers: convert or operate using whole and fractional parts",
      "Word problems from everyday contexts",
    ],
    teacherActivities: [
      "Demonstrate with fraction bars and show non-overlapping labels.",
      "Guide learners to find LCM and create equivalent fractions.",
      "Model converting between improper and mixed numbers.",
    ],
    studentActivities: [
      "Build equivalent fractions using visual bars.",
      "Compute sums/differences and simplify.",
      "Solve word problems and explain steps.",
    ],
    materials: ["Fraction bars/strips (SVGs), grid paper, LCM table"],
    evaluationGuide: [
      "Finds LCM and forms correct equivalents",
      "Adds/subtracts and simplifies accurately",
      "Converts between improper and mixed numbers",
      "Solves word problems correctly",
    ],
    pages: [
      {
        number: 1,
        title: "Recap: Types of Fractions",
        blocks: [
          { type: "intro", content: "A fraction represents a part of a whole. The top number (numerator) counts parts; the bottom number (denominator) shows equal parts." },
          { type: "heading", content: "Proper, Improper and Mixed" },
          { type: "html", html: `
            <div class='grid md:grid-cols-2 gap-4'>
              <div class='p-4 border rounded-lg bg-white'>
                <p><strong>Proper:</strong> numerator < denominator (e.g., 3/5)</p>
                <p><strong>Improper:</strong> numerator ≥ denominator (e.g., 7/4)</p>
                <p><strong>Mixed:</strong> whole + proper fraction (e.g., 1 3/4)</p>
              </div>
              <div class='p-4 border rounded-lg bg-white'>
                <svg viewBox='0 0 340 130' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Fraction bars examples'>
                  <rect x='10' y='20' width='320' height='20' fill='#eef2ff' stroke='#93c5fd'/>
                  ${Array.from({length:5}).map((_,i)=>`<line x1='${10+i*64}' y1='20' x2='${10+i*64}' y2='40' stroke='#94a3b8'/>`).join("")}
                  <rect x='10' y='20' width='192' height='20' fill='#60a5fa' opacity='0.7'/>
                  <text x='170' y='15' text-anchor='middle' font-size='12'>3/5 (proper)</text>
                  <rect x='10' y='70' width='320' height='20' fill='#f0fdf4' stroke='#86efac'/>
                  ${Array.from({length:4}).map((_,i)=>`<line x1='${10+i*80}' y1='70' x2='${10+i*80}' y2='90' stroke='#94a3b8'/>`).join("")}
                  <rect x='10' y='70' width='320' height='20' fill='#34d399' opacity='0.4'/>
                  <rect x='10' y='70' width='140' height='20' fill='#34d399' opacity='0.8'/>
                  <text x='170' y='105' text-anchor='middle' font-size='12'>7/4 = 1 3/4</text>
                </svg>
              </div>
            </div>
          ` },
        ],
      },
      {
        number: 2,
        title: "Like Denominators",
        blocks: [
          { type: "heading", content: "Add/Subtract Numerators" },
          { type: "paragraph", content: "When denominators are the same, add or subtract only the numerators; keep the denominator, then simplify." },
          { type: "html", html: `
            <div class='grid md:grid-cols-2 gap-4'>
              <div class='p-4 border rounded-lg bg-white'>
                <p><strong>Examples</strong></p>
                <p>3/8 + 2/8 = 5/8</p>
                <p>9/12 − 5/12 = 4/12 = 1/3</p>
              </div>
              <div class='p-4 border rounded-lg bg-white'>
                <svg viewBox='0 0 320 120' xmlns='http://www.w3.org/2000/svg' role='img' aria-label='Like denominators bars'>
                  <rect x='10' y='20' width='300' height='20' fill='#fff7ed' stroke='#fdba74'/>
                  ${Array.from({length:8}).map((_,i)=>`<line x1='${10+i*37.5}' y1='20' x2='${10+i*37.5}' y2='40' stroke='#94a3b8'/>`).join("")}
                  <rect x='10' y='20' width='112.5' height='20' fill='#fb923c' opacity='0.6'/>
                  <rect x='122.5' y='20' width='75' height='20' fill='#fdba74' opacity='0.6'/>
                  <text x='160' y='15' text-anchor='middle' font-size='12'>3/8 + 2/8</text>
                </svg>
              </div>
            </div>
          ` },
        ],
      },
      {
        number: 3,
        title: "Unlike Denominators: LCM Method",
        blocks: [
          { type: "heading", content: "Find a Common Denominator" },
          { type: "paragraph", content: "Use the Least Common Multiple (LCM) of denominators to rewrite as equivalent fractions with the same denominator, then add/subtract and simplify." },
          { type: "example", title: "Example 1", content: "1/6 + 1/4 ⇒ LCM(6,4)=12 ⇒ 1/6=2/12, 1/4=3/12 ⇒ 5/12" },
          { type: "example", title: "Example 2", content: "7/10 − 1/4 ⇒ LCM(10,4)=20 ⇒ 14/20 − 5/20 = 9/20" },
          { type: "note", content: "Always simplify the final answer by dividing numerator and denominator by their HCF." },
        ],
      },
      {
        number: 4,
        title: "Mixed Numbers",
        blocks: [
          { type: "heading", content: "Two Approaches" },
          { type: "list", items: [
            "Convert to improper fractions, compute, then convert back",
            "Or add/subtract whole parts and fractional parts separately (borrowing if needed)",
          ] },
          { type: "example", title: "Example 3", content: "1 3/5 + 2 4/5 = (1+2) + (3/5+4/5) = 3 + 7/5 = 3 + 1 2/5 = 4 2/5" },
          { type: "example", title: "Example 4", content: "5 1/6 − 2 5/6 = (5−2) + (1/6−5/6) = 3 − 4/6 = 2 2/6 = 2 1/3 (borrow 1 from whole)." },
        ],
      },
      {
        number: 5,
        title: "Word Problems",
        blocks: [
          { type: "assessmentItem", title: "Water Tank", html: "<p>A tank had 3 1/4 litres of water. More water of 1 3/8 litres was added. How much water is in the tank now?</p><p class='mt-2'>Answer: 3 1/4 + 1 3/8 = 3 2/8 + 1 3/8 = 4 5/8 litres.</p>" },
          { type: "assessmentItem", title: "Road Repair", html: "<p>Workers completed 2 2/3 km in the morning and 1 5/6 km in the afternoon. How many kilometres were repaired in total?</p><p class='mt-2'>LCM(3,6)=6 ⇒ 2 2/3 = 2 4/6; 1 5/6 = 1 5/6 ⇒ total = 4 3/6 = 4 1/2 km.</p>" },
          { type: "assessmentItem", title: "Recipe", html: "<p>A recipe needs 3/4 cup of milk but only 2/3 cup is available. How much more is required?</p><p class='mt-2'>LCM(4,3)=12 ⇒ 9/12 − 8/12 = 1/12 cup.</p>" },
        ],
      },
      {
        number: 6,
        title: "Practice and Review",
        blocks: [
          { type: "list", title: "Exercises", items: [
            "a) 5/12 + 7/18",
            "b) 11/15 − 2/9",
            "c) 2 3/8 + 1 5/8",
            "d) 4 1/3 − 2 5/6",
            "e) Simplify your answers",
          ] },
          { type: "note", content: "Hint: a) LCM(12,18)=36; b) LCM(15,9)=45" },
        ],
      },
    ],
  },
};

export default topic;


