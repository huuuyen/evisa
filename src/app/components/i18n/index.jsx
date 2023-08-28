import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../locales/en/translation.json';
import translationsInGerman from '../locales/de/translation.json';
import translationsInItalian from '../locales/it/translation.json';
import translationsInVietNam from '../locales/vn/translation.json';
// the translations
const resources = {
    en: {
        translation: translationsInEng
    },
    de: {
        translation: translationsInGerman
    },
    it: {
        translation: translationsInItalian
    },
    vn: {
        translation: translationsInVietNam
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources, // resources are important to load translations for the languages.
        lng: "vn", // It acts as default language. When the site loads, content is shown in this language.  
        debug: true,
        fallbackLng: "de", // use de if selected language is not available
        interpolation: {
            escapeValue: false
        },
        ns: "translation", // namespaces help to divide huge translations into multiple small files.
        defaultNS: "translation"
    });

export default i18n;