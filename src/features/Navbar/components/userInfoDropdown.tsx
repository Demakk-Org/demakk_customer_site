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
import getLanguage from "@/utils/getLanguage";

interface UserInfoDropdownProps {
  openLogin: () => void;
}

function UserInfoDropdown({ openLogin }: UserInfoDropdownProps) {
  const { user, setUser, signOut, lang } = useUserStore();
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
              {getLanguage("logIn", lang)}
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
              {getLanguage("register", lang)}
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
                  color={"text.primary"}
                  flex={1}
                  fontWeight={400}
                  fontSize={"0.9rem"}
                >
                  {getLanguage("welcomeBack", lang)},{" "}
                  <Box component={"span"} fontWeight={"bold"}>
                    {user.name}
                  </Box>
                </Typography>
              </Grid>
            </Grid>
            <Box width={1} display={"flex"} alignItems={"center"} gap={1}>
              <Button
                onClick={() => signOut()}
                variant="text"
                sx={{
                  ml: "48px",
                  textTransform: "unset",
                  color: "text.primary",
                }}
              >
                {getLanguage("signOut", lang)}
              </Button>
            </Box>
          </>
        )}

        <Divider flexItem sx={{ borderColor: "bright" }} />

        <SmallDeviceButton
          startImage={<LuClipboardList fontSize={"inherit"} />}
          title={getLanguage("myOrders", lang)}
        />
        <SmallDeviceButton
          startImage={<RiCopperCoinLine fontSize={"inherit"} />}
          title={getLanguage("myCoins", lang)}
        />
        <SmallDeviceButton
          startImage={<AiOutlineMessage fontSize={"inherit"} />}
          title={getLanguage("messageCenter", lang)}
        />
        <SmallDeviceButton
          startImage={<CreditCard fontSize={"inherit"} />}
          title={getLanguage("payments", lang)}
        />
        <SmallDeviceButton
          startImage={<FavoriteBorderOutlined fontSize={"inherit"} />}
          title={getLanguage("wishList", lang)}
        />
        <SmallDeviceButton
          startImage={<ConfirmationNumberOutlined fontSize={"inherit"} />}
          title={getLanguage("myCoupons", lang)}
        />
        <Divider flexItem />
        <SmallDeviceButton title={getLanguage("dsCenter", lang)} />
        <SmallDeviceButton title={getLanguage("buyerProtection", lang)} />
        <SmallDeviceButton title={getLanguage("helpCenter", lang)} />
        <SmallDeviceButton title={getLanguage("disputeAndReports", lang)} />
        <SmallDeviceButton title={getLanguage("accessibility", lang)} />
      </Box>
    </>
  );
}

export default UserInfoDropdown;
