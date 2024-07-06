import { Box, Button, Divider, Grid, Typography } from "@mui/material";
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
import { t } from "i18next";

interface UserInfoDropdownProps {
  openLogin: () => void;
}

function UserInfoDropdown({ openLogin }: UserInfoDropdownProps) {
  const { lang, user, signOut } = useUserStore();
  const { setToken } = useTokenStore();
  const router = useRouter();
  return (
    <>
      <Box
        position={"absolute"}
        top={0}
        right={0}
        sx={{
          display: { xs: "none", md: "flex" },
        }}
        flexDirection={"column"}
        gap={"0.25rem"}
        minWidth={300}
        bgcolor={"background.paper"}
        border={"1px solid lightgray"}
        p={"1.5rem"}
        borderRadius={"1rem"}
        overflow={"auto"}
        zIndex={2000}
      >
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
              {t("logIn")}
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
              {t("register")}
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
                  name={user?.getUser().image.imageUrls[0]}
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
                  {t("welcomeBack")},&nbsp;
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
                {t("signOut")}
              </Button>
            </Box>
          </>
        )}

        <Divider flexItem sx={{ borderColor: "bright" }} />

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
        />
        <SmallDeviceButton
          startImage={<ConfirmationNumberOutlined fontSize={"inherit"} />}
          title={t("myCoupons")}
        />
        <Divider flexItem />
        <SmallDeviceButton title={t("dsCenter")} />
        <SmallDeviceButton title={t("buyerProtection")} />
        <SmallDeviceButton title={t("helpCenter")} />
        <SmallDeviceButton title={t("disputeAndReports")} />
        <SmallDeviceButton title={t("accessibility")} />
      </Box>
    </>
  );
}

export default UserInfoDropdown;
