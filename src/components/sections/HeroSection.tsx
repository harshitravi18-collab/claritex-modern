import { useTranslation } from "react-i18next";
import { Button } from "@/lib/ui/Button";
import { Section } from "@/lib/ui/Section";
import { Stat } from "@/lib/ui/Stat";

type HeroSectionProps = {
  onNavigate: (id: string) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation("home");
  const stats = t("hero.stats", { returnObjects: true }) as Array<{ value: string; label: string }>;
  const badges = t("hero.badges", { returnObjects: true }) as string[];

  return (
    <Section id="hero" className="hero" padded={false}>
      <div className="hero__layout">
        <div>
          <div className="hero__eyebrow">{t("hero.eyebrow")}</div>
          <h1 className="hero__title">{t("hero.title")}</h1>
          <p className="hero__description">{t("hero.description")}</p>

          <div className="hero__actions">
            <Button onClick={() => onNavigate("contact")}>{t("common:cta.startPilot")}</Button>
            <Button variant="ghost" onClick={() => onNavigate("services")}>
              {t("hero.secondaryCta")}
            </Button>
          </div>

          <div className="stats-row">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="chip-row">
            {badges.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="hero-orbit__ring hero-orbit__ring--large" />
          <div className="hero-orbit__ring hero-orbit__ring--medium" />
          <div className="hero-orbit__ring hero-orbit__ring--small" />
          <div className="hero-orbit__core">
            <span>AI</span>
            <small>+ BPO</small>
          </div>
          <div className="hero-orbit__chip hero-orbit__chip--one">🧠 AI Training</div>
          <div className="hero-orbit__chip hero-orbit__chip--two">📄 Resume BPO</div>
          <div className="hero-orbit__chip hero-orbit__chip--three">🗄️ Data Mgmt</div>
        </div>
      </div>
    </Section>
  );
}
