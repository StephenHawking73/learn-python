import { Lesson } from "../types/lesson";

export const lessons: Lesson[] = [
  {
    id: "Hello World!",
    title: "Dein erstes Python-Programm",
    blocks: [
      { type: "text", content: "Python kann Text ausgeben." },
      { type: "code", code: 'print("Hallo Welt")' },
    ],
  },
];
