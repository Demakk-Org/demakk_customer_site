import {
  Button,
  Grow,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { IAddress } from "@/model/addressModel";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import { ChevronLeft, ChevronRight, CloseOutlined } from "@mui/icons-material";
import { useState } from "react";
import { ShippingAddressForm } from "../AccountPage/components/ShippingAddressForm";
import AddressListComponent from "./AddressListComponent";
import useAddressStore from "@/store/address";
import { t } from "i18next";

function CheckOutShippingAddressComponent({
  shippingAddress,
}: {
  shippingAddress?: IAddress;
}) {
  const { lang } = useUserStore();
  const { address, setAddress } = useAddressStore();

  const [openChangeAddressModal, setOpenChangeAddressModal] = useState(false);
  const [addShippingAddress, setAddShippingAddress] = useState(false);

  return (
    <Stack p={2} bgcolor={"background.light"} spacing={{ xs: 1, md: 2 }}>
      <Typography
        fontSize={{ xs: "1rem", md: "1.3rem" }}
        fontWeight={"bold"}
        color={"text.primary"}
        className={demakkFont.className}
      >
        {t("shippingAddress")}
      </Typography>

      <Stack
        direction="row"
        color={"text.primary"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack>
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={{ xs: 0, md: 2 }}
          >
            <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
              {shippingAddress?.contactName}
            </Typography>
            <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
              {shippingAddress?.phoneNumber}
            </Typography>
          </Stack>

          <Stack
            direction={"row"}
            divider={
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                ,&nbsp;
              </Typography>
            }
          >
            {shippingAddress?.woreda && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.woreda}
              </Typography>
            )}
            {shippingAddress?.subCity && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.subCity}
              </Typography>
            )}
            {shippingAddress?.city && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.city}
              </Typography>
            )}
          </Stack>

          <Stack
            direction={"row"}
            divider={
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                ,&nbsp;
              </Typography>
            }
          >
            {shippingAddress?.region && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.region}
              </Typography>
            )}
            {shippingAddress?.country && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.country}
              </Typography>
            )}
            {shippingAddress?.postalCode && (
              <Typography fontSize={{ xs: "0.9rem", md: "1rem" }}>
                {shippingAddress?.postalCode}
              </Typography>
            )}
          </Stack>
        </Stack>

        <Button
          onClick={() => setOpenChangeAddressModal(true)}
          color="demakkSecondary"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {t("change")}
        </Button>
        <IconButton
          onClick={() => setOpenChangeAddressModal(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <ChevronRight />
        </IconButton>
      </Stack>

      <Modal
        open={openChangeAddressModal}
        onClose={() => {
          setAddress(null);
          setOpenChangeAddressModal(false);
        }}
      >
        <Stack
          width={"100vw"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}
        >
          <Grow in={openChangeAddressModal}>
            <Stack
              width={{ xs: "100%", md: "60%" }}
              height={{ xs: "100%", md: "90%" }}
              maxHeight={"100%"}
              bgcolor={"background.lightOpaque"}
              borderRadius={{ xs: 0, md: 4 }}
              p={{ xs: 0, md: 1 }}
              spacing={2}
              position={"relative"}
            >
              <Stack
                direction={{ xs: "row-reverse", md: "row" }}
                alignItems={"center"}
                px={{ xs: 1, md: 2 }}
              >
                <Typography
                  flex={1}
                  textAlign={{ xs: "center", md: "left" }}
                  fontWeight={"bold"}
                  className={demakkFont.className}
                >
                  {!addShippingAddress
                    ? t("shippingAddress")
                    : !address
                    ? t("addNewAddress")
                    : t("updateAddress")}
                </Typography>

                <IconButton
                  onClick={() => {
                    setAddress(null);
                    setOpenChangeAddressModal(false);
                    setAddShippingAddress(false);
                  }}
                >
                  <ChevronLeft sx={{ display: { xs: "inline", md: "none" } }} />
                  <CloseOutlined
                    sx={{ display: { xs: "none", md: "inline" } }}
                  />
                </IconButton>
              </Stack>
              {!addShippingAddress ? (
                <AddressListComponent
                  setAddShippingAddress={() => setAddShippingAddress((s) => !s)}
                />
              ) : (
                <ShippingAddressForm
                  onClose={() => {
                    setAddress(null);
                    setAddShippingAddress(false);
                  }}
                />
              )}
            </Stack>
          </Grow>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default CheckOutShippingAddressComponent;
