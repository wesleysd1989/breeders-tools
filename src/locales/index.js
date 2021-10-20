/* eslint-disable import/order */
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// EN
import ENHome from "./en/home.json";

// PT
import PTHome from "./pt/home.json";

const resources = {
  "pt-BR": {
    home: PTHome,
  },
  "en-US": {
    home: ENHome,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: false,
    resources,
    lng: navigator.language,
    fallbackLng: "pt-BR",
    keySeparator: false,
    nsSeparator: false,
    ns: ["translations"],
    defaultNS: "translations",
    react: {
      useSuspense: true,
    },
  });

export default i18n;
