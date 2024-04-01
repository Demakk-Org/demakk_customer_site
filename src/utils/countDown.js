import calendar from "@/data/calendar";

const formatSingleDigitTime = (time) => {
  return time < 10 ? "0" + time : time.toString();
};

export function countDown(time) {
  if (!time) var countDownDate = new Date("Mar 28, 2024 15:37:25").getTime();
  else var countDownDate = new Date(time).getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));

    if (days > 3) {
      let mon = new Date(time).getMonth();
      let day = new Date(time).getDate();
      let hr = new Date(time).getHours();
      let min = new Date(time).getMinutes();

      document.getElementById("count-down").innerHTML = `Sales ends: ${
        calendar.months[mon]
      } ${day}, ${formatSingleDigitTime(hr)}:${formatSingleDigitTime(
        min
      )} (GMT+3)`;
      return;
    }

    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("count-down").innerHTML =
      "Sales ends in: " +
      days +
      " d " +
      formatSingleDigitTime(hours) +
      " : " +
      formatSingleDigitTime(minutes) +
      " : " +
      formatSingleDigitTime(seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("count-down").innerHTML = "EXPIRED";
    }
  }, 1000);
}
