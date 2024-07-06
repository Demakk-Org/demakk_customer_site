import { IconButton, Stack, Typography } from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useUserStore from "@/store/user";
import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/router";
import { t } from "i18next";

function CheckOutNavBar() {
  const { lang } = useUserStore();
  const router = useRouter();

  return (
    <Stack
      p={{ xs: "0.5rem 1rem", md: "0.5rem 12rem" }}
      direction={"row"}
      bgcolor={"background.lightOpaque"}
      alignItems={"center"}
      zIndex={1000}
    >
      <Typography
        component={"a"}
        color={"text.primary"}
        href="/"
        className={demakkFont.className}
        fontSize={{ xs: "1.5rem", md: "2rem" }}
        fontWeight={"bold"}
        display={{ xs: "none", md: "inline" }}
        sx={{ textDecoration: "none" }}
      >
        {t("demakk")}
      </Typography>
      <IconButton
        onClick={() => router.back()}
        sx={{ display: { xs: "inline-flex", md: "none" } }}
      >
        <ChevronLeft fontSize="medium" />
      </IconButton>
      <Typography
        component={"header"}
        color={"text.primary"}
        className={demakkFont.className}
        fontSize={{ xs: "1.1rem", md: "2rem" }}
        fontWeight={"bold"}
        display={{ md: "none" }}
      >
        {t("orderConfirmation")}
      </Typography>
    </Stack>
  );
}

export default CheckOutNavBar;
