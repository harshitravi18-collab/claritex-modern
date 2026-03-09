import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { blogAccents } from "@/data/blog";
import { Button } from "@/lib/ui/Button";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { BlogPostContent } from "@/lib/types/content";

export function InsightsSection() {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("insights.items", { returnObjects: true }) as BlogPostContent[],
    [t]
  );

  return (
    <Section id="insights">
      <div className="split-heading">
        <SectionHeader label={t("insights.label")} title={t("insights.title")} />
        <Button variant="ghost">{t("insights.cta")}</Button>
      </div>

      <div className="grid grid--3">
        {items.map((item, index) => (
          <Card key={item.title} accent={blogAccents[index]} hover>
            <div className="card-meta">
              <span className="inline-badge" style={{ color: blogAccents[index] }}>
                {item.tag}
              </span>
              <span className="muted">{item.date}</span>
            </div>
            <h3>{item.title}</h3>
            <p>{item.blurb}</p>
            <button className="text-link" type="button">
              {t("common:cta.readMore")}
            </button>
          </Card>
        ))}
      </div>
    </Section>
  );
}
