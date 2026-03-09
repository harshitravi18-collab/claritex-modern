import { useTranslation } from "react-i18next";
import { Button } from "@/lib/ui/Button";
import { Section } from "@/lib/ui/Section";

type CTASectionProps = {
  onNavigate: (id: string) => void;
};

export function CTASection({ onNavigate }: CTASectionProps) {
  const { t } = useTranslation("home");

  return (
    <Section tone="tint" className="cta-section">
      <div className="cta-section__inner">
        <h2 className="cta-section__title">{t("cta.title")}</h2>
        <p className="cta-section__description">{t("cta.description")}</p>
        <Button onClick={() => onNavigate("contact")}>{t("cta.button")}</Button>
      </div>
    </Section>
  );
}
