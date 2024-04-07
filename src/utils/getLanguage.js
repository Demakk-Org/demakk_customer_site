import { default as language } from "@/data/dictionary";

const getLanguage = (type, lang) => {
  const LANG = "en";
  // console.log(language?.lang?.type);

  if (!language[lang] || !language[lang][type]) {
    return language[LANG][type];
  }

  return language[lang][type];
};

export default getLanguage;
