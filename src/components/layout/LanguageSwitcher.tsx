import { useTranslation } from "react-i18next";

export function LanguageSwitcher() {
  const { i18n } = useTranslation();

  return (
    <div className="lang-switcher" role="group" aria-label="Language switcher">
      {(["en", "de"] as const).map((lng) => (
        <button
          key={lng}
          type="button"
          className={i18n.resolvedLanguage === lng ? "lang-switcher__btn is-active" : "lang-switcher__btn"}
          onClick={() => void i18n.changeLanguage(lng)}
        >
          {lng.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
