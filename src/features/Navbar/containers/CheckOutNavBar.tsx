import { IconButton, Stack, Typography } from "@mui/material";
import { demakkFont } from "@/pages/_app";
import { ChevronLeft } from "@mui/icons-material";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from "next-i18next";
import NavBarContainer from "./NavBarContainer";

function CheckOutNavBar() {
  const { t } = useTranslation(["common", "order"]);
  const router = useRouter();

  return (
    <NavBarContainer>
      <Stack
        p={{ xs: "0.5rem 1rem", md: "0.5rem 12rem" }}
        direction={"row"}
        bgcolor={"background.lightOpaque"}
        alignItems={"center"}
        zIndex={1000}
      >
        <Link href="/" style={{ textDecoration: "none" }}>
          <Typography
            color={"text.primary"}
            className={demakkFont.className}
            fontSize={{ xs: "1.5rem", md: "2rem" }}
            fontWeight={"bold"}
            display={{ xs: "none", md: "inline" }}
          >
            {t("demakk")}
          </Typography>
        </Link>
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
          {t("order:orderConfirmation")}
        </Typography>
      </Stack>
    </NavBarContainer>
  );
}

export default CheckOutNavBar;
