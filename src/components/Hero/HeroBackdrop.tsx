"use client";
import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const CanvasRevealEffect = dynamic(
  () =>
    import("@/components/ui/canvas-reveal-effect").then(
      (m) => m.CanvasRevealEffect,
    ),
  { ssr: false },
);

// WebGL capability is stable for the session — probe once, cache the result.
let cached: boolean | null = null;
function supportsBackdrop() {
  if (cached === null) {
    const probe = document.createElement("canvas");
    const webgl = !!(probe.getContext("webgl2") || probe.getContext("webgl"));
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    cached = webgl && !reduced;
  }
  return cached;
}
const subscribe = () => () => {};
const getServerSnapshot = () => false;

// Progressive enhancement: renders nothing without WebGL or with
// reduced-motion (also keeps jsdom tests free of a GL context).
export function HeroBackdrop() {
  const enabled = useSyncExternalStore(
    subscribe,
    supportsBackdrop,
    getServerSnapshot,
  );
  if (!enabled) return null;
  return (
    <div className="hero-backdrop" aria-hidden="true">
      <CanvasRevealEffect
        colors={[
          [139, 92, 246],
          [236, 72, 153],
          [34, 211, 238],
        ]}
        dotSize={3}
        animationSpeed={0.5}
        opacities={[0.08, 0.08, 0.14, 0.16, 0.22, 0.26, 0.32, 0.38, 0.46, 0.55]}
        showGradient={false}
        containerClassName="bg-transparent"
      />
    </div>
  );
}
