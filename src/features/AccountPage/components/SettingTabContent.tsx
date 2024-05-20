import useUserStore from "@/store/user";
import { Button, Stack, Typography } from "@mui/material";
import { useEffect } from "react";

function SettingTabContent() {
  const { setBreadcrumbs } = useUserStore();

  useEffect(() => {
    setBreadcrumbs([
      { name: "Home", url: "/" },
      {
        name: "Account",
        url: "/account",
      },
      {
        name: "Settings",
        url: "/account/settings",
      },
    ]);
  }, []);
  return (
    <Stack color={"text.primary"} spacing={2}>
      <Stack p={"1rem"} bgcolor={"background.light"}>
        <Typography fontSize={"1.2rem"} fontWeight={"bold"} letterSpacing={1}>
          Settings
        </Typography>
      </Stack>

      <Stack p={"2rem 1rem"} bgcolor={"background.light"} gap={6}>
        <Stack gap={2}>
          <Typography>Personal Information</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Upload picture
            </Button>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Edit profile
            </Button>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Country/Region
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>Security Information</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Change email address
            </Button>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Change password
            </Button>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Set security question
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>Activate email notifications</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Activate
            </Button>
          </Stack>
        </Stack>

        <Stack gap={2}>
          <Typography>Social media accounts</Typography>
          <Stack direction={"row"} gap={"4rem"}>
            <Button
              color="primaryButton"
              sx={{
                "&:hover": { color: "demakkPrimary.main" },
                px: "2rem",
                fontSize: "0.8rem",
                fontWeight: 400,
              }}
            >
              Activate
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default SettingTabContent;
