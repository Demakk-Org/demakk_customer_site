import {
  Box,
  Button,
  Divider,
  FormControlLabel,
  Grid,
  MenuItem,
  Radio,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import getMonths from "@/utils/getMonths";
import { CreditCardOutlined, VerifiedUserOutlined } from "@mui/icons-material";
import { useTranslation } from "next-i18next";

interface AddPaymentMethodComponentProps {
  setAddPaymentMethod: () => void;
}

function AddPaymentMethodComponent({
  setAddPaymentMethod,
}: AddPaymentMethodComponentProps) {
  const { t } = useTranslation();
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
          {t("provideFurtherInformation", { ns: "cardForm" })}
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
            {t("paymentInformationSafety", { ns: "policies" })}
          </Typography>
        </Stack>

        <Stack
          direction={"row"}
          alignItems={"center"}
          p={2}
          bgcolor={"background.light"}
          borderRadius={2}
          spacing={1}
          mt={2}
        >
          <CreditCardOutlined sx={{ fontSize: "1.2rem" }} />
          <Typography
            className={demakkFont.className}
            fontWeight={"bold"}
            fontSize={"0.9rem"}
          >
            {t("addNewCard", { ns: "actions" })}
          </Typography>
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

        <Stack pt={4}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Stack>
                <TextField
                  fullWidth
                  id="card-number"
                  size="medium"
                  label={t("cardNumber", { ns: "cardForm" })}
                  variant="outlined"
                  helperText={
                    true && (
                      <Typography fontSize={"0.8rem"}>
                        {t("invalidCardNumber", { ns: "cardForm" })}
                      </Typography>
                    )
                  }
                  error={true}
                />
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack>
                <TextField
                  id="card-holder-name"
                  label={t("cardHolderName", { ns: "cardForm" })}
                  helperText={
                    true && (
                      <Typography fontSize={"0.8rem"}>
                        {t("enterCardHolderName", { ns: "cardForm" })}
                      </Typography>
                    )
                  }
                  variant="outlined"
                  error={true}
                />
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack
                direction={"row"}
                alignItems={"center"}
                spacing={1.5}
                divider={<Typography>/</Typography>}
              >
                <TextField
                  id="expiration month"
                  label="MM"
                  variant="outlined"
                  select
                  fullWidth
                >
                  {getMonths({ lang }).map((month, index) => (
                    <MenuItem key={index} value={index + 1}>
                      {month.name} ({index + 1})
                    </MenuItem>
                  ))}
                </TextField>
                <TextField
                  fullWidth
                  id="expiration year"
                  label="YYYY"
                  variant="outlined"
                  select
                  sx={{ maxHeight: "3rem" }}
                >
                  {[2024, 2025, 2026, 2027, 2028, 2029, 2030].map(
                    (year, index) => {
                      return (
                        <MenuItem key={index} value={year}>
                          {year}
                        </MenuItem>
                      );
                    }
                  )}
                </TextField>
              </Stack>
            </Grid>

            <Grid item xs={6}>
              <Stack>
                <TextField
                  id="card-cvv"
                  label="CVV"
                  helperText={
                    true && (
                      <Typography fontSize={"0.8rem"}>
                        {t("enterCVV", { ns: "cardForm" })}
                      </Typography>
                    )
                  }
                  variant="outlined"
                  error={true}
                />
              </Stack>
            </Grid>

            <Grid item xs={12}>
              <Stack width={1} justifyContent={"flex-start"}>
                <FormControlLabel
                  checked={false}
                  control={<Radio color="warning" size="small" />}
                  sx={{ mr: 0 }}
                  label={t("saveCardDetails", { ns: "cardForm" })}
                  onClick={() => {}}
                />
              </Stack>
            </Grid>
          </Grid>
        </Stack>
      </Stack>

      <Stack p={"1.5rem 12rem"}>
        <Button variant="contained" size="large" sx={{ borderRadius: "4rem" }}>
          <Typography className={demakkFont.className} fontWeight={"bold"}>
            {t("saveAndConfirm", { ns: "actions" })}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default AddPaymentMethodComponent;
