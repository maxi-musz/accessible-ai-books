import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "counting-in-twos",
  title: "Counting in Twos",
  order: 4,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to count in groups of twos, identify even and odd numbers, recognize patterns in skip counting, apply counting in twos to real-world situations, and demonstrate proficiency in skip counting up to 100 and beyond.",
    contents: [
      "Introduction to skip counting",
      "Counting in twos (even numbers)",
      "Number line patterns",
      "Even and odd number recognition",
      "Counting backwards by twos",
      "Real-world applications",
      "Pattern recognition and sequences",
      "Advanced skip counting techniques",
      "Problem solving with skip counting",
      "Practice and assessment"
    ],
    teacherActivities: [
      "Demonstrate skip counting using physical objects and number lines.",
      "Guide students to identify patterns in even numbers through visual representations.",
      "Facilitate group activities with counting games and challenges.",
      "Provide real-world scenarios where counting in twos is practical.",
      "Create interactive exercises for pattern recognition and sequence completion."
    ],
    studentActivities: [
      "Practice counting in twos using counters, number lines, and visual aids.",
      "Identify even and odd numbers through hands-on activities.",
      "Complete skip counting sequences and pattern recognition exercises.",
      "Apply counting in twos to solve real-world problems and scenarios.",
      "Participate in counting games and collaborative learning activities."
    ],
    materials: [
      "Counters and small objects for grouping",
      "Number lines and hundred charts",
      "Even/odd number flashcards",
      "Skip counting worksheets and games",
      "Real objects that come in pairs",
      "Interactive counting tools and apps",
      "Pattern recognition charts"
    ],
    evaluationGuide: [
      "Count correctly in groups of twos from 0 to 100",
      "Identify even and odd numbers accurately",
      "Recognize and continue skip counting patterns",
      "Apply counting in twos to solve practical problems",
      "Demonstrate understanding of number patterns and sequences"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Skip Counting",
        blocks: [
          {
            type: "intro",
            content:
              "Counting is one of the most fundamental skills in mathematics. While we usually count by ones (1, 2, 3, 4...), we can also count by other numbers like twos, fives, or tens. This is called skip counting, and it helps us recognize patterns and makes counting faster!"
          },
          { type: "heading", content: "What is Skip Counting?" },
          {
            type: "paragraph",
            content:
              "Skip counting means counting by numbers other than 1. When we count in twos, we skip every other number and count: 0, 2, 4, 6, 8, 10... This creates a pattern that helps us identify even numbers and makes counting large quantities easier."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/skip-counting-intro.svg",
            alt: "Visual representation of skip counting by 2s on a number line",
            caption: "Skip counting by 2s: jumping over every other number",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Quick Example",
            content:
              "Counting in twos from 0:\n0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20...\n\nNotice how we skip 1, 3, 5, 7, 9, etc.\nThe numbers we count (0, 2, 4, 6...) are called EVEN NUMBERS."
          }
        ]
      },
      {
        number: 2,
        title: "Counting in Twos — The Basics",
        blocks: [
          { type: "heading", content: "Starting from Zero" },
          {
            type: "paragraph",
            content:
              "When we count in twos starting from zero, we get all the even numbers. This is the most common way to learn skip counting by 2s."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/counting-twos-0-20.svg",
            alt: "Number line showing counting in twos from 0 to 20",
            caption: "Counting in twos from 0 to 20",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Practice Exercise",
            content:
              "Let's count in twos from 0 to 20:\n\n0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20\n\nNotice the pattern: each number is 2 more than the previous one."
          },
          {
            type: "heading",
            content: "Starting from One"
          },
          {
            type: "paragraph",
            content:
              "We can also count in twos starting from 1. This gives us the odd numbers: 1, 3, 5, 7, 9, 11..."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/counting-twos-1-21.svg",
            alt: "Number line showing counting in twos from 1 to 21",
            caption: "Counting in twos from 1 to 21 (odd numbers)",
            style: "inline",
            width: 960
          }
        ]
      },
      {
        number: 3,
        title: "Even and Odd Numbers",
        blocks: [
          {
            type: "heading",
            content: "Understanding Even and Odd"
          },
          {
            type: "paragraph",
            content:
              "Numbers can be classified as even or odd based on whether they can be divided evenly by 2. This classification is fundamental to understanding number patterns."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/even-odd-pattern.svg",
            alt: "Visual representation of even and odd number patterns",
            caption: "Even and odd number patterns",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-blue-800">Even Numbers</h4>
              <ul class="space-y-2 text-sm">
                <li>• Can be divided by 2 with no remainder</li>
                <li>• End in 0, 2, 4, 6, or 8</li>
                <li>• Examples: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20</li>
                <li>• Can be arranged in pairs</li>
              </ul>
            </div>
            `
          },
          {
            type: "html",
            html: `
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-green-800">Odd Numbers</h4>
              <ul class="space-y-2 text-sm">
                <li>• Cannot be divided by 2 evenly (remainder of 1)</li>
                <li>• End in 1, 3, 5, 7, or 9</li>
                <li>• Examples: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21</li>
                <li>• Cannot be arranged in complete pairs</li>
              </ul>
            </div>
            `
          },
          {
            type: "example",
            title: "Quick Test",
            content:
              "Identify whether these numbers are even or odd:\n\n8 → Even (ends in 8)\n15 → Odd (ends in 5)\n22 → Even (ends in 2)\n37 → Odd (ends in 7)\n100 → Even (ends in 0)"
          }
        ]
      },
      {
        number: 4,
        title: "Visual Patterns and Grouping",
        blocks: [
          {
            type: "heading",
            content: "Seeing the Pattern"
          },
          {
            type: "paragraph",
            content:
              "Visual representations help us understand skip counting better. We can use objects, dots, or other visual aids to see the patterns clearly."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/grouping-objects.svg",
            alt: "Visual grouping of objects in pairs to show counting by twos",
            caption: "Grouping objects in pairs helps visualize counting by twos",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Hundred Chart Pattern"
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/hundred-chart-even.svg",
            alt: "Hundred chart with even numbers highlighted",
            caption: "Even numbers on a hundred chart form a clear pattern",
            style: "inline",
            width: 800
          },
          {
            type: "note",
            title: "Pattern Recognition",
            content:
              "Notice how even numbers always appear in the same columns on a hundred chart. This visual pattern makes it easier to identify even numbers quickly."
          }
        ]
      },
      {
        number: 5,
        title: "Counting Backwards by Twos",
        blocks: [
          {
            type: "heading",
            content: "Reverse Skip Counting"
          },
          {
            type: "paragraph",
            content:
              "Just as we can count forward by twos, we can also count backwards by twos. This helps us understand the relationship between numbers and strengthens our number sense."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/counting-backwards-twos.svg",
            alt: "Number line showing counting backwards by twos",
            caption: "Counting backwards by twos from 20 to 0",
            style: "inline",
            width: 960
          },
          {
            type: "example",
            title: "Practice Backwards",
            content:
              "Count backwards by twos from 20 to 0:\n\n20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0\n\nNotice: we're subtracting 2 each time instead of adding 2."
          },
          {
            type: "example",
            title: "Starting from Odd Numbers",
            content:
              "Count backwards by twos from 19 to 1:\n\n19, 17, 15, 13, 11, 9, 7, 5, 3, 1\n\nThis gives us all the odd numbers in reverse order."
          }
        ]
      },
      {
        number: 6,
        title: "Real-World Applications",
        blocks: [
          {
            type: "heading",
            content: "Why Count in Twos?"
          },
          {
            type: "paragraph",
            content:
              "Counting in twos is very useful in everyday life. Many things come in pairs, and skip counting helps us count them quickly and accurately."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/real-world-pairs.svg",
            alt: "Real-world examples of things that come in pairs",
            caption: "Many everyday items come in pairs",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="grid md:grid-cols-2 gap-4 my-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Things that come in pairs:</h4>
                <ul class="text-sm space-y-1">
                  <li>• Shoes and socks</li>
                  <li>• Gloves and mittens</li>
                  <li>• Eyes and ears</li>
                  <li>• Hands and feet</li>
                  <li>• Wheels on a bicycle</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Counting applications:</h4>
                <ul class="text-sm space-y-1">
                  <li>• Counting pairs of shoes</li>
                  <li>• Counting people (2 legs each)</li>
                  <li>• Counting wheels on vehicles</li>
                  <li>• Counting eggs in cartons</li>
                  <li>• Counting money (coins)</li>
                </ul>
              </div>
            </div>
            `
          },
          {
            type: "example",
            title: "Real-World Problem",
            content:
              "Sarah has 8 pairs of shoes. How many individual shoes does she have?\n\nSolution: 8 pairs × 2 shoes per pair = 16 shoes\n\nWe can count: 2, 4, 6, 8, 10, 12, 14, 16"
          }
        ]
      },
      {
        number: 7,
        title: "Pattern Recognition and Sequences",
        blocks: [
          {
            type: "heading",
            content: "Finding Patterns"
          },
          {
            type: "paragraph",
            content:
              "Skip counting helps us recognize and understand number patterns. This skill is important for more advanced mathematics and problem-solving."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/pattern-sequences.svg",
            alt: "Various number patterns and sequences using skip counting",
            caption: "Different patterns and sequences using skip counting",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Pattern Recognition",
            content:
              "Complete these patterns:\n\n1. 2, 4, 6, 8, __, __, __\nAnswer: 10, 12, 14 (counting by 2s)\n\n2. 0, 2, 4, 6, __, __, __\nAnswer: 8, 10, 12 (even numbers)\n\n3. 1, 3, 5, 7, __, __, __\nAnswer: 9, 11, 13 (odd numbers)"
          },
          {
            type: "heading",
            content: "Missing Numbers"
          },
          {
            type: "paragraph",
            content:
              "Sometimes we need to find missing numbers in a sequence. Skip counting helps us identify what number should come next or what number is missing."
          }
        ]
      },
      {
        number: 8,
        title: "Advanced Skip Counting Techniques",
        blocks: [
          {
            type: "heading",
            content: "Counting Larger Numbers"
          },
          {
            type: "paragraph",
            content:
              "Once we master counting in twos with smaller numbers, we can apply the same techniques to larger numbers and more complex situations."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-4/advanced-counting.svg",
            alt: "Advanced skip counting techniques for larger numbers",
            caption: "Advanced skip counting with larger numbers",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Counting by Twos from Different Starting Points",
            content:
              "Count by twos starting from:\n\n• 10: 10, 12, 14, 16, 18, 20, 22...\n• 25: 25, 27, 29, 31, 33, 35...\n• 50: 50, 52, 54, 56, 58, 60...\n• 100: 100, 102, 104, 106, 108, 110..."
          },
          {
            type: "heading",
            content: "Counting in Steps"
          },
          {
            type: "paragraph",
            content:
              "We can also count by twos in different ways, such as counting every second number or using mental math strategies."
          }
        ]
      },
      {
        number: 9,
        title: "Practice Problems and Games",
        blocks: [
          { type: "heading", content: "Basic Practice" },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Complete the sequences:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>0, 2, 4, 6, __, __, __, __, __</li>
                  <li>1, 3, 5, 7, __, __, __, __, __</li>
                  <li>10, 12, 14, 16, __, __, __, __, __</li>
                  <li>25, 27, 29, 31, __, __, __, __, __</li>
                </ol>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Count backwards by twos:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>From 20 to 0</li>
                  <li>From 30 to 10</li>
                  <li>From 15 to 1</li>
                  <li>From 50 to 30</li>
                </ol>
              </div>
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Word problems:</h4>
                <ol class="list-decimal list-inside space-y-1">
                  <li>Tom has 6 pairs of socks. How many individual socks?</li>
                  <li>A classroom has 12 desks. How many students can sit if 2 sit at each desk?</li>
                  <li>Sarah counts by twos: 2, 4, 6, 8, 10. What number comes next?</li>
                  <li>How many even numbers are there between 10 and 20?</li>
                </ol>
              </div>
            </div>
            `
          },
          { type: "heading", content: "Interactive Games" },
          {
            type: "html",
            html: `
            <div class="bg-purple-50 p-4 rounded-lg">
              <h4 class="font-bold mb-2">Counting Games:</h4>
              <ul class="space-y-2 text-sm">
                <li><strong>Number Line Jump:</strong> Jump along a number line counting by twos</li>
                <li><strong>Pair Matching:</strong> Match objects in pairs and count them</li>
                <li><strong>Even/Odd Sort:</strong> Sort numbers into even and odd groups</li>
                <li><strong>Skip Counting Race:</strong> See how fast you can count by twos</li>
              </ul>
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
              <h3 class="font-bold text-lg text-green-800 mb-4">Practice Solutions</h3>
              
              <div class="space-y-3">
                <div><strong>1. Complete the sequences:</strong></div>
                <div>• 0, 2, 4, 6, 8, 10, 12, 14, 16</div>
                <div>• 1, 3, 5, 7, 9, 11, 13, 15, 17</div>
                <div>• 10, 12, 14, 16, 18, 20, 22, 24, 26</div>
                <div>• 25, 27, 29, 31, 33, 35, 37, 39, 41</div>
              </div>
              
              <div class="space-y-3">
                <div><strong>2. Count backwards by twos:</strong></div>
                <div>• 20, 18, 16, 14, 12, 10, 8, 6, 4, 2, 0</div>
                <div>• 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10</div>
                <div>• 15, 13, 11, 9, 7, 5, 3, 1</div>
                <div>• 50, 48, 46, 44, 42, 40, 38, 36, 34, 32, 30</div>
              </div>
              
              <div class="space-y-3">
                <div><strong>3. Word problems:</strong></div>
                <div>• 6 pairs × 2 = 12 individual socks</div>
                <div>• 12 desks ÷ 2 = 6 students (or 12 ÷ 2 = 6)</div>
                <div>• Next number after 10 is 12</div>
                <div>• Even numbers between 10 and 20: 12, 14, 16, 18 (4 numbers)</div>
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
              "Skip counting by twos means counting every second number.",
              "Even numbers (0, 2, 4, 6, 8...) can be divided by 2 evenly.",
              "Odd numbers (1, 3, 5, 7, 9...) cannot be divided by 2 evenly.",
              "Counting in twos helps us count pairs and groups quickly.",
              "Visual patterns help us recognize even and odd numbers."
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
                  <h4 class="font-bold text-blue-600 mb-2">Counting Skills</h4>
                  <ul class="space-y-1">
                    <li>• Skip counting by twos</li>
                    <li>• Counting forwards and backwards</li>
                    <li>• Pattern recognition</li>
                    <li>• Number sequence completion</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-green-600 mb-2">Problem Solving</h4>
                  <ul class="space-y-1">
                    <li>• Real-world applications</li>
                    <li>• Pair counting strategies</li>
                    <li>• Mental math techniques</li>
                    <li>• Pattern analysis</li>
                  </ul>
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
              "Practice counting in twos regularly to build fluency. Try counting by other numbers like fives and tens. In the next topic, we'll explore binary conversion and how computers use counting systems."
          }
        ]
      }
    ]
  }
};

export default topic;
