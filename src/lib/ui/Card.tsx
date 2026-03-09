import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type CardProps = PropsWithChildren<
  HTMLAttributes<HTMLDivElement> & {
    accent?: string;
    hover?: boolean;
  }
>;

export function Card({ children, accent, hover = false, className, style, ...props }: CardProps) {
  return (
    <div
      className={cn("card", hover && "card--hover", className)}
      style={{
        ...style,
        ...(accent ? { ["--accent" as string]: accent } : {})
      }}
      {...props}
    >
      {accent ? <div className="card__topline" /> : null}
      {children}
    </div>
  );
}
