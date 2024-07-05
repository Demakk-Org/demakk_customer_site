import {
  Box,
  Button,
  Grow,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { IPaymentMethod } from "@/model/paymentMethod";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import { useState } from "react";
import PaymentListComponent from "./PaymentListComponent";
import {
  ArrowBackOutlined,
  ChevronRight,
  CloseOutlined,
} from "@mui/icons-material";
import AddPaymentMethodComponent from "./AddPaymentMethodComponent";
import { t } from "i18next";

function CheckOutPaymentMethodComponent({
  paymentMethod,
}: {
  paymentMethod?: IPaymentMethod;
}) {
  const { lang } = useUserStore();

  const [addPaymentMethod, setAddPaymentMethod] = useState(false);
  const [openChangePaymentModal, setOpenChangePaymentModal] = useState(false);
  return (
    <Stack p={2} bgcolor={"background.light"} color={"text.primary"}>
      <Typography
        fontSize={{ xs: "1.1rem", md: "1.3rem" }}
        fontWeight={"bold"}
        className={demakkFont.className}
      >
        {t("paymentMethod")}
      </Typography>

      <Stack
        direction="row"
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Stack direction={"row"} alignItems={"center"} spacing={1}>
          <Box
            component={"img"}
            sx={{ aspectRatio: "16/9" }}
            height={"1rem"}
            src="/assets/images/paymentCards/pay2.webp"
          />
          <Typography fontSize={"0.95rem"} fontWeight={{ xs: 400, md: 600 }}>
            5279 88****** 6755
          </Typography>
        </Stack>

        <Button
          onClick={() => setOpenChangePaymentModal(true)}
          color="demakkSecondary"
          sx={{ display: { xs: "none", md: "flex" } }}
        >
          {t("change")}
        </Button>
        <IconButton
          onClick={() => setOpenChangePaymentModal(true)}
          sx={{ display: { xs: "flex", md: "none" } }}
        >
          <ChevronRight />
        </IconButton>
      </Stack>

      <Modal
        open={openChangePaymentModal}
        onClose={() => {
          setOpenChangePaymentModal(false);
        }}
      >
        <Stack
          width={"100vw"}
          height={"100vh"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"text.primary"}
        >
          <Grow in={openChangePaymentModal}>
            <Stack
              width={"60%"}
              minHeight={"40%"}
              maxHeight={"90%"}
              bgcolor={"background.lightOpaque"}
              borderRadius={4}
              spacing={2}
              position={"relative"}
            >
              {!addPaymentMethod ? (
                <PaymentListComponent
                  setAddPaymentMethod={() => setAddPaymentMethod((s) => !s)}
                />
              ) : (
                <AddPaymentMethodComponent
                  setAddPaymentMethod={() => setAddPaymentMethod((s) => !s)}
                />
              )}

              {!addPaymentMethod ? (
                <IconButton
                  onClick={() => {
                    setOpenChangePaymentModal(false);
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    right: "1rem",
                    mt: "0.5rem !important",
                  }}
                >
                  <CloseOutlined />
                </IconButton>
              ) : (
                <IconButton
                  onClick={() => {
                    setAddPaymentMethod(false);
                  }}
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: "1rem",
                    mt: "0.5rem !important",
                  }}
                >
                  <ArrowBackOutlined />
                </IconButton>
              )}
            </Stack>
          </Grow>
        </Stack>
      </Modal>
    </Stack>
  );
}

export default CheckOutPaymentMethodComponent;
