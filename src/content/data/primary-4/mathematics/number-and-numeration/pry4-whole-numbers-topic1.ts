import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "Primary 4",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers-topic1",
  title: "Whole Numbers - Counting to Millions",
  order: 1,
  data: {
    performanceObjective:
      "Count in thousands up to one million, count in groups of 5s, 7s, 12s and 60s, and convert seconds into minutes and hours.",
    contents: [
      "Counting to one million using place value",
      "Skip counting in groups of 5s, 7s, 12s, and 60s", 
      "Understanding place value system up to millions",
      "Time conversion: seconds to minutes to hours",
      "Real-world applications of large numbers",
    ],
    teacherActivities: [
      "Demonstrate place value using base-10 blocks and place value charts",
      "Lead skip counting activities with rhythm and patterns",
      "Show real-world examples of large numbers (population, distances)",
      "Guide time conversion using clocks and calendars",
      "Model honest counting practices for accurate results",
    ],
    studentActivities: [
      "Use counters and counting blocks to build numbers up to millions",
      "Practice skip counting in bundles of 5s, 7s, 12s, and 60s",
      "Count days, weeks, months using calendars",
      "Convert time units in practical situations",
      "Work in groups to verify counting accuracy",
    ],
    materials: [
      "Base-10 blocks and place value charts",
      "Counting sticks and bottle covers", 
      "Calendars and clocks",
      "Cartons of eggs for dozen counting",
      "Multimedia applications and interactive games",
      "Number cards and counting blocks",
    ],
    evaluationGuide: [
      "Count accurately up to one million using place value",
      "Demonstrate skip counting patterns for 5s, 7s, 12s, and 60s", 
      "Apply counting to real-world scenarios (days in week, weeks in month)",
      "Convert between seconds, minutes, and hours correctly",
      "Work collaboratively with honesty in group counting activities",
    ],
    pages: [
      {
        number: 1,
        title: "UNDERSTANDING PLACE VALUE TO MILLIONS",
        blocks: [
          {
            type: "intro",
            content: "Numbers are everywhere around us! From counting people in a city to measuring distances between countries, we use very large numbers. Today we'll learn to count up to ONE MILLION and understand how our number system works."
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>🎯 What is Place Value?</h2>
                <p><strong>PLACE VALUE</strong> tells us what each digit in a number represents based on its position.</p>
                <p>Each position has a value that is 10 times bigger than the position to its right.</p>
              </div>
            `
          },
          {
            type: "heading",
            content: "The Place Value Chart to Millions"
          },
          {
            type: "html",
            html: `
              <div class="activity-box">
                <h3>📊 Place Value Chart</h3>
                <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
                  <tr style="background-color: #4CAF50; color: white;">
                    <th style="border: 1px solid #ddd; padding: 8px;">Millions</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Hundred Thousands</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Ten Thousands</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Thousands</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Hundreds</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Tens</th>
                    <th style="border: 1px solid #ddd; padding: 8px;">Ones</th>
                  </tr>
                  <tr>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1,000,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">100,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">10,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1,000</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">100</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">10</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">1</td>
                  </tr>
                  <tr style="background-color: #f9f9f9;">
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">2</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">4</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">7</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">3</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">5</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">8</td>
                    <td style="border: 1px solid #ddd; padding: 8px; text-align: center;">6</td>
                  </tr>
                </table>
                <p><strong>Example:</strong> The number 2,473,586 reads as "Two million, four hundred seventy-three thousand, five hundred eighty-six"</p>
              </div>
            `
          },
          {
            type: "paragraph",
            content: "Let's break this down step by step:"
          },
          {
            type: "html",
            html: `
              <div class="step-by-step">
                <h3>🔢 Reading Large Numbers</h3>
                <ol>
                  <li><strong>Start from the left:</strong> Read the millions first</li>
                  <li><strong>Move right:</strong> Read thousands, then hundreds, tens, ones</li>
                  <li><strong>Use commas:</strong> They help separate groups of three digits</li>
                  <li><strong>Practice saying:</strong> "Two million, four hundred seventy-three thousand, five hundred eighty-six"</li>
                </ol>
              </div>
            `
          }
        ]
      },
      {
        number: 2,
        title: "SKIP COUNTING PATTERNS",
        blocks: [
          {
            type: "intro",
            content: "Skip counting helps us count faster and see patterns in numbers. Instead of counting 1, 2, 3, 4, 5... we can count in jumps like 5, 10, 15, 20, 25..."
          },
          {
            type: "heading",
            content: "Skip Counting by 5s"
          },
          {
            type: "html",
            html: `
              <div class="counting-pattern">
                <h3>✋ Counting by 5s</h3>
                <p><strong>Pattern:</strong> 5, 10, 15, 20, 25, 30, 35, 40, 45, 50...</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0;">
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">5</span>
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">10</span>
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">15</span>
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">20</span>
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">25</span>
                  <span style="background: #FFE082; padding: 8px; border-radius: 5px;">30</span>
                </div>
                <p><strong>Real-life example:</strong> Counting fingers on hands (5 fingers per hand)</p>
                <p><strong>Try this:</strong> How many fingers on 6 hands? Count: 5, 10, 15, 20, 25, 30!</p>
              </div>
            `
          },
          {
            type: "heading", 
            content: "Skip Counting by 7s"
          },
          {
            type: "html",
            html: `
              <div class="counting-pattern">
                <h3>📅 Counting by 7s</h3>
                <p><strong>Pattern:</strong> 7, 14, 21, 28, 35, 42, 49, 56, 63, 70...</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0;">
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">7</span>
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">14</span>
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">21</span>
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">28</span>
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">35</span>
                  <span style="background: #C8E6C9; padding: 8px; border-radius: 5px;">42</span>
                </div>
                <p><strong>Real-life example:</strong> Days in weeks (7 days per week)</p>
                <p><strong>Try this:</strong> How many days in 4 weeks? Count: 7, 14, 21, 28!</p>
              </div>
            `
          },
          {
            type: "heading",
            content: "Skip Counting by 12s"
          },
          {
            type: "html", 
            html: `
              <div class="counting-pattern">
                <h3>🥚 Counting by 12s</h3>
                <p><strong>Pattern:</strong> 12, 24, 36, 48, 60, 72, 84, 96, 108, 120...</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0;">
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">12</span>
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">24</span>
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">36</span>
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">48</span>
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">60</span>
                  <span style="background: #FFCDD2; padding: 8px; border-radius: 5px;">72</span>
                </div>
                <p><strong>Real-life example:</strong> Eggs in dozens (12 eggs per dozen)</p>
                <p><strong>Try this:</strong> How many eggs in 5 dozens? Count: 12, 24, 36, 48, 60!</p>
              </div>
            `
          },
          {
            type: "heading",
            content: "Skip Counting by 60s"
          },
          {
            type: "html",
            html: `
              <div class="counting-pattern">
                <h3>⏰ Counting by 60s</h3>
                <p><strong>Pattern:</strong> 60, 120, 180, 240, 300, 360, 420, 480, 540, 600...</p>
                <div style="display: flex; gap: 10px; flex-wrap: wrap; margin: 15px 0;">
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">60</span>
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">120</span>
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">180</span>
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">240</span>
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">300</span>
                  <span style="background: #E1BEE7; padding: 8px; border-radius: 5px;">360</span>
                </div>
                <p><strong>Real-life example:</strong> Minutes in hours (60 minutes per hour)</p>
                <p><strong>Try this:</strong> How many minutes in 3 hours? Count: 60, 120, 180!</p>
              </div>
            `
          }
        ]
      },
      {
        number: 3,
        title: "TIME CONVERSION: SECONDS, MINUTES, AND HOURS",
        blocks: [
          {
            type: "intro",
            content: "Time is very important in our daily lives. We need to understand how seconds, minutes, and hours relate to each other. This helps us plan our day and understand how long activities take."
          },
          {
            type: "html",
            html: `
              <div class="definition-box">
                <h2>⏱️ Time Units</h2>
                <ul>
                  <li><strong>Second:</strong> The smallest unit we'll use (tick, tick, tick...)</li>
                  <li><strong>Minute:</strong> 60 seconds = 1 minute</li>
                  <li><strong>Hour:</strong> 60 minutes = 1 hour</li>
                </ul>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting Seconds to Minutes"
          },
          {
            type: "html",
            html: `
              <div class="activity-box">
                <h3>🔄 Seconds ➡️ Minutes</h3>
                <p><strong>Rule:</strong> Divide by 60 (because 60 seconds = 1 minute)</p>
                <div class="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>120 seconds ÷ 60 = 2 minutes</li>
                    <li>300 seconds ÷ 60 = 5 minutes</li>
                    <li>600 seconds ÷ 60 = 10 minutes</li>
                  </ul>
                </div>
                <div class="practice-section">
                  <h4>🧠 Practice Problems:</h4>
                  <ol>
                    <li>How many minutes are in 180 seconds?</li>
                    <li>How many minutes are in 480 seconds?</li>
                    <li>How many minutes are in 720 seconds?</li>
                  </ol>
                  <p><em>Answers: 1) 3 minutes, 2) 8 minutes, 3) 12 minutes</em></p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Converting Minutes to Hours"
          },
          {
            type: "html",
            html: `
              <div class="activity-box">
                <h3>🔄 Minutes ➡️ Hours</h3>
                <p><strong>Rule:</strong> Divide by 60 (because 60 minutes = 1 hour)</p>
                <div class="examples">
                  <h4>Examples:</h4>
                  <ul>
                    <li>120 minutes ÷ 60 = 2 hours</li>
                    <li>180 minutes ÷ 60 = 3 hours</li>
                    <li>240 minutes ÷ 60 = 4 hours</li>
                  </ul>
                </div>
                <div class="practice-section">
                  <h4>🧠 Practice Problems:</h4>
                  <ol>
                    <li>How many hours are in 300 minutes?</li>
                    <li>How many hours are in 420 minutes?</li>
                    <li>How many hours are in 600 minutes?</li>
                  </ol>
                  <p><em>Answers: 1) 5 hours, 2) 7 hours, 3) 10 hours</em></p>
                </div>
              </div>
            `
          },
          {
            type: "heading",
            content: "Real-World Time Applications"
          },
          {
            type: "html",
            html: `
              <div class="real-world-box">
                <h3>🌍 Time in Our Daily Lives</h3>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin: 20px 0;">
                  <div style="background: #f0f8ff; padding: 15px; border-radius: 8px;">
                    <h4>🏫 School Activities</h4>
                    <ul>
                      <li>Math class: 40 minutes</li>
                      <li>Break time: 15 minutes</li>
                      <li>Lunch: 30 minutes</li>
                      <li>School day: 6 hours</li>
                    </ul>
                  </div>
                  <div style="background: #f0fff0; padding: 15px; border-radius: 8px;">
                    <h4>🏠 Home Activities</h4>
                    <ul>
                      <li>Brushing teeth: 2 minutes</li>
                      <li>Eating dinner: 20 minutes</li>
                      <li>Homework: 1 hour</li>
                      <li>Sleep: 8 hours</li>
                    </ul>
                  </div>
                </div>
                <p><strong>Challenge:</strong> How many minutes do you spend in school if your school day is 6 hours?</p>
                <p><em>Answer: 6 hours × 60 minutes = 360 minutes</em></p>
              </div>
            `
          }
        ]
      }
    ],
  },
};

export default topic;
