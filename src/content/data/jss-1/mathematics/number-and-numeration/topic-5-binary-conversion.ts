import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "binary-conversion",
  title: "Conversion of Base-ten Numerals to Binary Numbers",
  order: 5,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to convert base-ten numerals to binary numbers, understand the binary number system, explain place values in binary, perform binary arithmetic operations, and apply binary concepts to computer technology and digital systems.",
    contents: [
      "Introduction to number systems",
      "Understanding binary (base-2) system",
      "Decimal (base-10) number system review",
      "Binary place values and powers of 2",
      "Converting decimal to binary using division method",
      "Converting binary to decimal using place values",
      "Binary addition and subtraction",
      "Applications in computer technology",
      "Binary patterns and sequences",
      "Practice problems and real-world examples"
    ],
    teacherActivities: [
      "Demonstrate different number systems using visual aids and interactive tools.",
      "Guide students through step-by-step binary conversion processes.",
      "Use computer simulations to show how binary works in digital systems.",
      "Facilitate hands-on activities with binary cards and conversion charts.",
      "Provide real-world examples of binary usage in technology and computing."
    ],
    studentActivities: [
      "Practice converting decimal numbers to binary using the division method.",
      "Convert binary numbers back to decimal using place value concepts.",
      "Complete binary arithmetic operations and pattern recognition exercises.",
      "Explore binary applications in computer science and digital technology.",
      "Participate in interactive binary games and conversion challenges."
    ],
    materials: [
      "Binary conversion charts and place value tables",
      "Interactive binary calculators and conversion tools",
      "Computer or tablet for digital demonstrations",
      "Binary cards and manipulatives for hands-on learning",
      "Worksheets with conversion exercises and practice problems",
      "Videos and animations showing binary concepts",
      "Real-world examples of binary usage in technology"
    ],
    evaluationGuide: [
      "Convert decimal numbers to binary using the division method",
      "Convert binary numbers to decimal using place values",
      "Perform basic binary arithmetic operations",
      "Explain the binary number system and its applications",
      "Identify patterns in binary sequences and number representations"
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Number Systems",
        blocks: [
          {
            type: "intro",
            content:
              "Welcome to Binary Numbers! In this topic, we'll explore the fascinating world of number systems, particularly the binary system that powers all modern computers and digital technology."
          },
          { type: "heading", content: "What is a Number System?" },
          {
            type: "paragraph",
            content:
              "A number system is a way of representing numbers using a specific set of symbols and rules. The most common number system we use is decimal (base-10), which uses ten digits: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/number-systems-comparison.svg",
            alt: "Comparison of different number systems",
            caption: "Different number systems use different bases and symbols",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Why Learn Binary?"
          },
          {
            type: "paragraph",
            content:
              "Binary (base-2) is the language of computers! Every piece of data in a computer - numbers, letters, pictures, videos, music - is stored and processed using only two digits: 0 and 1. Understanding binary helps us understand how computers work."
          },
          {
            type: "example",
            title: "Quick Example",
            content:
              "Decimal: 5\nBinary: 101\n\nBoth represent the same quantity, but in different number systems!"
          }
        ]
      },
      {
        number: 2,
        title: "Understanding Binary (Base-2) System",
        blocks: [
          {
            type: "heading",
            content: "What is Binary?"
          },
          {
            type: "paragraph",
            content:
              "Binary is a number system that uses only two digits: 0 and 1. It's called base-2 because it's based on powers of 2. Each position in a binary number represents a different power of 2."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/binary-basics.svg",
            alt: "Basic concepts of binary number system",
            caption: "Binary uses only 0s and 1s, representing ON and OFF states",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="bg-blue-50 border-2 border-blue-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-blue-800">Binary Digits (Bits)</h4>
              <ul class="space-y-2 text-sm">
                <li>• <strong>0</strong> = OFF (no electrical signal)</li>
                <li>• <strong>1</strong> = ON (electrical signal present)</li>
                <li>• Each 0 or 1 is called a <strong>bit</strong></li>
                <li>• 8 bits = 1 <strong>byte</strong></li>
                <li>• Computers process millions of bits every second!</li>
              </ul>
            </div>
            `
          },
          {
            type: "heading",
            content: "Binary vs Decimal"
          },
          {
            type: "html",
            html: `
            <div class="grid md:grid-cols-2 gap-4 my-6">
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-green-800">Decimal (Base-10)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Uses 10 digits: 0-9</li>
                  <li>• Based on powers of 10</li>
                  <li>• Place values: 1, 10, 100, 1000...</li>
                  <li>• Example: 123 = 1×100 + 2×10 + 3×1</li>
                </ul>
              </div>
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-purple-800">Binary (Base-2)</h4>
                <ul class="text-sm space-y-1">
                  <li>• Uses 2 digits: 0, 1</li>
                  <li>• Based on powers of 2</li>
                  <li>• Place values: 1, 2, 4, 8, 16...</li>
                  <li>• Example: 101 = 1×4 + 0×2 + 1×1 = 5</li>
                </ul>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 3,
        title: "Binary Place Values and Powers of 2",
        blocks: [
          {
            type: "heading",
            content: "Understanding Binary Place Values"
          },
          {
            type: "paragraph",
            content:
              "Just like decimal numbers have place values (ones, tens, hundreds), binary numbers have place values based on powers of 2. Each position represents a different power of 2."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/binary-place-values.svg",
            alt: "Binary place values and powers of 2",
            caption: "Binary place values increase by powers of 2",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Powers of 2"
          },
          {
            type: "html",
            html: `
            <div class="bg-yellow-50 border-2 border-yellow-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-yellow-800">Powers of 2 Table</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div class="text-center">
                  <div class="font-bold">2⁰ = 1</div>
                  <div class="text-gray-600">(ones place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2¹ = 2</div>
                  <div class="text-gray-600">(twos place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2² = 4</div>
                  <div class="text-gray-600">(fours place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2³ = 8</div>
                  <div class="text-gray-600">(eights place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2⁴ = 16</div>
                  <div class="text-gray-600">(sixteens place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2⁵ = 32</div>
                  <div class="text-gray-600">(thirty-twos place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2⁶ = 64</div>
                  <div class="text-gray-600">(sixty-fours place)</div>
                </div>
                <div class="text-center">
                  <div class="font-bold">2⁷ = 128</div>
                  <div class="text-gray-600">(one hundred twenty-eights place)</div>
                </div>
              </div>
            </div>
            `
          },
          {
            type: "example",
            title: "Reading Binary Numbers",
            content:
              "Let's read the binary number 1011:\n\nPosition: 3 2 1 0\nBinary:   1 0 1 1\nValue:    8 4 2 1\n\nCalculation: 1×8 + 0×4 + 1×2 + 1×1 = 8 + 0 + 2 + 1 = 11\n\nSo, 1011 in binary = 11 in decimal"
          }
        ]
      },
      {
        number: 4,
        title: "Converting Decimal to Binary",
        blocks: [
          {
            type: "heading",
            content: "The Division Method"
          },
          {
            type: "paragraph",
            content:
              "To convert a decimal number to binary, we use the division method. We repeatedly divide the decimal number by 2 and keep track of the remainders. The binary number is the remainders read from bottom to top."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/decimal-to-binary-method.svg",
            alt: "Step-by-step decimal to binary conversion method",
            caption: "Division method for converting decimal to binary",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Step-by-Step Example: Convert 13 to Binary",
            content:
              "Step 1: 13 ÷ 2 = 6 remainder 1\nStep 2: 6 ÷ 2 = 3 remainder 0\nStep 3: 3 ÷ 2 = 1 remainder 1\nStep 4: 1 ÷ 2 = 0 remainder 1\n\nRead remainders from bottom to top: 1101\n\nSo, 13 in decimal = 1101 in binary"
          },
          {
            type: "heading",
            content: "Practice Examples"
          },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Convert 5 to Binary:</h4>
                <div class="text-sm space-y-1">
                  <div>5 ÷ 2 = 2 remainder 1</div>
                  <div>2 ÷ 2 = 1 remainder 0</div>
                  <div>1 ÷ 2 = 0 remainder 1</div>
                  <div class="font-bold">Answer: 101</div>
                </div>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Convert 8 to Binary:</h4>
                <div class="text-sm space-y-1">
                  <div>8 ÷ 2 = 4 remainder 0</div>
                  <div>4 ÷ 2 = 2 remainder 0</div>
                  <div>2 ÷ 2 = 1 remainder 0</div>
                  <div>1 ÷ 2 = 0 remainder 1</div>
                  <div class="font-bold">Answer: 1000</div>
                </div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 5,
        title: "Converting Binary to Decimal",
        blocks: [
          {
            type: "heading",
            content: "Using Place Values"
          },
          {
            type: "paragraph",
            content:
              "To convert binary to decimal, we multiply each binary digit by its corresponding place value (power of 2) and add the results together."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/binary-to-decimal-method.svg",
            alt: "Step-by-step binary to decimal conversion method",
            caption: "Place value method for converting binary to decimal",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Step-by-Step Example: Convert 1101 to Decimal",
            content:
              "Binary: 1 1 0 1\nPosition: 3 2 1 0\nPlace Value: 8 4 2 1\n\nCalculation:\n1×8 + 1×4 + 0×2 + 1×1\n= 8 + 4 + 0 + 1\n= 13\n\nSo, 1101 in binary = 13 in decimal"
          },
          {
            type: "heading",
            content: "Practice Examples"
          },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-purple-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Convert 1010 to Decimal:</h4>
                <div class="text-sm space-y-1">
                  <div>Position: 3 2 1 0</div>
                  <div>Binary: 1 0 1 0</div>
                  <div>Place Value: 8 4 2 1</div>
                  <div>Calculation: 1×8 + 0×4 + 1×2 + 0×1 = 8 + 0 + 2 + 0 = 10</div>
                  <div class="font-bold">Answer: 10</div>
                </div>
              </div>
              <div class="bg-orange-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Convert 1111 to Decimal:</h4>
                <div class="text-sm space-y-1">
                  <div>Position: 3 2 1 0</div>
                  <div>Binary: 1 1 1 1</div>
                  <div>Place Value: 8 4 2 1</div>
                  <div>Calculation: 1×8 + 1×4 + 1×2 + 1×1 = 8 + 4 + 2 + 1 = 15</div>
                  <div class="font-bold">Answer: 15</div>
                </div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 6,
        title: "Binary Addition",
        blocks: [
          {
            type: "heading",
            content: "Adding Binary Numbers"
          },
          {
            type: "paragraph",
            content:
              "Binary addition follows similar rules to decimal addition, but with only two digits (0 and 1). The key rules are: 0 + 0 = 0, 0 + 1 = 1, 1 + 0 = 1, and 1 + 1 = 10 (which means 0 with a carry of 1)."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/binary-addition-rules.svg",
            alt: "Binary addition rules and examples",
            caption: "Rules for adding binary numbers",
            style: "inline",
            width: 800
          },
          {
            type: "example",
            title: "Binary Addition Example",
            content:
              "Add 101 + 110:\n\n  101\n+ 110\n-----\n 1011\n\nStep by step:\n1 + 0 = 1 (no carry)\n0 + 1 = 1 (no carry)\n1 + 1 = 10 (write 0, carry 1)\n\nResult: 1011 in binary = 11 in decimal"
          },
          {
            type: "heading",
            content: "Practice Problems"
          },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Practice Binary Addition:</h4>
                <div class="space-y-2 text-sm">
                  <div>1. 11 + 10 = ?</div>
                  <div>2. 101 + 11 = ?</div>
                  <div>3. 110 + 101 = ?</div>
                  <div>4. 1000 + 111 = ?</div>
                </div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 7,
        title: "Binary Patterns and Sequences",
        blocks: [
          {
            type: "heading",
            content: "Recognizing Binary Patterns"
          },
          {
            type: "paragraph",
            content:
              "Binary numbers follow interesting patterns that can help us understand the system better. Let's explore some common binary patterns and sequences."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/binary-patterns.svg",
            alt: "Binary number patterns and sequences",
            caption: "Common patterns in binary numbers",
            style: "inline",
            width: 800
          },
          {
            type: "heading",
            content: "Powers of 2 in Binary"
          },
          {
            type: "html",
            html: `
            <div class="bg-green-50 border-2 border-green-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-green-800">Powers of 2 Pattern</h4>
              <div class="space-y-2 text-sm">
                <div>2⁰ = 1 → Binary: 1</div>
                <div>2¹ = 2 → Binary: 10</div>
                <div>2² = 4 → Binary: 100</div>
                <div>2³ = 8 → Binary: 1000</div>
                <div>2⁴ = 16 → Binary: 10000</div>
                <div>2⁵ = 32 → Binary: 100000</div>
                <div class="font-bold mt-2">Pattern: Powers of 2 have exactly one '1' followed by zeros!</div>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Counting in Binary"
          },
          {
            type: "html",
            html: `
            <div class="bg-purple-50 border-2 border-purple-200 rounded-xl p-6 my-6">
              <h4 class="font-bold text-lg mb-4 text-purple-800">Binary Counting Sequence</h4>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-2 text-sm">
                <div>0 → 0</div>
                <div>1 → 1</div>
                <div>2 → 10</div>
                <div>3 → 11</div>
                <div>4 → 100</div>
                <div>5 → 101</div>
                <div>6 → 110</div>
                <div>7 → 111</div>
                <div>8 → 1000</div>
                <div>9 → 1001</div>
                <div>10 → 1010</div>
                <div>11 → 1011</div>
                <div>12 → 1100</div>
                <div>13 → 1101</div>
                <div>14 → 1110</div>
                <div>15 → 1111</div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 8,
        title: "Applications in Computer Technology",
        blocks: [
          {
            type: "heading",
            content: "How Computers Use Binary"
          },
          {
            type: "paragraph",
            content:
              "Binary is the foundation of all digital technology. Understanding how computers use binary helps us appreciate the technology we use every day."
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-5/computer-binary-usage.svg",
            alt: "How computers use binary for data storage and processing",
            caption: "Binary is used throughout computer systems",
            style: "inline",
            width: 800
          },
          {
            type: "html",
            html: `
            <div class="grid md:grid-cols-2 gap-4 my-6">
              <div class="bg-blue-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-blue-800">Data Storage</h4>
                <ul class="text-sm space-y-1">
                  <li>• Text: Each letter = 8 bits (1 byte)</li>
                  <li>• Images: Pixels stored as binary</li>
                  <li>• Music: Sound waves converted to binary</li>
                  <li>• Videos: Frames stored as binary data</li>
                </ul>
              </div>
              <div class="bg-green-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2 text-green-800">Computer Operations</h4>
                <ul class="text-sm space-y-1">
                  <li>• CPU processes binary instructions</li>
                  <li>• Memory stores binary data</li>
                  <li>• Networks transmit binary signals</li>
                  <li>• All calculations use binary arithmetic</li>
                </ul>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Real-World Examples"
          },
          {
            type: "html",
            html: `
            <div class="space-y-4">
              <div class="bg-yellow-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">File Sizes</h4>
                <div class="text-sm space-y-1">
                  <div>• 1 byte = 8 bits</div>
                  <div>• 1 kilobyte (KB) = 1024 bytes</div>
                  <div>• 1 megabyte (MB) = 1024 KB</div>
                  <div>• 1 gigabyte (GB) = 1024 MB</div>
                </div>
              </div>
              <div class="bg-red-50 p-4 rounded-lg">
                <h4 class="font-bold mb-2">Color Codes</h4>
                <div class="text-sm space-y-1">
                  <div>• Each color = 3 bytes (24 bits)</div>
                  <div>• Red: 8 bits (0-255)</div>
                  <div>• Green: 8 bits (0-255)</div>
                  <div>• Blue: 8 bits (0-255)</div>
                </div>
              </div>
            </div>
            `
          }
        ]
      },
      {
        number: 9,
        title: "Practice Problems and Challenges",
        blocks: [
          { type: "heading", content: "Conversion Practice" },
          {
            type: "html",
            html: `
            <div class="space-y-6">
              <div class="bg-blue-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-blue-800">Decimal to Binary Conversion</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-semibold mb-2">Easy Level:</h5>
                    <ol class="list-decimal list-inside space-y-1 text-sm">
                      <li>Convert 3 to binary</li>
                      <li>Convert 7 to binary</li>
                      <li>Convert 12 to binary</li>
                      <li>Convert 15 to binary</li>
                    </ol>
                  </div>
                  <div>
                    <h5 class="font-semibold mb-2">Medium Level:</h5>
                    <ol class="list-decimal list-inside space-y-1 text-sm">
                      <li>Convert 25 to binary</li>
                      <li>Convert 37 to binary</li>
                      <li>Convert 50 to binary</li>
                      <li>Convert 63 to binary</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div class="bg-green-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-green-800">Binary to Decimal Conversion</h4>
                <div class="grid md:grid-cols-2 gap-4">
                  <div>
                    <h5 class="font-semibold mb-2">Easy Level:</h5>
                    <ol class="list-decimal list-inside space-y-1 text-sm">
                      <li>Convert 101 to decimal</li>
                      <li>Convert 1100 to decimal</li>
                      <li>Convert 1111 to decimal</li>
                      <li>Convert 10000 to decimal</li>
                    </ol>
                  </div>
                  <div>
                    <h5 class="font-semibold mb-2">Medium Level:</h5>
                    <ol class="list-decimal list-inside space-y-1 text-sm">
                      <li>Convert 10101 to decimal</li>
                      <li>Convert 110011 to decimal</li>
                      <li>Convert 111000 to decimal</li>
                      <li>Convert 1010101 to decimal</li>
                    </ol>
                  </div>
                </div>
              </div>
              
              <div class="bg-purple-50 p-6 rounded-lg">
                <h4 class="font-bold mb-4 text-purple-800">Binary Addition</h4>
                <div class="space-y-2 text-sm">
                  <div>1. 11 + 10 = ?</div>
                  <div>2. 101 + 110 = ?</div>
                  <div>3. 1000 + 111 = ?</div>
                  <div>4. 1010 + 1011 = ?</div>
                </div>
              </div>
            </div>
            `
          },
          { type: "heading", content: "Challenge Problems" },
          {
            type: "html",
            html: `
            <div class="bg-orange-50 p-6 rounded-lg">
              <h4 class="font-bold mb-4 text-orange-800">Advanced Challenges</h4>
              <div class="space-y-3 text-sm">
                <div><strong>1. Pattern Recognition:</strong> What's the next number in this binary sequence: 1, 10, 11, 100, 101, 110, 111, ?</div>
                <div><strong>2. Binary Word:</strong> Convert the word "HELLO" to binary (each letter = 8 bits)</div>
                <div><strong>3. Memory Calculation:</strong> How many bits are in 1 kilobyte?</div>
                <div><strong>4. Color Code:</strong> What's the binary representation of pure red (RGB: 255, 0, 0)?</div>
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
                  <h4 class="font-bold mb-2">Decimal to Binary Solutions:</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>3:</strong> 3÷2=1 r1, 1÷2=0 r1 → 11</div>
                    <div><strong>7:</strong> 7÷2=3 r1, 3÷2=1 r1, 1÷2=0 r1 → 111</div>
                    <div><strong>12:</strong> 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → 1100</div>
                    <div><strong>15:</strong> 15÷2=7 r1, 7÷2=3 r1, 3÷2=1 r1, 1÷2=0 r1 → 1111</div>
                    <div><strong>25:</strong> 25÷2=12 r1, 12÷2=6 r0, 6÷2=3 r0, 3÷2=1 r1, 1÷2=0 r1 → 11001</div>
                    <div><strong>37:</strong> 37÷2=18 r1, 18÷2=9 r0, 9÷2=4 r1, 4÷2=2 r0, 2÷2=1 r0, 1÷2=0 r1 → 100101</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Binary to Decimal Solutions:</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>101:</strong> 1×4 + 0×2 + 1×1 = 4 + 0 + 1 = 5</div>
                    <div><strong>1100:</strong> 1×8 + 1×4 + 0×2 + 0×1 = 8 + 4 + 0 + 0 = 12</div>
                    <div><strong>1111:</strong> 1×8 + 1×4 + 1×2 + 1×1 = 8 + 4 + 2 + 1 = 15</div>
                    <div><strong>10000:</strong> 1×16 + 0×8 + 0×4 + 0×2 + 0×1 = 16</div>
                    <div><strong>10101:</strong> 1×16 + 0×8 + 1×4 + 0×2 + 1×1 = 16 + 4 + 1 = 21</div>
                    <div><strong>110011:</strong> 1×32 + 1×16 + 0×8 + 0×4 + 1×2 + 1×1 = 32 + 16 + 2 + 1 = 51</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Binary Addition Solutions:</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>11 + 10:</strong> 11 + 10 = 101 (3 + 2 = 5)</div>
                    <div><strong>101 + 110:</strong> 101 + 110 = 1011 (5 + 6 = 11)</div>
                    <div><strong>1000 + 111:</strong> 1000 + 111 = 1111 (8 + 7 = 15)</div>
                    <div><strong>1010 + 1011:</strong> 1010 + 1011 = 10101 (10 + 11 = 21)</div>
                  </div>
                </div>
                
                <div>
                  <h4 class="font-bold mb-2">Challenge Solutions:</h4>
                  <div class="space-y-2 text-sm">
                    <div><strong>Pattern:</strong> 1000 (counting sequence: 1, 10, 11, 100, 101, 110, 111, 1000)</div>
                    <div><strong>HELLO:</strong> H=01001000, E=01000101, L=01001100, L=01001100, O=01001111</div>
                    <div><strong>Memory:</strong> 1 KB = 1024 bytes = 1024 × 8 = 8192 bits</div>
                    <div><strong>Red Color:</strong> 11111111 00000000 00000000 (255, 0, 0 in binary)</div>
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
              "Binary uses only two digits: 0 and 1",
              "Binary place values are powers of 2: 1, 2, 4, 8, 16, 32...",
              "Decimal to binary: divide by 2, collect remainders",
              "Binary to decimal: multiply by place values and add",
              "Binary addition follows specific rules with carries",
              "Computers use binary for all data storage and processing"
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
                    <li>• Number system conversion</li>
                    <li>• Place value understanding</li>
                    <li>• Binary arithmetic operations</li>
                    <li>• Pattern recognition</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-bold text-green-600 mb-2">Technology Understanding</h4>
                  <ul class="space-y-1">
                    <li>• Computer science fundamentals</li>
                    <li>• Digital data representation</li>
                    <li>• Technology literacy</li>
                    <li>• Problem-solving skills</li>
                  </ul>
                </div>
              </div>
            </div>
            `
          },
          {
            type: "heading",
            content: "Real-World Applications"
          },
          {
            type: "paragraph",
            content:
              "Binary is everywhere in our digital world! From the text you're reading right now, to the photos on your phone, to the music you listen to - everything is stored and processed using binary numbers. Understanding binary helps us understand how modern technology works."
          },
          {
            type: "heading",
            content: "Next Steps"
          },
          {
            type: "paragraph",
            content:
              "Continue practicing binary conversions to build fluency. Explore how binary is used in computer programming, digital electronics, and data communication. In the next topic, we'll explore fractions and their applications in mathematics."
          }
        ]
      }
    ]
  }
};

export default topic;
