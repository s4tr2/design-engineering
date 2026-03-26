"use client";

import { useState, useCallback } from "react";
import CodeEditor from "./CodeEditor";
import Preview from "./Preview";
import { useProgress } from "./ProgressTracker";
import type { Exercise } from "@/data/exercises/types";

interface PlaygroundProps {
  exercise: Exercise;
  phaseSlug: string;
  prevExercise?: { slug: string; title: string } | null;
  nextExercise?: { slug: string; title: string } | null;
}

export default function Playground({
  exercise,
  phaseSlug,
  prevExercise,
  nextExercise,
}: PlaygroundProps) {
  const [code, setCode] = useState(exercise.starterCode);
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);
  const [validationResult, setValidationResult] = useState<{
    passed: boolean;
    message: string;
  } | null>(null);
  const { markComplete, isComplete } = useProgress();

  const exerciseId = `${phaseSlug}/${exercise.slug}`;
  const completed = isComplete(exerciseId);

  const handleCheck = useCallback(() => {
    if (exercise.validation) {
      const result = exercise.validation(code);
      setValidationResult(result);
      if (result.passed) {
        markComplete(exerciseId);
      }
    } else {
      markComplete(exerciseId);
      setValidationResult({ passed: true, message: "Marked as complete!" });
    }
  }, [code, exercise, exerciseId, markComplete]);

  const handleReset = useCallback(() => {
    setCode(exercise.starterCode);
    setShowHint(false);
    setShowSolution(false);
    setValidationResult(null);
  }, [exercise.starterCode]);

  const handleShowSolution = useCallback(() => {
    setShowSolution(true);
    setCode(exercise.solution);
  }, [exercise.solution]);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-card-border bg-[#111]">
        <div className="flex items-center gap-4">
          <a
            href={`/playground/${phaseSlug}`}
            className="text-muted hover:text-foreground transition text-sm"
          >
            &larr; Back
          </a>
          <div className="h-4 w-px bg-card-border" />
          <h1 className="text-sm font-medium truncate max-w-md">
            {exercise.title}
          </h1>
          {completed && (
            <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/10 text-green-400 border border-green-500/20">
              Completed
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          {prevExercise && (
            <a
              href={`/playground/${phaseSlug}/${prevExercise.slug}`}
              className="text-xs px-3 py-1.5 rounded border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition"
            >
              &larr; Prev
            </a>
          )}
          {nextExercise && (
            <a
              href={`/playground/${phaseSlug}/${nextExercise.slug}`}
              className="text-xs px-3 py-1.5 rounded border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition"
            >
              Next &rarr;
            </a>
          )}
        </div>
      </div>

      <div className="flex-1 flex overflow-hidden">
        {/* Instructions panel */}
        <div className="w-[380px] min-w-[320px] border-r border-card-border overflow-y-auto bg-[#111]">
          <div className="p-6">
            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono text-accent px-2 py-0.5 rounded bg-accent/10">
                {exercise.difficulty}
              </span>
              <span className="text-xs font-mono text-muted">
                ~{exercise.estimatedMinutes} min
              </span>
            </div>

            <h2 className="text-lg font-semibold mb-4">{exercise.title}</h2>

            <div className="prose-sm text-muted space-y-3 text-sm leading-relaxed">
              {exercise.instructions.map((para, i) => (
                <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
              ))}
            </div>

            {exercise.requirements && (
              <div className="mt-6">
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  Requirements
                </h3>
                <ul className="space-y-2">
                  {exercise.requirements.map((req, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="text-card-border mt-0.5">&#9679;</span>
                      <span dangerouslySetInnerHTML={{ __html: req }} />
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {exercise.references && exercise.references.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xs font-mono text-accent uppercase tracking-wider mb-3">
                  References
                </h3>
                <div className="space-y-1.5">
                  {exercise.references.map((ref, i) => (
                    <a
                      key={i}
                      href={ref.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-sm text-accent-light hover:underline"
                    >
                      {ref.title} &nearr;
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Hint */}
            <div className="mt-6">
              {!showHint ? (
                <button
                  onClick={() => setShowHint(true)}
                  className="text-xs px-3 py-1.5 rounded border border-card-border text-muted hover:text-foreground hover:border-accent/40 transition"
                >
                  Show Hint
                </button>
              ) : (
                <div className="p-3 rounded bg-accent/5 border border-accent/20 text-sm text-muted">
                  <p className="text-xs font-mono text-accent mb-1">Hint</p>
                  <p dangerouslySetInnerHTML={{ __html: exercise.hint }} />
                </div>
              )}
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-wrap gap-2">
              <button
                onClick={handleCheck}
                className="text-sm px-4 py-2 rounded bg-accent hover:bg-accent-light text-white font-medium transition"
              >
                Check Solution
              </button>
              <button
                onClick={handleReset}
                className="text-sm px-4 py-2 rounded border border-card-border text-muted hover:text-foreground transition"
              >
                Reset
              </button>
              <button
                onClick={handleShowSolution}
                className="text-sm px-4 py-2 rounded border border-card-border text-muted hover:text-foreground transition"
              >
                Show Solution
              </button>
            </div>

            {/* Validation result */}
            {validationResult && (
              <div
                className={`mt-4 p-3 rounded text-sm ${
                  validationResult.passed
                    ? "bg-green-500/10 border border-green-500/20 text-green-400"
                    : "bg-red-500/10 border border-red-500/20 text-red-400"
                }`}
              >
                {validationResult.message}
              </div>
            )}
          </div>
        </div>

        {/* Editor + Preview */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 flex">
            <div className="flex-1 border-r border-card-border">
              <CodeEditor
                initialCode={code}
                language={exercise.language}
                onChange={setCode}
              />
            </div>
            <div className="flex-1">
              <Preview code={code} language={exercise.language} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
