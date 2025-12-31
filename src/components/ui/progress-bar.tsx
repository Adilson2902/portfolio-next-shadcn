"use client";

import { motion } from "motion/react";

interface ProgressBarProps {
  value: number; // 0-100
  label?: string;
  showValue?: boolean;
  className?: string;
}

export function ProgressBar({
  value,
  label,
  showValue = true,
  className = "",
}: ProgressBarProps) {
  const clampedValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className={className}>
      {(label || showValue) && (
        <div className="flex items-center justify-between mb-2">
          {label && <span className="text-sm text-gray-400">{label}</span>}
          {showValue && (
            <span className="text-sm font-semibold text-purple-400">
              {clampedValue}%
            </span>
          )}
        </div>
      )}
      <div className="h-2 rounded-full glass-effect overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${clampedValue}%` }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-500"
        />
      </div>
    </div>
  );
}
