import { countries } from "countries-list";
import { TFunction } from "i18next";

export const validateContactName = (
  t: TFunction<["actions", "addressForm"], undefined>,
  contactName: string
) => {
  if (contactName.length == 0) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterContactName"),
    };
  }

  let regex = /^[a-zA-ZÀ-ÖØ-öø-ÿ '-]+$/;
  if (!regex.test(contactName)) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterAlphaNumericCharacters"),
    };
  }

  if (contactName.length < 2) {
    return {
      error: true,
      message: t("addressForm:useCorrectCharacterRange"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validatePhoneNumber = (
  t: TFunction<["actions", "addressForm"], undefined>,
  phoneNumber: string
) => {
  if (!/^[0-9]+$/g.test(phoneNumber)) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterMobilePhoneNumber"),
    };
  }

  if (phoneNumber.length != 9) {
    return {
      error: true,
      message: t("addressForm:useCorrectPhoneNumberRange"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validateAddress1 = (
  t: TFunction<["actions", "addressForm"], undefined>,
  address1: string
) => {
  if (address1.length == 0) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterStateProvinceRegion"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validateRegion = (
  t: TFunction<["actions", "addressForm"], undefined>,
  region: string
) => {
  if (region.length == 0) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterAddress"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validateCity = (
  t: TFunction<["actions", "addressForm"], undefined>,
  city: string
) => {
  if (city.length == 0) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterCity"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validateZipCode = (
  t: TFunction<["actions", "addressForm"], undefined>,
  zipCode: string
) => {
  if (zipCode.length == 0) {
    return {
      error: true,
      message: t("addressForm:pleaseEnterZipPostalCode"),
    };
  }

  return {
    error: false,
    message: "",
  };
};

export const validateFirstName = (firstName: string) => {
  if (firstName.length == 0) {
    return false;
  }

  return true;
};

export const validateLastName = (lastName: string) => {
  if (lastName.length == 0) {
    return false;
  }

  return true;
};

export const validateGender = (gender: string) => {
  if (!gender) {
    return false;
  }

  return true;
};

export const validateCountry = (country: string) => {
  let countryList = countries;

  let countryNameList = Array.from(Object.entries(countryList)).map(
    (country) => country[1].name
  );

  if (!country || !countryNameList.includes(country)) {
    return false;
  }

  return true;
};

export const validateCountryCode = (countryCode: string) => {
  if (!countryCode) return false;

  return true;
};
