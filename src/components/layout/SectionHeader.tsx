import type { ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

type SectionHeaderProps = {
  label: string;
  title: ReactNode;
  description?: string;
  align?: "left" | "center";
  action?: ReactNode;
};

export function SectionHeader({
  label,
  title,
  description,
  align = "left",
  action
}: SectionHeaderProps) {
  return (
    <div className={cn("section-header", align === "center" && "section-header--center")}>
      <div className="section-header__label">{label}</div>
      <h2 className="section-header__title">{title}</h2>
      {description ? <p className="section-header__description">{description}</p> : null}
      {action ? <div className="section-header__action">{action}</div> : null}
    </div>
  );
}
