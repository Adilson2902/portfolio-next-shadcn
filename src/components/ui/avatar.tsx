import Image from "next/image";
import { cn } from "@/lib/utils";

interface AvatarProps {
  src?: string;
  alt?: string;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: "w-8 h-8",
  md: "w-12 h-12",
  lg: "w-16 h-16",
  xl: "w-24 h-24",
};

export function Avatar({ src, alt = "Avatar", size = "md", className }: AvatarProps) {
  return (
    <div className={cn("relative rounded-full overflow-hidden", sizeMap[size], className)}>
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold">
          {alt.charAt(0).toUpperCase()}
        </div>
      )}
    </div>
  );
}
