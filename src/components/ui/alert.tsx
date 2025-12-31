import { cn } from "@/lib/utils";
import { AlertCircle, CheckCircle, Info, XCircle } from "lucide-react";

interface AlertProps {
  children: React.ReactNode;
  variant?: "info" | "success" | "warning" | "error";
  className?: string;
}

const variantStyles = {
  info: {
    container: "bg-blue-500/10 border-blue-500/30",
    icon: "text-blue-400",
    iconComponent: Info,
  },
  success: {
    container: "bg-green-500/10 border-green-500/30",
    icon: "text-green-400",
    iconComponent: CheckCircle,
  },
  warning: {
    container: "bg-yellow-500/10 border-yellow-500/30",
    icon: "text-yellow-400",
    iconComponent: AlertCircle,
  },
  error: {
    container: "bg-red-500/10 border-red-500/30",
    icon: "text-red-400",
    iconComponent: XCircle,
  },
};

export function Alert({ children, variant = "info", className }: AlertProps) {
  const styles = variantStyles[variant];
  const IconComponent = styles.iconComponent;

  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 rounded-xl border",
        styles.container,
        className
      )}
    >
      <IconComponent className={cn("w-5 h-5 flex-shrink-0 mt-0.5", styles.icon)} />
      <div className="text-sm text-gray-300">{children}</div>
    </div>
  );
}
