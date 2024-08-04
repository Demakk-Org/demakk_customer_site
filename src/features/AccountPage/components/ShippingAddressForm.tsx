import handleAddAddress from "@/api/address/handleAddAddress";
import handleUpdateAddress from "@/api/address/handleUpdateAddress";
import useAddressStore from "@/store/address";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
  OutlinedInput,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useTranslation } from "next-i18next";
import {
  validateAddress1,
  validateCity,
  validateContactName,
  validatePhoneNumber,
  validateRegion,
  validateZipCode,
} from "@/utils/validate";
import useAddressFormStates from "@/hooks/useAddressFormStates";
import RegionDropdownSelect from "@/component/RegionDropdownSelect";

export function ShippingAddressForm({ onClose }: { onClose: () => void }) {
  const { t } = useTranslation(["actions", "addressForm"]);
  const { address } = useAddressStore();
  const { setLoading, setSnackBar } = usePageStore();
  const { setShippingAddress } = useUserStore();
  const { token } = useTokenStore();
  const {
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
  } = useAddressFormStates();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        address
          ? handleUpdateAddress({
              addressId: address.getAddress()._id,
              address: localAddress,
              contactName,
              phoneNumber: areaCode + "-" + phoneNumber,
              region,
              country: address1,
              city: address2,
              subCity,
              postalCode,
              asDefault,

              setLoading,
              setSnackBar,
              token,
              setShippingAddress,
              onClose,
            })
          : handleAddAddress({
              address: localAddress,
              contactName,
              phoneNumber: areaCode + "-" + phoneNumber,
              region,
              country: address1,
              city: address2,
              subCity,
              postalCode,
              asDefault,

              setLoading,
              setSnackBar,
              token,
              setShippingAddress,
              onClose,
            });
      }}
    >
      <Stack
        bgcolor={"background.lighter"}
        p={"2rem 1rem"}
        gap={2}
        sx={{ borderRadius: "0.5rem" }}
      >
        <Grid container>
          <Grid item xs={4}>
            <Stack gap={1}>
              <Typography color={"text.primary"} fontWeight={"bold"}>
                {t("countryRegion", { ns: "addressForm" })}
              </Typography>
              <RegionDropdownSelect
                value={localAddress}
                setValue={setLocalAddress}
              />
            </Stack>
          </Grid>
        </Grid>

        <Stack gap={1}>
          <Typography color={"text.primary"} fontWeight={"bold"}>
            {t("addressForm:contactInformation")}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack gap={1}>
                <TextField
                  placeholder={t("addressForm:contactName")}
                  id="outlined-basic"
                  variant="outlined"
                  color="error"
                  size="small"
                  name="contactName"
                  value={contactName}
                  onChange={({ target }) => {
                    setContactNameError(validateContactName(t, target.value));
                    setContactName(target.value);
                  }}
                />
                {contactNameError.error && (
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {contactNameError.message}
                  </Typography>
                )}
              </Stack>
            </Grid>

            <Grid item xs={6} container rowGap={1}>
              <Grid item xs={2}>
                <Stack gap={1}>
                  <OutlinedInput
                    size="small"
                    value={areaCode}
                    onChange={({ target }) => setAreaCode(target.value)}
                    sx={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                </Stack>
              </Grid>

              <Grid item xs>
                <Stack gap={1}>
                  <OutlinedInput
                    value={phoneNumber}
                    onChange={({ target }) => {
                      setPhoneNumberError(validatePhoneNumber(t, target.value));
                      setPhoneNumber(target.value);
                    }}
                    placeholder={t("mobileNumber", { ns: "addressForm" })}
                    size="small"
                    type="number"
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

              <Grid item xs={12}>
                {phoneNumberError.error && (
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {phoneNumberError.message}
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
        </Stack>

        <Stack gap={1}>
          <Typography color={"text.primary"} fontWeight={"bold"}>
            {t("addressForm:countryRegion")}
          </Typography>
          <Grid container spacing={2}>
            {/* address1 */}
            <Grid item xs={6}>
              <Stack gap={1}>
                <TextField
                  value={address1}
                  onChange={({ target }) => {
                    setAddress1Error(validateAddress1(t, target.value));
                    setAddress1(target.value);
                  }}
                  placeholder={t("addressForm:streetHouseApartmentUnit")}
                  id="outlined-basic"
                  variant="outlined"
                  color="error"
                  size="small"
                />
                {address1Error.error && (
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {address1Error.message}
                  </Typography>
                )}
              </Stack>
            </Grid>

            {/* address2 */}
            <Grid item xs={6} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    value={address2}
                    onChange={({ target }) => setAddress2(target.value)}
                    placeholder={t("addressForm:aptSuiteUnitEtc")}
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                  />
                </Stack>
              </Grid>
            </Grid>

            {/* Region */}
            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                    value={region}
                    onChange={({ target }) => {
                      setRegionError(validateRegion(t, target.value));
                      setRegion(target.value);
                    }}
                    placeholder={t("addressForm:stateProvince")}
                  />
                  {regionError.error && (
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      {regionError.message}
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>

            {/* city or sub city */}
            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    placeholder={t("addressForm:city")}
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                    value={subCity}
                    onChange={({ target }) => {
                      setCityError(validateCity(t, target.value));
                      setSubCity(target.value);
                    }}
                  />
                  {cityError.error && (
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      {cityError.message}
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>

            {/* zip-code specific description */}
            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <OutlinedInput
                    size="small"
                    value={postalCode}
                    onChange={({ target }) => {
                      setPostalCodeError(validateZipCode(t, target.value));
                      setPostalCode(target.value);
                    }}
                    placeholder={t("addressForm:zipCode")}
                    sx={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  {postalCodeError.error && (
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      {postalCodeError.message}
                    </Typography>
                  )}
                </Stack>
              </Grid>
            </Grid>
          </Grid>
        </Stack>

        <FormGroup>
          <FormControlLabel
            sx={{ color: "text.primary" }}
            control={
              <Checkbox onClick={() => setAsDefault((p) => !p)} color="error" />
            }
            checked={asDefault}
            label={t("setAsDefaultShippingAddress", { ns: "addressForm" })}
          />
        </FormGroup>

        <Stack direction={"row"} gap={2}>
          <Button
            size="large"
            variant={"contained"}
            sx={{
              borderRadius: "2rem",
              p: "0.75rem 3.5rem",
              color: "text.primary",
            }}
            type="submit"
          >
            {t("confirm", { ns: "actions" })}
          </Button>

          <Button
            size="large"
            variant={"outlined"}
            sx={{
              borderRadius: "2rem",
              p: "0.75rem 3.5rem",
              color: "text.primary",
            }}
            onClick={() => onClose()}
          >
            {t("cancel", { ns: "actions" })}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
