import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "approximation",
  title: "Approximation",
  order: 11,
  completed: false,
  data: {
    performanceObjective:
      "Students approximate numbers to specified decimal places or significant figures, understand the difference between approximation and estimation, and apply approximation in real-world contexts.",
    contents: [
      "Understanding approximation vs estimation",
      "Approximating to decimal places",
      "Significant figures",
      "Rounding in approximation",
      "Real-world applications",
    ],
    teacherActivities: [
      "Demonstrate approximation with measurement examples.",
      "Show difference between approximation and estimation.",
      "Guide students through significant figures rules.",
    ],
    studentActivities: [
      "Practice approximating numbers to different decimal places.",
      "Identify significant figures in given numbers.",
      "Apply approximation in measurement and calculation contexts.",
    ],
    materials: ["Calculator, ruler, measuring tape, examples of measurements"],
    evaluationGuide: [
      "Approximates numbers correctly to specified decimal places",
      "Identifies and uses significant figures appropriately",
      "Distinguishes between approximation and estimation",
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Approximation",
        blocks: [
          { type: "intro", content: "Approximation is finding a value that is close to the exact value, usually by rounding to a specific number of decimal places or significant figures. It's different from estimation, which is a quick mental calculation." },
          { type: "heading", content: "Approximation vs Estimation" },
          { type: "list", items: [
            "Approximation: Finding a value close to exact (usually with specific rules)",
            "Estimation: Quick mental calculation for checking reasonableness",
            "Approximation often involves rounding to decimal places",
            "Both help simplify complex numbers",
          ] },
          { type: "example", title: "Example", content: "Exact value: 3.14159265359... (π). Approximate to 2 decimal places: 3.14. Estimate for quick calculation: about 3." },
        ],
      },
      {
        number: 2,
        title: "Approximating to Decimal Places",
        blocks: [
          { type: "heading", content: "Decimal Place Approximation" },
          { type: "paragraph", content: "When approximating to a specific number of decimal places, look at the digit immediately after the desired place. If it's 5 or greater, round up. If it's less than 5, round down." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-5/decimal-approximation.svg", alt: "Visual examples of approximating numbers to different decimal places", caption: "Step-by-step decimal place approximation", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "3.14159 to 2 decimal places → 3.14 (1 < 5, so round down)",
            "2.71828 to 3 decimal places → 2.718 (2 < 5, so round down)",
            "1.41421 to 1 decimal place → 1.4 (1 < 5, so round down)",
            "9.87654 to 2 decimal places → 9.88 (6 ≥ 5, so round up)",
          ] },
        ],
      },
      {
        number: 3,
        title: "Significant Figures",
        blocks: [
          { type: "heading", content: "What are Significant Figures?" },
          { type: "paragraph", content: "Significant figures are the digits in a number that carry meaning about its precision. They include all digits except leading zeros." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-5/significant-figures.svg", alt: "Examples showing how to identify significant figures in different numbers", caption: "Understanding significant figures in numbers", width: 800, style: "inline" },
          { type: "list", title: "Rules for Significant Figures", items: [
            "All non-zero digits are significant",
            "Zeros between non-zero digits are significant",
            "Leading zeros are not significant",
            "Trailing zeros after decimal point are significant",
          ] },
          { type: "example", title: "Examples", content: "123 has 3 significant figures. 0.0123 has 3 significant figures. 12.30 has 4 significant figures. 1000 has 1 significant figure (unless specified otherwise)." },
        ],
      },
      {
        number: 4,
        title: "Approximation in Calculations",
        blocks: [
          { type: "heading", content: "Using Approximation" },
          { type: "paragraph", content: "When performing calculations with approximate numbers, the result should have the same precision as the least precise measurement used." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-5/approximation-calculations.svg", alt: "Examples of calculations using approximate values", caption: "How approximation affects calculation results", width: 800, style: "inline" },
          { type: "list", title: "Guidelines", items: [
            "Round final answer to appropriate precision",
            "Keep extra digits during intermediate calculations",
            "Consider the precision of your measuring tools",
            "Use consistent precision throughout a problem",
          ] },
        ],
      },
      {
        number: 5,
        title: "Real-World Applications",
        blocks: [
          { type: "heading", content: "Where We Use Approximation" },
          { type: "list", title: "Common Applications", items: [
            "Scientific measurements (length, mass, time)",
            "Financial calculations (currency, interest rates)",
            "Engineering calculations (dimensions, tolerances)",
            "Statistical data (averages, percentages)",
          ] },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-5/real-world-approximation.svg", alt: "Real-world examples of approximation in measurements and calculations", caption: "Approximation in everyday life and science", width: 800, style: "inline" },
          { type: "assessmentItem", title: "Example: Room Dimensions", html: "<p>A room measures 3.247 meters by 4.183 meters. Approximate the area to 2 decimal places.</p><p class='mt-2'><strong>Step 1:</strong> Approximate dimensions to 2 decimal places</p><p class='mt-2'>Length: 3.247 → 3.25 m (7 ≥ 5, round up)</p><p class='mt-2'>Width: 4.183 → 4.18 m (3 < 5, round down)</p><p class='mt-2'><strong>Step 2:</strong> Calculate area: 3.25 × 4.18 = 13.585 m²</p><p class='mt-2'><strong>Final answer:</strong> 13.59 m² (rounded to 2 decimal places)</p>" },
        ],
      },
      {
        number: 6,
        title: "Practice and Review",
        blocks: [
          { type: "heading", content: "Mixed Practice" },
          { type: "list", title: "Approximate these numbers", items: [
            "a) 2.718281828 to 3 decimal places",
            "b) 1.414213562 to 2 decimal places", 
            "c) 3.141592654 to 1 decimal place",
            "d) 9.80665 to 2 decimal places",
            "e) Find the significant figures in: 0.00456, 12.30, 1000",
          ] },
          { type: "note", content: "Remember: Approximation helps us work with manageable numbers while maintaining reasonable accuracy for our purposes." },
        ],
      },
    ],
  },
};

export default topic;
