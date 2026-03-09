import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import enCommon from "@/i18n/resources/en/common.json";
import enHome from "@/i18n/resources/en/home.json";
import deCommon from "@/i18n/resources/de/common.json";
import deHome from "@/i18n/resources/de/home.json";

void i18n.use(initReactI18next).init({
  resources: {
    en: {
      common: enCommon,
      home: enHome
    },
    de: {
      common: deCommon,
      home: deHome
    }
  },
  lng: "en",
  fallbackLng: "en",
  supportedLngs: ["en", "de"],
  ns: ["common", "home"],
  defaultNS: "common",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
