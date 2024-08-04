import useUserStore from "@/store/user";
import { separateCountryCodeAndNumber } from "@/utils/getPhoneNumber";
import { useState } from "react";

const useProfileEditFormStates = () => {
  const { user } = useUserStore();

  const [firstName, setFirstName] = useState(user?.getUser().firstName || "");
  const [firstNameError, setFirstNameError] = useState(false);

  const [lastName, setLastName] = useState(user?.getUser().lastName || "");
  const [lastNameError, setLastNameError] = useState(false);

  const [gender, setGender] = useState(user?.getUser()?.gender || "");
  const [genderError, setGenderError] = useState(false);

  const [city, setCity] = useState(user?.getUser().address?.city || "");
  const [cityError, setCityError] = useState(false);

  const [country, setCountry] = useState(
    user?.getUser().address?.country || ""
  );
  const [countryError, setCountryError] = useState(false);

  const [streetAddress, setStreetAddress] = useState(
    user?.getUser().address?.streetAddress || ""
  );
  const [zipCode, setZipCode] = useState(
    user?.getUser().address?.zipCode || ""
  );

  const [countryCode, setCountryCode] = useState(
    separateCountryCodeAndNumber(user?.getUser().phoneNumber || null)?.code ||
      "251"
  );

  const [countryCodeError, setCountryCodeError] = useState(false);

  const [phoneNumber, setPhoneNumber] = useState(
    separateCountryCodeAndNumber(user?.getUser().phoneNumber || null)?.number ||
      ""
  );
  const [phoneNumberError, setPhoneNumberError] = useState(false);

  return {
    firstName,
    setFirstName,
    firstNameError,
    setFirstNameError,

    lastName,
    setLastName,
    lastNameError,
    setLastNameError,

    gender,
    setGender,
    genderError,
    setGenderError,

    city,
    setCity,
    cityError,
    setCityError,

    country,
    setCountry,
    countryError,
    setCountryError,

    streetAddress,
    setStreetAddress,

    zipCode,
    setZipCode,

    countryCode,
    setCountryCode,
    countryCodeError,
    setCountryCodeError,

    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    setPhoneNumberError,
  };
};

export default useProfileEditFormStates;
