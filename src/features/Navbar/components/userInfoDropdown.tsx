import { Box, Button, Divider, Grid, Stack, Typography } from "@mui/material";
import { LuClipboardList } from "react-icons/lu";
import { RiCopperCoinLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";
import {
  ConfirmationNumberOutlined,
  CreditCard,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

import useUserStore from "@/store/user";

import SmallDeviceButton from "./smallDeviceButton";
import { useRouter } from "next/router";
import useTokenStore from "@/store/token";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import { useTranslation } from "next-i18next";

interface UserInfoDropdownProps {
  openLogin: () => void;
}

function UserInfoDropdown({ openLogin }: UserInfoDropdownProps) {
  const { t } = useTranslation("account");
  const { user, signOut } = useUserStore();
  const { setToken } = useTokenStore();
  const router = useRouter();

  return (
    <Box
      position={"absolute"}
      top={0}
      right={0}
      display={{ xs: "none", md: "flex" }}
      flexDirection={"column"}
      minWidth={300}
      bgcolor={"background.paper"}
      border={"1px solid lightgray"}
      borderRadius={"1rem"}
      zIndex={2000}
      maxHeight={"95vh"}
      overflow={"hidden"}
    >
      <Stack p={"1.5rem"} pb={1}>
        {!user ? (
          <>
            <Button
              variant="contained"
              size="large"
              fullWidth
              color="demakkPrimary"
              sx={{
                borderRadius: "1.5rem",
                textTransform: "capitalize",
              }}
              onClick={() => openLogin()}
            >
              {t("logIn", { ns: "auth" })}
            </Button>
            <Button
              variant="text"
              size="large"
              fullWidth
              sx={{
                bgcolor: "transparent",
                borderRadius: "1.5rem",
                color: "demakkPrimary.contrastText",
                textTransform: "capitalize",
              }}
              onClick={() => router.push("/login")}
            >
              {t("register", { ns: "auth" })}
            </Button>
          </>
        ) : (
          <>
            <Grid
              width={1}
              container
              display={"flex"}
              alignItems={"center"}
              spacing={1}
            >
              <Grid item md={3} display={"flex"}>
                <ImageFromFirebase
                  name={user?.getUser().image?.imageUrls[0]}
                  quality="240p"
                  shape="circular"
                  width={"100%"}
                  type={ImageType.user}
                />
              </Grid>
              <Grid item md={9} display={"flex"}>
                <Typography
                  color={"text.primary"}
                  flex={1}
                  fontWeight={400}
                  fontSize={"0.9rem"}
                >
                  {t("welcomeBack", { ns: "common" })},&nbsp;
                  <Box component={"span"} fontWeight={"bold"}>
                    {user?.getUser().firstName}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Box width={1} display={"flex"} alignItems={"center"} gap={1}>
              <Button
                onClick={() => {
                  signOut();
                  setToken(null);
                }}
                variant="text"
                sx={{
                  ml: "48px",
                  textTransform: "unset",
                  color: "text.primary",
                }}
              >
                {t("signOut", { ns: "auth" })}
              </Button>
            </Box>
          </>
        )}
      </Stack>

      <Divider flexItem sx={{ borderColor: "bright" }} />

      <Stack overflow={"auto"} p={"1.5rem"} pt={1}>
        <SmallDeviceButton
          startImage={<LuClipboardList fontSize={"inherit"} />}
          title={t("myOrders")}
          action={() => router.push("/order")}
        />
        <SmallDeviceButton
          startImage={<RiCopperCoinLine fontSize={"inherit"} />}
          title={t("myCoins")}
        />
        <SmallDeviceButton
          startImage={<AiOutlineMessage fontSize={"inherit"} />}
          title={t("messageCenter")}
        />
        <SmallDeviceButton
          startImage={<CreditCard fontSize={"inherit"} />}
          title={t("payments")}
          action={() => router.push("/payment")}
        />
        <SmallDeviceButton
          startImage={<FavoriteBorderOutlined fontSize={"inherit"} />}
          title={t("wishList")}
          action={() => router.push("/wish-list")}
        />
        <SmallDeviceButton
          startImage={<ConfirmationNumberOutlined fontSize={"inherit"} />}
          title={t("myCoupons")}
        />
        <Divider flexItem />
        <SmallDeviceButton
          title={t("settings", { ns: "account" })}
          action={() => router.push("/account/settings")}
        />
        <SmallDeviceButton title={t("dsCenter", { ns: "common" })} />
        <SmallDeviceButton title={t("buyerProtection", { ns: "common" })} />
        <SmallDeviceButton title={t("helpCenter", { ns: "common" })} />
        <SmallDeviceButton title={t("disputeAndReports", { ns: "common" })} />
        <SmallDeviceButton title={t("accessibility", { ns: "common" })} />
      </Stack>
    </Box>
  );
}

export default UserInfoDropdown;
