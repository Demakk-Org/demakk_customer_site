import calendar from "@/data/calendar";
import getLanguage from "./getLanguage";
import { LANG } from "@/store/user";

const formatSingleDigitTime = (time: number): String => {
  return time < 10 ? "0" + time : time.toString();
};

export function countDown(time: string, lang: LANG): void {
  if (!time) var countDownDate = new Date("Mar 28, 2024 15:37:25").getTime();
  else var countDownDate = new Date(time).getTime();

  let message = "";

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (days > 3) {
      let mon = new Date(time).getMonth();
      let day = new Date(time).getDate();
      let hr = new Date(time).getHours();
      let min = new Date(time).getMinutes();

      message = `Sales ends: ${calendar.months} ${day}, ${formatSingleDigitTime(
        hr
      )}:${formatSingleDigitTime(min)} (GMT+3)`;

      Array.from(document.getElementsByClassName("count-down")).forEach(
        (element) => {
          element.innerHTML = message;
        }
      );
      return;
    }

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    message =
      getLanguage("saleEnds", lang) +
      days +
      " d " +
      formatSingleDigitTime(hours) +
      " : " +
      formatSingleDigitTime(minutes) +
      " : " +
      formatSingleDigitTime(seconds);

    Array.from(document.getElementsByClassName("count-down")).forEach(
      (item) => (item.innerHTML = message)
    );

    if (distance < 0) {
      clearInterval(x);
      Array.from(document.getElementsByClassName("count-down")).forEach(
        (item) => (item.innerHTML = "EXPIRED")
      );
    }
  }, 1000);
}
