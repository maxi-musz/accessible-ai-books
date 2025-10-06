import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Algebraic Processes",
  slug: "simple-equations",
  title: "Simple Equations",
  order: 18,
  completed: false,
  data: {
    performanceObjective:
      "Students write and solve simple linear equations of the form ax + b = c and a(x ± b) = c, verify solutions by substitution, and represent steps clearly.",
    contents: [
      "Unknowns and equality",
      "Inverse operations to isolate the variable",
      "Solving ax + b = c and a(x ± b) = c",
      "Checking by substitution",
    ],
    teacherActivities: [
      "Model solving by inverse operations step by step.",
      "Emphasize balancing both sides of the equation.",
      "Demonstrate solution checking by substitution.",
    ],
    studentActivities: [
      "Write equations from short statements.",
      "Solve and show each balancing step.",
      "Substitute to verify solutions.",
    ],
    materials: ["Equation step cards, balance scale visuals, grid paper"],
    evaluationGuide: [
      "Sets up the equation correctly",
      "Uses inverse operations in correct order",
      "Verifies solution with substitution",
    ],
    pages: [
      {
        number: 1,
        title: "Equations and Unknowns",
        blocks: [
          { type: "intro", content: "An equation says two expressions are equal. We find the value of the unknown that makes the statement true." },
          { type: "heading", content: "Key Ideas" },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-2/equation-overview.svg", alt: "Overview of equality, unknowns, and balance idea", caption: "Equality means both sides have the same value", width: 800, style: "inline" },
          { type: "list", title: "Concepts", items: [
            "Unknown (variable) is the value we solve for",
            "Balance both sides: do the same operation to both sides",
          ] },
        ],
      },
      {
        number: 2,
        title: "Solve ax + b = c",
        blocks: [
          { type: "heading", content: "Inverse Operations" },
          { type: "paragraph", content: "Undo addition/subtraction first, then division/multiplication. Keep steps clear and aligned." },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-2/solve-ax-plus-b.svg", alt: "Worked example solving ax + b = c using inverse operations", caption: "Isolate x in two steps", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "3x + 5 = 20 → 3x = 15 → x = 5" },
        ],
      },
      {
        number: 3,
        title: "Solve a(x ± b) = c",
        blocks: [
          { type: "heading", content: "Expand or Divide" },
          { type: "paragraph", content: "Either divide both sides by a first or expand then collect like terms. Keep the method consistent." },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-2/solve-a-x-plus-b.svg", alt: "Worked example solving a(x ± b) = c", caption: "Divide or expand, then isolate x", width: 800, style: "inline" },
          { type: "example", title: "Worked", content: "2(x − 3) = 10 → x − 3 = 5 → x = 8" },
        ],
      },
      {
        number: 4,
        title: "Check by Substitution",
        blocks: [
          { type: "heading", content: "Verify Solution" },
          { type: "paragraph", content: "Substitute the found value into the original equation; both sides should evaluate to the same number." },
          { type: "image", src: "/images/svg/jss-1/mathematics/algebraic-processes/topic-2/check-substitution.svg", alt: "Substituting solution back into the equation to verify", caption: "Both sides equal means solution is correct", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice", html: "<p>Solve and check: 4x − 6 = 18</p>" },
        ],
      },
    ],
  },
};

export default topic;


