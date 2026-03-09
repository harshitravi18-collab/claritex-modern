import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { overviewMeta } from "@/data/services";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { ServiceOverviewCard } from "@/lib/types/content";

type ServicesOverviewSectionProps = {
  onNavigate: (id: string) => void;
};

export function ServicesOverviewSection({ onNavigate }: ServicesOverviewSectionProps) {
  const { t } = useTranslation("home");
  const cards = useMemo(
    () => t("servicesOverview.cards", { returnObjects: true }) as ServiceOverviewCard[],
    [t]
  );

  return (
    <Section id="services">
      <SectionHeader
        align="center"
        label={t("servicesOverview.label")}
        title={t("servicesOverview.title")}
        description={t("servicesOverview.description")}
      />

      <div className="grid grid--3">
        {cards.map((card, index) => (
          <Card key={card.title} accent={overviewMeta[index]?.accent} hover>
            <div className="icon">{overviewMeta[index]?.icon}</div>
            <h3>{card.title}</h3>
            <p>{card.desc}</p>
            <button className="text-link" type="button" onClick={() => onNavigate(overviewMeta[index]?.target ?? "contact")}>
              {t("common:cta.readMore")}
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
