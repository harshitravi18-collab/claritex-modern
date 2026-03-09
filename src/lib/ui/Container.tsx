import type { HTMLAttributes, PropsWithChildren } from "react";
import { cn } from "@/lib/utils/cn";

type ContainerProps = PropsWithChildren<HTMLAttributes<HTMLDivElement>>;

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("container", className)} {...props}>
      {children}
    </div>
  );
}
