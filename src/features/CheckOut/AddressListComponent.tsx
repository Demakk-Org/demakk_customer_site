import {
  Button,
  FormControlLabel,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import handleSettingDefaultAddress from "@/api/address/handleSettingDefaultAddress";
import orderShippingAddress from "@/utils/orderShippingAddress";

import useAddressStore from "@/store/address";
import useCheckOutStore from "@/store/checkOut";
import usePageStore from "@/store/page";
import useUserStore from "@/store/user";
import useTokenStore from "@/store/token";

import GetCheckOut from "@/model/checkOutModel";
import { useTranslation } from "next-i18next";

function AddressListComponent({
  setAddShippingAddress,
}: {
  setAddShippingAddress: () => void;
}) {
  const { t } = useTranslation();
  const { token } = useTokenStore();
  const { setShippingAddress, shippingAddress } = useUserStore();
  const { setAddress } = useAddressStore();
  const { setCheckOut, checkOut } = useCheckOutStore();
  const { setLoading, setSnackBar } = usePageStore();

  console.log(shippingAddress);

  useEffect(() => {
    token && setShippingAddress(token);
  }, [token]);

  if (!token || !checkOut) return <></>;

  return (
    <>
      <Stack
        flex={1}
        spacing={1.5}
        overflow={"auto"}
        p={{ xs: 0, md: 2 }}
        pt={0}
      >
        {orderShippingAddress(shippingAddress).map((address) => {
          let addressFromStore = address.getAddress();
          return (
            <Stack
              key={addressFromStore._id.toString()}
              border={"1px solid gray"}
              p={2}
              borderRadius={2}
              bgcolor={"background.light"}
              sx={{ cursor: "pointer", "&:hover": { bgcolor: "action.hover" } }}
              onClick={() =>
                checkOut &&
                setCheckOut({
                  orderItems: new GetCheckOut(checkOut).getCheckOut()
                    .orderItems,
                  shippingAddress: addressFromStore,
                  paymentMethod: new GetCheckOut(checkOut).getCheckOut()
                    .paymentMethod,
                })
              }
            >
              <Grid container>
                <Grid item xs={1} md={0.75}>
                  <Stack
                    height={1}
                    width={1}
                    alignItems={"center"}
                    justifyContent={"center"}
                  >
                    <FormControlLabel
                      value="select product variant"
                      checked={
                        new GetCheckOut(checkOut)?.getCheckOut().shippingAddress
                          ?._id == addressFromStore._id
                      }
                      control={<Radio color="warning" />}
                      sx={{ mr: 0 }}
                      label=""
                      onClick={() =>
                        checkOut &&
                        setCheckOut({
                          orderItems: new GetCheckOut(checkOut).getCheckOut()
                            .orderItems,
                          shippingAddress: addressFromStore,
                          paymentMethod: new GetCheckOut(checkOut).getCheckOut()
                            .paymentMethod,
                        })
                      }
                    />
                  </Stack>
                </Grid>

                <Grid item xs>
                  <Stack
                    fontSize={{ xs: "0.9rem", md: "1rem" }}
                    sx={{ "& p": { fontSize: "inherit" } }}
                  >
                    <Stack direction={"row"} spacing={2}>
                      <Typography>{addressFromStore.contactName}</Typography>
                      <Typography>{addressFromStore.phoneNumber}</Typography>
                    </Stack>

                    <Stack
                      direction={"row"}
                      divider={<Typography>,&nbsp;</Typography>}
                    >
                      {addressFromStore.woreda && (
                        <Typography>{addressFromStore.woreda}</Typography>
                      )}
                      {addressFromStore.subCity && (
                        <Typography>{addressFromStore.subCity}</Typography>
                      )}
                      {addressFromStore.city && (
                        <Typography>{addressFromStore.city}</Typography>
                      )}
                      {addressFromStore.region && (
                        <Typography>{addressFromStore.region}</Typography>
                      )}
                    </Stack>

                    <Stack
                      direction={"row"}
                      divider={<Typography>,&nbsp;</Typography>}
                    >
                      {addressFromStore.region && (
                        <Typography>{addressFromStore.region}</Typography>
                      )}
                      {addressFromStore.country && (
                        <Typography>{addressFromStore.country}</Typography>
                      )}
                      {addressFromStore.postalCode && (
                        <Typography>{addressFromStore.postalCode}</Typography>
                      )}
                    </Stack>

                    {addressFromStore.asDefault && (
                      <Typography
                        fontSize={"0.8rem"}
                        sx={{
                          mt: "0.5rem",
                          p: "0.125rem 0.5rem",
                          bgcolor: "demakkPrimary.main",
                          alignSelf: "flex-start",
                          borderRadius: "0.25rem",
                        }}
                      >
                        {t("default")}
                      </Typography>
                    )}
                  </Stack>
                </Grid>

                <Grid item xs={2}>
                  <Stack alignItems={"flex-end"}>
                    <Button
                      size="small"
                      variant="text"
                      color="demakkSecondary"
                      onClick={(e) => {
                        e.stopPropagation();
                        setAddress(address);
                        setAddShippingAddress();
                      }}
                    >
                      {t("edit", { ns: "actions" })}
                    </Button>
                    {!addressFromStore.asDefault && (
                      <Button
                        size="small"
                        variant="text"
                        color="demakkSecondary"
                        onClick={() => {
                          handleSettingDefaultAddress({
                            addressId: addressFromStore._id,
                            token,
                            setLoading,
                            setSnackBar,
                            setShippingAddress,
                          });
                        }}
                      >
                        {t("setAsDefault", { ns: "actions" })}
                      </Button>
                    )}
                  </Stack>
                </Grid>
              </Grid>
            </Stack>
          );
        })}
      </Stack>

      <Stack width={1} px={6} pb={1} mt="auto">
        <Button
          variant="contained"
          fullWidth
          size="large"
          sx={{ borderRadius: "2rem" }}
          onClick={() => setAddShippingAddress()}
        >
          {t("addNewAddress", { ns: "actions" })}
        </Button>
      </Stack>
    </>
  );
}

export default AddressListComponent;
