import useAddressStore from "@/store/address";
import { Addresses } from "@/store/user";
import { separateCountryCodeAndNumber } from "@/utils/getPhoneNumber";
import { useState } from "react";

const useAddressFormStates = () => {
  const { address } = useAddressStore();

  const [localAddress, setLocalAddress] = useState<Addresses>(
    Addresses["addis-ababa"]
  );

  const [contactName, setContactName] = useState(
    address?.getAddress().contactName || ""
  );
  const [contactNameError, setContactNameError] = useState({
    error: false,
    message: "",
  });

  const [areaCode, setAreaCode] = useState(
    separateCountryCodeAndNumber(address?.getAddress().phoneNumber || null)
      ?.code || "251"
  );
  const [phoneNumber, setPhoneNumber] = useState(
    separateCountryCodeAndNumber(address?.getAddress().phoneNumber || null)
      ?.number || ""
  );
  const [phoneNumberError, setPhoneNumberError] = useState({
    error: false,
    message: "",
  });

  const [address1, setAddress1] = useState(
    address?.getAddress().country || "Ethiopia"
  );
  const [address1Error, setAddress1Error] = useState({
    error: false,
    message: "",
  });

  const [address2, setAddress2] = useState(
    address?.getAddress().city || "Addis Ababa"
  );

  const [region, setRegion] = useState(address?.getAddress().region || "");
  const [regionError, setRegionError] = useState({ error: false, message: "" });

  const [subCity, setSubCity] = useState(address?.getAddress().subCity || "");
  const [cityError, setCityError] = useState({ error: false, message: "" });

  const [postalCode, setPostalCode] = useState(
    address?.getAddress().postalCode || ""
  );
  const [postalCodeError, setPostalCodeError] = useState({
    error: false,
    message: "",
  });

  const [asDefault, setAsDefault] = useState(
    address?.getAddress().asDefault || false
  );

  return {
    localAddress,
    setLocalAddress,
    contactName,
    setContactName,
    contactNameError,
    setContactNameError,
    areaCode,
    setAreaCode,
    phoneNumber,
    setPhoneNumber,
    phoneNumberError,
    setPhoneNumberError,
    address1,
    setAddress1,
    address1Error,
    setAddress1Error,
    address2,
    setAddress2,
    region,
    setRegion,
    regionError,
    setRegionError,
    subCity,
    setSubCity,
    cityError,
    setCityError,
    postalCode,
    setPostalCode,
    postalCodeError,
    setPostalCodeError,
    asDefault,
    setAsDefault,
  };
};

export default useAddressFormStates;
