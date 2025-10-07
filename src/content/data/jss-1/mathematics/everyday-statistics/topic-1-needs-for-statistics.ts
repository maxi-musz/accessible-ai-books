import { Topic } from "../../../../schema";

const topic: Topic = {
  class: "JSS 1",
  subject: "Mathematics",
  chapter: "Everyday Statistics",
  slug: "needs-for-statistics",
  title: "Needs for Statistics",
  order: 23,
  completed: false,
  data: {
    performanceObjective:
      "Students understand why statistics matter in daily life, identify data collection needs, recognize different data types, and appreciate how statistics help in decision-making.",
    contents: [
      "What is statistics and why we need it",
      "Data collection in daily life",
      "Types of data: qualitative vs quantitative",
      "Statistics in decision-making",
      "Real-world applications",
    ],
    teacherActivities: [
      "Discuss real examples where statistics help make decisions.",
      "Show how data collection affects outcomes.",
      "Demonstrate the difference between good and poor data.",
    ],
    studentActivities: [
      "Identify statistical questions in their environment.",
      "Classify different types of data.",
      "Explain how statistics help in everyday choices.",
    ],
    materials: ["Newspaper articles, survey examples, data collection forms"],
    evaluationGuide: [
      "Explains why statistics is important",
      "Identifies appropriate data collection methods",
      "Distinguishes between data types correctly",
    ],
    pages: [
      {
        number: 1,
        title: "What is Statistics?",
        blocks: [
          { type: "intro", content: "Statistics is the science of collecting, organizing, analyzing, and interpreting data to help us understand the world and make better decisions." },
          { type: "heading", content: "Why Statistics Matters" },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-1/statistics-overview.svg", alt: "Overview of statistics in daily life with examples", caption: "Statistics helps us understand patterns and make decisions", width: 800, style: "inline" },
          { type: "list", title: "Key Benefits", items: [
            "Helps make informed decisions",
            "Identifies trends and patterns",
            "Supports arguments with evidence",
            "Predicts future outcomes",
          ] },
        ],
      },
      {
        number: 2,
        title: "Data Collection in Daily Life",
        blocks: [
          { type: "heading", content: "Where Data Comes From" },
          { type: "paragraph", content: "Data is collected everywhere: surveys, observations, measurements, records, and experiments. Good data collection is crucial for reliable results." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-1/data-collection-methods.svg", alt: "Different methods of data collection with examples", caption: "Various ways to collect data", width: 800, style: "inline" },
          { type: "list", title: "Collection Methods", items: [
            "Surveys and questionnaires",
            "Direct observation",
            "Experiments and tests",
            "Existing records and databases",
          ] },
        ],
      },
      {
        number: 3,
        title: "Types of Data",
        blocks: [
          { type: "heading", content: "Qualitative vs Quantitative" },
          { type: "paragraph", content: "Qualitative data describes qualities (colors, opinions, categories), while quantitative data involves numbers and measurements." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-1/data-types.svg", alt: "Examples of qualitative and quantitative data", caption: "Understanding different data types", width: 800, style: "inline" },
          { type: "list", title: "Examples", items: [
            "Qualitative: favorite color, satisfaction level",
            "Quantitative: height, temperature, test scores",
            "Discrete: number of students, cars",
            "Continuous: time, weight, distance",
          ] },
        ],
      },
      {
        number: 4,
        title: "Statistics in Decision-Making",
        blocks: [
          { type: "heading", content: "Making Better Choices" },
          { type: "paragraph", content: "Statistics help us compare options, identify risks, and choose the best course of action based on evidence rather than guesswork." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-1/decision-making.svg", alt: "How statistics helps in decision-making processes", caption: "Using data to make informed decisions", width: 800, style: "inline" },
          { type: "list", title: "Decision Areas", items: [
            "Health and medicine",
            "Business and economics",
            "Education and learning",
            "Government and policy",
          ] },
        ],
      },
      {
        number: 5,
        title: "Real-world Applications",
        blocks: [
          { type: "heading", content: "Statistics Around Us" },
          { type: "paragraph", content: "From weather forecasting to sports analytics, from medical research to market research, statistics plays a crucial role in modern life." },
          { type: "image", src: "/images/svg/jss-1/mathematics/everyday-statistics/topic-1/real-world-applications.svg", alt: "Real-world examples of statistics in action", caption: "Statistics in everyday contexts", width: 800, style: "inline" },
          { type: "list", title: "Applications", items: [
            "Weather prediction and climate studies",
            "Medical research and drug testing",
            "Sports performance analysis",
            "Market research and consumer behavior",
          ] },
        ],
      },
      {
        number: 6,
        title: "Ethics in Statistics",
        blocks: [
          { type: "heading", content: "Responsible Data Use" },
          { type: "paragraph", content: "Statistics must be used honestly and ethically. We should question misleading graphs, biased samples, and incomplete data." },
          { type: "list", title: "Ethical Principles", items: [
            "Present data honestly and completely",
            "Avoid misleading visualizations",
            "Respect privacy in data collection",
            "Question sources and methods",
          ] },
          { type: "note", content: "Always think critically about statistics you encounter in media and daily life." },
        ],
      },
    ],
  },
};

export default topic;
