import { LANG } from "@/store/user";

export default function getLang(lang: string): LANG {
  switch (lang) {
    case "en":
      return LANG.en;
    case "am":
      return LANG.am;
    case "om":
      return LANG.om;
    default:
      return LANG.en;
  }
}
