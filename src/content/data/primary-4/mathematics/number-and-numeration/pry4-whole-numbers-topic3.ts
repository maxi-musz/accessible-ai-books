import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 4",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers-topic3",
  title: "Whole Numbers - LCM, HCF, and Prime Numbers", 
  order: 3,
  data: {
    performanceObjective:
      "Find LCM and HCF of 2-digit numbers, identify and describe prime numbers, and solve quantitative reasoning problems involving factors and multiples.",
    contents: [
      "Finding multiples of numbers up to 2-digit",
      "Generating factors of numbers systematically", 
      "Computing LCM (Least Common Multiple) of 2-3 numbers",
      "Computing HCF (Highest Common Factor) of 2-3 numbers",
      "Understanding and identifying prime numbers",
      "Expressing numbers as products of prime factors",
      "Quantitative reasoning with LCM and HCF",
    ],
    teacherActivities: [
      "Demonstrate factor and multiple generation using manipulatives",
      "Model LCM and HCF calculation methods step-by-step",
      "Guide collaborative discovery of prime number patterns",
      "Facilitate group discussions on mathematical relationships",
      "Connect factors and multiples to real-world applications",
    ],
    studentActivities: [
      "Generate multiples and factors through hands-on activities",
      "Work in groups to find LCM and HCF of given numbers",
      "Investigate prime numbers using systematic checking",
      "Practice prime factorization with visual methods",
      "Solve real-world problems involving LCM and HCF concepts",
    ],
    materials: [
      "Factor and multiple charts",
      "Multiplication tables and grids",
      "Prime number reference charts", 
      "Base-10 blocks and counters",
      "Multimedia applications for number exploration",
      "Calculator for verification and exploration",
    ],
    evaluationGuide: [
      "Generate multiples and factors of given numbers accurately",
      "Compute LCM of 2-3 two-digit numbers correctly",
      "Compute HCF of 2-3 two-digit numbers using appropriate methods",
      "Identify prime numbers and explain their characteristics",
      "Express numbers as products of prime factors",
      "Solve quantitative aptitude problems involving LCM and HCF",
    ],
    pages: [
      {
        number: 7,
        title: "UNDERSTANDING FACTORS AND MULTIPLES",
        blocks: [
          {
            type: "intro",
            content: "Factors and multiples are like mathematical families! Every number has a family of factors that divide into it perfectly, and a family of multiples that it creates. Let's meet these number families and discover their amazing patterns!"
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What are Factors and Multiples?</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                  <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                    <h3>🔢 Factors</h3>
                    <p><strong>Numbers that divide evenly into another number</strong></p>
                    <p>Example: Factors of 12 are numbers that divide 12 with no remainder</p>
                  </div>
                  <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
                    <h3>✖️ Multiples</h3>
                    <p><strong>Numbers created by multiplying by whole numbers</strong></p>
                    <p>Example: Multiples of 4 are 4×1, 4×2, 4×3, etc.</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Finding Factors Step by Step"
          },
          {
            type: "html",
            html: `
              <div class="factor-exploration">
                <h3>🔍 Let's Find All Factors of 24</h3>
                <div style="background: #f1f8e9; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Method:</strong> Test each number from 1 to 24 to see if it divides evenly</p>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 15px 0;">
                    <tr style="background-color: #4CAF50; color: white;">
                      <th style="border: 1px solid #ddd; padding: 8px;">Number</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">24 ÷ Number</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Result</th>
                      <th style="border: 1px solid #ddd; padding: 8px;">Is it a Factor?</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24 ÷ 1</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: green;">✓ Yes</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">2</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24 ÷ 2</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">12</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: green;">✓ Yes</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24 ÷ 3</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">8</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: green;">✓ Yes</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24 ÷ 4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">6</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: green;">✓ Yes</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">5</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">24 ÷ 5</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">4.8</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: red;">✗ No</td>
                    </tr>
                  </table>
                  
                  <p><strong>Factors of 24:</strong> 1, 2, 3, 4, 6, 8, 12, 24</p>
                  <p><em>Notice: We can pair them! (1×24), (2×12), (3×8), (4×6)</em></p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Finding Multiples Step by Step"
          },
          {
            type: "html",
            html: `
              <div class="multiple-exploration">
                <h3>✖️ Let's Find the First 10 Multiples of 6</h3>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Method:</strong> Multiply 6 by 1, 2, 3, 4, 5, 6, 7, 8, 9, 10...</p>
                  
                  <div style="display: grid; grid-template-columns: repeat(5, 1fr); gap: 10px; margin: 20px 0;">
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 1 = 6</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 2 = 12</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 3 = 18</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 4 = 24</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 5 = 30</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 6 = 36</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 7 = 42</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 8 = 48</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 9 = 54</strong>
                    </div>
                    <div style="background: #ffeb3b; padding: 10px; text-align: center; border-radius: 5px;">
                      <strong>6 × 10 = 60</strong>
                    </div>
                  </div>
                  
                  <p><strong>First 10 multiples of 6:</strong> 6, 12, 18, 24, 30, 36, 42, 48, 54, 60</p>
                  <p><em>Pattern: Each multiple is 6 more than the previous one!</em></p>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Practice Time!</h4>
                  <ol>
                    <li>Find all factors of 18</li>
                    <li>Find the first 8 multiples of 7</li>
                    <li>Which numbers are both factors of 12 and multiples of 3?</li>
                  </ol>
                  <div style="margin-top: 15px; padding: 10px; background: #e8f5e8; border-radius: 5px;">
                    <strong>Answers:</strong>
                    <ol>
                      <li>Factors of 18: 1, 2, 3, 6, 9, 18</li>
                      <li>Multiples of 7: 7, 14, 21, 28, 35, 42, 49, 56</li>
                      <li>3, 6, 12 (factors of 12: 1,2,3,4,6,12 and multiples of 3: 3,6,9,12...)</li>
                    </ol>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 8,
        title: "LEAST COMMON MULTIPLE (LCM) AND HIGHEST COMMON FACTOR (HCF)",
        blocks: [
          {
            type: "intro",
            content: "LCM and HCF help us solve many real-world problems! LCM helps us find when events happen together (like when two buses arrive at the same time), while HCF helps us share things equally or find the biggest common size."
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 Understanding LCM and HCF</h2>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                  <div style="background: #e1f5fe; padding: 15px; border-radius: 8px;">
                    <h3>📈 LCM (Least Common Multiple)</h3>
                    <p><strong>The smallest number that is a multiple of all given numbers</strong></p>
                    <p>Used for: Timing events, finding common denominators</p>
                  </div>
                  <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
                    <h3>📉 HCF (Highest Common Factor)</h3>
                    <p><strong>The largest number that divides all given numbers</strong></p>
                    <p>Used for: Sharing equally, simplifying fractions</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Finding LCM Step by Step"
          },
          {
            type: "html",
            html: `
              <div class="lcm-method">
                <h3>🔍 Find LCM of 12 and 18</h3>
                <div style="background: #f0f4c3; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Method 1: List Multiples</h4>
                  <p><strong>Step 1:</strong> List multiples of each number</p>
                  <ul>
                    <li><strong>Multiples of 12:</strong> 12, 24, 36, 48, 60, 72, 84, 96...</li>
                    <li><strong>Multiples of 18:</strong> 18, 36, 54, 72, 90, 108...</li>
                  </ul>
                  <p><strong>Step 2:</strong> Find common multiples</p>
                  <p>Common multiples: 36, 72, 108...</p>
                  <p><strong>Step 3:</strong> Pick the smallest</p>
                  <p style="font-size: 18px; color: #689f38;"><strong>LCM of 12 and 18 = 36</strong></p>
                </div>
                
                <div style="background: #e8eaf6; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Method 2: Prime Factorization</h4>
                  <p><strong>Step 1:</strong> Break into prime factors</p>
                  <ul>
                    <li>12 = 2 × 2 × 3 = 2² × 3</li>
                    <li>18 = 2 × 3 × 3 = 2 × 3²</li>
                  </ul>
                  <p><strong>Step 2:</strong> Take highest power of each prime</p>
                  <ul>
                    <li>Highest power of 2: 2²</li>
                    <li>Highest power of 3: 3²</li>
                  </ul>
                  <p><strong>Step 3:</strong> Multiply together</p>
                  <p>LCM = 2² × 3² = 4 × 9 = 36</p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Finding HCF Step by Step"
          },
          {
            type: "html",
            html: `
              <div class="hcf-method">
                <h3>🔍 Find HCF of 24 and 36</h3>
                <div style="background: #fce4ec; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Method 1: List Factors</h4>
                  <p><strong>Step 1:</strong> List all factors of each number</p>
                  <ul>
                    <li><strong>Factors of 24:</strong> 1, 2, 3, 4, 6, 8, 12, 24</li>
                    <li><strong>Factors of 36:</strong> 1, 2, 3, 4, 6, 9, 12, 18, 36</li>
                  </ul>
                  <p><strong>Step 2:</strong> Find common factors</p>
                  <p>Common factors: 1, 2, 3, 4, 6, 12</p>
                  <p><strong>Step 3:</strong> Pick the largest</p>
                  <p style="font-size: 18px; color: #c2185b;"><strong>HCF of 24 and 36 = 12</strong></p>
                </div>
                
                <div style="background: #e0f2f1; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Method 2: Prime Factorization</h4>
                  <p><strong>Step 1:</strong> Break into prime factors</p>
                  <ul>
                    <li>24 = 2 × 2 × 2 × 3 = 2³ × 3</li>
                    <li>36 = 2 × 2 × 3 × 3 = 2² × 3²</li>
                  </ul>
                  <p><strong>Step 2:</strong> Take lowest power of common primes</p>
                  <ul>
                    <li>Lowest power of 2: 2²</li>
                    <li>Lowest power of 3: 3¹</li>
                  </ul>
                  <p><strong>Step 3:</strong> Multiply together</p>
                  <p>HCF = 2² × 3 = 4 × 3 = 12</p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Real-World Applications"
          },
          {
            type: "html",
            html: `
              <div class="real-world-applications">
                <h3>🌍 When Do We Use LCM and HCF?</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                  <div style="background: #e3f2fd; padding: 15px; border-radius: 8px;">
                    <h4>🚌 LCM Example: Bus Schedules</h4>
                    <p>Bus A comes every 15 minutes<br>Bus B comes every 20 minutes</p>
                    <p><strong>Question:</strong> When do they both arrive together?</p>
                    <p><strong>Solution:</strong> Find LCM of 15 and 20</p>
                    <p>LCM(15,20) = 60 minutes = 1 hour</p>
                    <p><em>They meet every hour!</em></p>
                  </div>
                  <div style="background: #f3e5f5; padding: 15px; border-radius: 8px;">
                    <h4>🍰 HCF Example: Sharing Cakes</h4>
                    <p>24 chocolate cakes<br>36 vanilla cakes</p>
                    <p><strong>Question:</strong> What's the largest equal group size?</p>
                    <p><strong>Solution:</strong> Find HCF of 24 and 36</p>
                    <p>HCF(24,36) = 12</p>
                    <p><em>Make 12 groups with 2 chocolate + 3 vanilla each!</em></p>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 9,
        title: "PRIME NUMBERS AND PRIME FACTORIZATION",
        blocks: [
          {
            type: "intro",
            content: "Prime numbers are the building blocks of all numbers! They're like the atoms of mathematics - you can't break them down any further. Every number is either prime or can be built from prime numbers. Let's discover these special numbers!"
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What Makes a Number Prime?</h2>
                <p><strong>A prime number has exactly 2 factors: 1 and itself</strong></p>
                <div style="background: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Examples:</strong></p>
                  <ul>
                    <li><strong>7 is prime:</strong> Factors are 1 and 7 only</li>
                    <li><strong>9 is NOT prime:</strong> Factors are 1, 3, and 9</li>
                    <li><strong>1 is NOT prime:</strong> It only has 1 factor (itself)</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Finding Prime Numbers"
          },
          {
            type: "html",
            html: `
              <div class="prime-discovery">
                <h3>🔍 The Sieve of Eratosthenes (Finding Primes 1-30)</h3>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Method:</strong> Cross out all non-prime numbers</p>
                  
                  <div style="display: grid; grid-template-columns: repeat(10, 1fr); gap: 5px; margin: 20px 0;">
                    <div style="background: #ff9800; color: white; padding: 8px; text-align: center; border-radius: 3px;">1</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">2</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">3</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">4</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">5</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">6</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">7</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">8</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">9</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">10</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">11</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">12</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">13</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">14</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">15</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">16</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">17</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">18</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">19</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">20</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">21</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">22</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">23</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">24</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">25</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">26</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">27</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">28</div>
                    <div style="background: #4caf50; color: white; padding: 8px; text-align: center; border-radius: 3px;">29</div>
                    <div style="background: #ffcdd2; padding: 8px; text-align: center; border-radius: 3px;">30</div>
                  </div>
                  
                  <div style="display: flex; gap: 20px; margin: 15px 0;">
                    <div><span style="background: #4caf50; color: white; padding: 5px; border-radius: 3px;">Green</span> = Prime numbers</div>
                    <div><span style="background: #ffcdd2; padding: 5px; border-radius: 3px;">Pink</span> = Composite numbers</div>
                    <div><span style="background: #ff9800; color: white; padding: 5px; border-radius: 3px;">Orange</span> = Neither prime nor composite</div>
                  </div>
                  
                  <p><strong>Primes from 1-30:</strong> 2, 3, 5, 7, 11, 13, 17, 19, 23, 29</p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Prime Factorization"
          },
          {
            type: "html",
            html: `
              <div class="prime-factorization">
                <h3>🌳 Breaking Numbers into Prime Factors</h3>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example: Prime Factorization of 60</h4>
                  <p><strong>Method 1: Factor Tree</strong></p>
                  <div style="font-family: monospace; background: white; padding: 15px; border-radius: 5px; margin: 10px 0;">
                    <pre>         60
        /    \\
       6      10
      / \\    /  \\
     2   3  2    5
     
Prime factors: 2, 2, 3, 5
60 = 2 × 2 × 3 × 5 = 2² × 3 × 5</pre>
                  </div>
                  
                  <p><strong>Method 2: Division Method</strong></p>
                  <table style="border-collapse: collapse; margin: 10px 0;">
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 5px;">2</td>
                      <td style="border: 1px solid #ddd; padding: 5px;">60</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 5px;">2</td>
                      <td style="border: 1px solid #ddd; padding: 5px;">30</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 5px;">3</td>
                      <td style="border: 1px solid #ddd; padding: 5px;">15</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 5px;">5</td>
                      <td style="border: 1px solid #ddd; padding: 5px;">5</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 5px;"></td>
                      <td style="border: 1px solid #ddd; padding: 5px;">1</td>
                    </tr>
                  </table>
                  <p>60 = 2² × 3 × 5</p>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Prime Practice Problems</h4>
                  <ol>
                    <li>Is 17 a prime number? Why?</li>
                    <li>Find the prime factorization of 36</li>
                    <li>List all prime numbers between 20 and 30</li>
                    <li>Express 84 as a product of prime factors</li>
                  </ol>
                  <div style="margin-top: 15px; padding: 10px; background: #f3e5f5; border-radius: 5px;">
                    <strong>Answers:</strong>
                    <ol>
                      <li>Yes, 17 is prime because its only factors are 1 and 17</li>
                      <li>36 = 2² × 3² = 4 × 9</li>
                      <li>Prime numbers 20-30: 23, 29</li>
                      <li>84 = 2² × 3 × 7</li>
                    </ol>
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
