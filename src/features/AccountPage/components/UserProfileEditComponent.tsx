import {
  Button,
  FormControl,
  FormControlLabel,
  Grid,
  InputLabel,
  MenuItem,
  Radio,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import { InfoOutlined } from "@mui/icons-material";
import useProfileEditFormStates from "@/hooks/useProfileEditFormStates";
import {
  validateCity,
  validateCountry,
  validateCountryCode,
  validateFirstName,
  validateGender,
  validateLastName,
  validatePhoneNumber,
} from "@/utils/validate";
import { countries } from "countries-list";
import handleUpdateUser from "@/api/user/handleUpdateUser";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";

function UserProfileEditComponent({
  setEditProfile,
}: {
  setEditProfile: () => void;
}) {
  const { user, setUser } = useUserStore();
  const { setLoading, setSnackBar } = usePageStore();
  const { token } = useTokenStore();
  const {
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
  } = useProfileEditFormStates();
  const { t } = useTranslation(["account"]);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const target = e.target as typeof e.target & {
      firstName: { value: string };
      lastName: { value: string };
      gender: { value: string };
      city: { value: string };
      country: { value: string };
      countryCode: { value: string };
      phoneNumber: { value: string };
    };

    let firstName = target.firstName.value;
    let lastName = target.lastName.value;
    let gender = target.gender.value;
    let city = target.city.value;
    let country = target.country.value;
    let countryCode = target.countryCode.value;
    let phoneNumber = target.phoneNumber.value;

    let isFirstNameValid = validateFirstName(firstName);
    let isLastNameValid = validateLastName(lastName);
    let isGenderValid = validateGender(gender);
    let isCityValid = validateCity(t, city);
    let isCountryValid = validateCountry(country);
    let isCountryCodeValid = validateCountryCode(countryCode);
    let isPhoneNumberValid = validatePhoneNumber(t, phoneNumber);

    setFirstNameError(!isFirstNameValid);
    setLastNameError(!isLastNameValid);
    setGenderError(!isGenderValid);
    setCityError(isCityValid.error);
    setCountryError(!isCountryValid);
    setCountryCodeError(!isCountryCodeValid);
    setPhoneNumberError(isPhoneNumberValid.error);

    if (
      !isFirstNameValid ||
      !isLastNameValid ||
      !isGenderValid ||
      isCityValid.error ||
      !isCountryValid ||
      !isCountryCodeValid ||
      isPhoneNumberValid.error
    ) {
      return;
    }

    console.log("We are here baby");

    token &&
      handleUpdateUser({
        firstName,
        lastName,
        phoneNumber: countryCode + "-" + phoneNumber,
        gender,
        streetAddress,
        city,
        country,
        zipCode,
        token,
        setLoading,
        setSnackBar,
        setUser,
        setEditProfile,
      });
  };

  return (
    <Stack spacing={1}>
      <Typography
        fontSize={"0.9rem"}
        color={"error.main"}
        textAlign="right"
        className={demakkFont.className}
      >
        <Typography component={"span"} color={"error.main"}>
          *
        </Typography>
        {t("required", { ns: "common" })}
      </Typography>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <Stack
          border={"1px solid"}
          bgcolor={"background.lighter"}
          borderColor={"text.secondary"}
          color={"text.primary"}
          p={2}
          spacing={3}
        >
          <Grid container spacing={2} rowSpacing={2}>
            <Grid item xs={2.5}>
              <Stack
                justifyContent={"flex-start"}
                height={1}
                alignItems={"right"}
                pt={1}
              >
                <Typography textAlign={"right"}>
                  <Typography component={"span"} color={"error.main"} pr={0.5}>
                    *
                  </Typography>
                  {t("user.name")}:
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={9.5}>
              <Stack spacing={1}>
                <Stack direction={"row"} spacing={2}>
                  <TextField
                    value={firstName}
                    size="small"
                    sx={{ maxWidth: "120px" }}
                    name="firstName"
                    onChange={({ target }) => setFirstName(target.value)}
                  />
                  <TextField
                    value={lastName}
                    size="small"
                    sx={{ maxWidth: "120px" }}
                    name="lastName"
                    onChange={({ target }) => setLastName(target.value)}
                  />
                </Stack>

                {firstNameError && (
                  <Stack alignItems={"center"} direction={"row"} spacing={1}>
                    <InfoOutlined color="error" fontSize="small" />
                    <Typography color={"error.main"} fontSize={"0.9rem"}>
                      {t("pleaseEnterYourFirstName", { ns: "addressForm" })}
                    </Typography>
                  </Stack>
                )}

                {lastNameError && (
                  <Stack alignItems={"center"} direction={"row"} spacing={1}>
                    <InfoOutlined color="error" fontSize="small" />
                    <Typography color={"error.main"} fontSize={"0.9rem"}>
                      {t("pleaseEnterYourLastName", { ns: "addressForm" })}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>

            <Grid item xs={2.5}>
              <Stack justifyContent={"flex-start"} height={1} pt={1}>
                <Typography textAlign={"right"}>
                  <Typography component={"span"} color={"error.main"} pr={0.5}>
                    *
                  </Typography>
                  {t("user.gender")}:
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={9.5}>
              <Stack spacing={1}>
                <Stack direction={"row"} spacing={2}>
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        size="small"
                        checked={gender == "male"}
                        onClick={() => setGender("male")}
                      />
                    }
                    label={t("user.male")}
                    name="gender"
                    value={"male"}
                  />
                  <FormControlLabel
                    control={
                      <Radio
                        color="primary"
                        size="small"
                        checked={gender == "female"}
                        onClick={() => setGender("female")}
                      />
                    }
                    label={t("user.female")}
                    name="gender"
                    value={"female"}
                  />
                </Stack>

                {genderError && (
                  <Stack alignItems={"center"} direction={"row"} spacing={1}>
                    <InfoOutlined color="error" fontSize="small" />
                    <Typography color={"error.main"} fontSize={"0.9rem"}>
                      {t("pleaseEnterYourGender", { ns: "addressForm" })}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>

            <Grid item xs={2.5}>
              <Typography textAlign={"right"}>
                <Typography component={"span"} color={"error.main"} pr={0.5}>
                  *
                </Typography>
                {t("user.email")}:
              </Typography>
            </Grid>
            <Grid item xs={9.5}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Typography>{user?.getUser().email}</Typography>
                <Typography color={"error.light"} fontSize={"0.9rem"}>
                  <Typography color={"text.primary"} component={"span"}>
                    (
                  </Typography>
                  <Typography component={"span"}>
                    {t("user.emailAddressUnconfirmed")},{" "}
                  </Typography>

                  <Link href={"/"} style={{ color: "lightblue" }}>
                    {t("clickToConfirm", { ns: "actions" })}
                  </Link>

                  <Typography component={"span"}>
                    {" "}
                    {t("or", { ns: "common" })}{" "}
                  </Typography>

                  <Link href={"/"} style={{ color: "lightblue" }}>
                    {t("changeEmailAddress", { ns: "actions" })}
                  </Link>

                  <Typography color={"text.primary"} component={"span"}>
                    )
                  </Typography>
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={2.5}>
              <Stack height={1} justifyContent={"flex-start"} pt={1}>
                <Typography textAlign={"right"}>
                  <Typography component={"span"} color={"error.main"} pr={0.5}>
                    *
                  </Typography>
                  {t("user.contactAddress")}:
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={9.5}>
              <Stack>
                <Grid container spacing={1}>
                  <Grid item xs={3}>
                    <Stack height={1} justifyContent={"center"}>
                      <Typography>{t("user.streetAddress")}:</Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={9}>
                    <Stack>
                      <TextField
                        size="small"
                        sx={{ maxWidth: "300px" }}
                        value={streetAddress}
                        name="streetAddress"
                        onChange={({ target }) =>
                          setStreetAddress(target.value)
                        }
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs={3}>
                    <Stack height={1} justifyContent={"flex-start"}>
                      <Typography>{t("user.city")}:</Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={9}>
                    <Stack spacing={1}>
                      <TextField
                        size="small"
                        value={city}
                        sx={{ maxWidth: "300px" }}
                        name="city"
                        onChange={({ target }) => setCity(target.value)}
                      />

                      {cityError && (
                        <Stack
                          alignItems={"center"}
                          direction={"row"}
                          spacing={1}
                        >
                          <InfoOutlined color="error" fontSize="small" />
                          <Typography color={"error.main"} fontSize={"0.9rem"}>
                            {t("pleaseEnterACity", { ns: "addressForm" })}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={3}>
                    <Stack height={1} justifyContent={"flex-start"} pt={1}>
                      <Typography>
                        {t("countryRegion", { ns: "addressForm" })}:
                      </Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={9}>
                    <Stack spacing={1}>
                      <FormControl sx={{ m: 1, maxWidth: 150 }} size="small">
                        <InputLabel id="demo-select-small-label">
                          Country
                        </InputLabel>
                        <Select
                          labelId="demo-select-small-label"
                          id="demo-select-small"
                          value={country}
                          label="Country"
                          name="country"
                          onChange={({ target }) => setCountry(target.value)}
                          renderValue={(value) => value}
                        >
                          <MenuItem value="">
                            <em>None</em>
                          </MenuItem>

                          {Array.from(Object.entries(countries)).map(
                            (country) => {
                              let { name } = country[1];

                              return (
                                <MenuItem key={name} value={name}>
                                  {name}
                                </MenuItem>
                              );
                            }
                          )}
                        </Select>
                      </FormControl>

                      {countryError && (
                        <Stack
                          alignItems={"center"}
                          direction={"row"}
                          spacing={1}
                        >
                          <InfoOutlined color="error" fontSize="small" />
                          <Typography color={"error.main"} fontSize={"0.9rem"}>
                            {t("pleaseEnterAnAddress", { ns: "addressForm" })}
                          </Typography>
                        </Stack>
                      )}
                    </Stack>
                  </Grid>

                  <Grid item xs={3}>
                    <Stack height={1} justifyContent={"center"}>
                      <Typography>{t("user.zipPostalCode")}:</Typography>
                    </Stack>
                  </Grid>

                  <Grid item xs={9}>
                    <Stack>
                      <TextField
                        size="small"
                        sx={{ maxWidth: "100px" }}
                        value={zipCode}
                        name="zipCode"
                        onChange={({ target }) => setZipCode(target.value)}
                      />
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            </Grid>

            <Grid item xs={2.5}>
              <Stack
                justifyContent={"flex-start"}
                pt={2}
                height={1}
                alignItems={"right"}
              >
                <Typography textAlign={"right"}>
                  <Typography component={"span"} color={"error.main"} pr={0.5}>
                    *
                  </Typography>
                  {t("user.tel")}:
                </Typography>
              </Stack>
            </Grid>

            <Grid item xs={9.5}>
              <Stack spacing={1}>
                <Stack direction="row" spacing={2} pr={2}>
                  <Grid container spacing={2}>
                    <Grid item xs={2.5}>
                      <Stack width={1} spacing={1}>
                        <Typography>{t("user.countryCode")}:</Typography>
                        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                          <InputLabel id="demo-select-small-label">
                            Code
                          </InputLabel>
                          <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={countryCode}
                            label="Code"
                            name="countryCode"
                            onChange={({ target }) =>
                              setCountryCode(target.value)
                            }
                            renderValue={(value) => value}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>

                            {Array.from(Object.entries(countries)).map(
                              (country) => {
                                let { name, phone } = country[1];

                                return (
                                  <MenuItem key={name} value={phone[0]}>
                                    {name}
                                  </MenuItem>
                                );
                              }
                            )}
                          </Select>
                        </FormControl>
                      </Stack>
                    </Grid>

                    <Grid item xs>
                      <Stack width={1} spacing={1}>
                        <Typography>{t("user.number")}:</Typography>
                        <TextField
                          size="small"
                          fullWidth
                          name="phoneNumber"
                          type="number"
                          value={phoneNumber}
                          onChange={({ target }) => {
                            if (target.value.length > 9) {
                              return;
                            }
                            setPhoneNumber(target.value);
                          }}
                          sx={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button":
                              {
                                WebkitAppearance: "none",
                                margin: 0,
                              },
                          }}
                        />
                      </Stack>
                    </Grid>

                    <Grid item xs={6}>
                      {user?.getUser().phoneNumberVerified && (
                        <Stack height={1} justifyContent={"center"}>
                          <Typography
                            color={"error.light"}
                            fontSize={"0.9rem"}
                            width={"max-content"}
                            sx={{ textWrap: "nowrap" }}
                          >
                            <Typography
                              color={"text.primary"}
                              component={"span"}
                            >
                              (
                            </Typography>
                            <Typography component={"span"}>
                              {t("user.phoneNumberUnconfirmed")},{" "}
                            </Typography>

                            <Link href={"/"} style={{ color: "lightblue" }}>
                              {t("clickToConfirm", { ns: "actions" })}
                            </Link>

                            <Typography
                              color={"text.primary"}
                              component={"span"}
                            >
                              )
                            </Typography>
                          </Typography>
                        </Stack>
                      )}
                    </Grid>
                  </Grid>
                </Stack>

                {countryCodeError && (
                  <Stack alignItems={"center"} direction={"row"} spacing={1}>
                    <InfoOutlined color="error" fontSize="small" />
                    <Typography color={"error.main"} fontSize={"0.9rem"}>
                      {t("pleaseEnterYourCountryCode", { ns: "addressForm" })}
                    </Typography>
                  </Stack>
                )}

                {phoneNumberError && (
                  <Stack alignItems={"center"} direction={"row"} spacing={1}>
                    <InfoOutlined color="error" fontSize="small" />
                    <Typography color={"error.main"} fontSize={"0.9rem"}>
                      {t("pleaseEnterMobilePhoneNumber", { ns: "addressForm" })}
                    </Typography>
                  </Stack>
                )}
              </Stack>
            </Grid>
          </Grid>

          <Button type="submit" sx={{ alignSelf: "center", px: "2rem" }}>
            {t("submit", { ns: "actions" })}
          </Button>
        </Stack>
      </form>
    </Stack>
  );
}

export default UserProfileEditComponent;
