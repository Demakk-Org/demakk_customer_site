const formatSingleDigitTime = (time) => {
  return time < 10 ? "0" + time : time.toString();
};

export function countDown(component, time) {
  var countDownDate = new Date("Mar 28, 2024 15:37:25").getTime();

  var x = setInterval(function () {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("count-down").innerHTML =
      "Sales ends: " +
      days +
      " d " +
      formatSingleDigitTime(hours) +
      " : " +
      formatSingleDigitTime(minutes) +
      " : " +
      formatSingleDigitTime(seconds);

    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
