import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "use-of-symbols",
  title: "Use of Symbols",
  order: 15,
  completed: false,
  data: {
    performanceObjective:
      "Students interpret and correctly use common mathematical symbols (equality, inequality, operation signs, grouping symbols), translate statements to symbols and back, and evaluate simple expressions respecting precedence.",
    contents: [
      "Equality (=) and inequality (>, <, ≥, ≤) symbols",
      "Operation symbols (+, −, ×, ÷) and meaning",
      "Grouping symbols: ( ), [ ], { } and precedence",
      "Translate verbal statements to symbolic form",
      "Evaluate simple expressions correctly",
    ],
    teacherActivities: [
      "Introduce symbols with concrete examples and number line illustrations.",
      "Demonstrate precedence using grouped expressions.",
      "Guide translation between words and symbols with class practice.",
    ],
    studentActivities: [
      "Sort and match statements to correct symbols.",
      "Evaluate expressions with and without brackets.",
      "Translate short word problems into symbolic expressions.",
    ],
    materials: [
      "Symbol charts, number lines, flash cards, grid paper",
    ],
    evaluationGuide: [
      "Chooses the correct symbol for comparisons",
      "Uses grouping symbols and order of operations correctly",
      "Accurately translates between words and symbols",
    ],
    pages: [
      {
        number: 1,
        title: "Common Symbols",
        blocks: [
          { type: "intro", content: "Mathematics uses symbols to express ideas clearly and quickly. Learn what each symbol means and how to use it." },
          { type: "heading", content: "Overview" },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-9/symbols-overview.svg", alt: "Overview of equality, inequality, and operation symbols", caption: "Key symbols used in junior secondary mathematics", width: 800, style: "inline" },
          { type: "list", title: "Symbols", items: [
            "= equals",
            "> greater than, < less than",
            "≥ greater or equal, ≤ less or equal",
            "+ add, − subtract, × multiply, ÷ divide",
          ] },
        ],
      },
      {
        number: 2,
        title: "Inequalities on a Number Line",
        blocks: [
          { type: "heading", content: "Comparisons" },
          { type: "paragraph", content: "Use >, <, ≥, ≤ to compare numbers. Visualize on a number line for clarity." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-9/inequality-examples.svg", alt: "Examples of inequalities represented on a number line", caption: "Reading and writing inequalities", width: 800, style: "inline" },
          { type: "example", title: "Examples", content: "3 < 5, 7 ≥ 7, −2 ≤ 1" },
        ],
      },
      {
        number: 3,
        title: "Grouping Symbols and Precedence",
        blocks: [
          { type: "heading", content: "Brackets and Order" },
          { type: "paragraph", content: "Grouping symbols ( ), [ ], { } control the order of operations. Evaluate inside the innermost group first." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-9/expressions-brackets.svg", alt: "Expression with parentheses, brackets, and braces showing evaluation order", caption: "Evaluate from inside to outside; respect multiplication/division before addition/subtraction", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "2 + 3 × (4 + 1) = 2 + 3 × 5 = 17" },
        ],
      },
      {
        number: 4,
        title: "Translate Words ↔ Symbols",
        blocks: [
          { type: "heading", content: "Mathematical Language" },
          { type: "paragraph", content: "Convert everyday statements to symbols and back. Identify operation words like sum, difference, product, quotient." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-9/word-problem-translation.svg", alt: "Examples translating word statements to mathematical symbols", caption: "Translating between words and symbols", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "The sum of 4 and 7 → 4 + 7",
            "8 is greater than 5 → 8 > 5",
            "Twice a number add 3 → 2n + 3",
          ] },
          { type: "assessmentItem", title: "Practice", html: "<p>Translate and evaluate: the product of 6 and 3, then add 4.</p>" },
        ],
      },
    ],
  },
};

export default topic;


