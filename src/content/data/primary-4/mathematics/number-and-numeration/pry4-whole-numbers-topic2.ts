import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 4",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers-topic2",
  title: "Whole Numbers - Place Value and Roman Numerals",
  order: 2,
  data: {
    performanceObjective:
      "Determine the place value of digits up to millions, write whole numbers in different forms, and solve quantitative aptitude problems using place value and Roman numerals.",
    contents: [
      "Place value of digits up to millions",
      "Reading and writing large numbers",
      "Expanded form and standard form conversion",
      "Ordering and comparing whole numbers",
      "Roman numerals up to 1000",
      "Quantitative reasoning with place value",
    ],
    teacherActivities: [
      "Demonstrate place value using digital technologies and interactive tools",
      "Model expanded form writing using H, T, U (Hundreds, Tens, Units)",
      "Guide number ordering from smallest to largest using place value",
      "Teach Roman numeral techniques with visual charts and patterns",
      "Facilitate critical thinking through number comparison activities",
    ],
    studentActivities: [
      "Use number blocks, cards, and place value bingo to build numbers",
      "Write numbers in expanded forms (e.g., 945 = 900 + 40 + 5)",
      "Practice ordering numbers in ascending and descending order",
      "Learn Roman numeral patterns and write numbers up to 1000",
      "Solve quantitative aptitude problems involving place value",
    ],
    materials: [
      "Place value charts and number cards",
      "Base-10 blocks and manipulatives",
      "Roman numeral reference charts",
      "Multimedia applications and digital tools",
      "Abacus and counting materials",
      "Place value bingo games",
    ],
    evaluationGuide: [
      "Write the place value of digits in 4-6 digit numbers accurately",
      "Order whole numbers from smallest to largest correctly",
      "Express numbers in expanded form and convert back to standard form",
      "Read and write Roman numerals up to 1000",
      "Solve quantitative reasoning problems using place value concepts",
    ],
    pages: [
      {
        number: 4,
        title: "MASTERING PLACE VALUE TO MILLIONS",
        blocks: [
          {
            type: "intro",
            content: "Now that we can count to millions, let's become experts at understanding exactly what each digit means in any number. Place value is like a special code that helps us understand the true value of every digit!"
          },
          {
            type: "html", 
            html: `
              <div class="definition-box">
                <h2>🎯 What Does Each Position Mean?</h2>
                <p>Every digit in a number has two values:</p>
                <ul>
                  <li><strong>Face Value:</strong> What the digit looks like (5 is always 5)</li>
                  <li><strong>Place Value:</strong> What the digit is worth based on its position</li>
                </ul>
              </div>
            `
          },
          {
            type: "heading",
            content: "Breaking Down Large Numbers"
          },
          {
            type: "html",
            html: `
              <div class="activity-box">
                <h3>🔍 Let's Analyze: 3,456,789</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <tr style="background-color: #2196F3; color: white;">
                    <th style="border: 1px solid #ddd; padding: 12px;">Position</th>
                    <th style="border: 1px solid #ddd; padding: 12px;">Digit</th>
                    <th style="border: 1px solid #ddd; padding: 12px;">Place Value</th>
                    <th style="border: 1px solid #ddd; padding: 12px;">What It Means</th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Millions</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">3</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">3,000,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Three million</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">Hundred Thousands</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">4</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">400,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Four hundred thousand</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Ten Thousands</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">5</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">50,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Fifty thousand</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">Thousands</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">6</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">6,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Six thousand</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Hundreds</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">7</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">700</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Seven hundred</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px;">Tens</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">8</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">80</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Eighty</td>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px;">Ones</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold; color: #d32f2f;">9</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">9</td>
                    <td style="border: 1px solid #ddd; padding: 8px;">Nine</td>
                  </tr>
                </table>
                <p><strong>In words:</strong> Three million, four hundred fifty-six thousand, seven hundred eighty-nine</p>
              </div>
            `
          },
          {
            type: "heading",
            content: "Practice with Your Own Numbers"
          },
          {
            type: "html",
            html: `
              <div class="practice-section">
                <h3>🧠 Your Turn to Try!</h3>
                <p>For each number below, identify the place value of the highlighted digit:</p>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <ol>
                    <li><strong>2,847,123</strong> - What is the place value of the digit <span style="color: #ff5722; font-weight: bold;">8</span>?</li>
                    <li><strong>5,692,348</strong> - What is the place value of the digit <span style="color: #ff5722; font-weight: bold;">9</span>?</li>
                    <li><strong>1,357,924</strong> - What is the place value of the digit <span style="color: #ff5722; font-weight: bold;">5</span>?</li>
                  </ol>
                  <div style="margin-top: 15px; padding: 10px; background: #e8f5e8; border-radius: 5px;">
                    <strong>Answers:</strong>
                    <ul>
                      <li>1) 40,000 (Ten thousands place)</li>
                      <li>2) 90,000 (Ten thousands place)</li>
                      <li>3) 50,000 (Ten thousands place)</li>
                    </ul>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 5,
        title: "EXPANDED FORM AND STANDARD FORM",
        blocks: [
          {
            type: "intro",
            content: "Numbers can be written in different ways! Just like you can say 'Hello' or 'Hi' to mean the same thing, numbers can be written in standard form or expanded form. Let's learn both ways!"
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>📝 Two Ways to Write Numbers</h2>
                <ul>
                  <li><strong>Standard Form:</strong> The normal way we write numbers (345,678)</li>
                  <li><strong>Expanded Form:</strong> Breaking the number into its place value parts</li>
                </ul>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting to Expanded Form"
          },
          {
            type: "html",
            html: `
              <div class="conversion-box">
                <h3>🔄 Standard Form ➡️ Expanded Form</h3>
                <div style="background: #f3e5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example 1: 456,789</h4>
                  <p><strong>Step 1:</strong> Identify each digit's place value</p>
                  <ul>
                    <li>4 is in hundred thousands = 400,000</li>
                    <li>5 is in ten thousands = 50,000</li>
                    <li>6 is in thousands = 6,000</li>
                    <li>7 is in hundreds = 700</li>
                    <li>8 is in tens = 80</li>
                    <li>9 is in ones = 9</li>
                  </ul>
                  <p><strong>Step 2:</strong> Write as addition</p>
                  <p style="font-size: 18px; color: #7b1fa2;"><strong>456,789 = 400,000 + 50,000 + 6,000 + 700 + 80 + 9</strong></p>
                </div>
                
                <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example 2: 2,863,457</h4>
                  <p style="font-size: 18px; color: #1976d2;">
                    <strong>2,863,457 = 2,000,000 + 800,000 + 60,000 + 3,000 + 400 + 50 + 7</strong>
                  </p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting from Expanded Form"
          },
          {
            type: "html",
            html: `
              <div class="conversion-box">
                <h3>🔄 Expanded Form ➡️ Standard Form</h3>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example: 300,000 + 40,000 + 5,000 + 600 + 70 + 8</h4>
                  <p><strong>Step 1:</strong> Add all the values together</p>
                  <p><strong>Step 2:</strong> Write in standard form with commas</p>
                  <p style="font-size: 18px; color: #388e3c;"><strong>Answer: 345,678</strong></p>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Practice Problems:</h4>
                  <ol>
                    <li>Write 789,456 in expanded form</li>
                    <li>Write 500,000 + 20,000 + 3,000 + 400 + 50 + 6 in standard form</li>
                    <li>What is the expanded form of 1,234,567?</li>
                  </ol>
                  <div style="margin-top: 15px; padding: 10px; background: #fff3e0; border-radius: 5px;">
                    <strong>Answers:</strong>
                    <ol>
                      <li>700,000 + 80,000 + 9,000 + 400 + 50 + 6</li>
                      <li>523,456</li>
                      <li>1,000,000 + 200,000 + 30,000 + 4,000 + 500 + 60 + 7</li>
                    </ol>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 6,
        title: "ORDERING NUMBERS AND ROMAN NUMERALS",
        blocks: [
          {
            type: "intro",
            content: "Comparing and ordering numbers is very useful! We use it to know which number is bigger or smaller. We'll also learn about Roman numerals - the ancient way of writing numbers that we still use today on clocks and buildings!"
          },
          {
            type: "heading",
            content: "Comparing and Ordering Numbers"
          },
          {
            type: "html",
            html: `
              <div class="comparison-box">
                <h3>📊 How to Compare Large Numbers</h3>
                <div style="background: #f1f8e9; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Rule: Compare from left to right (biggest place value first)</h4>
                  <p><strong>Example:</strong> Compare 456,789 and 523,456</p>
                  <ol>
                    <li><strong>Hundreds of thousands:</strong> 4 vs 5 → 5 is bigger</li>
                    <li><strong>Therefore:</strong> 523,456 > 456,789</li>
                  </ol>
                </div>
                
                <div style="background: #e3f2fd; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>🎯 Ordering Practice</h4>
                  <p>Order these numbers from smallest to largest:</p>
                  <p><strong>234,567 | 789,123 | 156,890 | 634,789</strong></p>
                  
                  <div style="margin: 15px 0; padding: 10px; background: white; border-radius: 5px;">
                    <strong>Solution:</strong>
                    <ol>
                      <li>156,890 (smallest - starts with 1)</li>
                      <li>234,567 (starts with 2)</li>
                      <li>634,789 (starts with 6)</li>
                      <li>789,123 (largest - starts with 7)</li>
                    </ol>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Introduction to Roman Numerals"
          },
          {
            type: "html",
            html: `
              <div class="roman-numerals-box">
                <h3>🏛️ Ancient Roman Number System</h3>
                <p>The Romans created their own way of writing numbers over 2000 years ago! We still use them today on clocks, buildings, and movie credits.</p>
                
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Basic Roman Numeral Symbols</h4>
                  <table style="width: 100%; border-collapse: collapse;">
                    <tr style="background-color: #ff9800; color: white;">
                      <th style="border: 1px solid #ddd; padding: 8px;">Roman Numeral</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Our Number</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Remember As</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">I</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">One finger</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">V</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">5</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Five fingers (V shape)</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">X</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">10</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Two hands crossed</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">L</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">50</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Like half of C</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">C</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">100</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Century = 100 years</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">D</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">500</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Half of M</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">M</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1000</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Millennium = 1000 years</td>
                    </tr>
                  </table>
                </div>
                
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>📚 Roman Numeral Rules</h4>
                  <ol>
                    <li><strong>Add when smaller follows larger:</strong> VI = 5 + 1 = 6</li>
                    <li><strong>Subtract when smaller comes before larger:</strong> IV = 5 - 1 = 4</li>
                    <li><strong>Repeat symbols to add:</strong> III = 1 + 1 + 1 = 3</li>
                    <li><strong>Never repeat more than 3 times:</strong> Use IV instead of IIII</li>
                  </ol>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Roman Numeral Practice</h4>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                    <div>
                      <h5>Convert to Roman Numerals:</h5>
                      <ul>
                        <li>7 = ?</li>
                        <li>14 = ?</li>
                        <li>25 = ?</li>
                        <li>99 = ?</li>
                      </ul>
                    </div>
                    <div>
                      <h5>Convert to Our Numbers:</h5>
                      <ul>
                        <li>IX = ?</li>
                        <li>XL = ?</li>
                        <li>CD = ?</li>
                        <li>CM = ?</li>
                      </ul>
                    </div>
                  </div>
                  <div style="margin-top: 15px; padding: 10px; background: #f3e5f5; border-radius: 5px;">
                    <strong>Answers:</strong><br>
                    <strong>To Roman:</strong> VII, XIV, XXV, XCIX<br>
                    <strong>To Numbers:</strong> 9, 40, 400, 900
                  </div>
                </div>
              </div>
            `
          }
        ]
      }
    ],
  },
};

export default topic;
