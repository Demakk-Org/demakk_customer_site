import { Button, Grid, Stack, Typography } from "@mui/material";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import { GetAddress } from "@/model/addressModel";
import { FaRegUser } from "react-icons/fa";
import { IoLocationSharp } from "react-icons/io5";
import usePageStore from "@/store/page";
import handleDeleteAddress from "@/api/address/handleDeleteAddress";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import useAddressStore from "@/store/address";
import { useTranslation } from "next-i18next";

function AddressListComponent({
  address,
  setAddAddress,
}: {
  address: GetAddress;
  setAddAddress: () => void;
}) {
  const { t } = useTranslation("actions");
  const { setOpenModal, setLoading, setSnackBar } = usePageStore();
  const { token } = useTokenStore();
  const { lang, setShippingAddress } = useUserStore();
  const { setAddress } = useAddressStore();

  return (
    <Grid item xs={4}>
      <Stack
        p={"0.5rem"}
        pt={"1.5rem"}
        bgcolor={
          address.getAddress().asDefault
            ? "background.reddish"
            : "background.light"
        }
        color={"text.primary"}
        sx={{ border: "1px solid", borderColor: "text.price" }}
        height={1}
        position={"relative"}
      >
        {address.getAddress().asDefault && (
          <Typography
            textAlign={"right"}
            fontSize={"0.8rem"}
            sx={{
              position: "absolute",
              top: "0.5rem",
              right: "1rem",
            }}
          >
            {t("defaultAddress", { ns: "addressForm" })}
          </Typography>
        )}
        <Stack p={1} gap={1} flex={1}>
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
                <Typography fontWeight={"bold"} noWrap minWidth={"fit-content"}>
                  {address.getAddress().contactName}
                </Typography>
                <Typography
                  noWrap
                  fontWeight={"bold"}
                  title={address.getAddress().phoneNumber}
                >
                  {address.getAddress().phoneNumber}
                </Typography>
              </Stack>
            </Grid>
          </Grid>

          <Stack flex={1}>
            <Grid container height={1}>
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
                <Stack height={1}>
                  <Stack height={1}>
                    <Stack gap={1}>
                      <Stack
                        direction={"row"}
                        divider={<Typography>,&nbsp;</Typography>}
                      >
                        {address.getAddress()?.woreda && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.woreda}
                          </Typography>
                        )}
                        {address.getAddress()?.subCity && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.subCity}
                          </Typography>
                        )}
                        {address.getAddress()?.city && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.city}
                          </Typography>
                        )}
                      </Stack>

                      <Stack
                        direction={"row"}
                        divider={<Typography>,&nbsp;</Typography>}
                      >
                        {address.getAddress()?.region && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.region}
                          </Typography>
                        )}
                        {address.getAddress()?.country && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.country}
                          </Typography>
                        )}
                        {address.getAddress()?.postalCode && (
                          <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                            {address.getAddress()?.postalCode}
                          </Typography>
                        )}
                      </Stack>
                    </Stack>
                    {address.getAddress().asDefault && (
                      <Typography>{t("default", { ns: "common" })}</Typography>
                    )}
                  </Stack>

                  <Stack direction={"row"} gap={2} mt={2}>
                    <Button
                      color="primaryButton"
                      variant="text"
                      sx={{
                        p: "0",
                        color: "text.primary",
                        minWidth: "unset",
                        "&:hover": {
                          bgcolor: "transparent",
                        },
                      }}
                      onClick={() => {
                        setAddress(address);
                        setAddAddress();
                      }}
                    >
                      {t("edit")}
                    </Button>
                    <Button
                      onClick={() => {
                        setOpenModal({
                          title: t("deleteShippingAddress", { ns: "modal" }),
                          description: t("confirmDeletionOfShippingAddress", {
                            ns: "modal",
                          }),
                          open: true,
                          callBackFn: () => {
                            console.log("delete this address");
                            handleDeleteAddress({
                              token,
                              setShippingAddress,
                              setLoading,
                              setSnackBar,
                              lang,
                              addressId: address.getAddress()._id.toString(),
                            });
                          },
                        });
                      }}
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
                      {t("delete")}
                    </Button>
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
    </Grid>
  );
}

export default AddressListComponent;
