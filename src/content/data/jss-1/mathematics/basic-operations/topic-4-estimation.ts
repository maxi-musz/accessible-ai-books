import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Basic Operations",
  slug: "estimation",
  title: "Estimation",
  order: 10,
  completed: false,
  data: {
    performanceObjective:
      "Students estimate sums, differences, products, and quotients using rounding to the nearest ten, hundred, or thousand, and apply estimation to check reasonableness of calculations.",
    contents: [
      "Rounding to nearest 10, 100, 1000",
      "Front-end estimation for addition/subtraction",
      "Compatible numbers for multiplication/division",
      "Using estimation to check answers",
      "Real-world applications and problem-solving",
    ],
    teacherActivities: [
      "Demonstrate rounding rules with number lines and place value charts.",
      "Model front-end estimation with money and measurement examples.",
      "Guide students to use estimation as a checking tool.",
    ],
    studentActivities: [
      "Practice rounding numbers to different place values.",
      "Estimate before calculating and compare with exact answers.",
      "Solve word problems using estimation strategies.",
    ],
    materials: ["Number lines, place value charts, calculator for verification"],
    evaluationGuide: [
      "Rounds numbers correctly to specified place values",
      "Uses appropriate estimation strategies for different operations",
      "Applies estimation to check reasonableness of answers",
    ],
    pages: [
      {
        number: 1,
        title: "Understanding Estimation",
        blocks: [
          { type: "intro", content: "Estimation is finding an approximate answer that is close to the exact answer. It helps us check if our calculations are reasonable and is useful when exact answers aren't needed." },
          { type: "heading", content: "Why Use Estimation?" },
          { type: "list", items: [
            "Check if exact answers are reasonable",
            "Quick mental calculations",
            "Real-world situations where exact numbers aren't available",
            "Planning and budgeting",
          ] },
          { type: "example", title: "Real Example", content: "If a laptop costs ₦185,750 and a printer costs ₦56,980, we can estimate: ₦186,000 + ₦57,000 ≈ ₦243,000. The exact answer is ₦242,730, so our estimate is very close!" },
        ],
      },
      {
        number: 2,
        title: "Rounding to Nearest 10, 100, 1000",
        blocks: [
          { type: "heading", content: "Rounding Rules" },
          { type: "paragraph", content: "Look at the digit to the right of the place you're rounding to. If it's 5 or greater, round up. If it's less than 5, round down." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-4/rounding-number-line.svg", alt: "Number line showing rounding rules for nearest 10, 100, and 1000", caption: "Rounding rules visualized on number lines", width: 800, style: "inline" },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-4/place-value-rounding.svg", alt: "Place value chart demonstrating rounding to nearest 1000", caption: "Place value charts help visualize which digit to examine", width: 800, style: "inline" },
          { type: "note", content: "When the digit is exactly 5, we round up to the next even number (banker's rounding) or always round up, depending on the context." },
        ],
      },
      {
        number: 3,
        title: "Front-End Estimation",
        blocks: [
          { type: "heading", content: "What is Front-End Estimation?" },
          { type: "paragraph", content: "Use the leftmost digits and round the rest to zeros. This gives a quick, lower estimate." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-4/front-end-estimation.svg", alt: "Visual examples of front-end estimation for addition and subtraction", caption: "Front-end estimation examples showing how to use leftmost digits", width: 800, style: "inline" },
          { type: "note", content: "Front-end estimation always gives a lower estimate for addition and a higher estimate for subtraction." },
        ],
      },
      {
        number: 4,
        title: "Compatible Numbers",
        blocks: [
          { type: "heading", content: "For Multiplication and Division" },
          { type: "paragraph", content: "Choose numbers that are easy to work with mentally, usually numbers that divide evenly or have simple multiplication facts." },
          { type: "image", src: "/images/svg/jss-1/mathematics/basic-operations/topic-4/compatible-numbers.svg", alt: "Compatible numbers examples for multiplication and division estimation", caption: "Using compatible numbers makes mental math easier", width: 800, style: "inline" },
          { type: "list", title: "Compatible Number Tips", items: [
            "Round to numbers that divide evenly",
            "Use multiples of 10, 25, 50, 100",
            "Look for numbers that make mental math easier",
          ] },
        ],
      },
      {
        number: 5,
        title: "Using Estimation to Check Answers",
        blocks: [
          { type: "heading", content: "Check Your Work" },
          { type: "paragraph", content: "Always estimate before calculating to see if your answer makes sense. If your exact answer is very different from your estimate, check your work." },
          { type: "assessmentItem", title: "Example: Shopping Trip", html: "<p>You buy items for ₦1,245, ₦567, and ₦892. Estimate the total, then calculate exactly.</p><p class='mt-2'><strong>Estimate:</strong> ₦1,200 + ₦600 + ₦900 = ₦2,700</p><p class='mt-2'><strong>Exact:</strong> ₦1,245 + ₦567 + ₦892 = ₦2,704</p><p class='mt-2'>Our estimate was very close! ✅</p>" },
          { type: "assessmentItem", title: "Example: Distance", html: "<p>A car travels 347 km in the morning and 289 km in the afternoon. Estimate the total distance.</p><p class='mt-2'><strong>Estimate:</strong> 350 + 290 = 640 km</p><p class='mt-2'><strong>Exact:</strong> 347 + 289 = 636 km</p><p class='mt-2'>Estimate: 640 km, Exact: 636 km - very close! ✅</p>" },
        ],
      },
      {
        number: 6,
        title: "Real-World Applications",
        blocks: [
          { type: "heading", content: "Everyday Uses" },
          { type: "list", title: "Where We Use Estimation", items: [
            "Shopping: estimating total cost before checkout",
            "Cooking: estimating ingredients for recipes",
            "Travel: estimating time and distance",
            "Budgeting: estimating monthly expenses",
            "Construction: estimating materials needed",
          ] },
          { type: "assessmentItem", title: "Problem: School Supplies", html: "<p>A student needs to buy: notebooks (₦450 each), pens (₦120 each), and calculator (₦3,200). If buying 5 notebooks and 8 pens, estimate the total cost.</p><p class='mt-2'><strong>Estimate:</strong> (5 × ₦450) + (8 × ₦120) + ₦3,200</p><p class='mt-2'>= (5 × ₦500) + (8 × ₦100) + ₦3,200</p><p class='mt-2'>= ₦2,500 + ₦800 + ₦3,200 = ₦6,500</p>" },
        ],
      },
      {
        number: 7,
        title: "Practice and Review",
        blocks: [
          { type: "heading", content: "Mixed Practice" },
          { type: "list", title: "Estimate these calculations", items: [
            "a) 2,456 + 1,789 (round to nearest 100)",
            "b) 5,678 − 2,345 (front-end estimation)",
            "c) 47 × 23 (compatible numbers)",
            "d) 1,247 ÷ 31 (compatible numbers)",
            "e) Check your estimates with exact calculations",
          ] },
          { type: "note", content: "Remember: Estimation helps you check if answers are reasonable. Always estimate before calculating!" },
        ],
      },
    ],
  },
};

export default topic;