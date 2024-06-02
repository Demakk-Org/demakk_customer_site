import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

function SettingTabContent() {
  const { setBreadcrumbs, lang } = useUserStore();

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/" },
      {
        name: "account",
        url: "/account",
      },
      {
        name: "settings",
        url: "/account/settings",
      },
    ]);
  }, []);
  return (
    <Stack color={"text.primary"} spacing={2}>
      <Stack p={"1rem"} bgcolor={"background.light"}>
        <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
          {getLanguage("settings", lang)}
        </Typography>
      </Stack>

      <Stack p={"2rem 1rem"} bgcolor={"background.light"} gap={6}>
        <Stack gap={2}>
          <Typography>{getLanguage("personalInformation", lang)}</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("uploadPicture", lang)}
            </Button>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("editProfile", lang)}
            </Button>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("countryRegion", lang)}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>{getLanguage("securityInformation", lang)}</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("changeEmailAddress", lang)}
            </Button>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("changePassword", lang)}
            </Button>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("setSecurityQuestion", lang)}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>
            {getLanguage("activateEmailNotifications", lang)}
          </Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("activate", lang)}
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>{getLanguage("socialMediaAccounts", lang)}</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="demakkPrimary"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              {getLanguage("activate", lang)}
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SettingTabContent;
