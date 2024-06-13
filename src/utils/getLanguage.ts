import { default as language } from "@/data/dictionary";
import { LANG } from "@/store/user";

const getLanguage = (type: string, lang?: LANG): string => {
  const defaultLang: LANG = LANG.en;

  var chosenLanguage: any = language.am;

  switch (lang) {
    case LANG.en:
      chosenLanguage = language.en;
      break;
    case LANG.am:
      chosenLanguage = language.am;
      if (!chosenLanguage[type]) chosenLanguage = language.en;
      break;
  }

  return chosenLanguage[type];
};

export default getLanguage;
