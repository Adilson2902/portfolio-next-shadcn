"use client";

import { Star } from "lucide-react";
import { useState } from "react";

interface RatingProps {
  value?: number;
  max?: number;
  onChange?: (value: number) => void;
  readonly?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "w-4 h-4",
  md: "w-5 h-5",
  lg: "w-6 h-6",
};

export function Rating({
  value = 0,
  max = 5,
  onChange,
  readonly = false,
  size = "md",
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState(0);

  const handleClick = (index: number) => {
    if (!readonly && onChange) {
      onChange(index + 1);
    }
  };

  return (
    <div className="flex items-center gap-1">
      {[...Array(max)].map((_, index) => {
        const isFilled = (hoverValue || value) > index;
        return (
          <button
            key={index}
            type="button"
            onClick={() => handleClick(index)}
            onMouseEnter={() => !readonly && setHoverValue(index + 1)}
            onMouseLeave={() => !readonly && setHoverValue(0)}
            disabled={readonly}
            className={`transition-all ${readonly ? "cursor-default" : "cursor-pointer hover:scale-110"}`}
          >
            <Star
              className={`${sizeMap[size]} transition-all ${
                isFilled
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-600"
              }`}
            />
          </button>
        );
      })}
    </div>
  );
}
