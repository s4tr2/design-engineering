"use client";

import { phases } from "@/data/exercises";
import { useProgress, ProgressBar } from "@/components/ProgressTracker";
import Link from "next/link";

export default function PlaygroundPage() {
  const { phaseProgress } = useProgress();

  const totalExercises = phases.reduce(
    (sum, p) => sum + p.exercises.length,
    0
  );
  const totalCompleted = phases.reduce((sum, p) => {
    const { completed } = phaseProgress(
      p.slug,
      p.exercises.map((e) => e.slug)
    );
    return sum + completed;
  }, 0);

  return (
    <main className="min-h-screen">
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-background/80 border-b border-card-border">
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="font-mono text-sm tracking-tight hover:text-accent transition"
            >
              design/engineering
            </Link>
            <span className="text-card-border">/</span>
            <span className="font-mono text-sm text-accent">playground</span>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <p className="text-accent font-mono text-sm mb-4 tracking-wider uppercase">
            Interactive Playground
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
            Learn by Building
          </h1>
          <p className="text-lg text-muted max-w-xl leading-relaxed mb-8">
            {totalExercises} hands-on exercises across 6 phases. Write real
            code, see instant results, and build your design engineering skills
            from the ground up.
          </p>

          {/* Overall progress */}
          <div className="max-w-md mb-16">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted">Overall Progress</span>
              <span className="text-sm font-mono text-accent">
                {Math.round((totalCompleted / totalExercises) * 100)}%
              </span>
            </div>
            <ProgressBar completed={totalCompleted} total={totalExercises} />
          </div>

          {/* Phase cards */}
          <div className="space-y-6">
            {phases.map((phase) => {
              const { completed, total } = phaseProgress(
                phase.slug,
                phase.exercises.map((e) => e.slug)
              );
              return (
                <Link
                  key={phase.slug}
                  href={`/playground/${phase.slug}`}
                  className="group block p-6 rounded-lg border border-card-border bg-card-bg hover:border-accent/40 transition-all"
                >
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-baseline gap-3 mb-1">
                        <span className="font-mono text-xs text-accent">
                          {phase.number}
                        </span>
                        <h2 className="text-xl font-semibold tracking-tight group-hover:text-accent transition">
                          {phase.title}
                        </h2>
                      </div>
                      <p className="text-sm text-muted mt-1">
                        {phase.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted shrink-0">
                      <span className="font-mono">
                        {phase.exercises.length} exercises
                      </span>
                    </div>
                  </div>
                  <ProgressBar completed={completed} total={total} />
                  <div className="mt-4 flex flex-wrap gap-2">
                    {phase.exercises.map((ex) => (
                      <span
                        key={ex.slug}
                        className="text-xs px-2.5 py-1 rounded border border-card-border text-muted"
                      >
                        {ex.title}
                      </span>
                    ))}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
