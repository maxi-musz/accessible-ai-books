import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "lcm",
  title: "Lowest Common Multiples (LCM)",
  order: 2,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to list multiples, identify common multiples, and find LCM of two or more whole numbers using multiple, factor (prime factorization), and index methods; apply LCM to real-life problems (schedules, cycles, packaging).",
    contents: [
      "Multiples and common multiples",
      "Definition of LCM",
      "Method 1: Multiple method",
      "Method 2: Factor (prime factorization) method",
      "Method 3: Index method",
      "Applications of LCM",
      "Practice and assessment"
    ],
    teacherActivities: [
      "Demonstrate listing multiples on a number line and circle common multiples.",
      "Model prime factorization using factor trees and highlight common/unique factors.",
      "Guide learners through index method tables showing highest powers of primes.",
      "Facilitate pair work with real-life LCM word problems (timetables, alarms, packaging)."
    ],
    studentActivities: [
      "List multiples for given numbers and identify overlaps.",
      "Draw factor trees and compute prime factors.",
      "Complete index method tables to compute LCM.",
      "Solve real-world problems involving schedules and cycles using LCM."
    ],
    materials: [
      "Number line chart",
      "Venn/common multiples diagram",
      "Factor tree posters",
      "Prime cards (2,3,5,7,11,...)",
      "Worksheet with word problems"
    ],
    evaluationGuide: [
      "Correctly list multiples and identify common multiples.",
      "Use multiple method accurately for two numbers.",
      "Use factor method with complete prime factorization.",
      "Use index method with highest powers of primes.",
      "Apply LCM to solve real-life problems."
    ],
    pages: [
      {
        number: 1,
        title: "Multiples, Common Multiples, and LCM",
        blocks: [
          {
            type: "intro",
            content:
              "In everyday life we often need to find when events happen together again: bus schedules, ringing alarms, machine cycles, and sports drills. The Lowest Common Multiple (LCM) helps us answer ‘when is the first time these repeat together?’."
          },
          { type: "heading", content: "What is a Multiple?" },
          {
            type: "paragraph",
            content:
              "A multiple of a number is the result of multiplying that number by a whole number. Multiples of 4 are 4, 8, 12, 16, 20, 24, ... and multiples of 6 are 6, 12, 18, 24, 30, ..."
          },
          { type: "heading", content: "Common Multiples and LCM" },
          {
            type: "paragraph",
            content:
              "Common multiples are numbers that appear in the multiples of all given numbers. The LCM is the smallest of those common multiples."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/venn-multiples.svg",
            alt: "Venn of multiples of 4 and 6 highlighting 12, 24 as common",
            caption: "Common multiples of 4 and 6 (12, 24, ...) — LCM is 12",
            style: "inline",
            width: 720
          },
          {
            type: "example",
            title: "Quick Example",
            content:
              "Find LCM(4, 6).\nMultiples of 4: 4, 8, 12, 16, 20, 24...\nMultiples of 6: 6, 12, 18, 24, 30...\nCommon multiples: 12, 24, 36...\nLCM = 12."
          }
        ]
      },
      {
        number: 2,
        title: "Method 1 — Multiple Method (Listing Multiples)",
        blocks: [
          { type: "heading", content: "Steps" },
          {
            type: "list",
            items: [
              "List the first several multiples of each number.",
              "Circle the common multiples.",
              "Choose the smallest common multiple as the LCM."
            ]
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/multiples-number-line-4-6.svg",
            alt: "Number line showing multiples of 4 and 6 with 12 circled",
            caption: "Listing multiples on a number line makes the LCM easy to spot.",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 1",
            content:
              "Find LCM(5, 8).\nMultiples of 5: 5, 10, 15, 20, 25, 30, 35, 40...\nMultiples of 8: 8, 16, 24, 32, 40...\nCommon multiples: 40, 80, ...\nLCM = 40."
          },
          {
            type: "example",
            title: "Try It",
            content:
              "Find LCM(3, 7).\nMultiples of 3: 3, 6, 9, 12, 15, 18, 21...\nMultiples of 7: 7, 14, 21, 28...\nLCM = 21."
          },
          {
            type: "note",
            title: "When to use",
            content:
              "The multiple method is fast for small numbers. For larger numbers, use prime factorization or the index method."
          }
        ]
      },
      {
        number: 3,
        title: "Method 2 — Factor Method (Prime Factorization)",
        blocks: [
          { type: "heading", content: "Steps" },
          {
            type: "list",
            items: [
              "Write each number as a product of prime factors (use a factor tree).",
              "Collect all prime factors, taking the highest number of times each prime appears across the numbers.",
              "Multiply these primes to get the LCM."
            ]
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/factor-tree-36-48.svg",
            alt: "Factor trees for 36 and 48 showing 36=2^2×3^2 and 48=2^4×3",
            caption: "Prime factorization using factor trees for 36 and 48.",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 2",
            content:
              "Find LCM(36, 48).\n36 = 2×2×3×3 = 2^2 × 3^2\n48 = 2×2×2×2×3 = 2^4 × 3\nTake highest powers: 2^4 and 3^2 → LCM = 2^4 × 3^2 = 16 × 9 = 144."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/prime-factorization-chart.svg",
            alt: "Small chart of primes 2,3,5,7 with sample factorizations",
            caption: "Prime factorization recap for small numbers.",
            style: "inline",
            width: 720
          }
        ]
      },
      {
        number: 4,
        title: "Method 3 — Index Method (Highest Powers Table)",
        blocks: [
          {
            type: "paragraph",
            content:
              "Write each number in index form with primes. Choose the highest power of each prime that appears in any number, then multiply."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/index-method-table-12-18-24.svg",
            alt: "Index table for 12, 18, 24 with highest powers highlighted",
            caption: "Index method: take highest powers per prime.",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 3",
            content:
              "Find LCM(12, 18, 24).\n12 = 2^2 × 3\n18 = 2 × 3^2\n24 = 2^3 × 3\nHighest powers: 2^3 and 3^2 → LCM = 8 × 9 = 72."
          },
          {
            type: "note",
            content:
              "Index method is a structured version of the factor method that scales well to many numbers."
          }
        ]
      },
      {
        number: 5,
        title: "Applications of LCM (Real-Life Problems)",
        blocks: [
          {
            type: "heading",
            content: "Schedules and Cycles"
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-2/word-problem-bus-schedule.svg",
            alt: "Two bus schedules 12-minute and 18-minute showing first meet at 36 minutes",
            caption: "When will two buses meet again? Use the LCM of their intervals.",
            style: "inline",
            width: 720
          },
          {
            type: "example",
            title: "Example 4 — Bus Intervals",
            content:
              "A bus leaves every 12 minutes and another every 18 minutes. If they both leave now, when will they leave together again?\nLCM(12, 18) = 36 minutes."
          },
          {
            type: "example",
            title: "Example 5 — Packaging",
            content:
              "Tom packs biscuits in rows of 8 and juice packs in rows of 12. What is the smallest number of items that makes both rows complete?\nLCM(8, 12) = 24 items."
          }
        ]
      },
      {
        number: 6,
        title: "Practice — Mixed Questions",
        blocks: [
          { type: "heading", content: "Compute the LCM" },
          {
            type: "html",
            html:
              "<ol class='list-decimal list-inside space-y-2'><li>LCM(4, 10)</li><li>LCM(9, 12)</li><li>LCM(15, 20)</li><li>LCM(6, 8, 14)</li><li>LCM(18, 24, 30)</li></ol>"
          },
          { type: "heading", content: "Word Problems" },
          {
            type: "html",
            html:
              "<ol class='list-decimal list-inside space-y-2'><li>Two alarms ring every 9 and 15 minutes. If they ring now, when next together?</li><li>Three sprinklers spray every 8, 12, and 20 minutes. When do they spray together?</li><li>Packets of pencils (6 each) and crayons (8 each) are arranged into equal packs without leftovers. What is the smallest pack size?</li></ol>"
          }
        ]
      },
      {
        number: 7,
        title: "Answers and Hints",
        blocks: [
          {
            type: "html",
            html:
              "<div class='bg-green-50 border-2 border-green-200 rounded-xl p-4 space-y-2'><p><strong>1.</strong> LCM(4,10)=20</p><p><strong>2.</strong> LCM(9,12)=36</p><p><strong>3.</strong> LCM(15,20)=60</p><p><strong>4.</strong> 6=2×3, 8=2^3, 14=2×7 → LCM=2^3×3×7=168</p><p><strong>5.</strong> 18=2×3^2, 24=2^3×3, 30=2×3×5 → LCM=2^3×3^2×5=360</p><hr class='my-2'/><p><strong>Alarms:</strong> LCM(9,15)=45 minutes</p><p><strong>Sprinklers:</strong> 8=2^3, 12=2^2×3, 20=2^2×5 → LCM=2^3×3×5=120 minutes</p><p><strong>Packs:</strong> LCM(6,8)=24</p></div>"
          },
          {
            type: "note",
            title: "Check your work",
            content:
              "Always verify by dividing the LCM by each original number; results must be whole numbers (no remainders)."
          }
        ]
      },
      {
        number: 8,
        title: "Summary",
        blocks: [
          {
            type: "list",
            title: "Key Points",
            items: [
              "Multiples grow by repeated addition of a number.",
              "LCM is the smallest number common to all multiples listed.",
              "Multiple method is quick for small numbers.",
              "Factor/index methods are reliable for larger numbers or many numbers.",
              "LCM solves ‘first time together again’ problems in real life."
            ]
          }
        ]
      }
    ]
  }
};

export default topic;