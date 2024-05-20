import IconFromReactIcons from "@/component/IconFromReactIcons";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  IconButton,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function ShippingAddressTabContent() {
  const {
    lang,
    user,
    token,
    shippingAddress,
    setShippingAddress,
    setBreadcrumbs,
  } = useUserStore();
  const [localAddress, setLocalAddress] = useState<string>("addis-ababa");
  const [addShippingAddress, setAddShippingAddress] = useState<boolean>(false);
  const [openDeleteAddressModal, setOpenDeleteAddressModal] =
    useState<boolean>(false);
  useState<boolean>(false);

  console.log(shippingAddress);

  useEffect(() => {
    setShippingAddress(token);
    setBreadcrumbs([
      { name: "Home", url: "/" },
      { name: "Account", url: "/account" },
      {
        name: "Shipping address",
        url: "/account/addressList",
      },
    ]);
  }, []);

  return (
    <Stack gap={2}>
      <Typography fontSize={"1.25rem"}>Shipping Address</Typography>

      {addShippingAddress ? (
        <Stack
          bgcolor={"background.lighter"}
          p={"2rem 1rem"}
          gap={2}
          sx={{ borderRadius: "0.5rem" }}
        >
          <Grid container>
            <Grid item xs={4}>
              <Stack gap={1}>
                <Typography fontWeight={"bold"}>Country/region</Typography>
                <FormControl>
                  <Select
                    name="addresses"
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
            <Typography fontWeight={"bold"}>Contact information</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack gap={1}>
                  <TextField
                    placeholder="Contact name*"
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                  />
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    Please enter a Contact Name.{" "}
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} container rowGap={1}>
                <Grid item xs={2}>
                  <Stack gap={1}>
                    <OutlinedInput
                      size="small"
                      value={"+251"}
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
                      placeholder="Mobile number*"
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
                    Please enter mobile phone number.
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Stack>

          <Stack gap={1}>
            <Typography fontWeight={"bold"}>Address</Typography>
            <Grid container spacing={2}>
              <Grid item xs={6}>
                <Stack gap={1}>
                  <TextField
                    placeholder="Street, house/apartment/unit*"
                    id="outlined-basic"
                    variant="outlined"
                    color="error"
                    size="small"
                  />
                  <Typography fontSize={"0.8rem"} color={"error"}>
                    Please enter an address
                  </Typography>
                </Stack>
              </Grid>
              <Grid item xs={6} container rowGap={1}>
                <Grid item xs>
                  <Stack gap={1}>
                    <TextField
                      placeholder="Apt, suite, unit, etc (optional)"
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
                      value={"Ethiopia"}
                      placeholder="State/Province*"
                    />
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      Please enter state/Province/Region
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Grid item xs={4} container rowGap={1}>
                <Grid item xs>
                  <Stack gap={1}>
                    <TextField
                      placeholder="City*"
                      id="outlined-basic"
                      variant="outlined"
                      color="error"
                      size="small"
                      value={"Addis Ababa"}
                    />
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      Please enter a city
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>

              <Grid item xs={4} container rowGap={1}>
                <Grid item xs>
                  <Stack gap={1}>
                    <OutlinedInput
                      size="small"
                      placeholder="ZIP code*"
                      sx={{
                        borderTopRightRadius: 0,
                        borderBottomRightRadius: 0,
                      }}
                    />
                    <Typography fontSize={"0.8rem"} color={"error"}>
                      Please enter a ZIP/Postal Code
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Grid>
          </Stack>

          <FormGroup>
            <FormControlLabel
              control={<Checkbox defaultChecked color="error" />}
              label="Set as default shipping address"
            />
          </FormGroup>

          <Stack direction={"row"} gap={2}>
            <Button
              size="large"
              variant={"contained"}
              sx={{
                borderRadius: "2rem",
                p: "0.75rem 3.5rem",
                color: "text.teritiary",
              }}
            >
              Confirm
            </Button>

            <Button
              size="large"
              variant={"outlined"}
              onClick={() => setAddShippingAddress((p) => !p)}
              sx={{
                borderRadius: "2rem",
                p: "0.75rem 3.5rem",
                color: "text.primary",
              }}
            >
              Cancel
            </Button>
          </Stack>
        </Stack>
      ) : (
        <Stack gap={2}>
          <Button
            variant="contained"
            onClick={() => setAddShippingAddress((p) => !p)}
            sx={{
              color: "text.teritiary",
              alignSelf: "flex-start",
              px: "2.5rem",
            }}
          >
            Add new
          </Button>
          <Grid container spacing={2}>
            {shippingAddress.map((address, index) => {
              return (
                <Grid key={index} item xs={4}>
                  <Stack
                    p={"0.5rem"}
                    bgcolor={"background.reddish"}
                    sx={{ border: "1px solid", borderColor: "text.price" }}
                  >
                    <Typography textAlign={"right"} fontSize={"0.8rem"}>
                      Default address
                    </Typography>
                    <Stack p={1} gap={1}>
                      <Grid container>
                        <Grid
                          item
                          xs={1}
                          display={"flex"}
                          alignItems={"center"}
                          justifyContent={"center"}
                        >
                          <Stack display={"flex"} alignItems={"center"}>
                            <IconFromReactIcons
                              width={15}
                              height={15}
                              icon={<FaRegUser />}
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={11}>
                          <Stack
                            direction={"row"}
                            divider={<Typography>,&nbsp;</Typography>}
                          >
                            <Typography
                              fontWeight={"bold"}
                              noWrap
                              minWidth={"fit-content"}
                            >
                              Solen Tolessa
                            </Typography>
                            <Typography
                              noWrap
                              fontWeight={"bold"}
                              title="+251931213930"
                            >
                              +251931213930
                            </Typography>
                          </Stack>
                        </Grid>
                      </Grid>

                      <Grid container>
                        <Grid item xs={1}>
                          <Stack alignItems={"center"}>
                            <IconFromReactIcons
                              width={20}
                              height={20}
                              icon={<IoLocationSharp />}
                            />
                          </Stack>
                        </Grid>
                        <Grid item xs={11}>
                          <Stack>
                            <Stack gap={1}>
                              <Stack
                                direction={"row"}
                                divider={<Typography>,&nbsp;</Typography>}
                              >
                                <Typography>Keta</Typography>
                                <Typography>Burayu</Typography>
                                <Typography>Oromia</Typography>
                              </Stack>
                              <Stack
                                direction={"row"}
                                divider={<Typography>,&nbsp;</Typography>}
                              >
                                <Typography>Oromia</Typography>
                                <Typography>Ethiopia</Typography>
                                <Typography>Ethiopia</Typography>
                                <Typography>1000</Typography>
                              </Stack>
                            </Stack>
                            <Typography>Default</Typography>

                            <Stack direction={"row"} gap={2} mt={2}>
                              <Button
                                color="primaryButton"
                                variant="text"
                                sx={{
                                  p: "0",
                                  minWidth: "unset",
                                  "&:hover": {
                                    bgcolor: "transparent",
                                    color: "text.secondary",
                                  },
                                }}
                              >
                                Edit
                              </Button>
                              <Button
                                onClick={() => setOpenDeleteAddressModal(true)}
                                color="primaryButton"
                                variant="text"
                                sx={{
                                  p: 0,
                                  minWidth: "unset",
                                  "&:hover": {
                                    bgcolor: "transparent",
                                    color: "text.secondary",
                                  },
                                }}
                              >
                                Delete
                              </Button>
                            </Stack>
                          </Stack>
                        </Grid>
                      </Grid>
                    </Stack>
                  </Stack>
                </Grid>
              );
            })}
          </Grid>
        </Stack>
      )}

      <Modal
        open={openDeleteAddressModal}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box position={"relative"} sx={style}>
          <Typography id="modal-modal-title" fontSize={"1.4rem"}>
            Delete shipping address
          </Typography>
          <Typography id="modal-modal-description">
            Confirm deletion of shipping address
          </Typography>
          <Stack direction={"row"} gap={2} mt={2}>
            <Button
              color="primary"
              variant="contained"
              sx={{ color: "text.teritiary", flex: 1 }}
            >
              OK
            </Button>
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{ color: "text.contrast", flex: 1 }}
              onClick={() => setOpenDeleteAddressModal(false)}
            >
              Cancel
            </Button>
          </Stack>
          <IconButton
            onClick={() => setOpenDeleteAddressModal(false)}
            sx={{ position: "absolute", top: "2rem", right: "2rem" }}
          >
            <Close />
          </IconButton>
        </Box>
      </Modal>
    </Stack>
  );
}

export default ShippingAddressTabContent;
