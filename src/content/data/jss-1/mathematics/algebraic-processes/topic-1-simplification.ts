import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Algebraic Processes",
  slug: "simplification-of-algebraic-expressions",
  title: "Simplification of Algebraic Expressions",
  order: 17,
  completed: false,
  data: {
    performanceObjective:
      "Students identify like and unlike terms, collect like terms, use the distributive property, and simplify linear algebraic expressions accurately.",
    contents: [
      "Constants, variables, coefficients",
      "Like vs unlike terms",
      "Collecting like terms (addition/subtraction)",
      "Distributive property a(b + c) = ab + ac",
      "Simplifying linear expressions",
    ],
    teacherActivities: [
      "Introduce terms, coefficients, and variables with examples.",
      "Demonstrate collecting like terms using color-coding.",
      "Model distributive property before combining terms.",
    ],
    studentActivities: [
      "Underline like terms and combine them.",
      "Expand brackets using distributive property.",
      "Simplify step by step, showing working.",
    ],
    materials: ["Term cards, color markers, grid paper"],
    evaluationGuide: [
      "Correctly identifies like/unlike terms",
      "Applies distributive property properly",
      "Simplifies expressions with accurate coefficients",
    ],
    pages: [
      {
        number: 1,
        title: "Terms and Like Terms",
        blocks: [
          { type: "intro", content: "An algebraic term has a sign, coefficient, variable(s), and power(s). Like terms have exactly the same variables to the same powers." },
          { type: "heading", content: "Identify Components" },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-1/terms-overview.svg", alt: "Constants, variables, coefficients, and powers highlighted in examples", caption: "Parts of an algebraic term", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "5x and −2x are like terms",
            "3y and 3y^2 are unlike terms",
          ] },
        ],
      },
      {
        number: 2,
        title: "Collecting Like Terms",
        blocks: [
          { type: "heading", content: "Combine Like Terms" },
          { type: "paragraph", content: "Add coefficients of like terms; keep the variable part unchanged." },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-1/collect-like-terms.svg", alt: "Combining like terms with color-coded highlights", caption: "Collect like terms by adding/subtracting coefficients", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "2x + 5x − 3x = 4x; 3a + 2b − a = 2a + 2b" },
        ],
      },
      {
        number: 3,
        title: "Distributive Property",
        blocks: [
          { type: "heading", content: "Expand then Simplify" },
          { type: "paragraph", content: "Use a(b + c) = ab + ac to remove brackets, then collect like terms." },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-1/distributive-property.svg", alt: "Visual of distributive property expanding brackets", caption: "Distribute, then collect like terms", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "3(2x + 1) − (x − 4) = 6x + 3 − x + 4 = 5x + 7" },
        ],
      },
      {
        number: 4,
        title: "Practice",
        blocks: [
          { type: "heading", content: "Try These" },
          { type: "list", title: "Problems", items: [
            "a) 4x − 2x + 7",
            "b) 2(a + 3) + a",
            "c) 5y − 3y + 2 − (y − 1)",
            "d) 3(2m − 1) + 2(m + 5)",
          ] },
          { type: "note", content: "Keep variable order consistent and show each step." },
        ],
      },
    ],
  },
};

export default topic;


