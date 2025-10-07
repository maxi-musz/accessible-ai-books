import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Mensuration and Geometry",
  slug: "construction",
  title: "Construction",
  order: 21,
  completed: false,
  data: {
    performanceObjective:
      "Students use ruler and compass to construct basic figures: copy a segment, construct perpendicular bisector, angle bisector, and triangles with given measures; label constructions neatly.",
    contents: [
      "Ruler and compass basics (no protractor method)",
      "Perpendicular bisector of a segment",
      "Bisector of an angle",
      "Triangle constructions (SSS/ASA)",
    ],
    teacherActivities: [
      "Demonstrate compass setting and steady arcs.",
      "Show clean labeling and tick marks for equal lengths.",
      "Guide step-by-step triangle constructions.",
    ],
    studentActivities: [
      "Practice compass arcs clearly and consistently.",
      "Construct and label bisectors with neatness.",
      "Build triangles from given data and verify.",
    ],
    materials: ["Ruler, compass, sharp pencil, eraser, set square"],
    evaluationGuide: [
      "Uses compass accurately (constant radius)",
      "Draws crisp lines; labels intersections",
      "Completes constructions matching the given data",
    ],
    pages: [
      {
        number: 1,
        title: "Ruler and Compass Basics",
        blocks: [
          { type: "intro", content: "Use a ruler for straight edges and a compass for arcs/circles. Keep the compass radius fixed for each step." },
          { type: "heading", content: "Compass Setup" },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-3/compass-basics.svg", alt: "Compass and ruler basics with clear spacing", caption: "Tools and basic usage", width: 800, style: "inline" },
        ],
      },
      {
        number: 2,
        title: "Perpendicular Bisector",
        blocks: [
          { type: "heading", content: "Bisect a Segment" },
          { type: "paragraph", content: "With radius > half the segment, draw arcs from both endpoints; connect arc intersections to form the perpendicular bisector." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-3/perpendicular-bisector.svg", alt: "Perpendicular bisector construction with arcs and intersection points", caption: "Perpendicular bisector of AB", width: 800, style: "inline" },
        ],
      },
      {
        number: 3,
        title: "Angle Bisector",
        blocks: [
          { type: "heading", content: "Bisect an Angle" },
          { type: "paragraph", content: "From the angle vertex, draw an arc to cut both arms; with equal radius from these cut points, draw intersecting arcs. Join vertex to intersection to bisect the angle." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-3/angle-bisector.svg", alt: "Angle bisector construction using intersecting arcs", caption: "Angle bisector of ∠AOB", width: 800, style: "inline" },
        ],
      },
      {
        number: 4,
        title: "Triangle Constructions",
        blocks: [
          { type: "heading", content: "SSS / ASA" },
          { type: "paragraph", content: "For SSS: draw a base segment; with radii equal to the other sides from each endpoint, mark intersection for the third vertex. For ASA: draw base and use arcs to mark angles and side length." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-3/triangle-construction.svg", alt: "Triangle construction (SSS/ASA) with arcs and labeled points", caption: "Construct triangles from given data", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice", html: "<p>Construct ΔABC with AB = 6 cm, AC = 5 cm, BC = 4 cm (SSS). Label clearly.</p>" },
        ],
      },
    ],
  },
};

export default topic;


