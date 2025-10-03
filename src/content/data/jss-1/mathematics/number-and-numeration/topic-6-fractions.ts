import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "fractions",
  title: "Fractions",
  order: 6,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to identify and represent fractions, understand numerator and denominator, compare and order fractions, find equivalent fractions, convert between improper fractions and mixed numbers, perform basic fraction operations, and apply fractions in real-life situations.",
    contents: [
      "Introduction to fractions and basic concepts",
      "Understanding numerator and denominator",
      "Types of fractions (proper, improper, mixed)",
      "Visual representation of fractions",
      "Equivalent fractions and simplification",
      "Comparing and ordering fractions",
      "Converting between improper fractions and mixed numbers",
      "Fraction operations (addition and subtraction)",
      "Real-life applications of fractions",
      "Problem solving with fractions"
    ],
    teacherActivities: [
      "Introduce fractions using visual models like fraction bars, circles, and number lines.",
      "Demonstrate different types of fractions with hands-on activities and real objects.",
      "Guide students to identify equivalent fractions through visual and numerical methods.",
      "Show how to compare fractions using common denominators and cross-multiplication.",
      "Teach conversion between improper fractions and mixed numbers with step-by-step examples.",
      "Provide real-life contexts for using fractions in cooking, measuring, and sharing scenarios."
    ],
    studentActivities: [
      "Identify and write fractions using diagrams, real objects, and everyday situations.",
      "Practice representing fractions visually using fraction bars, circles, and number lines.",
      "Find equivalent fractions by multiplying or dividing numerator and denominator.",
      "Compare fractions with same and different denominators using various methods.",
      "Convert improper fractions to mixed numbers and vice versa through practice exercises.",
      "Solve word problems involving fractions in daily life contexts and group activities."
    ],
    materials: [
      "Fraction bars, strips, and circles for visual representation",
      "Number lines and fraction number lines",
      "Real objects for sharing activities (oranges, paper, pizza slices)",
      "Fraction cards and manipulatives for hands-on learning",
      "Worksheets with fraction exercises and word problems",
      "Visual fraction models and interactive tools",
      "Cooking and measuring tools for real-life applications"
    ],
    evaluationGuide: [
      "Identify and write fractions correctly with proper numerator and denominator",
      "Distinguish between proper fractions, improper fractions, and mixed numbers",
      "Find equivalent fractions using multiplication and division",
      "Compare and order fractions using appropriate methods",
      "Convert between improper fractions and mixed numbers accurately",
      "Solve real-life problems involving fractions with clear explanations"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Fractions",
        blocks: [
          {
            type: "intro",
            content:
              "Welcome to Fractions! In this topic, we'll learn how to represent parts of a whole and use fractions in everyday life. Fractions help us describe situations where we have less than a complete whole."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-introduction.svg",
            alt: "Visual introduction to fractions showing parts of a whole",
            caption: "Fractions represent parts of a whole",
            style: "inline",
            width: 800
          },
          { type: "heading", content: "What is a Fraction?" },
          {
            type: "paragraph",
            content:
              "A fraction represents a part of a whole. It has two parts: the numerator (top number) tells us how many parts we have, and the denominator (bottom number) tells us how many equal parts the whole is divided into."
          },
          {
            type: "html",
            html: `
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-blue-800">Parts of a Fraction</h4>
              <div class="text-center">
                <div class="text-2xl font-bold mb-2">3</div>
                <div class="text-sm text-gray-600 mb-2">Numerator (how many parts we have)</div>
                <div class="border-t-2 border-gray-400 w-16 mx-auto mb-2"></div>
                <div class="text-2xl font-bold mb-2">4</div>
                <div class="text-sm text-gray-600">Denominator (how many equal parts the whole is divided into)</div>
              </div>
            </div>
            `
          },
          {
            type: "example",
            title: "Real-Life Example",
            content:
              "If you cut a pizza into 8 equal slices and eat 3 slices:\n\nNumerator = 3 (slices you ate)\nDenominator = 8 (total slices)\nFraction = 3/8\n\nWe say 'three-eighths' of the pizza was eaten."
          }
        ]
      },
      {
        number: 2,
        title: "Types of Fractions",
        blocks: [
          {
            type: "heading",
            content: "Understanding Different Types of Fractions"
          },
          {
            type: "paragraph",
            content:
              "Fractions can be classified into different types based on the relationship between the numerator and denominator. Understanding these types helps us work with fractions more effectively."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-types.svg",
            alt: "Visual representation of different types of fractions",
            caption: "Different types of fractions: proper, improper, and mixed numbers",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6">
                <h4 class="font-bold text-lg mb-4 text-green-800">1. Proper Fractions</h4>
                <div class="space-y-2">
                  <div class="text-sm">• Numerator is less than denominator</div>
                  <div class="text-sm">• Value is less than 1</div>
                  <div class="text-sm">• Examples: 1/2, 3/4, 2/5, 7/8</div>
                </div>
              </div>
              
              <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6">
                <h4 class="font-bold text-lg mb-4 text-yellow-800">2. Improper Fractions</h4>
                <div class="space-y-2">
                  <div class="text-sm">• Numerator is greater than or equal to denominator</div>
                  <div class="text-sm">• Value is greater than or equal to 1</div>
                  <div class="text-sm">• Examples: 5/3, 7/4, 9/2, 12/5</div>
                </div>
              </div>
              
              <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6">
                <h4 class="font-bold text-lg mb-4 text-purple-800">3. Mixed Numbers</h4>
                <div class="space-y-2">
                  <div class="text-sm">• Combination of a whole number and a proper fraction</div>
                  <div class="text-sm">• Value is greater than 1</div>
                  <div class="text-sm">• Examples: 1½, 2¾, 3⅔, 4⅛</div>
                </div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 3,
        title: "Visual Representation of Fractions",
        blocks: [
          {
            type: "heading",
            content: "Using Visual Models"
          },
          {
            type: "paragraph",
            content:
              "Visual models help us understand fractions better. We can use fraction bars, circles, number lines, and other shapes to represent fractions visually."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-models.svg",
            alt: "Different visual models for representing fractions",
            caption: "Various visual models for representing fractions",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Fraction Bars"
          },
          {
            type: "paragraph",
            content:
              "Fraction bars are rectangular strips divided into equal parts. They help us see the relationship between different fractions and compare their sizes."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-bars.svg",
            alt: "Fraction bars showing different fractions",
            caption: "Fraction bars for comparing different fractions",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Number Line Representation"
          },
          {
            type: "paragraph",
            content:
              "Number lines help us see where fractions are located between whole numbers. This is especially useful for comparing fractions and understanding their relative sizes."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fraction-number-line.svg",
            alt: "Number line showing fractions from 0 to 2",
            caption: "Fractions on a number line from 0 to 2",
            style: "inline",
            width: 800
          }
        ]
      },
      {
        number: 4,
        title: "Equivalent Fractions",
        blocks: [
          {
            type: "heading",
            content: "What are Equivalent Fractions?"
          },
          {
            type: "paragraph",
            content:
              "Equivalent fractions are different fractions that represent the same value. They have different numerators and denominators but are equal in size."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/equivalent-fractions.svg",
            alt: "Visual representation of equivalent fractions",
            caption: "Equivalent fractions represent the same portion of a whole",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Finding Equivalent Fractions"
          },
          {
            type: "paragraph",
            content:
              "To find equivalent fractions, we can multiply or divide both the numerator and denominator by the same non-zero number."
          },
          {
            type: "example",
            title: "Example: Finding Equivalent Fractions",
            content:
              "Find fractions equivalent to 1/2:\n\n1/2 = 2/4 (multiply by 2)\n1/2 = 3/6 (multiply by 3)\n1/2 = 4/8 (multiply by 4)\n1/2 = 5/10 (multiply by 5)\n\nAll these fractions represent the same value: half of a whole."
          },
          {
            type: "heading",
            content: "Simplifying Fractions"
          },
          {
            type: "paragraph",
            content:
              "Simplifying fractions means finding the equivalent fraction with the smallest possible numerator and denominator. We do this by dividing both numbers by their greatest common factor."
          },
          {
            type: "example",
            title: "Example: Simplifying Fractions",
            content:
              "Simplify 6/8:\n\nFind the GCF of 6 and 8: GCF = 2\nDivide both numerator and denominator by 2:\n6 ÷ 2 = 3\n8 ÷ 2 = 4\n\nSo, 6/8 = 3/4"
          }
        ]
      },
      {
        number: 5,
        title: "Comparing and Ordering Fractions",
        blocks: [
          {
            type: "heading",
            content: "Comparing Fractions"
          },
          {
            type: "paragraph",
            content:
              "To compare fractions, we need to determine which fraction is larger, smaller, or if they are equal. There are several methods we can use depending on the fractions we're comparing."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/comparing-fractions.svg",
            alt: "Methods for comparing fractions visually",
            caption: "Visual methods for comparing fractions",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Method 1: Same Denominator"
          },
          {
            type: "paragraph",
            content:
              "When fractions have the same denominator, the fraction with the larger numerator is greater."
          },
          {
            type: "example",
            title: "Example: Same Denominator",
            content:
              "Compare 3/7 and 5/7:\n\nBoth have denominator 7\n3 < 5\nTherefore, 3/7 < 5/7\n\nWe can also say: 5/7 > 3/7"
          },
          {
            type: "heading",
            content: "Method 2: Same Numerator"
          },
          {
            type: "paragraph",
            content:
              "When fractions have the same numerator, the fraction with the smaller denominator is greater."
          },
          {
            type: "example",
            title: "Example: Same Numerator",
            content:
              "Compare 2/3 and 2/5:\n\nBoth have numerator 2\n3 < 5 (smaller denominator)\nTherefore, 2/3 > 2/5"
          },
          {
            type: "heading",
            content: "Method 3: Cross Multiplication"
          },
          {
            type: "paragraph",
            content:
              "For fractions with different numerators and denominators, we can use cross multiplication to compare them."
          },
          {
            type: "example",
            title: "Example: Cross Multiplication",
            content:
              "Compare 3/4 and 5/6:\n\nCross multiply: 3 × 6 = 18 and 4 × 5 = 20\nSince 18 < 20, we have 3/4 < 5/6"
          }
        ]
      },
      {
        number: 6,
        title: "Converting Between Improper Fractions and Mixed Numbers",
        blocks: [
          {
            type: "heading",
            content: "Improper Fractions to Mixed Numbers"
          },
          {
            type: "paragraph",
            content:
              "To convert an improper fraction to a mixed number, we divide the numerator by the denominator. The quotient becomes the whole number, and the remainder becomes the numerator of the proper fraction."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/improper-to-mixed.svg",
            alt: "Converting improper fractions to mixed numbers",
            caption: "Step-by-step conversion from improper to mixed numbers",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Example: Improper to Mixed",
            content:
              "Convert 7/3 to a mixed number:\n\n7 ÷ 3 = 2 remainder 1\nWhole number = 2\nRemainder = 1\nDenominator stays the same = 3\n\nSo, 7/3 = 2⅓"
          },
          {
            type: "heading",
            content: "Mixed Numbers to Improper Fractions"
          },
          {
            type: "paragraph",
            content:
              "To convert a mixed number to an improper fraction, we multiply the whole number by the denominator, add the numerator, and place the result over the original denominator."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/mixed-to-improper.svg",
            alt: "Converting mixed numbers to improper fractions",
            caption: "Step-by-step conversion from mixed to improper fractions",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Example: Mixed to Improper",
            content:
              "Convert 2⅓ to an improper fraction:\n\nWhole number = 2, Fraction = 1/3\nMultiply: 2 × 3 = 6\nAdd numerator: 6 + 1 = 7\nDenominator stays the same = 3\n\nSo, 2⅓ = 7/3"
          }
        ]
      },
      {
        number: 7,
        title: "Adding and Subtracting Fractions",
        blocks: [
          {
            type: "heading",
            content: "Adding Fractions with Same Denominator"
          },
          {
            type: "paragraph",
            content:
              "When adding fractions with the same denominator, we add the numerators and keep the denominator the same."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/adding-fractions-same-denominator.svg",
            alt: "Adding fractions with the same denominator",
            caption: "Visual representation of adding fractions with same denominator",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Example: Adding Same Denominator",
            content:
              "Add 2/5 + 1/5:\n\nNumerators: 2 + 1 = 3\nDenominator stays: 5\n\nSo, 2/5 + 1/5 = 3/5"
          },
          {
            type: "heading",
            content: "Adding Fractions with Different Denominators"
          },
          {
            type: "paragraph",
            content:
              "When adding fractions with different denominators, we first find a common denominator, then convert each fraction to an equivalent fraction with that denominator."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/adding-fractions-different-denominators.svg",
            alt: "Adding fractions with different denominators",
            caption: "Finding common denominators for adding fractions",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Example: Adding Different Denominators",
            content:
              "Add 1/3 + 1/4:\n\nFind common denominator: 3 × 4 = 12\nConvert: 1/3 = 4/12, 1/4 = 3/12\nAdd: 4/12 + 3/12 = 7/12\n\nSo, 1/3 + 1/4 = 7/12"
          },
          {
            type: "heading",
            content: "Subtracting Fractions"
          },
          {
            type: "paragraph",
            content:
              "Subtracting fractions follows the same rules as adding fractions. We subtract numerators when denominators are the same, or find common denominators when they're different."
          },
          {
            type: "example",
            title: "Example: Subtracting Fractions",
            content:
              "Subtract 5/6 - 2/6:\n\nNumerators: 5 - 2 = 3\nDenominator stays: 6\n\nSo, 5/6 - 2/6 = 3/6 = 1/2 (simplified)"
          }
        ]
      },
      {
        number: 8,
        title: "Real-Life Applications of Fractions",
        blocks: [
          {
            type: "heading",
            content: "Fractions in Daily Life"
          },
          {
            type: "paragraph",
            content:
              "Fractions are used in many everyday situations. Understanding fractions helps us in cooking, measuring, shopping, sports, and many other activities."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-6/fractions-real-life.svg",
            alt: "Real-life applications of fractions",
            caption: "Common uses of fractions in daily life",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="grid md:grid-cols-2 gap-4 my-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-blue-800">Cooking and Baking</h4>
                <ul class="text-sm space-y-1">
                  <li>• Recipe measurements: 1/2 cup flour</li>
                  <li>• Cooking times: 1/4 hour = 15 minutes</li>
                  <li>• Portion sizes: 1/3 of a cake</li>
                  <li>• Temperature settings: 3/4 power</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-green-800">Shopping and Money</h4>
                <ul class="text-sm space-y-1">
                  <li>• Discounts: 1/4 off = 25% off</li>
                  <li>• Sales: 1/2 price = 50% off</li>
                  <li>• Tax calculations</li>
                  <li>• Unit prices per fraction</li>
                </ul>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-yellow-800">Sports and Games</h4>
                <ul class="text-sm space-y-1">
                  <li>• Game scores: 3/4 of the way</li>
                  <li>• Time remaining: 1/2 time</li>
                  <li>• Team statistics</li>
                  <li>• Probability in games</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-purple-800">Measurements</h4>
                <ul class="text-sm space-y-1">
                  <li>• Ruler markings: 1/2 inch</li>
                  <li>• Construction: 3/4 inch pipe</li>
                  <li>• Fabric: 1/4 yard</li>
                  <li>• Distance: 1/2 mile</li>
                </ul>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Word Problems with Fractions"
          },
          {
            type: "example",
            title: "Example: Sharing Pizza",
            content:
              "A pizza is cut into 8 equal slices. Sarah eats 3 slices, and Tom eats 2 slices. What fraction of the pizza did they eat together?\n\nSarah ate: 3/8\nTom ate: 2/8\nTotal eaten: 3/8 + 2/8 = 5/8\n\nThey ate 5/8 of the pizza together."
          }
        ]
      },
      {
        number: 9,
        title: "Practice Problems and Exercises",
        blocks: [
          { type: "heading", content: "Basic Fraction Practice" },
          {
            type: "html",
            html: `
            <div class="space-y-6">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-blue-800">Identifying Fractions</h4>
                <div class="space-y-3">
                  <div class="text-sm">1. What fraction of the circle is shaded?</div>
                  <div class="text-sm">2. Write the fraction for 3 out of 7 equal parts</div>
                  <div class="text-sm">3. Express 5 shaded parts out of 8 total parts as a fraction</div>
                  <div class="text-sm">4. What fraction represents 2 hours out of a 24-hour day?</div>
                </div>
              </div>
              
              <div class="bg-green-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-green-800">Types of Fractions</h4>
                <div class="space-y-3">
                  <div class="text-sm">1. Classify these fractions as proper, improper, or mixed:</div>
                  <div class="text-sm ml-4">• 3/4, 7/3, 2½, 5/6, 9/2, 1⅓</div>
                  <div class="text-sm">2. Convert 8/3 to a mixed number</div>
                  <div class="text-sm">3. Convert 3⅔ to an improper fraction</div>
                  <div class="text-sm">4. Which is larger: 4/7 or 5/7?</div>
                </div>
              </div>
              
              <div class="bg-yellow-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-yellow-800">Equivalent Fractions</h4>
                <div class="space-y-3">
                  <div class="text-sm">1. Find 3 fractions equivalent to 2/3</div>
                  <div class="text-sm">2. Simplify 12/18 to its lowest terms</div>
                  <div class="text-sm">3. Are 3/4 and 9/12 equivalent? Show your work</div>
                  <div class="text-sm">4. Find the missing number: 2/5 = ?/15</div>
                </div>
              </div>
              
              <div class="bg-purple-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-purple-800">Adding and Subtracting</h4>
                <div class="space-y-3">
                  <div class="text-sm">1. 2/7 + 3/7 = ?</div>
                  <div class="text-sm">2. 5/8 - 2/8 = ?</div>
                  <div class="text-sm">3. 1/3 + 1/4 = ?</div>
                  <div class="text-sm">4. 3/4 - 1/6 = ?</div>
                </div>
              </div>
            </div>
            `
          },
          { type: "heading", content: "Word Problems" },
          {
            type: "html",
            html: `
            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-bold mb-4 text-orange-800">Real-World Problems</h4>
              <div class="space-y-3 text-sm">
                <div><strong>1. Pizza Party:</strong> A pizza is cut into 12 slices. John eats 4 slices, Mary eats 3 slices, and Sam eats 2 slices. What fraction of the pizza is left?</div>
                <div><strong>2. Recipe Doubling:</strong> A recipe calls for 1/2 cup of sugar. If you want to make 3 times the recipe, how much sugar do you need?</div>
                <div><strong>3. Distance Walked:</strong> Sarah walked 2/5 of a mile to school and 1/4 of a mile to the store. How much farther did she walk to school than to the store?</div>
                <div><strong>4. Time Spent:</strong> Tom spent 1/3 of his day sleeping and 1/4 of his day studying. What fraction of his day was left for other activities?</div>
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
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 space-y-6">
              <h3 class="font-bold text-lg text-green-800 mb-4">Practice Solutions</h3>
              
              <div class="space-y-4">
                <div>
                  <h4 class="font-bold mb-2">Identifying Fractions:</h4>
                  <div class="space-y-2 text-sm">
                    <div>1. Depends on the diagram - count shaded parts/total parts</div>
                    <div>2. 3/7</div>
                    <div>3. 5/8</div>
                    <div>4. 2/24 = 1/12 (simplified)</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Types of Fractions:</h4>
                  <div class="space-y-2 text-sm">
                    <div>• 3/4 = proper, 7/3 = improper, 2½ = mixed, 5/6 = proper, 9/2 = improper, 1⅓ = mixed</div>
                    <div>• 8/3 = 2⅔ (8 ÷ 3 = 2 remainder 2)</div>
                    <div>• 3⅔ = 11/3 (3 × 3 + 2 = 11)</div>
                    <div>• 5/7 > 4/7 (same denominator, larger numerator)</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Equivalent Fractions:</h4>
                  <div class="space-y-2 text-sm">
                    <div>• 2/3 = 4/6, 6/9, 8/12 (multiply by 2, 3, 4)</div>
                    <div>• 12/18 = 2/3 (divide by 6, GCF of 12 and 18)</div>
                    <div>• Yes, 3/4 = 9/12 (3 × 3 = 9, 4 × 3 = 12)</div>
                    <div>• 2/5 = 6/15 (2 × 3 = 6, 5 × 3 = 15)</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Adding and Subtracting:</h4>
                  <div class="space-y-2 text-sm">
                    <div>• 2/7 + 3/7 = 5/7</div>
                    <div>• 5/8 - 2/8 = 3/8</div>
                    <div>• 1/3 + 1/4 = 4/12 + 3/12 = 7/12</div>
                    <div>• 3/4 - 1/6 = 9/12 - 2/12 = 7/12</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Word Problems:</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>1. Pizza:</strong> 4 + 3 + 2 = 9 slices eaten, 12 - 9 = 3 left, so 3/12 = 1/4 left</div>
                    <div><strong>2. Recipe:</strong> 1/2 × 3 = 3/2 = 1½ cups of sugar</div>
                    <div><strong>3. Distance:</strong> 2/5 - 1/4 = 8/20 - 5/20 = 3/20 mile farther to school</div>
                    <div><strong>4. Time:</strong> 1 - (1/3 + 1/4) = 1 - (4/12 + 3/12) = 1 - 7/12 = 5/12 of day left</div>
                  </div>
                </div>
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
              "Fractions represent parts of a whole with numerator and denominator",
              "Proper fractions have numerator less than denominator",
              "Improper fractions have numerator greater than or equal to denominator",
              "Mixed numbers combine whole numbers with proper fractions",
              "Equivalent fractions represent the same value",
              "We can compare fractions using various methods",
              "Fractions are used extensively in real-life situations"
            ]
          },
          {
            type: "heading",
            content: "Skills Developed"
          },
          {
            type: "html",
            html: `
            <div class="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl">
              <div class="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 class="font-bold text-blue-600 mb-2">Mathematical Skills</h4>
                  <ul class="space-y-1">
                    <li>• Fraction identification and representation</li>
                    <li>• Converting between fraction types</li>
                    <li>• Finding equivalent fractions</li>
                    <li>• Comparing and ordering fractions</li>
                    <li>• Basic fraction operations</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-green-600 mb-2">Problem Solving</h4>
                  <ul class="space-y-1">
                    <li>• Real-world application skills</li>
                    <li>• Visual representation techniques</li>
                    <li>• Logical reasoning with fractions</li>
                    <li>• Word problem solving</li>
                    <li>• Critical thinking development</li>
                  </ul>
                </div>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Real-World Importance"
          },
          {
            type: "paragraph",
            content:
              "Fractions are essential in many areas of life including cooking, construction, science, finance, and sports. Understanding fractions helps us make better decisions, solve problems, and communicate effectively about parts and wholes."
          },
          {
            type: "heading",
            content: "Next Steps"
          },
          {
            type: "paragraph",
            content:
              "Continue practicing with fractions to build fluency. Explore decimal fractions and percentages, which are closely related to fractions. In the next chapter, we'll explore algebraic processes and how they build upon the number concepts we've learned."
          }
        ]
      }
    ]
  }
};

export default topic;
