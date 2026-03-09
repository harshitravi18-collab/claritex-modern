import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

export function AboutSection() {
  const { t } = useTranslation("home");
  const badges = useMemo(
    () => t("about.badges", { returnObjects: true }) as string[],
    [t]
  );
  const stats = useMemo(
    () => t("about.stats", { returnObjects: true }) as Array<{ value: string; label: string }>,
    [t]
  );

  return (
    <Section id="about" tone="tint">
      <SectionHeader
        align="center"
        label={t("about.label")}
        title={t("about.title")}
      />

      <div className="grid grid--2 about-grid">
        <div className="stack">
          <p>{t("about.paragraph1")}</p>
          <p>{t("about.paragraph2")}</p>
          <div className="chip-row">
            {badges.map((badge) => (
              <span key={badge} className="chip chip--accent">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="grid grid--2">
          {stats.map((item) => (
            <Card key={item.label}>
              <div className="stat__value">{item.value}</div>
              <div className="stat__label">{item.label}</div>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
