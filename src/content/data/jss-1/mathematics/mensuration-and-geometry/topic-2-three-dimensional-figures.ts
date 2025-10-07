import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Mensuration and Geometry",
  slug: "three-dimensional-figures",
  title: "Three-dimensional Figures",
  order: 20,
  completed: false,
  data: {
    performanceObjective:
      "Students recognize common 3D solids (cube, cuboid, cylinder, cone, sphere, pyramid), describe faces, edges, and vertices, relate nets to solids, and identify real-world examples.",
    contents: [
      "Common solids and properties",
      "Faces, edges, vertices (F–E–V)",
      "Nets of solids (build-from-net idea)",
      "Real-world applications",
    ],
    teacherActivities: [
      "Show models or images of solids and discuss F–E–V.",
      "Demonstrate unfolding a net into a solid and vice versa.",
      "Prompt learners to match real objects to solids.",
    ],
    studentActivities: [
      "List F–E–V for given solids.",
      "Sketch simple nets and identify the solid they form.",
      "Find classroom objects that match each solid.",
    ],
    materials: ["Solid models, printed nets, scissors, glue, chart paper"],
    evaluationGuide: [
      "Correctly names solids and their properties",
      "Explains F–E–V accurately",
      "Associates nets with correct solids",
    ],
    pages: [
      {
        number: 1,
        title: "Common Solids",
        blocks: [
          { type: "intro", content: "Three-dimensional figures (solids) have length, breadth, and height. They have flat faces or curved surfaces, and meet at edges and vertices." },
          { type: "heading", content: "Solids Overview" },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-2/solids-overview.svg", alt: "Cube, cuboid, cylinder, cone, sphere, pyramid overview", caption: "Common 3D solids", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "Cube (all edges equal)",
            "Cuboid (rectangular box)",
            "Cylinder, Cone, Sphere",
            "Square-based Pyramid",
          ] },
        ],
      },
      {
        number: 2,
        title: "Faces, Edges, and Vertices",
        blocks: [
          { type: "heading", content: "F–E–V Properties" },
          { type: "paragraph", content: "Faces are flat surfaces, edges are line segments where faces meet, vertices are corner points where edges meet." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-2/faces-edges-vertices.svg", alt: "Faces, edges, vertices highlighted on cube and pyramid", caption: "Identifying F–E–V on solids", width: 800, style: "inline" },
        ],
      },
      {
        number: 3,
        title: "Nets of Solids",
        blocks: [
          { type: "heading", content: "Unfold and Build" },
          { type: "paragraph", content: "A net is a 2D pattern that folds to make a 3D solid. Knowing the net helps in constructing models accurately." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-2/nets-examples.svg", alt: "Nets for cube, cuboid, and square-based pyramid", caption: "Common nets and their solids", width: 800, style: "inline" },
        ],
      },
      {
        number: 4,
        title: "Real-world Examples",
        blocks: [
          { type: "heading", content: "Solids Around Us" },
          { type: "paragraph", content: "Match common objects to their solid types: e.g., dice (cube), cereal box (cuboid), can (cylinder), ice-cream cone (cone), ball (sphere), roof top (pyramid)." },
          { type: "image", src: "/images/svg/jss-1/mathematics/mensuration-and-geometry/topic-2/real-world-solids.svg", alt: "Real-world objects mapped to 3D solids", caption: "Connecting solids to everyday objects", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Practice", html: "<p>Name the solids for 3 classroom objects. State their faces, edges, and vertices.</p>" },
        ],
      },
    ],
  },
};

export default topic;


