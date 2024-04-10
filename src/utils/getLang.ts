import { LANG } from "@/store/user";

export default function getLang(lang: string): LANG {
  switch (lang) {
    case "en":
      return LANG.en;
    case "am":
      return LANG.am;
    default:
      return LANG.en;
  }
}
