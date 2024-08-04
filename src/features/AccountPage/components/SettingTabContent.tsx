import { Button, Stack, Typography } from "@mui/material";
import useUserStore from "@/store/user";
import { useEffect } from "react";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import useTokenStore from "@/store/token";

function SettingTabContent() {
  const { t } = useTranslation(["account"]);
  const { setBreadcrumbs } = useUserStore();
  const { token } = useTokenStore();

  useEffect(() => {
    setBreadcrumbs([
      { name: t("home", { ns: "common" }), url: "/" },
      {
        name: t("account"),
        url: "/account",
      },
      {
        name: t("settings"),
        url: "/account/settings",
      },
    ]);
  }, []);

  return (
    <Stack color={"text.primary"} spacing={2} width={1}>
      <Stack p={"1rem"} bgcolor={"background.light"}>
        <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
          {t("settings")}
        </Typography>
      </Stack>

      <Stack p={"2rem 1rem"} bgcolor={"background.light"} gap={6}>
        <Stack gap={2}>
          <Typography>{t("user.personalInformation")}</Typography>
          <Stack
            direction={"row"}
            gap={{ xs: "1rem", md: "4rem" }}
            overflow={"auto"}
          >
            <Button
              LinkComponent={"a"}
              variant="contained"
              href={`settings/imageUpload?token=${token}`}
              target="_blank"
              sx={{
                textDecoration: "none",
                color: "unset",
                minWidth: "max-content",
                borderRadius: "0.5rem",
              }}
            >
              {t("user.uploadPicture")}
            </Button>

            <Button
              LinkComponent={"a"}
              variant="contained"
              target="_blank"
              href={`settings/profile?token=${token}`}
              sx={{
                textDecoration: "none",
                color: "unset",
                minWidth: "max-content",
                borderRadius: "0.5rem",
              }}
            >
              {t("user.editProfile")}
            </Button>

            <Button
              disabled
              LinkComponent={"a"}
              href="/"
              target="_blank"
              color="demakkPrimary"
              variant="contained"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
                minWidth: "max-content",
              }}
            >
              {t("countryRegion", { ns: "addressForm" })}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>{t("user.securityInformation")}</Typography>
          <Stack
            direction={"row"}
            gap={{ xs: "1rem", md: "4rem" }}
            overflow={"auto"}
          >
            <Button
              LinkComponent={"a"}
              variant="contained"
              target="_blank"
              href={`settings/update-email?token=${token}`}
              sx={{
                textDecoration: "none",
                color: "unset",
                minWidth: "max-content",
              }}
            >
              {t("user.changeEmailAddress")}
            </Button>

            <Button
              LinkComponent={"a"}
              target="_blank"
              variant="contained"
              href={`settings/update-password?token=${token}`}
              sx={{
                textDecoration: "none",
                color: "unset",
                px: "2rem",
                minWidth: "max-content",
              }}
            >
              {t("user.changePassword")}
            </Button>

            <Button
              LinkComponent={"a"}
              href="/"
              variant="contained"
              color="demakkPrimary"
              disabled
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                minWidth: "max-content",
              }}
            >
              {t("user.setSecurityQuestion")}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>{t("user.activateEmailNotifications")}</Typography>
          <Stack direction={"row"} gap={"4rem"} overflow={"auto"}>
            <Button
              LinkComponent={"a"}
              href="/"
              variant="contained"
              color="demakkPrimary"
              disabled
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                minWidth: "max-content",
              }}
            >
              {t("activate", { ns: "actions" })}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>{t("user.socialMediaAccounts")}</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              LinkComponent={"a"}
              href="/"
              variant="contained"
              color="demakkPrimary"
              disabled
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                minWidth: "max-content",
              }}
            >
              {t("activate", { ns: "actions" })}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SettingTabContent;
