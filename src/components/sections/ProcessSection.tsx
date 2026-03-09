import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { processIcons } from "@/data/process";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { ProcessStepContent } from "@/lib/types/content";

export function ProcessSection() {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("process.items", { returnObjects: true }) as ProcessStepContent[],
    [t]
  );

  return (
    <Section id="process" tone="dark">
      <SectionHeader
        align="center"
        label={t("process.label")}
        title={t("process.title")}
      />

      <div className="grid grid--4">
        {items.map((item, index) => (
          <Card key={item.n}>
            <div className="process-step__number">{item.n}</div>
            <div className="icon">{processIcons[index]}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
