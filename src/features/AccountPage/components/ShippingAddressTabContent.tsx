import { Button, Grid, Stack, Typography } from "@mui/material";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { useEffect, useState } from "react";
import orderShippingAddress from "@/utils/orderShippingAddress";
import AddressListComponent from "./AddressListComponent";
import { ShippingAddressForm } from "./ShippingAddressForm";
import useAddressStore from "@/store/address";
import { useTranslation } from "next-i18next";

function ShippingAddressTabContent() {
  const { t } = useTranslation("account");
  const { setAddress } = useAddressStore();
  const { shippingAddress, setShippingAddress, setBreadcrumbs } =
    useUserStore();
  const { token } = useTokenStore();
  const [addShippingAddress, setAddShippingAddress] = useState<boolean>(false);

  useEffect(() => {
    setBreadcrumbs([
      { name: t("home", { ns: "common" }), url: "/" },
      { name: t("account"), url: "/account" },
      {
        name: t("shippingAddress"),
        url: "/account/addressList",
      },
    ]);

    token && setShippingAddress(token);
  }, [token]);

  return (
    <Stack gap={2}>
      <Typography color={"text.primary"} fontSize={"1.25rem"}>
        {t("shippingAddress")}
      </Typography>

      {addShippingAddress ? (
        <ShippingAddressForm
          onClose={() => {
            setAddShippingAddress(false);
            setAddress(null);
          }}
        />
      ) : (
        <Stack gap={2}>
          <Button
            variant="contained"
            onClick={() => setAddShippingAddress((p) => !p)}
            sx={{
              color: "text.primary",
              alignSelf: "flex-start",
              px: "2.5rem",
            }}
          >
            {t("addNew", { ns: "actions" })}
          </Button>
          <Grid container spacing={2}>
            {orderShippingAddress(shippingAddress).map((address, index) => {
              console.log(address);
              return (
                <AddressListComponent
                  setAddAddress={() => setAddShippingAddress(true)}
                  address={address}
                  key={index}
                />
              );
            })}
          </Grid>
        </Stack>
      )}
    </Stack>
  );
}

export default ShippingAddressTabContent;
