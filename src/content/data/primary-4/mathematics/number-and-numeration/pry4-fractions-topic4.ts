import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 4",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "fractions-topic4",
  title: "Fractions - Types and Conversions",
  order: 4,
  data: {
    performanceObjective:
      "Differentiate between proper and improper fractions, convert between mixed numbers and improper fractions, convert fractions to decimals and form equivalent fractions.",
    contents: [
      "Understanding proper and improper fractions",
      "Mixed numbers and their relationship to improper fractions", 
      "Converting between fractions and decimals",
      "Finding and creating equivalent fractions",
      "Real-life applications of fractions",
      "Quantitative reasoning with fractions",
    ],
    teacherActivities: [
      "Use internet resources to demonstrate fraction types and relationships",
      "Model fraction conversions using visual aids and manipulatives",
      "Guide students in discovering equivalent fraction patterns",
      "Facilitate perseverant problem-solving with fraction challenges",
      "Connect fractions to real-world situations and measurements",
    ],
    studentActivities: [
      "Research fraction types online and create visual explanations",
      "Convert improper fractions to mixed numbers using hands-on methods",
      "Use place value charts to convert fractions to decimals",
      "Create equivalent fraction families using fraction strips and charts",
      "Solve real-world problems involving fractions in daily life",
    ],
    materials: [
      "Fraction strips and circles",
      "Place value charts and decimal grids",
      "Internet access for research",
      "Fractional charts and visual aids",
      "Real objects for fraction demonstrations",
      "Multimedia applications and fraction games",
    ],
    evaluationGuide: [
      "Correctly identify and differentiate proper and improper fractions",
      "Convert between mixed numbers and improper fractions accurately",
      "Transform fractions to decimal form using place value understanding",
      "Generate equivalent fractions for given fractions",
      "Apply fraction concepts to solve real-world quantitative problems",
    ],
    pages: [
      {
        number: 10,
        title: "UNDERSTANDING FRACTION TYPES",
        blocks: [
          {
            type: "intro",
            content: "Fractions are everywhere! When you eat half a pizza, drink a quarter cup of milk, or share cookies equally among friends, you're using fractions. Let's explore the different types of fractions and learn how they work in our daily lives."
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What is a Fraction?</h2>
                <p>A fraction represents <strong>part of a whole</strong> or <strong>part of a group</strong></p>
                <div style="background: #f0f8ff; padding: 15px; border-radius: 8px; margin: 15px 0;">
                  <h3>Parts of a Fraction:</h3>
                  <div style="font-size: 24px; text-align: center; margin: 20px 0;">
                    <span style="color: #2196f3; font-weight: bold;">3</span>
                    <span style="font-size: 18px;"> ← Numerator (how many parts we have)</span><br>
                    <span style="border-top: 2px solid #333; display: inline-block; width: 20px;"></span><br>
                    <span style="color: #f44336; font-weight: bold;">4</span>
                    <span style="font-size: 18px;"> ← Denominator (total number of parts)</span>
                  </div>
                  <p><strong>3/4 means:</strong> We have 3 parts out of 4 equal parts total</p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Proper Fractions"
          },
          {
            type: "html",
            html: `
              <div class="fraction-type-box">
                <h3>✅ Proper Fractions</h3>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Definition:</strong> Fractions where the numerator is SMALLER than the denominator</p>
                  <p><strong>Value:</strong> Always less than 1 whole</p>
                  
                  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 20px 0;">
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; border-radius: 50%; margin: 0 auto 10px; position: relative;">
                        <div style="width: 30px; height: 60px; background: #4caf50; border-radius: 30px 0 0 30px;"></div>
                      </div>
                      <strong>1/2</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; position: relative;">
                        <div style="width: 45px; height: 60px; background: #4caf50;"></div>
                      </div>
                      <strong>3/4</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; position: relative;">
                        <div style="width: 24px; height: 60px; background: #4caf50;"></div>
                      </div>
                      <strong>2/5</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; position: relative;">
                        <div style="width: 35px; height: 60px; background: #4caf50;"></div>
                      </div>
                      <strong>7/12</strong>
                    </div>
                  </div>
                  
                  <p><strong>Real-life examples:</strong></p>
                  <ul>
                    <li>🍕 Eating 2 slices out of 8 slices of pizza = 2/8</li>
                    <li>⏰ 15 minutes out of 60 minutes = 15/60 = 1/4 hour</li>
                    <li>👥 3 girls out of 10 students = 3/10</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Improper Fractions"
          },
          {
            type: "html",
            html: `
              <div class="fraction-type-box">
                <h3>⚡ Improper Fractions</h3>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <p><strong>Definition:</strong> Fractions where the numerator is EQUAL TO or GREATER than the denominator</p>
                  <p><strong>Value:</strong> Equal to 1 or greater than 1</p>
                  
                  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; margin: 20px 0;">
                    <div style="text-align: center;">
                      <div style="display: flex; gap: 5px; justify-content: center; margin-bottom: 10px;">
                        <div style="width: 25px; height: 25px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 25px; height: 25px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 25px; height: 25px; background: #ff9800; border: 1px solid #333;"></div>
                      </div>
                      <strong>5/3</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="display: flex; gap: 5px; justify-content: center; margin-bottom: 10px;">
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                        <div style="width: 20px; height: 20px; background: #ff9800; border: 1px solid #333; border-radius: 50%;"></div>
                      </div>
                      <strong>7/4</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; background: #ff9800; border: 3px solid #333; margin: 0 auto 10px;"></div>
                      <strong>8/8</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="display: flex; gap: 3px; justify-content: center; margin-bottom: 10px;">
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                        <div style="width: 15px; height: 15px; background: #ff9800; border: 1px solid #333;"></div>
                      </div>
                      <strong>9/6</strong>
                    </div>
                  </div>
                  
                  <p><strong>Real-life examples:</strong></p>
                  <ul>
                    <li>🍰 Eating 5 pieces when the cake was cut into 4 pieces = 5/4</li>
                    <li>📚 Reading 13 pages when each chapter has 10 pages = 13/10</li>
                    <li>🏃 Running 9 laps when the track is 4 parts = 9/4</li>
                  </ul>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Quick Classification Practice"
          },
          {
            type: "html",
            html: `
              <div class="practice-section">
                <h3>🧠 Identify: Proper or Improper?</h3>
                <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">3/7</strong>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">8/5</strong>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">6/6</strong>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">2/9</strong>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">11/4</strong>
                    </div>
                    <div style="text-align: center; padding: 10px; background: white; border-radius: 5px;">
                      <strong style="font-size: 24px;">5/12</strong>
                    </div>
                  </div>
                  
                  <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 5px;">
                    <strong>Answers:</strong>
                    <ul style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; margin-top: 10px;">
                      <li><strong>3/7:</strong> Proper (3 < 7)</li>
                      <li><strong>8/5:</strong> Improper (8 > 5)</li>
                      <li><strong>6/6:</strong> Improper (6 = 6)</li>
                      <li><strong>2/9:</strong> Proper (2 < 9)</li>
                      <li><strong>11/4:</strong> Improper (11 > 4)</li>
                      <li><strong>5/12:</strong> Proper (5 < 12)</li>
                    </ul>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 11,
        title: "MIXED NUMBERS AND CONVERSIONS",
        blocks: [
          {
            type: "intro",
            content: "Mixed numbers are a special way to write improper fractions! Instead of writing 7/3, we can write 2 1/3 (two and one-third). Both mean the same thing, but mixed numbers are often easier to understand because they show the whole parts clearly."
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What are Mixed Numbers?</h2>
                <p>A mixed number has <strong>two parts</strong>:</p>
                <div style="background: #f3e5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <div style="font-size: 28px; text-align: center; margin: 20px 0;">
                    <span style="color: #9c27b0; font-weight: bold;">2</span>
                    <span style="color: #2196f3; font-weight: bold; margin-left: 10px;">1/3</span>
                  </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
                    <div style="text-align: center;">
                      <p style="color: #9c27b0; font-weight: bold;">Whole Number Part</p>
                      <p>Complete wholes</p>
                    </div>
                    <div style="text-align: center;">
                      <p style="color: #2196f3; font-weight: bold;">Fraction Part</p>
                      <p>Leftover parts</p>
                    </div>
                  </div>
                  <p style="text-align: center; margin-top: 15px;"><strong>2 1/3 = "Two and one-third"</strong></p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting Improper Fractions to Mixed Numbers"
          },
          {
            type: "html",
            html: `
              <div class="conversion-method">
                <h3>🔄 Method: Divide and Find the Remainder</h3>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example 1: Convert 7/3 to a mixed number</h4>
                  
                  <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p><strong>Step 1:</strong> Divide the numerator by the denominator</p>
                    <p style="font-size: 18px;">7 ÷ 3 = 2 remainder 1</p>
                    
                    <p><strong>Step 2:</strong> Write the mixed number</p>
                    <ul>
                      <li>Whole number = quotient = 2</li>
                      <li>Numerator = remainder = 1</li>
                      <li>Denominator = original denominator = 3</li>
                    </ul>
                    
                    <p style="font-size: 20px; color: #4caf50;"><strong>Answer: 7/3 = 2 1/3</strong></p>
                  </div>
                  
                  <h4>Example 2: Convert 13/4 to a mixed number</h4>
                  <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p>13 ÷ 4 = 3 remainder 1</p>
                    <p style="font-size: 20px; color: #4caf50;"><strong>Answer: 13/4 = 3 1/4</strong></p>
                  </div>
                  
                  <h4>Visual Representation:</h4>
                  <div style="display: flex; align-items: center; gap: 20px; margin: 20px 0; padding: 15px; background: #f0f8ff; border-radius: 5px;">
                    <div style="text-align: center;">
                      <div style="display: flex; gap: 5px;">
                        <div style="width: 40px; height: 40px; background: #2196f3; border: 2px solid #333; border-radius: 50%;"></div>
                        <div style="width: 40px; height: 40px; background: #2196f3; border: 2px solid #333; border-radius: 50%;"></div>
                        <div style="width: 40px; height: 40px; border: 2px solid #333; border-radius: 50%; position: relative;">
                          <div style="width: 20px; height: 40px; background: #2196f3; border-radius: 20px 0 0 20px;"></div>
                        </div>
                      </div>
                      <p><strong>7/3 = 2 1/3</strong></p>
                    </div>
                    <p style="font-size: 24px;">=</p>
                    <div style="text-align: center;">
                      <p>2 whole circles + 1/3 of a circle</p>
                    </div>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting Mixed Numbers to Improper Fractions"
          },
          {
            type: "html",
            html: `
              <div class="conversion-method">
                <h3>🔄 Method: Multiply, Add, Keep</h3>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example: Convert 3 2/5 to an improper fraction</h4>
                  
                  <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p><strong>Step 1:</strong> Multiply whole number by denominator</p>
                    <p style="font-size: 18px;">3 × 5 = 15</p>
                    
                    <p><strong>Step 2:</strong> Add the numerator</p>
                    <p style="font-size: 18px;">15 + 2 = 17</p>
                    
                    <p><strong>Step 3:</strong> Keep the same denominator</p>
                    <p style="font-size: 20px; color: #ff9800;"><strong>Answer: 3 2/5 = 17/5</strong></p>
                  </div>
                  
                  <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <h4>💡 Memory Trick:</h4>
                    <p><strong>"Multiply, Add, Keep"</strong></p>
                    <ol>
                      <li><strong>Multiply:</strong> whole number × denominator</li>
                      <li><strong>Add:</strong> + numerator</li>
                      <li><strong>Keep:</strong> same denominator</li>
                    </ol>
                  </div>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Conversion Practice</h4>
                  <div style="background: #f9f9f9; padding: 20px; border-radius: 8px;">
                    <p><strong>Convert to mixed numbers:</strong></p>
                    <ol>
                      <li>11/4 = ?</li>
                      <li>17/6 = ?</li>
                      <li>23/7 = ?</li>
                    </ol>
                    
                    <p><strong>Convert to improper fractions:</strong></p>
                    <ol>
                      <li>2 3/4 = ?</li>
                      <li>5 1/3 = ?</li>
                      <li>4 2/7 = ?</li>
                    </ol>
                    
                    <div style="margin-top: 15px; padding: 10px; background: #e3f2fd; border-radius: 5px;">
                      <strong>Answers:</strong><br>
                      <strong>Mixed numbers:</strong> 1) 2 3/4, 2) 2 5/6, 3) 3 2/7<br>
                      <strong>Improper fractions:</strong> 1) 11/4, 2) 16/3, 3) 30/7
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        number: 12,
        title: "EQUIVALENT FRACTIONS AND DECIMAL CONVERSION",
        blocks: [
          {
            type: "intro", 
            content: "Did you know that 1/2, 2/4, 3/6, and 4/8 all represent the same amount? These are called equivalent fractions! We can also write fractions as decimals - another way to show the same value. Let's explore these amazing number relationships!"
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What are Equivalent Fractions?</h2>
                <p><strong>Equivalent fractions are different fractions that represent the same value</strong></p>
                <div style="background: #f0f8ff; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 15px; margin: 20px 0;">
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; border-radius: 50%; margin: 0 auto 10px; position: relative;">
                        <div style="width: 30px; height: 60px; background: #4caf50; border-radius: 30px 0 0 30px;"></div>
                      </div>
                      <strong>1/2</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr;">
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div></div>
                        <div></div>
                      </div>
                      <strong>2/4</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: 1fr 1fr;">
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <strong>3/6</strong>
                    </div>
                    <div style="text-align: center;">
                      <div style="width: 60px; height: 60px; border: 3px solid #4caf50; margin: 0 auto 10px; display: grid; grid-template-columns: repeat(4, 1fr); grid-template-rows: 1fr 1fr;">
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div style="background: #4caf50;"></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                      </div>
                      <strong>4/8</strong>
                    </div>
                  </div>
                  <p style="text-align: center; font-size: 18px;"><strong>1/2 = 2/4 = 3/6 = 4/8</strong></p>
                  <p style="text-align: center;">All these fractions represent the same amount!</p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Creating Equivalent Fractions"
          },
          {
            type: "html",
            html: `
              <div class="equivalent-method">
                <h3>✖️ Method 1: Multiply Numerator and Denominator by the Same Number</h3>
                <div style="background: #e8f5e8; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example: Find equivalent fractions for 2/3</h4>
                  
                  <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin: 20px 0;">
                    <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                      <p><strong>Multiply by 2:</strong></p>
                      <p style="font-size: 18px;">2/3 × 2/2 = 4/6</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                      <p><strong>Multiply by 3:</strong></p>
                      <p style="font-size: 18px;">2/3 × 3/3 = 6/9</p>
                    </div>
                    <div style="background: white; padding: 15px; border-radius: 5px; text-align: center;">
                      <p><strong>Multiply by 4:</strong></p>
                      <p style="font-size: 18px;">2/3 × 4/4 = 8/12</p>
                    </div>
                  </div>
                  
                  <p><strong>Equivalent fractions for 2/3:</strong> 4/6, 6/9, 8/12, 10/15, ...</p>
                </div>
                
                <h3>➗ Method 2: Divide Numerator and Denominator by the Same Number</h3>
                <div style="background: #fff3e0; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Example: Simplify 12/16 to find equivalent fractions</h4>
                  
                  <div style="background: white; padding: 15px; border-radius: 5px; margin: 15px 0;">
                    <p><strong>Step 1:</strong> Find common factors of 12 and 16</p>
                    <p>Common factors: 1, 2, 4</p>
                    
                    <p><strong>Step 2:</strong> Divide by common factors</p>
                    <ul>
                      <li>12/16 ÷ 2/2 = 6/8</li>
                      <li>12/16 ÷ 4/4 = 3/4 (simplest form)</li>
                    </ul>
                    
                    <p><strong>Equivalent fractions:</strong> 12/16 = 6/8 = 3/4</p>
                  </div>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting Fractions to Decimals"
          },
          {
            type: "html",
            html: `
              <div class="decimal-conversion">
                <h3>🔢 Method: Divide Numerator by Denominator</h3>
                <div style="background: #f3e5f5; padding: 20px; border-radius: 8px; margin: 15px 0;">
                  <h4>Common Fraction-Decimal Equivalents:</h4>
                  
                  <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                    <tr style="background-color: #9c27b0; color: white;">
                      <th style="border: 1px solid #ddd; padding: 10px;">Fraction</th>
                      <th style="border: 1px solid #ddd; padding: 10px;">Division</th>
                      <th style="border: 1px solid #ddd; padding: 10px;">Decimal</th>
                      <th style="border: 1px solid #ddd; padding: 10px;">In Words</th>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">1/2</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1 ÷ 2</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.5</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Five tenths</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">1/4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1 ÷ 4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.25</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Twenty-five hundredths</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">3/4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3 ÷ 4</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.75</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Seventy-five hundredths</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">1/5</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1 ÷ 5</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.2</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">Two tenths</td>
                    </tr>
                    <tr>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">1/10</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1 ÷ 10</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.1</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">One tenth</td>
                    </tr>
                    <tr style="background-color: #f9f9f9;">
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; font-weight: bold;">1/8</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1 ÷ 8</td>
                      <td style="border: 1px solid #ddd; padding: 8px; text-align: center; color: #e91e63; font-weight: bold;">0.125</td>
                      <td style="border: 1px solid #ddd; padding: 8px;">One hundred twenty-five thousandths</td>
                    </tr>
                  </table>
                </div>
                
                <div class="practice-section">
                  <h4>🧠 Final Practice Challenge</h4>
                  <div style="background: #f5f5f5; padding: 20px; border-radius: 8px;">
                    <p><strong>Mixed Practice:</strong></p>
                    <ol>
                      <li>Convert 5/2 to a mixed number</li>
                      <li>Find two equivalent fractions for 3/5</li>
                      <li>Convert 3/8 to a decimal</li>
                      <li>Convert 2 3/4 to an improper fraction</li>
                      <li>Is 6/8 equivalent to 3/4? Explain.</li>
                    </ol>
                    
                    <div style="margin-top: 15px; padding: 10px; background: #e3f2fd; border-radius: 5px;">
                      <strong>Answers:</strong>
                      <ol>
                        <li>5/2 = 2 1/2</li>
                        <li>3/5 = 6/10 = 9/15 (or others)</li>
                        <li>3/8 = 0.375</li>
                        <li>2 3/4 = 11/4</li>
                        <li>Yes! 6/8 ÷ 2/2 = 3/4</li>
                      </ol>
                    </div>
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
