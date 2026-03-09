import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";
import { Container } from "@/lib/ui/Container";

type SectionProps = PropsWithChildren<
  HTMLAttributes<HTMLElement> & {
    tone?: "default" | "dark" | "tint";
    padded?: boolean;
    containerClassName?: string;
  }
>;

export function Section({
  children,
  className,
  tone = "default",
  padded = true,
  containerClassName,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("section", padded && "section--padded", `section--${tone}`, className)}
      {...props}
    >
      <Container className={containerClassName}>{children}</Container>
    </section>
  );
}
