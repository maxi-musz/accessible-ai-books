import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Mensuration and Geometry",
  slug: "plane-shapes",
  title: "Plane Shapes",
  order: 19,
  completed: false,
  data: {
    performanceObjective:
      "Students identify common plane shapes and their properties (sides, vertices, angles), classify triangles and quadrilaterals, and draw simple plane shapes accurately.",
    contents: [
      "Basic plane shapes (triangle, square, rectangle, circle)",
      "Properties: sides, vertices, angles",
      "Triangle types by sides/angles",
      "Quadrilaterals: square, rectangle, parallelogram, rhombus, trapezium",
      "Drawing and labeling plane shapes",
    ],
    teacherActivities: [
      "Display shapes and discuss properties (sides, vertices, equal lengths).",
      "Guide classification of triangles and quadrilaterals.",
      "Demonstrate neat drawing with ruler and compass (circle).",
    ],
    studentActivities: [
      "Name shapes and list properties.",
      "Sort shapes into categories (triangles, quadrilaterals).",
      "Draw and label key features (e.g., equal sides, right angles).",
    ],
    materials: ["Shape cards, ruler, set square, compass, grid paper"],
    evaluationGuide: [
      "Correctly identifies and names plane shapes",
      "States accurate properties of shapes",
      "Draws shapes neatly and labels features",
    ],
    pages: [
      {
        number: 1,
        title: "Common Plane Shapes",
        blocks: [
          { type: "intro", content: "Plane shapes are flat, 2D figures. They have properties like sides, vertices (corners), and angles." },
          { type: "heading", content: "Basic Shapes" },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-1/plane-shapes-overview.svg", alt: "Overview of triangle, square, rectangle, and circle", caption: "Common plane shapes", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "Triangle (3 sides), Square (4 equal sides)",
            "Rectangle (opposite sides equal), Circle (no sides)",
          ] },
        ],
      },
      {
        number: 2,
        title: "Triangle Classification",
        blocks: [
          { type: "heading", content: "By Sides and Angles" },
          { type: "paragraph", content: "Triangles can be equilateral, isosceles, or scalene (by sides); acute, right, or obtuse (by angles)." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-1/triangles-classification.svg", alt: "Equilateral, isosceles, scalene, acute, right, obtuse triangles", caption: "Triangle types and properties", width: 800, style: "inline" },
        ],
      },
      {
        number: 3,
        title: "Quadrilaterals",
        blocks: [
          { type: "heading", content: "Four-sided Shapes" },
          { type: "paragraph", content: "Quadrilaterals include square, rectangle, parallelogram, rhombus, and trapezium. Each has distinct side/angle properties." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-1/quadrilaterals-overview.svg", alt: "Square, rectangle, parallelogram, rhombus, trapezium with key properties", caption: "Common quadrilaterals", width: 800, style: "inline" },
        ],
      },
      {
        number: 4,
        title: "Draw and Label",
        blocks: [
          { type: "heading", content: "Neat Construction" },
          { type: "paragraph", content: "Use a ruler for straight edges and a compass for circles. Mark equal sides and right angles with standard symbols." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-1/draw-and-label.svg", alt: "Drawing neat plane shapes and labeling equal sides and right angles", caption: "Drawing and labeling", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice", html: "<p>Draw: (a) an isosceles triangle (b) a rectangle 6 cm by 3 cm. Label equal sides and right angles.</p>" },
        ],
      },
    ],
  },
};

export default topic;


