export type LessonBlock =
  | { type: "text"; content: string }
  | { type: "code"; code: string }
  | { type: "editor"; starterCode: string }
  | {
      type: "quiz";
      question: string;
      answers: string[];
      correct: number;
    };

export type Lesson = {
  id: string;
  title: string;
  blocks: LessonBlock[];
};