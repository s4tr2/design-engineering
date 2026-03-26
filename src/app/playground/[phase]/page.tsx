"use client";

import { use } from "react";
import { getPhase, phases } from "@/data/exercises";
import { useProgress, ProgressBar } from "@/components/ProgressTracker";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function PhasePage({
  params,
}: {
  params: Promise<{ phase: string }>;
}) {
  const { phase: phaseSlug } = use(params);
  const phase = getPhase(phaseSlug);
  if (!phase) notFound();

  const { isComplete, phaseProgress } = useProgress();
  const { completed, total } = phaseProgress(
    phase.slug,
    phase.exercises.map((e) => e.slug)
  );

  const currentIndex = phases.findIndex((p) => p.slug === phaseSlug);
  const prevPhase = currentIndex > 0 ? phases[currentIndex - 1] : null;
  const nextPhase =
    currentIndex < phases.length - 1 ? phases[currentIndex + 1] : null;

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
            <Link
              href="/playground"
              className="font-mono text-sm hover:text-accent transition"
            >
              playground
            </Link>
            <span className="text-card-border">/</span>
            <span className="font-mono text-sm text-accent">{phase.slug}</span>
          </div>
        </div>
      </nav>

      <section className="pt-32 pb-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-baseline gap-3 mb-2">
            <span className="font-mono text-xs text-accent">
              Phase {phase.number}
            </span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight mb-3">
            {phase.title}
          </h1>
          <p className="text-muted mb-8 max-w-xl">{phase.description}</p>

          <div className="max-w-md mb-12">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted">Phase Progress</span>
              <span className="text-sm font-mono text-accent">
                {completed}/{total}
              </span>
            </div>
            <ProgressBar completed={completed} total={total} />
          </div>

          {/* Exercise list */}
          <div className="space-y-3">
            {phase.exercises.map((exercise, i) => {
              const exerciseComplete = isComplete(
                `${phase.slug}/${exercise.slug}`
              );
              return (
                <Link
                  key={exercise.slug}
                  href={`/playground/${phase.slug}/${exercise.slug}`}
                  className="group flex items-center gap-4 p-5 rounded-lg border border-card-border bg-card-bg hover:border-accent/40 transition-all"
                >
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-mono shrink-0 ${
                      exerciseComplete
                        ? "bg-green-500/10 text-green-400 border border-green-500/20"
                        : "bg-card-bg text-muted border border-card-border"
                    }`}
                  >
                    {exerciseComplete ? "\u2713" : i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-[15px] group-hover:text-accent transition">
                      {exercise.title}
                    </h3>
                    <div className="flex items-center gap-3 mt-1">
                      <span
                        className={`text-xs px-2 py-0.5 rounded ${
                          exercise.difficulty === "beginner"
                            ? "bg-green-500/10 text-green-400"
                            : exercise.difficulty === "intermediate"
                              ? "bg-yellow-500/10 text-yellow-400"
                              : "bg-red-500/10 text-red-400"
                        }`}
                      >
                        {exercise.difficulty}
                      </span>
                      <span className="text-xs text-muted font-mono">
                        ~{exercise.estimatedMinutes} min
                      </span>
                      <span className="text-xs text-muted font-mono uppercase">
                        {exercise.language}
                      </span>
                    </div>
                  </div>
                  <span className="text-muted group-hover:text-accent transition text-sm">
                    &rarr;
                  </span>
                </Link>
              );
            })}
          </div>

          {/* Phase navigation */}
          <div className="flex items-center justify-between mt-12 pt-8 border-t border-card-border">
            {prevPhase ? (
              <Link
                href={`/playground/${prevPhase.slug}`}
                className="text-sm text-muted hover:text-foreground transition"
              >
                &larr; {prevPhase.title}
              </Link>
            ) : (
              <div />
            )}
            {nextPhase ? (
              <Link
                href={`/playground/${nextPhase.slug}`}
                className="text-sm text-muted hover:text-foreground transition"
              >
                {nextPhase.title} &rarr;
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
