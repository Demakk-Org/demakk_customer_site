import { default as language } from "@/data/dictionary";
import { LANG } from "@/store/user";

const getLanguage = (type: string, lang: LANG): string => {
  const defaultLang: LANG = LANG.en;

  var choosenLanguage: any = language.am;

  switch (lang) {
    case LANG.en:
      choosenLanguage = language.en;
      break;
    case LANG.am:
      choosenLanguage = language.am;
      break;
  }

  return choosenLanguage[type];
};

export default getLanguage;

getLanguage("demakk", LANG.en);
