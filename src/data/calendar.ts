interface Months {}

interface Calendar {
  // months:
}

const calendar = {
  months: {
    en: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    am: [
      "ጥር",
      "የካቲት",
      "መጋቢት",
      "ሚያዚያ",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    // or: [],
  },
  days: { en: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] },
  weekdays: {
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  },
};

export default calendar;
