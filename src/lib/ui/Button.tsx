import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: "primary" | "ghost" | "soft";
    fullWidth?: boolean;
  }
>;

export function Button({
  children,
  variant = "primary",
  className,
  fullWidth = false,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn("btn", `btn--${variant}`, fullWidth && "btn--full", className)}
      {...props}
    >
      {children}
    </button>
  );
}
