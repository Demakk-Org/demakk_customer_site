interface Months {}

interface Calendar {
  // months:
}

const calendar = {
  months: {
    en: [
      { name: "January", abbr: "Jan" },
      { name: "February", abbr: "Feb" },
      { name: "March", abbr: "Mar" },
      { name: "April", abbr: "Apr" },
      { name: "May", abbr: "May" },
      { name: "June", abbr: "Jun" },
      { name: "July", abbr: "Jul" },
      { name: "August", abbr: "Aug" },
      { name: "September", abbr: "Sep" },
      { name: "October", abbr: "Oct" },
      { name: "November", abbr: "Nov" },
      { name: "December", abbr: "Dec" },
    ],
    am: [
      { name: "ጥር", abbr: "" },
      { name: "የካቲት", abbr: "የካ" },
      { name: "መጋቢት", abbr: "መጋ" },
      { name: "ሚያዚያ", abbr: "ሚያ" },
      { name: "ግንቦት", abbr: "ግን" },
      { name: "ሰኔ", abbr: "ስኔ" },
      { name: "ሃምሌ", abbr: "ሃም" },
      { name: "ነሀሴ", abbr: "ነሀ" },
      { name: "መስከረም", abbr: "መስ" },
      { name: "ጥቅምት", abbr: "ጥቅ" },
      { name: "ሕዳር", abbr: "ሕዳ" },
      { name: "ታህሳስ", abbr: "ታህ" },
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
