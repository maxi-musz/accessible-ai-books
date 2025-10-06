import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "use-of-symbols-continued",
  title: "Use of Symbols (continued)",
  order: 16,
  completed: false,
  data: {
    performanceObjective:
      "Students apply symbols in evaluating multi-step expressions, write and interpret simple open sentences, and correctly use inequality notation in context.",
    contents: [
      "Evaluate multi-step expressions with brackets",
      "Open sentences and solution checking",
      "Inequalities in context (ages, temperatures, money)",
      "Translating multi-step word statements",
    ],
    teacherActivities: [
      "Model evaluation of expressions with nested groups.",
      "Introduce open sentences and verification by substitution.",
      "Provide contextual inequality examples and discuss meanings.",
    ],
    studentActivities: [
      "Evaluate expressions step by step with clear working.",
      "Solve simple open sentences by trial or inspection.",
      "Write inequalities from real-life statements and interpret them.",
    ],
    materials: ["Symbol charts, number lines, grid paper"],
    evaluationGuide: [
      "Maintains correct precedence and grouping",
      "Verifies truth of open sentences",
      "Writes and interprets inequalities accurately",
    ],
    pages: [
      {
        number: 1,
        title: "Evaluating Multi-step Expressions",
        blocks: [
          { type: "heading", content: "Order and Grouping" },
          { type: "paragraph", content: "Work from the innermost grouping symbols outward. Apply × and ÷ before + and − when at the same level." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-10/multistep-expression.svg", alt: "Evaluating a multi-step expression with nested grouping", caption: "Evaluate inside-out and respect precedence", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "[2 + {3 × (4 − 1)}] ÷ 5 = [2 + {3 × 3}] ÷ 5 = [2 + 9] ÷ 5 = 11 ÷ 5 = 11/5" },
        ],
      },
      {
        number: 2,
        title: "Open Sentences (True/False)",
        blocks: [
          { type: "heading", content: "Statements with Symbols" },
          { type: "paragraph", content: "An open sentence contains a variable (unknown). Check if a value makes it true by substitution." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-10/open-sentences.svg", alt: "Examples of open sentences and checking solutions", caption: "Check solutions by substitution", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "n + 5 = 12 (n = 7 makes it true)",
            "3m < 15 (m = 4 makes it true; m = 5 is false)",
          ] },
        ],
      },
      {
        number: 3,
        title: "Inequalities in Context",
        blocks: [
          { type: "heading", content: "Real-life Comparisons" },
          { type: "paragraph", content: "Use inequality symbols to express limits and comparisons in context (e.g., at most, at least, less than)." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-10/context-inequalities.svg", alt: "Contextual inequality examples (ages, temperatures, budgets)", caption: "Interpreting inequality statements", width: 800, style: "inline" },
        ],
      },
      {
        number: 4,
        title: "Translate Multi-step Statements",
        blocks: [
          { type: "heading", content: "Words to Symbols" },
          { type: "paragraph", content: "Turn a short description into a symbolic expression or inequality, then evaluate if values are given." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-10/translate-multistep.svg", alt: "Translating multi-step word statements into symbols", caption: "From statements to symbols", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice", html: "<p>Write and evaluate: twice a number decreased by 4, then divided by 3, when the number is 8.</p>" },
        ],
      },
    ],
  },
};

export default topic;


