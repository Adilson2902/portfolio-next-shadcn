"use client";
import dynamic from "next/dynamic";
import { useSyncExternalStore } from "react";

const HeroScene3D = dynamic(
  () => import("./HeroScene3D").then((m) => m.HeroScene3D),
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
      <HeroScene3D />
    </div>
  );
}
