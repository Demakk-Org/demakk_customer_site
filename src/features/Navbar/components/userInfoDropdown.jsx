import { Avatar, Box, Button, Divider, Grid, Typography } from "@mui/material";
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
import language from "@/data/dictionary";

function UserInfoDropdown({ openLogin }) {
  const { user, setUser, signOut } = useUserStore();
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
        {!user?.name ? (
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
              {language.en.signUp}
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
              onClick={() => setUser({ name: "Solen" })}
            >
              {language.en.register}
            </Button>
          </>
        ) : (
          <>
            <Grid
              width={1}
              container
              display={"flex"}
              alignItems={"center"}
              gap={1}
            >
              <Grid item display={"flex"}>
                <Avatar src={user?.img || "/assets/images/profile.webp"} />
              </Grid>
              <Grid item md={9} display={"flex"}>
                <Typography
                  color={"text"}
                  flex={1}
                  fontWeight={400}
                  fontSize={"0.9rem"}
                >
                  {language.en.welcomeBack},{" "}
                  <Box component={"span"} fontWeight={"bold"}>
                    {user.name}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Box
              width={1}
              container
              display={"flex"}
              alignItems={"center"}
              gap={1}
            >
              <Button
                onClick={() => signOut()}
                variant="text"
                sx={{
                  ml: "48px",
                  textTransform: "unset",
                  color: "text.primary",
                }}
              >
                {language.en.signOut}
              </Button>
            </Box>
          </>
        )}

        <Divider flexItem sx={{ borderColor: "bright" }} />

        <SmallDeviceButton
          startImage={<LuClipboardList fontSize={"inherit"} />}
          title={language.en.myOrders}
        />
        <SmallDeviceButton
          startImage={<RiCopperCoinLine fontSize={"inherit"} />}
          title={language.en.myCoins}
        />
        <SmallDeviceButton
          startImage={<AiOutlineMessage fontSize={"inherit"} />}
          title={language.en.messageCenter}
        />
        <SmallDeviceButton
          startImage={<CreditCard fontSize={"inherit"} />}
          title={language.en.payments}
        />
        <SmallDeviceButton
          startImage={<FavoriteBorderOutlined fontSize={"inherit"} />}
          title={language.en.wishList}
        />
        <SmallDeviceButton
          startImage={<ConfirmationNumberOutlined fontSize={"inherit"} />}
          title={language.en.myCoupons}
        />
        <Divider flexItem />
        <SmallDeviceButton title={language.en.dsCenter} />
        <SmallDeviceButton title={language.en.buyerProtection} />
        <SmallDeviceButton title={language.en.helpCenter} />
        <SmallDeviceButton title={language.en.disputeAndReports} />
        <SmallDeviceButton title={language.en.accessibility} />
      </Box>
    </>
  );
}

export default UserInfoDropdown;
