import calendar from "@/data/calendar";
import { LANG } from "@/store/user";

interface GetMonthsProps {
  lang: LANG;
  index: number;
}

export default function getMonths({ lang, index }: GetMonthsProps) {
  let month: string[] = [];
  switch (lang) {
    case LANG.en:
      month = calendar.months["en"];
      break;
    case LANG.am:
      month = calendar.months["am"];
      break;
  }
  return month[index];
}
