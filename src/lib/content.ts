// Primary 1 imports
import topicWholeNumbers from "@/content/data/primary-1/mathematics/number-and-numeration/whole-numbers-1-5";
import topicZero from "@/content/data/primary-1/mathematics/number-and-numeration/whole-number-0";

// Primary 4 imports
import pry4WholeNumbersTopic1 from "@/content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic1";
import pry4WholeNumbersTopic2 from "@/content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic2";
import pry4WholeNumbersTopic3 from "@/content/data/primary-4/mathematics/number-and-numeration/pry4-whole-numbers-topic3";
import pry4FractionsTopic4 from "@/content/data/primary-4/mathematics/number-and-numeration/pry4-fractions-topic4";

// JSS 1 imports
import jss1WholeNumbers from "@/content/data/jss-1/mathematics/number-and-numeration/topic-1-whole-numbers";
import jss1LCM from "@/content/data/jss-1/mathematics/number-and-numeration/topic-2-lcm";
import jss1HCF from "@/content/data/jss-1/mathematics/number-and-numeration/topic-3-hcf";
import jss1CountingInTwos from "@/content/data/jss-1/mathematics/number-and-numeration/topic-4-counting-in-twos";
import jss1BinaryConversion from "@/content/data/jss-1/mathematics/number-and-numeration/topic-5-binary-conversion";
import jss1Fractions from "@/content/data/jss-1/mathematics/number-and-numeration/topic-6-fractions";
// JSS 1 Basic Operations
import jss1AdditionAndSubtraction from "@/content/data/jss-1/mathematics/basic-operations/topic-1-addition-and-subtraction";
import jss1AddSubFractions from "@/content/data/jss-1/mathematics/basic-operations/topic-2-add-subtract-fractions";
import jss1MulDivFractions from "@/content/data/jss-1/mathematics/basic-operations/topic-3-multiply-divide-fractions";
import jss1Estimation from "@/content/data/jss-1/mathematics/basic-operations/topic-4-estimation";
import jss1Approximation from "@/content/data/jss-1/mathematics/basic-operations/topic-5-approximation";
import jss1AdditionBase2 from "@/content/data/jss-1/mathematics/basic-operations/topic-6-addition-base2";
import jss1SubtractionBase2 from "../content/data/jss-1/mathematics/basic-operations/topic-7-subtraction-base2";

import { ClassRegistry, Topic } from "@/content/schema";

const registry: ClassRegistry = {
  "Primary 1": {
    subjects: {
      "Mathematics": {
        chapters: {
          "Number and Numeration": [
            { ...topicWholeNumbers, completed: true, chapter: "Number and Numeration" },
            { ...topicZero, completed: true, chapter: "Number and Numeration" }
          ]
        }
      },
    },
  },
  "JSS 1": {
    subjects: {
      "Mathematics": {
        chapters: {
          "Number and Numeration": [
            { ...jss1WholeNumbers, completed: true, chapter: "Number and Numeration" },
            { ...jss1LCM, completed: false, chapter: "Number and Numeration" },
            { ...jss1HCF, completed: false, chapter: "Number and Numeration" },
            { ...jss1CountingInTwos, completed: false, chapter: "Number and Numeration" },
            { ...jss1BinaryConversion, completed: false, chapter: "Number and Numeration" },
            { ...jss1Fractions, completed: false, chapter: "Number and Numeration" }
          ],
          // Added placeholder chapters and topics for upcoming content development
          "Basic Operations": [
            { ...jss1AdditionAndSubtraction, completed: false, chapter: "Basic Operations" },
            { ...jss1AddSubFractions, completed: false, chapter: "Basic Operations" },
            { ...jss1MulDivFractions, completed: false, chapter: "Basic Operations" },
            { ...jss1Estimation, completed: false, chapter: "Basic Operations" },
            { ...jss1Approximation, completed: false, chapter: "Basic Operations" },
            { ...jss1AdditionBase2, completed: true, chapter: "Basic Operations" },
            { ...jss1SubtractionBase2, completed: false, chapter: "Basic Operations" },
            { class: "JSS 1", subject: "Mathematics", chapter: "Basic Operations", slug: "multiplication-in-base-2", title: "Multiplication of numbers in base 2.", order: 14, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Basic Operations", slug: "use-of-symbols", title: "Use of Symbols", order: 15, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Basic Operations", slug: "use-of-symbols-continued", title: "Use of Symbols (contd.)", order: 16, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Algebraic Processes": [
            { class: "JSS 1", subject: "Mathematics", chapter: "Algebraic Processes", slug: "simplification-of-algebraic-expressions", title: "Simplification of Algebraic Expressions", order: 17, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Algebraic Processes", slug: "simple-equations", title: "Simple Equations", order: 18, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Mensuration and Geometry": [
            { class: "JSS 1", subject: "Mathematics", chapter: "Mensuration and Geometry", slug: "plane-shapes", title: "Plane Shapes", order: 19, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Mensuration and Geometry", slug: "three-dimensional-figures", title: "Three dimensional Figures", order: 20, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Mensuration and Geometry", slug: "construction", title: "Construction", order: 21, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Mensuration and Geometry", slug: "angles", title: "Angles", order: 22, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Everyday Statistics": [
            { class: "JSS 1", subject: "Mathematics", chapter: "Everyday Statistics", slug: "needs-for-statistics", title: "Needs for statistics", order: 23, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            { class: "JSS 1", subject: "Mathematics", chapter: "Everyday Statistics", slug: "data-representation", title: "Data representation", order: 24, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ]
        }
      },
    },
  },
  "Primary 4": {
    subjects: {
      "Mathematics": {
        chapters: {
          "Number and Numeration": [
            { ...pry4WholeNumbersTopic1, completed: true, chapter: "Number and Numeration" },
            { ...pry4WholeNumbersTopic2, completed: true, chapter: "Number and Numeration" },
            { ...pry4WholeNumbersTopic3, completed: true, chapter: "Number and Numeration" },
            { ...pry4FractionsTopic4, completed: true, chapter: "Number and Numeration" }
          ],
          "Basic Operations": [
            // Topic 5: Addition and Subtraction
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "addition-subtraction", title: "Addition and Subtraction", order: 5, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 6: Addition and Subtraction (continued)
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "addition-subtraction-continued", title: "Addition and Subtraction (continued)", order: 6, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 7: Addition and Subtraction (continued)
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "addition-subtraction-continued-2", title: "Addition and Subtraction (continued)", order: 7, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 8: Multiplication (1)
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "multiplication-1", title: "Multiplication (1)", order: 8, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 9: Multiplication (2)
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "multiplication-2", title: "Multiplication (2)", order: 9, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 10: Division
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "division", title: "Division", order: 10, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 11: Estimation
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "estimation", title: "Estimation", order: 11, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 12: Open Sentence
            { class: "Primary 4", subject: "Mathematics", chapter: "Basic Operations", slug: "open-sentence", title: "Open Sentence", order: 12, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Mensuration": [
            // Topic 13: Money 1
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "money-1", title: "Money 1", order: 13, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 14: Money 2
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "money-2", title: "Money 2", order: 14, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 15: Length
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "length", title: "Length", order: 15, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 16: Weight
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "weight", title: "Weight", order: 16, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 17: Time
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "time", title: "Time", order: 17, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 18: Area
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "area", title: "Area", order: 18, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 19: Capacity
            { class: "Primary 4", subject: "Mathematics", chapter: "Mensuration", slug: "capacity", title: "Capacity", order: 19, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Geometry": [
            // Topic 20: Plane shapes
            { class: "Primary 4", subject: "Mathematics", chapter: "Geometry", slug: "plane-shapes", title: "Plane shapes", order: 20, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
            // Topic 21: Three dimensional shapes
            { class: "Primary 4", subject: "Mathematics", chapter: "Geometry", slug: "three-dimensional-shapes", title: "Three dimensional shapes", order: 21, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ],
          "Everyday Statistics": [
            // Topic 22: Bar graph
            { class: "Primary 4", subject: "Mathematics", chapter: "Everyday Statistics", slug: "bar-graph", title: "Bar graph", order: 22, completed: false, data: { performanceObjective: "", contents: [], teacherActivities: [], studentActivities: [], materials: [], evaluationGuide: [], pages: [] } },
          ]
        }
      },
    },
  },
};

export function listClasses() {
  return Object.keys(registry);
}

export function listSubjects(className: string) {
  return Object.keys(registry[className]?.subjects ?? {});
}

export function listChapters(className: string, subject: string) {
  return Object.keys(registry[className]?.subjects?.[subject]?.chapters ?? {});
}

export function listTopics(className: string, subject: string, chapter: string): Topic[] {
  return registry[className]?.subjects?.[subject]?.chapters?.[chapter] ?? [];
}

export function getAllTopicsInSubject(className: string, subject: string): Topic[] {
  const chapters = listChapters(className, subject);
  return chapters.flatMap(chapter => listTopics(className, subject, chapter));
}

export function getAllTopicsInChapter(className: string, subject: string, chapter: string): Topic[] {
  return listTopics(className, subject, chapter);
}

export function getTopic(className: string, subject: string, chapter: string, slug: string): Topic | undefined {
  return listTopics(className, subject, chapter).find((t) => t.slug === slug);
}

// Legacy function for backward compatibility
export function getTopicBySlug(className: string, subject: string, slug: string): Topic | undefined {
  const chapters = listChapters(className, subject);
  for (const chapter of chapters) {
    const topic = getTopic(className, subject, chapter, slug);
    if (topic) return topic;
  }
  return undefined;
}
