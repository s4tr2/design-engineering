import { foundation } from "./foundation";
import { coreCraft } from "./core-craft";
import { motion } from "./motion";
import { creativeCoding } from "./creative-coding";
import { polish } from "./polish";
import { growth } from "./growth";
import type { Phase } from "./types";

export const phases: Phase[] = [
  foundation,
  coreCraft,
  motion,
  creativeCoding,
  polish,
  growth,
];

export function getPhase(slug: string): Phase | undefined {
  return phases.find((p) => p.slug === slug);
}

export function getExercise(phaseSlug: string, exerciseSlug: string) {
  const phase = getPhase(phaseSlug);
  if (!phase) return undefined;
  const exerciseIndex = phase.exercises.findIndex(
    (e) => e.slug === exerciseSlug
  );
  if (exerciseIndex === -1) return undefined;
  return {
    exercise: phase.exercises[exerciseIndex],
    prev: exerciseIndex > 0 ? phase.exercises[exerciseIndex - 1] : null,
    next:
      exerciseIndex < phase.exercises.length - 1
        ? phase.exercises[exerciseIndex + 1]
        : null,
  };
}

export type { Phase, Exercise } from "./types";
