import useUserStore from "@/store/user";
import { Button, Grid, Stack, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

function UserProfileDisplayComponent({
  setEditProfile,
}: {
  setEditProfile: () => void;
}) {
  const { user } = useUserStore();
  const { t } = useTranslation(["account"]);
  return (
    <Stack
      border={"1px solid"}
      bgcolor={"background.lighter"}
      borderColor={"text.secondary"}
    >
      <Stack color={"text.primary"} spacing={4} p={1}>
        <Grid container>
          <Grid item xs={9} container spacing={2} rowSpacing={2}>
            <Grid item xs={4}>
              <Typography textAlign={"right"}>{t("user.name")}:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                {user?.getUser().firstName || ""}{" "}
                {user?.getUser().lastName || ""}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography textAlign={"right"}>{t("user.gender")}:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>
                {user?.getUser().gender == "male"
                  ? t("male", { ns: "common" })
                  : user?.getUser().gender == "female"
                  ? t("male", { ns: "common" })
                  : ""}
              </Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography textAlign={"right"}>{t("user.email")}:</Typography>
            </Grid>
            <Grid item xs={8}>
              <Stack direction={"row"} spacing={1} alignItems={"center"}>
                <Typography>{user?.getUser().email}</Typography>
                {!user?.getUser().emailVerified && (
                  <Typography color={"error.light"} fontSize={"0.9rem"}>
                    <Typography color={"text.primary"} component={"span"}>
                      (
                    </Typography>
                    <Typography component={"span"}>
                      {t("user.emailAddressUnconfirmed")}
                    </Typography>
                    <Typography color={"text.primary"} component={"span"}>
                      )
                    </Typography>
                  </Typography>
                )}
              </Stack>
            </Grid>

            <Grid item xs={4}>
              <Typography textAlign={"right"}>
                {t("user.contactAddress")}:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{user?.getUser().address.country}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography textAlign={"right"}>
                {t("user.zipPostalCode", { ns: "account" })}:
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography>{user?.getUser().address.zipCode}</Typography>
            </Grid>

            <Grid item xs={4}>
              <Typography textAlign={"right"}>{t("user.phoneNo")}:</Typography>
            </Grid>
            <Grid item xs={8}>
              {user?.getUser().phoneNumber && (
                <Stack direction={"row"} spacing={1}>
                  <Typography>{user?.getUser().phoneNumber}</Typography>
                  {!user?.getUser().phoneNumberVerified && (
                    <Typography color={"error.light"} fontSize={"0.9rem"}>
                      <Typography color={"text.primary"} component={"span"}>
                        (
                      </Typography>
                      <Typography component={"span"}>
                        {t("user.phoneNumberUnconfirmed")}
                      </Typography>
                      <Typography color={"text.primary"} component={"span"}>
                        )
                      </Typography>
                    </Typography>
                  )}
                </Stack>
              )}
            </Grid>
          </Grid>
          <Grid item xs={3}>
            <Stack>
              <Button sx={{ alignSelf: "flex-end" }}>
                {t("deactivateAccount", { ns: "actions" })}
              </Button>
            </Stack>
          </Grid>
        </Grid>

        <Button
          sx={{ alignSelf: "center", px: "2rem" }}
          onClick={() => setEditProfile()}
        >
          {t("edit", { ns: "actions" })}
        </Button>
      </Stack>
    </Stack>
  );
}

export default UserProfileDisplayComponent;
