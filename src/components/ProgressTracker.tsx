"use client";

import { useEffect, useState, useCallback } from "react";

const STORAGE_KEY = "de-playground-progress";

export interface Progress {
  [exerciseId: string]: boolean;
}

export function useProgress() {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) setProgress(JSON.parse(stored));
    } catch {
      // ignore
    }
  }, []);

  const markComplete = useCallback(
    (exerciseId: string) => {
      const next = { ...progress, [exerciseId]: true };
      setProgress(next);
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    },
    [progress]
  );

  const isComplete = useCallback(
    (exerciseId: string) => !!progress[exerciseId],
    [progress]
  );

  const phaseProgress = useCallback(
    (phaseSlug: string, exerciseIds: string[]) => {
      const completed = exerciseIds.filter(
        (id) => progress[`${phaseSlug}/${id}`]
      ).length;
      return { completed, total: exerciseIds.length };
    },
    [progress]
  );

  return { progress, markComplete, isComplete, phaseProgress };
}

export function ProgressBar({
  completed,
  total,
}: {
  completed: number;
  total: number;
}) {
  const pct = total > 0 ? (completed / total) * 100 : 0;
  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 h-1.5 bg-card-border rounded-full overflow-hidden">
        <div
          className="h-full bg-accent rounded-full transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>
      <span className="text-xs font-mono text-muted">
        {completed}/{total}
      </span>
    </div>
  );
}
