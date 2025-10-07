import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Everyday Statistics",
  slug: "data-representation",
  title: "Data Representation",
  order: 24,
  completed: false,
  data: {
    performanceObjective:
      "Students create and interpret various data representations including bar charts, pie charts, line graphs, and frequency tables, choosing appropriate methods for different data types.",
    contents: [
      "Frequency tables and tallies",
      "Bar charts and column graphs",
      "Pie charts and sector graphs",
      "Line graphs and time series",
      "Choosing appropriate representations",
    ],
    teacherActivities: [
      "Demonstrate construction of different graph types.",
      "Show how to choose the right graph for data.",
      "Guide interpretation of statistical graphs.",
    ],
    studentActivities: [
      "Create graphs from given data sets.",
      "Interpret information from various charts.",
      "Compare different representation methods.",
    ],
    materials: ["Graph paper, rulers, protractors, colored pencils, calculators"],
    evaluationGuide: [
      "Creates accurate and neat graphs",
      "Chooses appropriate representation method",
      "Interprets graphs correctly and draws valid conclusions",
    ],
    pages: [
      {
        number: 1,
        title: "Frequency Tables and Tallies",
        blocks: [
          { type: "intro", content: "Frequency tables organize data by counting how often each value occurs. They are the foundation for creating other types of graphs." },
          { type: "heading", content: "Organizing Data" },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-2/frequency-table.svg", alt: "Example frequency table with tally marks and counts", caption: "Organizing data in frequency tables", width: 800, style: "inline" },
          { type: "list", title: "Steps", items: [
            "List all possible values or categories",
            "Count occurrences using tally marks",
            "Calculate frequencies and percentages",
            "Check that totals are correct",
          ] },
        ],
      },
      {
        number: 2,
        title: "Bar Charts and Column Graphs",
        blocks: [
          { type: "heading", content: "Comparing Categories" },
          { type: "paragraph", content: "Bar charts use rectangular bars to compare different categories. The height or length of each bar represents the frequency or value." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-2/bar-chart.svg", alt: "Examples of bar charts and column graphs", caption: "Bar charts for categorical data", width: 800, style: "inline" },
          { type: "list", title: "Features", items: [
            "Equal bar widths",
            "Clear labels on axes",
            "Consistent scale",
            "Title and legend if needed",
          ] },
        ],
      },
      {
        number: 3,
        title: "Pie Charts and Sector Graphs",
        blocks: [
          { type: "heading", content: "Showing Proportions" },
          { type: "paragraph", content: "Pie charts divide a circle into sectors, where each sector's angle is proportional to the data value. They show parts of a whole." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-2/pie-chart.svg", alt: "Pie chart example with sectors and percentages", caption: "Pie charts show proportions of a whole", width: 800, style: "inline" },
          { type: "list", title: "Construction Steps", items: [
            "Calculate angle for each sector: (value/total) × 360°",
            "Draw circle and mark center",
            "Use protractor to draw sectors",
            "Label each sector with category and percentage",
          ] },
        ],
      },
      {
        number: 4,
        title: "Line Graphs and Time Series",
        blocks: [
          { type: "heading", content: "Showing Trends Over Time" },
          { type: "paragraph", content: "Line graphs connect data points with lines, ideal for showing changes over time or relationships between two variables." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-2/line-graph.svg", alt: "Line graph showing temperature changes over time", caption: "Line graphs show trends and relationships", width: 800, style: "inline" },
          { type: "list", title: "Features", items: [
            "Time on horizontal axis",
            "Values on vertical axis",
            "Connected data points",
            "Clear trend lines",
          ] },
        ],
      },
      {
        number: 5,
        title: "Choosing the Right Graph",
        blocks: [
          { type: "heading", content: "Matching Data to Representation" },
          { type: "paragraph", content: "Different data types require different graph types. Choose the representation that best shows the pattern or relationship you want to highlight." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-2/graph-selection.svg", alt: "Decision tree for choosing appropriate graph types", caption: "Selecting the best graph for your data", width: 800, style: "inline" },
          { type: "list", title: "Guidelines", items: [
            "Categories → Bar chart",
            "Parts of whole → Pie chart",
            "Time series → Line graph",
            "Comparisons → Bar chart",
          ] },
        ],
      },
      {
        number: 6,
        title: "Reading and Interpreting Graphs",
        blocks: [
          { type: "heading", content: "Extracting Information" },
          { type: "paragraph", content: "Learn to read graphs carefully, identify key features, and draw valid conclusions. Always check scales, labels, and context." },
          { type: "list", title: "Reading Tips", items: [
            "Check the title and axes labels",
            "Note the scale and units",
            "Look for patterns and trends",
            "Identify highest and lowest values",
            "Consider the source and context",
          ] },
          { type: "assessmentItem", title: "Practice", html: "<p>Create a bar chart showing favorite subjects of 20 students. Then create a pie chart of the same data. Which representation is clearer?</p>" },
        ],
      },
    ],
  },
};

export default topic;
