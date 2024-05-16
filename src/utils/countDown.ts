import getLanguage from "./getLanguage";
import { LANG } from "@/store/user";
import getMonths from "./getMonths";
import getFullTime, { formatSingleDigitTime } from "./getFullTime";

export function countDown(time: string, lang: LANG): void {
  let countDownDate = new Date(time).getTime();

  let message = "";

  var now = new Date().getTime();
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  if (days > 3) {
    let mon = new Date(time).getMonth();
    let day = new Date(time).getDate();
    let hr = new Date(time).getHours();
    let min = new Date(time).getMinutes();
    message = ` ${getMonths({
      index: mon,
      lang,
    })} ${day}, ${formatSingleDigitTime(hr)}:${formatSingleDigitTime(
      min
    )} (GMT+3)`;

    Array.from(document.getElementsByClassName("count-down")).forEach(
      (element) => {
        element.innerHTML = message;
      }
    );

    return;
  } else {
    Array.from(document.getElementsByClassName("count-down-container")).forEach(
      (element) => {
        element.innerHTML = getLanguage("saleEnds", lang);
      }
    );

    let x = setInterval(() => {
      var now = new Date().getTime();
      var distance = countDownDate - now;

      if (distance < 0) {
        clearInterval(x);
        Array.from(
          document.getElementsByClassName("count-down-container")
        ).forEach((item) => (item.innerHTML = getLanguage("expired", lang)));
        Array.from(document.getElementsByClassName("count-down")).forEach(
          (item) => (item.innerHTML = "")
        );

        return;
      }

      Array.from(document.getElementsByClassName("count-down")).forEach(
        (item) => (item.innerHTML = getFullTime(distance))
      );
    }, 1000);
  }
}
