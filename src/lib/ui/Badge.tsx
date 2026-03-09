import type { HTMLAttributes, PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<
  HTMLAttributes<HTMLSpanElement> & {
    accent?: string;
  }
>;

export function Badge({ children, accent, style, ...props }: BadgeProps) {
  return (
    <span
      className="badge"
      style={{
        ...style,
        ...(accent ? { ["--accent" as string]: accent } : {})
      }}
      {...props}
    >
      {children}
    </span>
  );
}
