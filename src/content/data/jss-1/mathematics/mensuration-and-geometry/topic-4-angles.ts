import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Mensuration and Geometry",
  slug: "angles",
  title: "Angles",
  order: 22,
  completed: false,
  data: {
    performanceObjective:
      "Students identify and measure angles (acute, right, obtuse, reflex), use protractors accurately, understand angle relationships in parallel lines, and apply angle concepts to solve real-world problems.",
    contents: [
      "Angle basics: vertex, arms, naming",
      "Angle types: acute, right, obtuse, reflex, straight",
      "Measuring angles with protractor",
      "Angle relationships: complementary, supplementary, vertically opposite",
      "Angles in parallel lines: corresponding, alternate, co-interior",
      "Real-world angle applications",
    ],
    teacherActivities: [
      "Demonstrate angle measurement with protractor step-by-step.",
      "Show angle relationships using interactive models.",
      "Guide problem-solving with angle properties.",
    ],
    studentActivities: [
      "Measure and classify various angles accurately.",
      "Identify angle relationships in diagrams.",
      "Solve multi-step angle problems with clear working.",
    ],
    materials: ["Protractors, angle models, parallel line diagrams, grid paper"],
    evaluationGuide: [
      "Measures angles accurately to nearest degree",
      "Correctly identifies angle types and relationships",
      "Solves angle problems using appropriate properties",
    ],
    pages: [
      {
        number: 1,
        title: "Angle Basics and Types",
        blocks: [
          { type: "intro", content: "An angle is formed when two rays meet at a point called the vertex. Angles are measured in degrees and classified by their size." },
          { type: "heading", content: "Angle Components" },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-4/angle-basics.svg", alt: "Angle components: vertex, arms, and angle types", caption: "Parts of an angle and classification", width: 800, style: "inline" },
          { type: "list", title: "Angle Types", items: [
            "Acute: less than 90°",
            "Right: exactly 90°",
            "Obtuse: between 90° and 180°",
            "Straight: exactly 180°",
            "Reflex: between 180° and 360°",
          ] },
        ],
      },
      {
        number: 2,
        title: "Measuring Angles with Protractor",
        blocks: [
          { type: "heading", content: "Using a Protractor" },
          { type: "paragraph", content: "Place the protractor's center on the vertex, align one arm with the baseline, and read where the other arm crosses the scale." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-4/protractor-measurement.svg", alt: "Step-by-step protractor usage with angle measurement", caption: "Measuring angles accurately", width: 800, style: "inline" },
          { type: "example", title: "Steps", content: "1. Center on vertex 2. Align baseline 3. Read scale 4. Record measurement" },
        ],
      },
      {
        number: 3,
        title: "Angle Relationships",
        blocks: [
          { type: "heading", content: "Special Angle Pairs" },
          { type: "paragraph", content: "Complementary angles add to 90°, supplementary angles add to 180°, and vertically opposite angles are equal." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-4/angle-relationships.svg", alt: "Complementary, supplementary, and vertically opposite angles", caption: "Angle relationships and properties", width: 800, style: "inline" },
          { type: "list", title: "Properties", items: [
            "Complementary: ∠A + ∠B = 90°",
            "Supplementary: ∠A + ∠B = 180°",
            "Vertically opposite: ∠A = ∠C, ∠B = ∠D",
          ] },
        ],
      },
      {
        number: 4,
        title: "Angles in Parallel Lines",
        blocks: [
          { type: "heading", content: "Parallel Line Properties" },
          { type: "paragraph", content: "When a transversal crosses parallel lines, corresponding angles are equal, alternate angles are equal, and co-interior angles are supplementary." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-4/parallel-lines-angles.svg", alt: "Corresponding, alternate, and co-interior angles in parallel lines", caption: "Angle relationships in parallel lines", width: 800, style: "inline" },
          { type: "list", title: "Rules", items: [
            "Corresponding angles: equal",
            "Alternate angles: equal",
            "Co-interior angles: sum to 180°",
          ] },
        ],
      },
      {
        number: 5,
        title: "Real-world Applications",
        blocks: [
          { type: "heading", content: "Angles in Daily Life" },
          { type: "paragraph", content: "Angles appear in architecture (roof slopes), navigation (compass bearings), sports (throwing angles), and engineering (bridge designs)." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-4/real-world-angles.svg", alt: "Real-world angle applications: buildings, navigation, sports", caption: "Angles in everyday contexts", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "Roof pitch: 30° slope",
            "Compass bearing: 045° NE",
            "Basketball shot: 45° optimal",
            "Staircase: 30-35° safe angle",
          ] },
        ],
      },
      {
        number: 6,
        title: "Problem Solving",
        blocks: [
          { type: "heading", content: "Multi-step Angle Problems" },
          { type: "paragraph", content: "Combine angle properties to solve complex problems. Show all working and justify each step." },
          { type: "assessmentItem", title: "Practice Problems", html: "<p>1. In parallel lines, if one angle is 65°, find all other angles.</p><p>2. Two complementary angles are in ratio 2:3. Find the angles.</p><p>3. A triangle has angles 40° and 80°. Find the third angle.</p>" },
          { type: "note", content: "Always show working and check your answers make sense." },
        ],
      },
    ],
  },
};

export default topic;
