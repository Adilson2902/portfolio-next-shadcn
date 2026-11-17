"use client";

import dynamic from "next/dynamic";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";

const HeroScene3D = dynamic(
  () => import("./HeroScene3D").then((m) => m.HeroScene3D),
  { ssr: false },
);

interface NetworkInformationLike {
  saveData?: boolean;
}

interface BackdropCapabilities {
  enabled: boolean;
  compact: boolean;
}

const DISABLED_CAPABILITIES: BackdropCapabilities = {
  enabled: false,
  compact: false,
};

// WebGL capability is stable for the session — probe once, cache the result.
let cachedCapabilities: BackdropCapabilities | null = null;

function getBackdropCapabilities(): BackdropCapabilities {
  if (cachedCapabilities === null) {
    const probe = document.createElement("canvas");
    const webgl = !!(probe.getContext("webgl2") || probe.getContext("webgl"));
    const reduced =
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
    const connection = (
      navigator as Navigator & { connection?: NetworkInformationLike }
    ).connection;
    const saveData = Boolean(connection?.saveData);
    const compact =
      window.matchMedia?.("(max-width: 768px), (pointer: coarse)").matches ??
      false;

    cachedCapabilities = {
      enabled: webgl && !reduced && !saveData,
      compact,
    };
  }
  return cachedCapabilities;
}

const subscribe = () => () => {};
const getServerSnapshot = (): BackdropCapabilities => DISABLED_CAPABILITIES;

// Progressive enhancement:
// - Returns null without WebGL, with reduced-motion, or Save-Data (also keeps jsdom tests clean)
// - Defers Three.js mount on mobile until after first paint / idle
// - Pauses the WebGL loop whenever the Hero scrolls out of view
export function HeroBackdrop() {
  const { enabled, compact } = useSyncExternalStore(
    subscribe,
    getBackdropCapabilities,
    getServerSnapshot,
  );

  const containerRef = useRef<HTMLDivElement>(null);
  const [idleReady, setIdleReady] = useState(false);
  const [inView, setInView] = useState(true);

  const ready = enabled && (!compact || idleReady);

  useEffect(() => {
    if (!enabled || !compact || idleReady) return;

    const win = window as Window & {
      requestIdleCallback?: (
        cb: IdleRequestCallback,
        opts?: IdleRequestOptions,
      ) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (typeof win.requestIdleCallback === "function") {
      const idleId = win.requestIdleCallback(() => setIdleReady(true), {
        timeout: 450,
      });
      return () => win.cancelIdleCallback?.(idleId);
    }

    const timerId = window.setTimeout(() => setIdleReady(true), 220);
    return () => window.clearTimeout(timerId);
  }, [enabled, compact, idleReady]);

  useEffect(() => {
    if (!ready) return;
    const el = containerRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry) {
          setInView(entry.isIntersecting);
        }
      },
      { threshold: 0.01 },
    );

    io.observe(el);
    return () => io.disconnect();
  }, [ready]);

  if (!enabled) return null;

  return (
    <div ref={containerRef} className="hero-backdrop" aria-hidden="true">
      {ready ? <HeroScene3D compact={compact} active={inView} /> : null}
    </div>
  );
}
