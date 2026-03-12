import { useTranslation } from "react-i18next";
import { Button } from "@/lib/ui/Button";
import { Section } from "@/lib/ui/Section";
import { Stat } from "@/lib/ui/Stat";

type HeroSectionProps = {
  onNavigate: (id: string) => void;
};

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation("home");
  const stats = t("hero.stats", { returnObjects: true }) as Array<{
    value: string;
    label: string;
  }>;
  const badges = t("hero.badges", { returnObjects: true }) as string[];

  return (
    <Section id="hero" className="hero" padded={false}>
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__glow hero__glow--one" aria-hidden="true" />
      <div className="hero__glow hero__glow--two" aria-hidden="true" />
      <div className="hero__scanline" aria-hidden="true" />

      <div className="hero__layout">
        <div>
          <div className="hero__eyebrow fu fu1">{t("hero.eyebrow")}</div>
          <h1 className="hero__title fu fu2">{t("hero.title")}</h1>
          <p className="hero__description fu fu3">{t("hero.description")}</p>

          <div className="hero__actions fu fu4">
            <Button onClick={() => onNavigate("contact")}>
              {t("common:cta.startPilot")}
            </Button>
            <Button variant="ghost" onClick={() => onNavigate("services")}>
              {t("hero.secondaryCta")}
            </Button>
          </div>

          <div className="stats-row fu fu4">
            {stats.map((stat) => (
              <Stat key={stat.label} value={stat.value} label={stat.label} />
            ))}
          </div>

          <div className="chip-row fu fu4">
            {badges.map((badge) => (
              <span key={badge} className="chip">
                {badge}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-orbit" aria-hidden="true">
          <div className="hero-orbit__ring hero-orbit__ring--large">
            <span className="hero-orbit__dot hero-orbit__dot--teal hero-orbit__dot--d1" />
            <span className="hero-orbit__dot hero-orbit__dot--blue hero-orbit__dot--d2" />
            <span className="hero-orbit__dot hero-orbit__dot--purple hero-orbit__dot--d3" />
            <span className="hero-orbit__dot hero-orbit__dot--orange hero-orbit__dot--d4" />
            <span className="hero-orbit__dot hero-orbit__dot--yellow hero-orbit__dot--d5" />
          </div>

          <div className="hero-orbit__ring hero-orbit__ring--medium">
            <span className="hero-orbit__dot hero-orbit__dot--orange hero-orbit__dot--m1" />
            <span className="hero-orbit__dot hero-orbit__dot--orange hero-orbit__dot--m2" />
            <span className="hero-orbit__dot hero-orbit__dot--orange hero-orbit__dot--m3" />
            <span className="hero-orbit__dot hero-orbit__dot--orange hero-orbit__dot--m4" />
          </div>

          <div className="hero-orbit__ring hero-orbit__ring--small">
            <span className="hero-orbit__dot hero-orbit__dot--teal hero-orbit__dot--s1" />
            <span className="hero-orbit__dot hero-orbit__dot--teal hero-orbit__dot--s2" />
            <span className="hero-orbit__dot hero-orbit__dot--teal hero-orbit__dot--s3" />
          </div>

          <div className="hero-orbit__core">
            <span>AI</span>
            <small>+ BPO</small>
          </div>

          <div className="hero-orbit__chip hero-orbit__chip--one">
            🧠 AI Training
          </div>
          <div className="hero-orbit__chip hero-orbit__chip--two">
            📄 Resume BPO
          </div>
          <div className="hero-orbit__chip hero-orbit__chip--three">
            🗄️ Data Mgmt
          </div>
        </div>
      </div>
    </Section>
  );
}
