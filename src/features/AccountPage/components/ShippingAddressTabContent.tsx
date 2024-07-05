import {
  Box,
  Button,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import useTokenStore from "@/store/token";
import useUserStore from "@/store/user";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { t } from "i18next";
import orderShippingAddress from "@/utils/orderShippingAddress";
import AddressListComponent from "./AddressListComponent";
import { ShippingAddressForm } from "./ShippingAddressForm";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.lightOpaque",
  color: "text.primary",
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
};

function ShippingAddressTabContent() {
  const { lang, user, shippingAddress, setShippingAddress, setBreadcrumbs } =
    useUserStore();
  const { token } = useTokenStore();
  const [addShippingAddress, setAddShippingAddress] = useState<boolean>(false);
  const [openDeleteAddressModal, setOpenDeleteAddressModal] =
    useState<boolean>(false);
  useState<boolean>(false);

  console.log(shippingAddress);

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/" },
      { name: "account", url: "/account" },
      {
        name: "shippingAddress",
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
        <ShippingAddressForm onClose={() => setAddShippingAddress(false)} />
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
            {t("addNew")}
          </Button>
          <Grid container spacing={2}>
            {orderShippingAddress(shippingAddress).map((address, index) => {
              return (
                <AddressListComponent
                  address={address}
                  setOpenDeleteAddressModal={() =>
                    setOpenDeleteAddressModal(true)
                  }
                  key={index}
                />
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
            {t("deleteShippingAddress")}
          </Typography>
          <Typography id="modal-modal-description">
            {t("confirmDeletionOfShippingAddress")}
          </Typography>
          <Stack direction={"row"} gap={2} mt={2}>
            <Button
              color="primary"
              variant="contained"
              sx={{ color: "text.primary", flex: 1 }}
            >
              {t("ok")}
            </Button>
            <Button
              variant="contained"
              color="secondaryButton"
              sx={{ color: "text.primary", flex: 1 }}
              onClick={() => setOpenDeleteAddressModal(false)}
            >
              {t("cancel")}
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
