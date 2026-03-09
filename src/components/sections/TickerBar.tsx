import { useMemo } from "react";
import { useTranslation } from "react-i18next";

export function TickerBar() {
  const { t } = useTranslation("home");
  const items = useMemo(
    () => t("ticker.items", { returnObjects: true }) as string[],
    [t]
  );

  const repeated = [...items, ...items, ...items];

  return (
    <div className="ticker">
      <div className="ticker__track">
        {repeated.map((item, index) => (
          <span key={`${item}-${index}`} className="ticker__item">
            <span className="ticker__dot">◆</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
