import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Number and Numeration",
  slug: "whole-numbers",
  title: "Whole Numbers",
  order: 1,
  completed: false,
  data: {
    performanceObjective:
      "Students should be able to count, read and write numbers in millions and billions; counts and write numbers in trillions; apply the counting, reading and writing large numbers in everyday life; solve problems on quantitative aptitude tasks involving large numbers.",
    contents: [
      "Understanding place value in large numbers",
      "Counting in millions, billions and trillions",
      "Reading and writing numbers in standard and word form",
      "Real-life applications of large numbers",
    ],
    teacherActivities: [
      "Use counting blocks or cubes to represent millions/billions to Count, read and write up millions.",
      "Use counting games like million/billion bingos to Count in trillions.",
      "Count, read and write in large numbers up to trillions by using 0 to 9 digits to build big numbers.",
      "Apply the use of big numbers in reading billions number of shares sold by some banks.",
      "Team up in small groups to solve problems on quantitative aptitude involving large numbers.",
    ],
    studentActivities: [
      "Practice counting with place value charts and number cards",
      "Play counting games and bingos with large numbers",
      "Work in groups to build large numbers using digit cards (0-9)",
      "Solve real-world problems involving large numbers",
      "Complete exercises on reading and writing numbers in different forms",
    ],
    materials: [
      "Place value Number Charts",
      "Flash cards",
      "Number cards 0 to 9 for building numbers",
      "Counting blocks",
      "Counting games Million/Billion bingos",
      "Videos on counting and reading of large numbers",
    ],
    evaluationGuide: [
      "count, read and write large numbers (millions and billions);",
      "count, read and write in trillions;",
      "apply the reading and writing large numbers in real life situations;",
      "solve problems on quantitative aptitude involving large numbers.",
    ],
    pages: [
      {
        number: 1,
        title: "Introduction to Whole Numbers and Place Value",
        blocks: [
          {
            type: "intro",
            content:
              "Whole numbers are the basic counting numbers we use every day. They start from zero (0) and continue indefinitely: 0, 1, 2, 3, 4, 5... and so on. In this lesson, we will learn how to count, read, and write very large whole numbers including millions, billions, and even trillions!",
          },
          {
            type: "heading",
            content: "What are Whole Numbers?",
          },
          {
            type: "paragraph",
            content:
              "Whole numbers are non-negative numbers without fractions or decimals. They include zero and all positive integers. Examples: 0, 1, 5, 10, 100, 1000, and so on.",
          },
          {
            type: "heading",
            content: "Understanding Place Value",
          },
          {
            type: "paragraph",
            content:
              "Place value is the value of where a digit is in a number. Each position in a number has a different value. Let's look at the place value chart:",
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-1/place-value-chart.svg",
            alt: "Place value chart from millions to ones",
            caption: "Place value chart (millions → ones)",
            style: "inline",
            width: 960
          },
          {
            type: "html",
            html: `
            <div class="place-value-table">
              <style>
                .place-value-table table {
                  width: 100%;
                  border-collapse: collapse;
                  margin: 20px 0;
                  font-size: 11px;
                }
                .place-value-table th, .place-value-table td {
                  border: 1px solid #666;
                  padding: 6px 2px;
                  text-align: center;
                  word-break: break-word;
                }
                .place-value-table th {
                  background-color: #2563eb;
                  color: white;
                  font-weight: bold;
                  font-size: 10px;
                  line-height: 1.2;
                }
                @media print {
                  .place-value-table table {
                    font-size: 9px;
                  }
                  .place-value-table th {
                    font-size: 8px;
                  }
                  .place-value-table td, .place-value-table th {
                    padding: 4px 1px;
                  }
                }
              </style>
              <table>
                <thead>
                  <tr>
                    <th>Trillions</th>
                    <th>Hundred<br>Billions</th>
                    <th>Ten<br>Billions</th>
                    <th>Billions</th>
                    <th>Hundred<br>Millions</th>
                    <th>Ten<br>Millions</th>
                    <th>Millions</th>
                    <th>Hundred<br>Thousands</th>
                    <th>Ten<br>Thousands</th>
                    <th>Thousands</th>
                    <th>Hundreds</th>
                    <th>Tens</th>
                    <th>Ones</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1,000,000,000,000</td>
                    <td>100,000,000,000</td>
                    <td>10,000,000,000</td>
                    <td>1,000,000,000</td>
                    <td>100,000,000</td>
                    <td>10,000,000</td>
                    <td>1,000,000</td>
                    <td>100,000</td>
                    <td>10,000</td>
                    <td>1,000</td>
                    <td>100</td>
                    <td>10</td>
                    <td>1</td>
                  </tr>
                </tbody>
              </table>
            </div>
            `,
          },
        ],
      },
      {
        number: 2,
        title: "Reading and Writing Numbers in Millions",
        blocks: [
          {
            type: "heading",
            content: "Understanding Millions",
          },
          {
            type: "image",
            src: "/images/svg/jss-1/mathematics/number-and-numeration/topic-1/number-line-0-20.svg",
            alt: "Number line from 0 to 20",
            caption: "Number line (0 to 20) for counting practice",
            style: "inline",
            width: 960
          },
          {
            type: "paragraph",
            content:
              "A million is 1,000,000 (one thousand thousands). When we write large numbers, we use commas to separate groups of three digits from right to left to make them easier to read.",
          },
          {
            type: "heading",
            content: "How to Read Numbers in Millions",
          },
          {
            type: "html",
            html: `<div class='bg-blue-50 p-4 rounded-lg my-4'><h4 class='font-bold mb-2'>Example 1:</h4><p class='mb-2'><strong>Number:</strong> 5,234,567</p><p class='mb-2'><strong>Read as:</strong> Five million, two hundred and thirty-four thousand, five hundred and sixty-seven</p><h4 class='font-bold mb-2 mt-4'>Example 2:</h4><p class='mb-2'><strong>Number:</strong> 12,000,000</p><p class='mb-2'><strong>Read as:</strong> Twelve million</p><h4 class='font-bold mb-2 mt-4'>Example 3:</h4><p class='mb-2'><strong>Number:</strong> 456,789,012</p><p class='mb-2'><strong>Read as:</strong> Four hundred and fifty-six million, seven hundred and eighty-nine thousand and twelve</p></div>`,
          },
          {
            type: "heading",
            content: "Practice: Writing Numbers in Standard Form",
          },
          {
            type: "paragraph",
            content:
              "Let's practice writing numbers that are given in words into standard (numerical) form:",
          },
          {
            type: "html",
            html: `<ol class='list-decimal list-inside space-y-2 my-4'><li><strong>Twenty-three million, four hundred and fifty-six thousand, seven hundred and eighty-nine</strong><br/>Answer: 23,456,789</li><li><strong>One hundred million</strong><br/>Answer: 100,000,000</li><li><strong>Sixty-seven million, eight hundred and ninety thousand</strong><br/>Answer: 67,890,000</li></ol>`,
          },
        ],
      },
      {
        number: 3,
        title: "Understanding Billions",
        blocks: [
          {
            type: "heading",
            content: "What is a Billion?",
          },
          {
            type: "paragraph",
            content:
              "A billion is 1,000,000,000 (one thousand millions). Billions are used to describe very large quantities, such as national budgets, populations of large countries, or company revenues.",
          },
          {
            type: "heading",
            content: "Reading Numbers in Billions",
          },
          {
            type: "html",
            html: `<div class='bg-green-50 p-4 rounded-lg my-4'><h4 class='font-bold mb-2'>Example 1:</h4><p class='mb-2'><strong>Number:</strong> 7,500,000,000</p><p class='mb-2'><strong>Read as:</strong> Seven billion, five hundred million</p><p class='text-sm text-gray-600'>This is approximately the world's population!</p><h4 class='font-bold mb-2 mt-4'>Example 2:</h4><p class='mb-2'><strong>Number:</strong> 1,234,567,890</p><p class='mb-2'><strong>Read as:</strong> One billion, two hundred and thirty-four million, five hundred and sixty-seven thousand, eight hundred and ninety</p><h4 class='font-bold mb-2 mt-4'>Example 3:</h4><p class='mb-2'><strong>Number:</strong> 50,000,000,000</p><p class='mb-2'><strong>Read as:</strong> Fifty billion</p></div>`,
          },
          {
            type: "heading",
            content: "Real-Life Application: Nigeria's Budget",
          },
          {
            type: "paragraph",
            content:
              "Nigeria's annual budget is often in trillions of Naira. For example, if the budget is ₦21,000,000,000,000, we read this as Twenty-one trillion Naira. Understanding these large numbers helps us comprehend the scale of government spending and national economics.",
          },
        ],
      },
      {
        number: 4,
        title: "Counting in Trillions",
        blocks: [
          {
            type: "heading",
            content: "Understanding Trillions",
          },
          {
            type: "paragraph",
            content:
              "A trillion is 1,000,000,000,000 (one thousand billions or one million millions). Trillions are used to describe extremely large quantities, such as national debts, total wealth of nations, or astronomical distances.",
          },
          {
            type: "heading",
            content: "Reading Numbers in Trillions",
          },
          {
            type: "html",
            html: `<div class='bg-purple-50 p-4 rounded-lg my-4'><h4 class='font-bold mb-2'>Example 1:</h4><p class='mb-2'><strong>Number:</strong> 3,500,000,000,000</p><p class='mb-2'><strong>Read as:</strong> Three trillion, five hundred billion</p><h4 class='font-bold mb-2 mt-4'>Example 2:</h4><p class='mb-2'><strong>Number:</strong> 12,345,678,901,234</p><p class='mb-2'><strong>Read as:</strong> Twelve trillion, three hundred and forty-five billion, six hundred and seventy-eight million, nine hundred and one thousand, two hundred and thirty-four</p></div>`,
          },
          {
            type: "heading",
            content: "Building Large Numbers with Digit Cards",
          },
          {
            type: "paragraph",
            content:
              "Using digit cards (0-9), we can build any large number. Let's practice building numbers in the trillions:",
          },
          {
            type: "html",
            html: `<div class='bg-yellow-50 p-4 rounded-lg my-4'><h4 class='font-bold mb-2'>Activity: Build These Numbers</h4><ol class='list-decimal list-inside space-y-2'><li>Using digits 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 1, 2<br/>Arrange to form: 12,345,678,901,112</li><li>Create the largest possible 13-digit number using: 9, 9, 9, 8, 8, 7, 6, 5, 4, 3, 2, 1, 0<br/>Answer: 9,998,876,543,210</li></ol></div>`,
          },
        ],
      },
      {
        number: 5,
        title: "Comparing and Ordering Large Numbers",
        blocks: [
          {
            type: "heading",
            content: "Comparing Whole Numbers",
          },
          {
            type: "paragraph",
            content:
              "When comparing large numbers, we start from the leftmost digit (the highest place value). The number with the larger digit in the highest place value is the greater number.",
          },
          {
            type: "html",
            html: `<div class='bg-blue-50 p-4 rounded-lg my-4'><h4 class='font-bold mb-2'>Steps to Compare Numbers:</h4><ol class='list-decimal list-inside space-y-2'><li>Count the number of digits. The number with more digits is usually larger.</li><li>If they have the same number of digits, compare digit by digit from left to right.</li><li>The first position where the digits differ determines which number is larger.</li></ol></div>`,
          },
          {
            type: "heading",
            content: "Example: Compare 45,678,901,234 and 45,678,902,134",
          },
          {
            type: "paragraph",
            content:
              "Both numbers have 11 digits. Comparing from left to right: 4=4, 5=5, 6=6, 7=7, 8=8, 9=9, 0≠0, 1<2. Therefore, 45,678,902,134 is greater than 45,678,901,234.",
          },
          {
            type: "assessmentItem",
            title: "Practice Exercise: Ordering Numbers",
            html: `<p class='mb-2'><strong>Arrange these numbers in ascending order (smallest to largest):</strong></p><ul class='list-disc list-inside mb-2'><li>234,567,890,123</li><li>234,567,890,132</li><li>234,567,890,213</li><li>234,567,890,231</li></ul><p class='mt-4'><strong>Answer:</strong> 234,567,890,123 < 234,567,890,132 < 234,567,890,213 < 234,567,890,231</p>`,
          },
        ],
      },
      {
        number: 6,
        title: "Real-Life Applications of Large Numbers",
        blocks: [
          {
            type: "heading",
            content: "Large Numbers in Everyday Life",
          },
          {
            type: "paragraph",
            content:
              "Understanding large numbers is essential for comprehending real-world information. Here are some practical applications:",
          },
          {
            type: "html",
            html: `<div class='grid md:grid-cols-2 gap-4 my-4'><div class='bg-green-50 p-4 rounded-lg'><h4 class='font-bold mb-2'>📊 Banking and Finance</h4><p class='text-sm'>• Bank shares traded in billions<br/>• Company market capitalization<br/>• National reserves</p></div><div class='bg-blue-50 p-4 rounded-lg'><h4 class='font-bold mb-2'>🏛️ Government Budget</h4><p class='text-sm'>• Annual budget in trillions<br/>• Infrastructure spending<br/>• National debt</p></div><div class='bg-yellow-50 p-4 rounded-lg'><h4 class='font-bold mb-2'>🌍 Population</h4><p class='text-sm'>• World population (8 billion)<br/>• Country populations<br/>• City populations in millions</p></div><div class='bg-purple-50 p-4 rounded-lg'><h4 class='font-bold mb-2'>🔬 Science</h4><p class='text-sm'>• Distances in space<br/>• Microscopic measurements<br/>• Data storage (bytes)</p></div></div>`,
          },
          {
            type: "heading",
            content: "Example: Bank Shares",
          },
          {
            type: "paragraph",
            content:
              "If a bank sold 15,750,000,000 (fifteen billion, seven hundred and fifty million) shares at ₦25 each, the total value would be calculated as: 15,750,000,000 × 25 = ₦393,750,000,000 (Three hundred and ninety-three billion, seven hundred and fifty million Naira)",
          },
        ],
      },
      {
        number: 7,
        title: "Quantitative Aptitude Practice",
        blocks: [
          {
            type: "heading",
            content: "Problem-Solving with Large Numbers",
          },
          {
            type: "paragraph",
            content:
              "Quantitative aptitude involves applying mathematical skills to solve real-world problems. Let's practice with some exercises:",
          },
          {
            type: "assessmentItem",
            title: "Exercise 1: Addition of Large Numbers",
            html: `<p class='mb-2'><strong>Problem:</strong> Nigeria's population in 2020 was 206,000,000 (two hundred and six million). If the population increased by 5,500,000 (five million, five hundred thousand) by 2021, what was the new population?</p><p class='mt-4'><strong>Solution:</strong></p><p>206,000,000 + 5,500,000 = 211,500,000</p><p class='font-bold mt-2'>Answer: Two hundred and eleven million, five hundred thousand</p>`,
          },
          {
            type: "assessmentItem",
            title: "Exercise 2: Subtraction of Large Numbers",
            html: `<p class='mb-2'><strong>Problem:</strong> A company's revenue was ₦450,000,000,000 (four hundred and fifty billion Naira). If their expenses were ₦285,000,000,000 (two hundred and eighty-five billion Naira), what was their profit?</p><p class='mt-4'><strong>Solution:</strong></p><p>450,000,000,000 - 285,000,000,000 = 165,000,000,000</p><p class='font-bold mt-2'>Answer: ₦165,000,000,000 (One hundred and sixty-five billion Naira)</p>`,
          },
          {
            type: "assessmentItem",
            title: "Exercise 3: Comparison Problem",
            html: `<p class='mb-2'><strong>Problem:</strong> Three banks sold the following number of shares:</p><ul class='list-disc list-inside mb-2'><li>Bank A: 12,500,000,000 shares</li><li>Bank B: 11,750,000,000 shares</li><li>Bank C: 12,250,000,000 shares</li></ul><p class='mt-2'>Which bank sold the most shares? Which sold the least?</p><p class='mt-4'><strong>Solution:</strong></p><p>Comparing: 12,500,000,000 > 12,250,000,000 > 11,750,000,000</p><p class='font-bold mt-2'>Answer: Bank A sold the most (12.5 billion), Bank B sold the least (11.75 billion)</p>`,
          },
        ],
      },
      {
        number: 8,
        title: "Summary and Review",
        blocks: [
          {
            type: "heading",
            content: "Key Points to Remember",
          },
          {
            type: "html",
            html: `<div class='bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg my-4'><ol class='list-decimal list-inside space-y-3'><li><strong>Place Value:</strong> Each position in a number has a specific value (ones, tens, hundreds, thousands, millions, billions, trillions)</li><li><strong>Reading Large Numbers:</strong> Use commas to separate groups of three digits; read from left to right</li><li><strong>Writing Numbers:</strong> Convert words to numerals by identifying place values</li><li><strong>Comparing Numbers:</strong> Start from the leftmost digit; the number with more digits is usually larger</li><li><strong>Real-Life Applications:</strong> Large numbers are used in finance, population statistics, and government budgets</li></ol></div>`,
          },
          {
            type: "heading",
            content: "Review Exercises",
          },
          {
            type: "html",
            html: `<div class='space-y-4'><div class='bg-white border-2 border-blue-200 p-4 rounded-lg'><h4 class='font-bold mb-2'>Exercise 1:</h4><p>Write in numerals: Three trillion, four hundred and fifty-six billion, seven hundred and eighty-nine million, one hundred and twenty-three thousand, four hundred and fifty-six</p><p class='text-sm text-gray-600 mt-2'>Answer: 3,456,789,123,456</p></div><div class='bg-white border-2 border-green-200 p-4 rounded-lg'><h4 class='font-bold mb-2'>Exercise 2:</h4><p>Write in words: 987,654,321,000</p><p class='text-sm text-gray-600 mt-2'>Answer: Nine hundred and eighty-seven billion, six hundred and fifty-four million, three hundred and twenty-one thousand</p></div><div class='bg-white border-2 border-purple-200 p-4 rounded-lg'><h4 class='font-bold mb-2'>Exercise 3:</h4><p>Arrange in descending order: 45,678,901,234 ; 45,678,910,234 ; 45,687,901,234</p><p class='text-sm text-gray-600 mt-2'>Answer: 45,687,901,234 > 45,678,910,234 > 45,678,901,234</p></div></div>`,
          },
          {
            type: "heading",
            content: "Homework Assignment",
          },
          {
            type: "paragraph",
            content:
              "1. Practice writing 10 numbers in millions using digit cards\n2. Find 5 real-life examples of numbers in billions or trillions (newspapers, internet, TV)\n3. Create your own word problems using large numbers\n4. Practice reading large numbers aloud with family members",
          },
        ],
      },
    ],
  },
};

export default topic;

