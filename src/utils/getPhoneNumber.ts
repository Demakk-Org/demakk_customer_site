export const separateCountryCodeAndNumber = (phoneNumber: string | null) => {
  if (!phoneNumber) return null;

  const regex = /^(?:\+?[1-9]\d{0,2}|0)/;
  const regex1 = /\d{3}[-\s]?\d{2}[-\s]?\d{4}$/;

  const match = regex.exec(phoneNumber);
  const match1 = regex1.exec(phoneNumber);

  if (match && match1) {
    return {
      code: match[0] ? match[0] : "",
      number: match1[0] ? match1[0] : "",
    };
  } else {
    return null;
  }
};
