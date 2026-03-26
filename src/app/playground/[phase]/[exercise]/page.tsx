"use client";

import { use } from "react";
import { getExercise } from "@/data/exercises";
import Playground from "@/components/Playground";
import { notFound } from "next/navigation";

export default function ExercisePage({
  params,
}: {
  params: Promise<{ phase: string; exercise: string }>;
}) {
  const { phase, exercise: exerciseSlug } = use(params);
  const result = getExercise(phase, exerciseSlug);
  if (!result) notFound();

  const { exercise, prev, next } = result;

  return (
    <Playground
      exercise={exercise}
      phaseSlug={phase}
      prevExercise={prev ? { slug: prev.slug, title: prev.title } : null}
      nextExercise={next ? { slug: next.slug, title: next.title } : null}
    />
  );
}
