import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { bpoMeta } from "@/data/services";
import { Button } from "@/lib/ui/Button";
import { Card } from "@/lib/ui/Card";
import { Section } from "@/lib/ui/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import type { BPOCategoryContent } from "@/lib/types/content";

type BPOSectionProps = {
  onNavigate: (id: string) => void;
};

export function BPOSection({ onNavigate }: BPOSectionProps) {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("bpo.items", { returnObjects: true }) as BPOCategoryContent[],
    [t]
  );
  const [activeIndex, setActiveIndex] = useState(0);
  const current = items[activeIndex];

  return (
    <Section id="bpo">
      <div className="split-heading">
        <SectionHeader
          label={t("bpo.label")}
          title={t("bpo.title")}
          description={t("bpo.description")}
        />
        <Button variant="ghost" onClick={() => onNavigate("contact")}>
          {t("bpo.cta")}
        </Button>
      </div>

      <div className="tab-row">
        {items.map((item, index) => (
          <button
            key={item.cat}
            type="button"
            className={index === activeIndex ? "tab is-active" : "tab"}
            style={{ ["--accent" as string]: bpoMeta[index]?.accent }}
            onClick={() => setActiveIndex(index)}
          >
            {bpoMeta[index]?.icon} {item.cat}
          </button>
        ))}
      </div>

      <Card accent={bpoMeta[activeIndex]?.accent} className="bpo-panel">
        <h3>{current.cat}</h3>
        <p>{current.desc}</p>
        <div className="chip-row">
          {current.svcs.map((item) => (
            <span key={item} className="chip" style={{ ["--accent" as string]: bpoMeta[activeIndex]?.accent }}>
              {item}
            </span>
          ))}
        </div>
      </Card>

      <div className="grid grid--3">
        {items.map((item, index) => (
          <Card key={item.cat} accent={bpoMeta[index]?.accent} hover className={index === activeIndex ? "is-selected" : undefined}>
            <h3>{bpoMeta[index]?.icon} {item.cat}</h3>
            <p>{item.svcs.slice(0, 4).join(" · ")}</p>
          </Card>
        ))}
      </div>
    </Section>
  );
}
