import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { caseStudyAccents } from "@/data/caseStudies";
import { Button } from "@/lib/ui/Button";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { CaseStudyContent } from "@/lib/types/content";

export function CaseStudiesSection() {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("caseStudies.items", { returnObjects: true }) as CaseStudyContent[],
    [t]
  );

  return (
    <Section id="case-studies">
      <div className="split-heading">
        <SectionHeader
          label={t("caseStudies.label")}
          title={t("caseStudies.title")}
        />
        <Button variant="ghost">{t("caseStudies.cta")}</Button>
      </div>

      <div className="grid grid--2">
        {items.map((item, index) => (
          <Card key={item.title} accent={caseStudyAccents[index]} hover>
            <div className="inline-badge" style={{ color: caseStudyAccents[index] }}>
              {item.tag}
            </div>
            <h3>{item.title}</h3>
            <div className="stats-row">
              {item.stats.map((stat) => (
                <div key={`${item.title}-${stat.l}`} className="mini-stat">
                  <div className="mini-stat__value" style={{ color: caseStudyAccents[index] }}>
                    {stat.v}
                  </div>
                  <div className="mini-stat__label">{stat.l}</div>
                </div>
              ))}
            </div>
            <p>{item.desc}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
