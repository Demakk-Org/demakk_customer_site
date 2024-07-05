import calendar from "@/data/calendar";
import { LANG } from "@/store/user";

interface GetMonthsProps {
  lang: LANG;
}

export default function getMonths({ lang }: GetMonthsProps) {
  let months: { name: string; abbr: string }[] = [];
  switch (lang) {
    case LANG.en:
      months = calendar.months["en"];
      break;
    case LANG.am:
      months = calendar.months["am"];
      break;
  }

  return months;
}
