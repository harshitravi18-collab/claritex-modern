import { useTranslation } from "react-i18next";
import { Section } from "@/lib/ui/Section";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <Section tone="dark" padded={false} className="footer">
      <div className="footer__inner">
        <div>
          <div className="footer__brand">
            Clari<span className="text-accent">tex</span>
          </div>
          <p className="footer__copy">{t("footer.tagline")}</p>
        </div>
        <div className="footer__meta">
          <span>{t("footer.rights")}</span>
        </div>
      </div>
    </Section>
  );
}
