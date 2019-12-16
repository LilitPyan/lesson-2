import am from "./am";
import en from "./en";
import ru from "./ru";

export default {
    interpolation: {
        escapeValue: false,
    },
    lng: 'ru',
    resources: {
        am: { translation: am, },
        en: { translation: en, },
        ru: { translation: ru, },
    },
};
