import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { NAV_LINKS } from "@/data/navigation";
import { useDisclosure } from "@/lib/hooks/useDisclosure";
import { useScrollState } from "@/lib/hooks/useScrollState";
import { Button } from "@/lib/ui/Button";
import { LanguageSwitcher } from "@/components/layout/LanguageSwitcher";
import type { MegaMenuColumn } from "@/lib/types/content";

type NavbarProps = {
  onNavigate: (id: string) => void;
};

export function Navbar({ onNavigate }: NavbarProps) {
  const { t } = useTranslation("home");
  const scrolled = useScrollState();
  const services = useDisclosure(false);
  const hire = useDisclosure(false);
  const industries = useDisclosure(false);

  const mega = useMemo(
    () => t("navigation.mega", { returnObjects: true }) as MegaMenuColumn[],
    [t]
  );
  const hireItems = useMemo(
    () => t("navigation.hireItems", { returnObjects: true }) as string[],
    [t]
  );
  const industryItems = useMemo(
    () => t("navigation.industryItems", { returnObjects: true }) as string[],
    [t]
  );

  return (
    <nav className={scrolled ? "navbar is-scrolled" : "navbar"}>
      <div className="navbar__brand" onClick={() => onNavigate("hero")}>
        <div className="navbar__logo-box">C</div>
        <span className="navbar__logo-text">
          Clari<span className="text-accent">tex</span>
        </span>
      </div>

      <div className="navbar__links">
        <div
          className="navbar__dropdown"
          onMouseEnter={services.open}
          onMouseLeave={services.close}
        >
          <button className="navbar__link" type="button">
            {t("navigation.services")} <span className="caret">▾</span>
          </button>

          {services.isOpen ? (
            <div className="mega-menu">
              <div className="mega-menu__grid">
                {mega.map((column) => (
                  <div key={column.heading}>
                    <div className="mega-menu__heading" style={{ color: column.accent }}>
                      {column.heading}
                    </div>
                    <div className="mega-menu__stack">
                      {column.items.map((item) => (
                        <div key={item.name} className="mega-menu__item">
                          <div className="mega-menu__item-name">{item.name}</div>
                          <div className="mega-menu__item-desc">{item.desc}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mega-menu__footer">
                <span>{t("navigation.megaFooter")}</span>
                <Button onClick={() => onNavigate("contact")}>
                  {t("common:cta.startPilot")}
                </Button>
              </div>
            </div>
          ) : null}
        </div>

        <div className="navbar__dropdown" onMouseEnter={hire.open} onMouseLeave={hire.close}>
          <button className="navbar__link" type="button">
            {t("navigation.hire")} <span className="caret">▾</span>
          </button>
          {hire.isOpen ? (
            <div className="dropdown-panel">
              {hireItems.map((item) => (
                <div key={item} className="dropdown-panel__item">
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        <div
          className="navbar__dropdown"
          onMouseEnter={industries.open}
          onMouseLeave={industries.close}
        >
          <button className="navbar__link" type="button">
            {t("navigation.industries")} <span className="caret">▾</span>
          </button>
          {industries.isOpen ? (
            <div className="dropdown-panel">
              {industryItems.map((item) => (
                <div key={item} className="dropdown-panel__item">
                  {item}
                </div>
              ))}
            </div>
          ) : null}
        </div>

        {NAV_LINKS.map((item) => (
          <button
            key={item.key}
            className="navbar__link"
            type="button"
            onClick={() => onNavigate(item.target)}
          >
            {t(`navigation.links.${item.key}`)}
          </button>
        ))}

        <LanguageSwitcher />
        <Button onClick={() => onNavigate("contact")}>{t("common:cta.letsTalk")}</Button>
      </div>
    </nav>
  );
}
