import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { aiServiceMeta } from "@/data/services";
import { Badge } from "@/lib/ui/Badge";
import { Button } from "@/lib/ui/Button";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { AIServiceContent } from "@/lib/types/content";

type AIServicesSectionProps = {
  onNavigate: (id: string) => void;
};

export function AIServicesSection({ onNavigate }: AIServicesSectionProps) {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("ai.items", { returnObjects: true }) as AIServiceContent[],
    [t]
  );

  return (
    <Section id="ai-services" tone="dark">
      <div className="split-heading">
        <SectionHeader
          label={t("ai.label")}
          title={t("ai.title")}
          description={t("ai.description")}
        />
        <Button variant="ghost" onClick={() => onNavigate("contact")}>
          {t("ai.cta")}
        </Button>
      </div>

      <div className="grid grid--3">
        {items.map((item, index) => (
          <Card key={item.title} accent={aiServiceMeta[index]?.accent} hover>
            <div className="card-head">
              <span className="icon">{aiServiceMeta[index]?.icon}</span>
              <Badge accent={aiServiceMeta[index]?.accent}>{item.tag}</Badge>
            </div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
