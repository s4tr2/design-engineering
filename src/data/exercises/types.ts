export interface Exercise {
  slug: string;
  title: string;
  difficulty: "beginner" | "intermediate" | "advanced";
  estimatedMinutes: number;
  language: "html" | "css" | "javascript";
  instructions: string[];
  requirements?: string[];
  starterCode: string;
  solution: string;
  hint: string;
  references?: { title: string; url: string }[];
  validation?: (code: string) => { passed: boolean; message: string };
}

export interface Phase {
  slug: string;
  title: string;
  number: string;
  description: string;
  exercises: Exercise[];
}
