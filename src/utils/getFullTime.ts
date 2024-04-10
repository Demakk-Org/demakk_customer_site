export const formatSingleDigitTime = (time: number): String => {
  return time < 10 ? "0" + time : time.toString();
};

const getFutllTime = (timeLeft: number): string => {
  var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    (days ? days + " d " : " ") +
    (hours ? formatSingleDigitTime(hours) + " : " : " ") +
    (minutes || hours > 0 || days > 0
      ? formatSingleDigitTime(minutes) + " : "
      : " ") +
    // " : " +
    formatSingleDigitTime(seconds)
  );
};

export default getFutllTime;
