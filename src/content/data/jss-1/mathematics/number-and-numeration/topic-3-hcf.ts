import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "hcf",
  title: "Highest Common Factor (HCF)",
  order: 3,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to identify factors and common factors of whole numbers, find HCF using multiple methods (listing, prime factorization, division), distinguish between LCM and HCF, apply HCF to simplify fractions and solve real-world problems, and demonstrate proficiency in quantitative aptitude involving HCF.",
    contents: [
      "Factors and common factors",
      "Definition and properties of HCF",
      "Method 1: Listing factors method",
      "Method 2: Prime factorization method",
      "Method 3: Division method (Euclidean algorithm)",
      "HCF vs LCM comparison",
      "Applications in fraction simplification",
      "Real-world problem solving",
      "Advanced HCF techniques",
      "Practice and assessment"
    ],
    teacherActivities: [
      "Demonstrate factor finding using arrays and multiplication tables.",
      "Model prime factorization with factor trees and highlight common factors.",
      "Guide students through division method with step-by-step examples.",
      "Facilitate group discussions on HCF vs LCM differences and applications.",
      "Provide real-world scenarios for HCF application (tiling, packaging, scheduling)."
    ],
    studentActivities: [
      "List factors systematically and identify common factors through visual methods.",
      "Practice prime factorization and find HCF using common prime factors.",
      "Apply division method to find HCF of larger numbers.",
      "Compare and contrast HCF and LCM through practical examples.",
      "Solve real-world problems involving HCF in fractions, measurements, and optimization."
    ],
    materials: [
      "Factor cards and multiplication tables",
      "Prime factorization charts",
      "Division method worksheets",
      "HCF vs LCM comparison diagrams",
      "Real-world problem scenarios",
      "Interactive HCF calculators",
      "Fraction simplification tools"
    ],
    evaluationGuide: [
      "Correctly identify factors and common factors of given numbers.",
      "Use listing method accurately for small numbers.",
      "Apply prime factorization method with complete factor trees.",
      "Demonstrate division method for larger numbers.",
      "Distinguish between HCF and LCM applications.",
      "Simplify fractions using HCF.",
      "Solve real-world problems involving HCF."
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Factors and HCF",
        blocks: [
          {
            type: "intro",
            content:
              "In mathematics, we often need to find the largest number that divides evenly into two or more numbers. This is called the Highest Common Factor (HCF). Understanding HCF helps us simplify fractions, solve real-world problems, and understand the relationship between numbers."
          },
          { type: "heading", content: "What is a Factor?" },
          {
            type: "paragraph",
            content:
              "A factor of a number is a whole number that divides evenly into that number without leaving a remainder. Every number has at least two factors: 1 and itself."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/factors-visual-12.svg",
            alt: "Visual representation of factors of 12 using arrays",
            caption: "Factors of 12 shown as rectangular arrays",
            style: "inline",
            width: 720
          },
          { type: "heading", content: "What is HCF?" },
          {
            type: "paragraph",
            content:
              "The Highest Common Factor (HCF) of two or more numbers is the largest number that divides evenly into all the given numbers. It's also called the Greatest Common Divisor (GCD)."
          },
          {
            type: "example",
            title: "Quick Example",
            content:
              "Find HCF of 12 and 18.\n\nFactors of 12: 1, 2, 3, 4, 6, 12\nFactors of 18: 1, 2, 3, 6, 9, 18\n\nCommon factors: 1, 2, 3, 6\nHCF = 6 (the largest common factor)"
          }
        ]
      },
      {
        number: 2,
        title: "Method 1 — Listing Factors",
        blocks: [
          { type: "heading", content: "Steps for Listing Method" },
          {
            type: "list",
            items: [
              "List all factors of each number systematically.",
              "Identify factors that appear in all lists.",
              "Choose the largest common factor as the HCF."
            ]
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/factors-comparison-12-18.svg",
            alt: "Side-by-side comparison of factors of 12 and 18 with common factors highlighted",
            caption: "Systematic listing and comparison of factors",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 1",
            content:
              "Find HCF of 24 and 36.\n\nFactors of 24: 1, 2, 3, 4, 6, 8, 12, 24\nFactors of 36: 1, 2, 3, 4, 6, 9, 12, 18, 36\n\nCommon factors: 1, 2, 3, 4, 6, 12\nHCF = 12"
          },
          {
            type: "example",
            title: "Example 2",
            content:
              "Find HCF of 15, 25, and 35.\n\nFactors of 15: 1, 3, 5, 15\nFactors of 25: 1, 5, 25\nFactors of 35: 1, 5, 7, 35\n\nCommon factors: 1, 5\nHCF = 5"
          },
          {
            type: "note",
            title: "When to use",
            content:
              "The listing method works well for smaller numbers. For larger numbers, use prime factorization or division method."
          }
        ]
      },
      {
        number: 3,
        title: "Method 2 — Prime Factorization",
        blocks: [
          { type: "heading", content: "Steps for Prime Factorization Method" },
          {
            type: "list",
            items: [
              "Express each number as a product of prime factors.",
              "Identify common prime factors across all numbers.",
              "Take the lowest power of each common prime factor.",
              "Multiply these to get the HCF."
            ]
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/factor-tree-hcf-24-36.svg",
            alt: "Factor trees for 24 and 36 showing prime factorization",
            caption: "Prime factorization using factor trees for HCF calculation",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 3",
            content:
              "Find HCF of 24 and 36 using prime factorization.\n\n24 = 2 × 2 × 2 × 3 = 2³ × 3¹\n36 = 2 × 2 × 3 × 3 = 2² × 3²\n\nCommon primes: 2 and 3\nLowest powers: 2² and 3¹\nHCF = 2² × 3¹ = 4 × 3 = 12"
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/prime-factorization-table-24-36.svg",
            alt: "Table showing prime factorization comparison for 24 and 36",
            caption: "Prime factorization comparison table",
            style: "inline",
            width: 720
          }
        ]
      },
      {
        number: 4,
        title: "Method 3 — Division Method (Euclidean Algorithm)",
        blocks: [
          {
            type: "heading",
            content: "The Division Method"
          },
          {
            type: "paragraph",
            content:
              "The division method, also known as the Euclidean algorithm, is efficient for larger numbers. It's based on the principle that HCF(a,b) = HCF(b, remainder when a is divided by b)."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/division-method-steps.svg",
            alt: "Step-by-step division method for finding HCF",
            caption: "Division method: divide larger by smaller, repeat until remainder is 0",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 4",
            content:
              "Find HCF of 48 and 18 using division method.\n\nStep 1: 48 ÷ 18 = 2 remainder 12\nStep 2: 18 ÷ 12 = 1 remainder 6\nStep 3: 12 ÷ 6 = 2 remainder 0\n\nWhen remainder is 0, the last divisor is the HCF.\nHCF = 6"
          },
          {
            type: "example",
            title: "Example 5",
            content:
              "Find HCF of 84 and 35.\n\nStep 1: 84 ÷ 35 = 2 remainder 14\nStep 2: 35 ÷ 14 = 2 remainder 7\nStep 3: 14 ÷ 7 = 2 remainder 0\n\nHCF = 7"
          },
          {
            type: "note",
            title: "Advantages",
            content:
              "The division method is fastest for large numbers and doesn't require finding all factors or prime factorization."
          }
        ]
      },
      {
        number: 5,
        title: "HCF vs LCM — Key Differences",
        blocks: [
          {
            type: "heading",
            content: "Understanding the Difference"
          },
          {
            type: "paragraph",
            content:
              "HCF and LCM are related but serve different purposes. Understanding their differences helps in choosing the right method for problem-solving."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/hcf-vs-lcm-comparison.svg",
            alt: "Side-by-side comparison of HCF and LCM concepts and applications",
            caption: "HCF vs LCM: Understanding the key differences",
            style: "inline",
            width: 960
          },
          {
            type: "html",
            html: `
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-blue-800">HCF vs LCM Comparison</h4>
              <div class="grid md:grid-cols-2 gap-6">
                <div>
                  <h5 class="font-semibold text-blue-700 mb-2">HCF (Highest Common Factor)</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Largest number that divides all given numbers</li>
                    <li>• Always ≤ smallest number</li>
                    <li>• Used for: simplifying fractions, finding common divisors</li>
                    <li>• Example: HCF(12,18) = 6</li>
                  </ul>
                </div>
                <div>
                  <h5 class="font-semibold text-green-700 mb-2">LCM (Lowest Common Multiple)</h5>
                  <ul class="text-sm space-y-1">
                    <li>• Smallest number that is a multiple of all given numbers</li>
                    <li>• Always ≥ largest number</li>
                    <li>• Used for: finding common multiples, scheduling</li>
                    <li>• Example: LCM(12,18) = 36</li>
                  </ul>
                </div>
              </div>
            </div>
            `
          },
          {
            type: "example",
            title: "Quick Comparison",
            content:
              "For numbers 12 and 18:\n\nHCF(12,18) = 6 (largest common divisor)\nLCM(12,18) = 36 (smallest common multiple)\n\nRelationship: HCF × LCM = 12 × 18 = 216"
          }
        ]
      },
      {
        number: 6,
        title: "Applications — Simplifying Fractions",
        blocks: [
          {
            type: "heading",
            content: "Using HCF to Simplify Fractions"
          },
          {
            type: "paragraph",
            content:
              "HCF is essential for simplifying fractions to their lowest terms. We divide both numerator and denominator by their HCF."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/fraction-simplification.svg",
            alt: "Visual representation of fraction simplification using HCF",
            caption: "Simplifying fractions using HCF",
            style: "inline",
            width: 720
          },
          {
            type: "example",
            title: "Example 6",
            content:
              "Simplify 24/36 to its lowest terms.\n\nStep 1: Find HCF of 24 and 36\nHCF(24,36) = 12\n\nStep 2: Divide both by HCF\n24 ÷ 12 = 2\n36 ÷ 12 = 3\n\nSimplified fraction: 2/3"
          },
          {
            type: "example",
            title: "Example 7",
            content:
              "Simplify 45/60.\n\nHCF(45,60) = 15\n45 ÷ 15 = 3\n60 ÷ 15 = 4\n\nSimplified fraction: 3/4"
          },
          {
            type: "note",
            title: "Why simplify?",
            content:
              "Simplified fractions are easier to work with in calculations and provide the most reduced form of the ratio."
          }
        ]
      },
      {
        number: 7,
        title: "Real-World Applications",
        blocks: [
          {
            type: "heading",
            content: "HCF in Daily Life"
          },
          {
            type: "paragraph",
            content:
              "HCF has many practical applications in real-world scenarios, from tiling floors to organizing events and optimizing resources."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/tiling-problem.svg",
            alt: "Tiling problem showing how HCF determines largest square tile size",
            caption: "Tiling problem: HCF determines the largest square tile that fits evenly",
            style: "inline",
            width: 720
          },
          {
            type: "example",
            title: "Example 8 — Tiling Problem",
            content:
              "A room is 12m by 18m. What is the largest square tile that can be used to tile the floor completely?\n\nHCF(12,18) = 6\n\nAnswer: 6m × 6m square tiles (2 tiles along width, 3 tiles along length)"
          },
          {
            type: "example",
            title: "Example 9 — Packaging Problem",
            content:
              "A shopkeeper wants to pack 24 apples and 36 oranges into identical boxes with no leftovers. What is the largest number of fruits per box?\n\nHCF(24,36) = 12\n\nAnswer: 12 fruits per box (2 apples + 3 oranges per box, 2 boxes total)"
          },
          {
            type: "html",
            html: `
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-green-800">More Real-World Applications</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Gardening:</strong> HCF helps determine the largest square plot size for planting</li>
                <li><strong>Construction:</strong> Finding the largest beam size that fits evenly across different lengths</li>
                <li><strong>Textiles:</strong> Determining the largest pattern repeat that works for different fabric widths</li>
                <li><strong>Electronics:</strong> Finding common frequencies for synchronized systems</li>
              </ul>
            </div>
            `
          }
        ]
      },
      {
        number: 8,
        title: "Advanced Techniques — Multiple Numbers",
        blocks: [
          {
            type: "heading",
            content: "Finding HCF of Three or More Numbers"
          },
          {
            type: "paragraph",
            content:
              "To find HCF of multiple numbers, we can use any of our methods, but the division method is most efficient for large numbers."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-3/multiple-numbers-hcf.svg",
            alt: "Method for finding HCF of three numbers using step-by-step approach",
            caption: "Finding HCF of multiple numbers",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Example 10",
            content:
              "Find HCF of 12, 18, and 24.\n\nMethod 1: Find HCF of first two, then with third\nHCF(12,18) = 6\nHCF(6,24) = 6\n\nAnswer: HCF(12,18,24) = 6"
          },
          {
            type: "example",
            title: "Example 11",
            content:
              "Find HCF of 15, 25, and 35 using prime factorization.\n\n15 = 3 × 5\n25 = 5²\n35 = 5 × 7\n\nCommon prime: 5 (lowest power: 5¹)\nHCF = 5"
          },
          {
            type: "note",
            title: "Efficiency tip",
            content:
              "For multiple numbers, find HCF of the two smallest numbers first, then continue with the result and next number."
          }
        ]
      },
      {
        number: 9,
        title: "Practice Problems — Mixed Difficulty",
        blocks: [
          { type: "heading", content: "Basic Level" },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Find HCF using listing method:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>HCF of 8 and 12</li>
                  <li>HCF of 15 and 25</li>
                  <li>HCF of 20 and 30</li>
                </ol>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Find HCF using prime factorization:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>HCF of 18 and 24</li>
                  <li>HCF of 28 and 42</li>
                  <li>HCF of 36 and 48</li>
                </ol>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Find HCF using division method:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>HCF of 48 and 60</li>
                  <li>HCF of 72 and 90</li>
                  <li>HCF of 84 and 105</li>
                </ol>
              </div>
            </div>
            `
          },
          { type: "heading", content: "Intermediate Level" },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Multiple numbers:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>HCF of 12, 18, and 30</li>
                  <li>HCF of 20, 25, and 35</li>
                  <li>HCF of 24, 36, and 48</li>
                </ol>
              </div>
              <div class="bg-pink-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Word problems:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>A rectangular garden is 15m by 20m. What is the largest square flower bed that can be made?</li>
                  <li>Three ropes are 18m, 24m, and 30m long. What is the longest equal length they can be cut into?</li>
                  <li>Simplify the fraction 72/96 to its lowest terms.</li>
                </ol>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 10,
        title: "Solutions and Explanations",
        blocks: [
          {
            type: "html",
            html: `
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 space-y-4">
              <h3 class="font-bold text-lg text-green-800 mb-4">Basic Level Solutions</h3>
              
              <div class="space-y-3">
                <div><strong>1. HCF(8,12):</strong> Factors of 8: 1,2,4,8; Factors of 12: 1,2,3,4,6,12; Common: 1,2,4; HCF = 4</div>
                <div><strong>2. HCF(15,25):</strong> Factors of 15: 1,3,5,15; Factors of 25: 1,5,25; Common: 1,5; HCF = 5</div>
                <div><strong>3. HCF(20,30):</strong> Factors of 20: 1,2,4,5,10,20; Factors of 30: 1,2,3,5,6,10,15,30; Common: 1,2,5,10; HCF = 10</div>
              </div>
              
              <div class="space-y-3">
                <div><strong>4. HCF(18,24):</strong> 18=2×3², 24=2³×3; Common: 2¹×3¹; HCF = 6</div>
                <div><strong>5. HCF(28,42):</strong> 28=2²×7, 42=2×3×7; Common: 2¹×7¹; HCF = 14</div>
                <div><strong>6. HCF(36,48):</strong> 36=2²×3², 48=2⁴×3; Common: 2²×3¹; HCF = 12</div>
              </div>
              
              <div class="space-y-3">
                <div><strong>7. HCF(48,60):</strong> 48÷60=0R48, 60÷48=1R12, 48÷12=4R0; HCF = 12</div>
                <div><strong>8. HCF(72,90):</strong> 72÷90=0R72, 90÷72=1R18, 72÷18=4R0; HCF = 18</div>
                <div><strong>9. HCF(84,105):</strong> 84÷105=0R84, 105÷84=1R21, 84÷21=4R0; HCF = 21</div>
              </div>
            </div>
            `
          },
          {
            type: "html",
            html: `
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 space-y-4">
              <h3 class="font-bold text-lg text-blue-800 mb-4">Intermediate Level Solutions</h3>
              
              <div class="space-y-3">
                <div><strong>1. HCF(12,18,30):</strong> HCF(12,18)=6, HCF(6,30)=6; Answer = 6</div>
                <div><strong>2. HCF(20,25,35):</strong> HCF(20,25)=5, HCF(5,35)=5; Answer = 5</div>
                <div><strong>3. HCF(24,36,48):</strong> HCF(24,36)=12, HCF(12,48)=12; Answer = 12</div>
              </div>
              
              <div class="space-y-3">
                <div><strong>4. Garden problem:</strong> HCF(15,20)=5; Largest square bed = 5m×5m</div>
                <div><strong>5. Rope problem:</strong> HCF(18,24,30)=6; Longest equal length = 6m each</div>
                <div><strong>6. Fraction:</strong> HCF(72,96)=24; 72÷24=3, 96÷24=4; Simplified = 3/4</div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 11,
        title: "Summary and Key Points",
        blocks: [
          {
            type: "heading",
            content: "What We've Learned"
          },
          {
            type: "list",
            title: "Key Concepts",
            items: [
              "HCF is the largest number that divides all given numbers evenly.",
              "Three main methods: listing factors, prime factorization, and division method.",
              "HCF is always ≤ the smallest number, while LCM is always ≥ the largest number.",
              "HCF is essential for simplifying fractions to lowest terms.",
              "Real-world applications include tiling, packaging, and optimization problems."
            ]
          },
          {
            type: "heading",
            content: "Method Selection Guide"
          },
          {
            type: "html",
            html: `
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <div class="grid md:grid-cols-3 gap-4 text-sm">
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-blue-600 mb-2">Listing Method</h4>
                  <p>Best for: Small numbers (< 50)</p>
                  <p>Advantage: Visual and intuitive</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-green-600 mb-2">Prime Factorization</h4>
                  <p>Best for: Medium numbers (50-200)</p>
                  <p>Advantage: Shows number structure</p>
                </div>
                <div class="bg-white p-4 rounded-lg">
                  <h4 class="font-bold text-purple-600 mb-2">Division Method</h4>
                  <p>Best for: Large numbers (> 200)</p>
                  <p>Advantage: Most efficient</p>
                </div>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Next Steps"
          },
          {
            type: "paragraph",
            content:
              "Practice with different methods and numbers. Try solving real-world problems using HCF. In the next topic, we'll explore counting in twos and number patterns."
          }
        ]
      }
    ]
  }
};

export default topic;
