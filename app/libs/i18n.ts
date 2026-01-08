import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

/* =====================================================
   1️⃣ NGÔN NGỮ GỐC CỦA BẠN (ĐÃ CHUẨN HÓA)
===================================================== */

// Belarusian
import be from '../../public/locales/be/translation.json';

// Catalan
import ca from '../../public/locales/ca/translation.json';

// German
import de from '../../public/locales/de/translation.json';

// English
import en from '../../public/locales/en/translation.json';
import enUS from '../../public/locales/en-US/translation.json';

// French
import fr from '../../public/locales/fr/translation.json';

// Italian
import it from '../../public/locales/it/translation.json';

// Vietnamese
import vi from '../../public/locales/vi/translation.json';

// Japanese
import ja from '../../public/locales/ja/translation.json';

// Thai
import th from '../../public/locales/th/translation.json';

// Chinese (Traditional / HK)
import zhTW  from '../../public/locales/zh-TW/translation.json';
import zhHK  from '../../public/locales/zh-HK/translation.json';

// Hindi (India)
import hi from '../../public/locales/hi/translation.json';

// Czech
import cs from '../../public/locales/cs/translation.json';

// Urdu (Pakistan)
import ur from '../../public/locales/ur/translation.json';

// Filipino (Philippines)
import fil from '../../public/locales/fil/translation.json';


/* =====================================================
   2️⃣ NGÔN NGỮ ĐƯỢC THÊM MỚI (BỔ SUNG)
===================================================== */

// Portuguese (Brazil)
import ptBR from '../../public/locales/pt-BR/translation.json';

// Spanish
import es from '../../public/locales/es/translation.json';

// Portuguese (Portugal)
import pt from '../../public/locales/pt/translation.json';

// Russian
import ru from '../../public/locales/ru/translation.json';

// Korean
import ko from '../../public/locales/ko/translation.json';

// Chinese Simplified
import zhCN from '../../public/locales/zh-CN/translation.json';

// Arabic
import ar from '../../public/locales/ar/translation.json';

// Turkish
import tr from '../../public/locales/tr/translation.json';

// Dutch
import nl from '../../public/locales/nl/translation.json';

// Polish
import pl from '../../public/locales/pl/translation.json';

// Swedish
import sv from '../../public/locales/sv/translation.json';


/* =====================================================
   3️⃣ INIT i18n
===================================================== */

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      // ===== GỐC (chuẩn hóa) =====
      be: { translation: be },
      ca: { translation: ca },
      de: { translation: de },
      en: { translation: en },
      'en-US': { translation: enUS },
      fr: { translation: fr },
      it: { translation: it },
      vi: { translation: vi },
      ja: { translation: ja },
      th: { translation: th },
      'zh-TW': { translation: zhTW },
      'zh-HK': { translation: zhHK },
      hi: { translation: hi },
      cs: { translation: cs },
      'pt-BR': { translation: ptBR },
      ur: { translation: ur },
      fil: { translation: fil },

      // ===== THÊM MỚI =====
      es: { translation: es },
      pt: { translation: pt },
      ru: { translation: ru },
      ko: { translation: ko },
      'zh-CN': { translation: zhCN },
      ar: { translation: ar },
      tr: { translation: tr },
      nl: { translation: nl },
      pl: { translation: pl },
      sv: { translation: sv },
    },

    fallbackLng: 'en',

    supportedLngs: [
      // ===== GỐC =====
      'be', 'ca', 'de', 'en', 'en-US', 'fr', 'it',
      'vi', 'ja', 'th', 'zh-TW', 'zh-HK',
      'hi', 'cs', 'pt-BR', 'ur', 'fil',

      // ===== THÊM MỚI =====
      'es', 'pt', 'ru', 'ko', 'zh-CN',
      'ar', 'tr', 'nl', 'pl', 'sv'
    ],

    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },

    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
