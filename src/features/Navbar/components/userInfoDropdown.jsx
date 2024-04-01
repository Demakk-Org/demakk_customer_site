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
        bgcolor={"secondaryBg.light"}
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
              color="primaryBg"
              sx={{
                borderRadius: "1.5rem",
                color: "primaryBg.contrastText",
                textTransform: "capitalize",
              }}
              onClick={() => openLogin()}
            >
              Sign Up
            </Button>
            <Button
              variant="text"
              size="large"
              fullWidth
              sx={{
                bgcolor: "transparent",
                borderRadius: "1.5rem",
                color: "secondaryBg.contrastText",
                textTransform: "capitalize",
              }}
              onClick={() => setUser({ name: "Solen" })}
            >
              Register
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
                  color={"secondaryBg.contrastText"}
                  flex={1}
                  fontWeight={400}
                  fontSize={"0.9rem"}
                >
                  Welcome back,{" "}
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
                color="bright"
                sx={{ ml: "48px", textTransform: "unset" }}
              >
                Sign Out
              </Button>
            </Box>
          </>
        )}
        <Divider flexItem sx={{ borderColor: "bright.main" }} />
        <SmallDeviceButton
          startImage={<LuClipboardList fontSize={"inherit"} />}
          title={"My Orders"}
        />
        <SmallDeviceButton
          startImage={<RiCopperCoinLine fontSize={"inherit"} />}
          title={"My Coins"}
        />
        <SmallDeviceButton
          startImage={<AiOutlineMessage fontSize={"inherit"} />}
          title={"Message Center"}
        />
        <SmallDeviceButton
          startImage={<CreditCard fontSize={"inherit"} />}
          title={"Payments"}
        />
        <SmallDeviceButton
          startImage={<FavoriteBorderOutlined fontSize={"inherit"} />}
          title={"Wish List"}
        />
        <SmallDeviceButton
          startImage={<ConfirmationNumberOutlined fontSize={"inherit"} />}
          title={"My Coupons"}
        />
        <Divider flexItem />
        <SmallDeviceButton title={"DC Center"} />
        <SmallDeviceButton title={"Buyer Protection"} />
        <SmallDeviceButton title={"Help Center"} />
        <SmallDeviceButton title={"Disputes & Reports"} />
        <SmallDeviceButton title={"Accessility"} />
      </Box>
    </>
  );
}

export default UserInfoDropdown;
