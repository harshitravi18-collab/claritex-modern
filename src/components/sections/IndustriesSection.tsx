import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { industryMeta } from "@/data/industries";
import { Button } from "@/lib/ui/Button";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { IndustryContent } from "@/lib/types/content";

type IndustriesSectionProps = {
  onNavigate: (id: string) => void;
};

export function IndustriesSection({ onNavigate }: IndustriesSectionProps) {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("industries.items", { returnObjects: true }) as IndustryContent[],
    [t]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const active = items[activeIndex];

  return (
    <Section id="industries">
      <SectionHeader label={t("industries.label")} title={t("industries.title")} />

      <div className="industries-layout">
        <div className="industries-tabs">
          {items.map((item, index) => (
            <button
              key={item.name}
              type="button"
              className={index === activeIndex ? "industry-tab is-active" : "industry-tab"}
              onClick={() => setActiveIndex(index)}
            >
              <span>{industryMeta[index]?.icon}</span>
              <span>{item.name}</span>
            </button>
          ))}
        </div>

        <Card accent={industryMeta[activeIndex]?.accent}>
          <div className="industry-head">
            <div className="icon icon--lg">{industryMeta[activeIndex]?.icon}</div>
            <div>
              <div className="section-header__label">{t("industries.subLabel")}</div>
              <h3>{active.head}</h3>
            </div>
          </div>

          <p>{active.desc}</p>

          <div className="grid grid--2">
            {active.items.map((item) => (
              <div key={item} className="list-card">
                <span style={{ color: industryMeta[activeIndex]?.accent }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>

          <Button onClick={() => onNavigate("contact")}>{t("industries.cta")}</Button>
        </Card>
      </div>
    </Section>
  );
}
