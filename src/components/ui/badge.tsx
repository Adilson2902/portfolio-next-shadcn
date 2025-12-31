import { cn } from "@/lib/utils";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "success" | "warning" | "error" | "info";
  className?: string;
}

const variantStyles = {
  default: "bg-purple-500/10 text-purple-300 border-purple-500/20",
  success: "bg-green-500/10 text-green-300 border-green-500/20",
  warning: "bg-yellow-500/10 text-yellow-300 border-yellow-500/20",
  error: "bg-red-500/10 text-red-300 border-red-500/20",
  info: "bg-blue-500/10 text-blue-300 border-blue-500/20",
};

export function Badge({ children, variant = "default", className = "" }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
