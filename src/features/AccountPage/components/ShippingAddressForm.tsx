import handleAddAddress from "@/api/address/handleAddAddress";
import handleUpdateAddress from "@/api/address/handleUpdateAddress";
import useAddressStore from "@/store/address";
import usePageStore from "@/store/page";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";

export function ShippingAddressForm({ onClose }: { onClose: () => void }) {
  const { address } = useAddressStore();
  const { loading, setLoading, snackBar, setSnackBar } = usePageStore();
  const { lang, user, shippingAddress, setShippingAddress } = useUserStore();
  const { token } = useTokenStore();

  const [localAddress, setLocalAddress] = useState<string>("addis-ababa");
  const [contactName, setContactName] = useState(
    address?.getAddress().contactName || ""
  );
  const [areaCode, setAreaCode] = useState("251");
  const [phoneNumber, setPhoneNumber] = useState(
    address?.getAddress().phoneNumber || ""
  );

  const [region, setRegion] = useState(address?.getAddress().region || "");
  const [subCity, setSubCity] = useState(address?.getAddress().subCity || "");
  const [country, setCountry] = useState(
    address?.getAddress().country || "Ethiopia"
  );
  const [city, setCity] = useState(address?.getAddress().city || "Addis Ababa");
  const [postalCode, setPostalCode] = useState(
    address?.getAddress().postalCode || ""
  );

  const [asDefault, setAsDefault] = useState(
    address?.getAddress().asDefault || false
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        address
          ? handleUpdateAddress({
              addressId: address.getAddress()._id,
              address: localAddress,
              contactName,
              phoneNumber: areaCode + phoneNumber,
              region,
              country,
              city,
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
              phoneNumber: areaCode + phoneNumber,
              region,
              country,
              city,
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
                {getLanguage("countryRegion", lang)}
              </Typography>
              <FormControl>
                <Select
                  name="address"
                  size="small"
                  color={"primary"}
                  value={localAddress}
                  onChange={({ target }) => setLocalAddress(target.value)}
                  sx={{
                    borderRadius: "0.5rem",
                    bgcolor: "background.lighter",
                    minWidth: 120,
                  }}
                >
                  <MenuItem value={"addis-ababa"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/addis-ababa-flag.png"
                        sx={{
                          width: 25,
                          height: 20,
                          border: "1px solid lightgray",
                        }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("addis-ababa", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"afar"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/afar-flag.png"
                        sx={{ width: 25, height: 20 }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("afar", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"gumuz"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/gumuz-flag.png"
                        sx={{ width: 25, height: 20 }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("gumuz", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"amhara"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/amhara-flag.png"
                        sx={{ width: 25, height: 20 }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("amhara", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"harari"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/harari-flag.png"
                        sx={{ width: 25, height: 20 }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("harari", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                  <MenuItem value={"oromia"}>
                    <Box
                      display={"flex"}
                      gap={1}
                      width={1}
                      alignItems={"center"}
                    >
                      <Avatar
                        variant="square"
                        src="/assets/images/oromia-flag.png"
                        sx={{ width: 25, height: 20 }}
                      />
                      <Typography fontSize={"0.8rem"}>
                        {getLanguage("oromia", lang)}
                      </Typography>
                    </Box>
                  </MenuItem>
                </Select>
              </FormControl>
            </Stack>
          </Grid>
        </Grid>

        <Stack gap={1}>
          <Typography color={"text.primary"} fontWeight={"bold"}>
            {getLanguage("contactInformation", lang)}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack gap={1}>
                <TextField
                  placeholder={getLanguage("contactName", lang)}
                  id="outlined-basic"
                  variant="outlined"
                  color="error"
                  size="small"
                  name="contactName"
                  value={contactName}
                  onChange={({ target }) => setContactName(target.value)}
                />
                <Typography fontSize={"0.8rem"} color={"error"}>
                  {getLanguage("pleaseEnterContactName", lang)}{" "}
                </Typography>
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
                    onChange={({ target }) => setPhoneNumber(target.value)}
                    placeholder={getLanguage("mobileNumber", lang)}
                    size="small"
                    sx={{
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }}
                  />
                </Stack>
              </Grid>

              <Grid item xs={12}>
                <Typography fontSize={"0.8rem"} color={"error"}>
                  {getLanguage("pleaseEnterMobilePhoneNumber", lang)}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Stack>

        <Stack gap={1}>
          <Typography color={"text.primary"} fontWeight={"bold"}>
            {getLanguage("address", lang)}
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack gap={1}>
                <TextField
                  value={region}
                  onChange={({ target }) => setRegion(target.value)}
                  placeholder={getLanguage("streetHouseApartmentUnit", lang)}
                  id="outlined-basic"
                  variant="outlined"
                  color="error"
                  size="small"
                />
                <Typography fontSize={"0.8rem"} color={"error"}>
                  {getLanguage("pleaseEnterAddress", lang)}
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={6} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    value={subCity}
                    onChange={({ target }) => setSubCity(target.value)}
                    placeholder={getLanguage("aptSuiteUnitEtc", lang)}
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                  />
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                    value={country}
                    onChange={({ target }) => setCountry(target.value)}
                    placeholder={getLanguage("stateProvince", lang)}
                  />
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {getLanguage("pleaseEnterStateProvinceRegion", lang)}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <TextField
                    placeholder={getLanguage("city", lang)}
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                    value={city}
                    onChange={({ target }) => setCity(target.value)}
                  />
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {getLanguage("pleaseEnterCity", lang)}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>

            <Grid item xs={4} container rowGap={1}>
              <Grid item xs>
                <Stack gap={1}>
                  <OutlinedInput
                    size="small"
                    value={postalCode}
                    onChange={({ target }) => setPostalCode(target.value)}
                    placeholder={getLanguage("zipCode", lang)}
                    sx={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                    }}
                  />
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    {getLanguage("pleaseEnterZipPostalCode", lang)}
                  </Typography>
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
            label={getLanguage("setAsDefaultShippingAddress", lang)}
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
            {getLanguage("confirm", lang)}
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
            {getLanguage("cancel", lang)}
          </Button>
        </Stack>
      </Stack>
    </form>
  );
}
