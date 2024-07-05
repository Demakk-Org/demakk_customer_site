import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  Radio,
  Stack,
  Typography,
} from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import { CreditCardOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import { t } from "i18next";

interface PaymentListComponentProps {
  setAddPaymentMethod: () => void;
}

function PaymentListComponent({
  setAddPaymentMethod,
}: PaymentListComponentProps) {
  const { lang } = useUserStore();

  return (
    <Stack divider={<Divider flexItem />} height={1}>
      <Stack p={2} flex={1}>
        <Typography
          textAlign={"center"}
          fontSize={"1.1rem"}
          className={demakkFont.className}
          fontWeight={600}
        >
          {t("paymentMethod")}
        </Typography>

        <Stack
          direction={"row"}
          width={1}
          justifyContent={"center"}
          alignItems={"center"}
          spacing={0.5}
        >
          <VerifiedUserOutlined sx={{ fontSize: "1rem" }} color="success" />
          <Typography fontSize={"0.8rem"} color="success.main">
            {t("paymentInformationSafety")}
          </Typography>
        </Stack>

        <Stack mt={1} spacing={2} pb={2}>
          {Array(2)
            .fill("")
            .map((paymentMethod, index) => (
              <Stack
                key={index}
                direction={"row"}
                border={"1px solid"}
                borderColor={"text.secondary"}
                borderRadius={2}
                py={1}
                sx={{
                  cursor: "pointer",
                  "&:hover": { bgcolor: "action.hover" },
                }}
              >
                <Grid container>
                  <Grid item xs={0.75}>
                    <Stack
                      height={1}
                      width={1}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <FormControlLabel
                        value="select product variant"
                        checked
                        control={<Radio color="warning" />}
                        sx={{ mr: 0 }}
                        label=""
                        onClick={() => {}}
                      />
                    </Stack>
                  </Grid>

                  <Grid item xs>
                    <Stack
                      direction={"row"}
                      alignItems={"center"}
                      spacing={1}
                      height={1}
                    >
                      <Box
                        component={"img"}
                        sx={{ aspectRatio: "16/9" }}
                        height={"1rem"}
                        src="/assets/images/paymentCards/pay2.webp"
                      />
                      <Typography fontSize={"0.95rem"} fontWeight={600}>
                        5279 88****** 6755
                      </Typography>
                    </Stack>
                  </Grid>
                </Grid>
              </Stack>
            ))}

          <Stack
            direction={"row"}
            border={"1px solid"}
            borderColor={"text.secondary"}
            borderRadius={2}
            py={1}
            sx={{ cursor: "pointer", "&:hover": { bgcolor: "action.hover" } }}
            onClick={() => setAddPaymentMethod()}
          >
            <Grid container>
              <Grid item xs={0.75}>
                <Stack
                  height={1}
                  width={1}
                  alignItems={"center"}
                  justifyContent={"flex-start"}
                >
                  <FormControlLabel
                    value="select product variant"
                    checked={false}
                    control={<Radio color="warning" size="small" />}
                    sx={{ mr: 0 }}
                    label=""
                    onClick={() => {}}
                  />
                </Stack>
              </Grid>

              <Grid item xs>
                <Stack spacing={1}>
                  <Stack
                    direction={"row"}
                    alignItems={"center"}
                    spacing={1}
                    height={1}
                  >
                    <CreditCardOutlined />
                    <Typography fontSize={"0.95rem"} fontWeight={600}>
                      {t("addNewCard")}
                    </Typography>
                  </Stack>

                  <Stack direction={"row"} spacing={1}>
                    <Box
                      component={"img"}
                      sx={{ aspectRatio: "16/9" }}
                      height={"0.8rem"}
                      src="/assets/images/paymentCards/pay2.webp"
                    />

                    <Box
                      component={"img"}
                      sx={{ aspectRatio: "16/9" }}
                      height={"0.8rem"}
                      src="/assets/images/paymentCards/pay3.webp"
                    />

                    <Box
                      component={"img"}
                      sx={{ aspectRatio: "16/9" }}
                      height={"0.8rem"}
                      src="/assets/images/paymentCards/pay4.webp"
                    />

                    <Box
                      component={"img"}
                      sx={{ aspectRatio: "16/9" }}
                      height={"0.8rem"}
                      src="/assets/images/paymentCards/pay5.webp"
                    />
                  </Stack>
                </Stack>
              </Grid>
            </Grid>
          </Stack>
        </Stack>
      </Stack>
      <Stack p={"1.5rem 12rem"}>
        <Button variant="contained" size="large" sx={{ borderRadius: "4rem" }}>
          <Typography className={demakkFont.className} fontWeight={"bold"}>
            {t("confirm")}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default PaymentListComponent;
