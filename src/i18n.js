import tradEN from ../traductions/en.json
import tradFR from ../traductions/fr.json
import i18n from "i18next"

const ressources={
    en:{translation:trandEN},
    fr:{translation:tradFR}
}

i18n
 .use(LanguageDetector)
 .use(initReactI18next) // passes i18n down to react-i18next
 .init({
  resources,
  lng: "en",

  keySeparator: ".", // to support nested translations

 interpolation: {
 escapeValue: false // react already safes from xss
  }
 });
export default i18next;