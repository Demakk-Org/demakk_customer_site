import { auth } from "@/firebase/firebase";
import { accountTabList } from "@/layout/AccoutPageLayout";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { IoIosArrowForward, IoIosHeartEmpty } from "react-icons/io";
import { PiClockCountdown, PiUserList } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";

function OverviewTabContent() {
  const { setBreadcrumbs, lang } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/" },
      { name: "account", url: "/account" },
    ]);
  }, []);
  return (
    <Stack width={1} gap={{ xs: 3, md: 4 }}>
      <Box
        width={1}
        p={2}
        bgcolor={"background.lighter"}
        display={"flex"}
        flexDirection={"column"}
        gap={2}
      >
        <Avatar
          src={auth?.currentUser?.photoURL || "/assets/images/profile.webp"}
          sx={{
            width: { xs: 50, sm: 50, md: 60 },
            height: { xs: 50, sm: 50, md: 60 },
          }}
        />
        <Grid container>
          <Grid item xs={4} sm={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "pointer" }}
            >
              <Box width={{ xs: 25, sm: 35 }} height={{ xs: 25, sm: 35 }}>
                <IoIosHeartEmpty
                  style={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.85rem", sm: "1.1rem" }}
                letterSpacing={1}
                fontWeight={{ xs: 300, sm: 400 }}
              >
                {getLanguage("wishList", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "pointer" }}
            >
              <Box width={{ xs: 25, sm: 35 }} height={{ xs: 25, sm: 35 }}>
                <PiUserList style={{ width: "inherit", height: "inherit" }} />
              </Box>
              <Typography
                fontSize={{ xs: "0.85rem", sm: "1.1rem" }}
                letterSpacing={1}
                fontWeight={{ xs: 300, sm: 400 }}
              >
                {getLanguage("following", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item display={{ xs: "none", sm: "block" }} sm={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "pointer" }}
            >
              <Box width={{ xs: 25, sm: 35 }} height={{ xs: 25, sm: 35 }}>
                <PiClockCountdown
                  style={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.85rem", sm: "1.1rem" }}
                letterSpacing={1}
                fontWeight={{ xs: 300, sm: 400 }}
              >
                {getLanguage("viewed", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "pointer" }}
            >
              <Box width={{ xs: 25, sm: 35 }} height={{ xs: 25, sm: 35 }}>
                <RiCoupon2Line
                  style={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.85rem", sm: "1.1rem" }}
                letterSpacing={1}
                fontWeight={{ xs: 300, sm: 400 }}
              >
                {getLanguage("coupons", lang)}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Stack width={1} p={2} bgcolor={"background.lighter"}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"text.primary"}
        >
          <Typography
            letterSpacing={1}
            fontSize={{ xs: "1rem", sm: "1.4rem" }}
            fontWeight={{ xs: 300, sm: 500 }}
          >
            {getLanguage("myOrders", lang)}
          </Typography>
          <Button
            onClick={() => router.push(accountTabList[1].link)}
            sx={{
              color: "text.primary",
              display: "flex",
              alignItems: "center",
            }}
            endIcon={
              <Box display={"flex"}>
                <IoIosArrowForward />
              </Box>
            }
          >
            <Typography fontSize={{ xs: "0.8rem", sm: "1rem" }}>
              {getLanguage("viewAll", lang)}
            </Typography>
          </Button>
        </Box>

        <Divider flexItem sx={{ my: "1rem" }} />

        <Grid container py={"1rem"}>
          <Grid item xs={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              gap={1}
              color={"text.primary"}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/wallet.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                sx={{ textWrap: "wrap" }}
              >
                {getLanguage("unpaid", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              gap={1}
              color={"text.primary"}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/tobeshipped.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                sx={{ textWrap: "wrap" }}
                textAlign={"center"}
              >
                {getLanguage("toBeShipped", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              color={"text.primary"}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/shippment.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                textAlign={"center"}
                sx={{ textWrap: "wrap" }}
              >
                {getLanguage("shipped", lang)}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={3}>
            <Box
              component={"div"}
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              color={"text.primary"}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/underreview.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                textAlign={"center"}
                sx={{ textWrap: "wrap" }}
              >
                {getLanguage("toBeReviewed", lang)}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider
          flexItem
          sx={{ my: "1rem", display: { xs: "none", sm: "flex" } }}
        />

        <Button
          sx={{
            display: { xs: "none", sm: "flex" },
            alignItems: "center",
            color: "text.primary",
          }}
          fullWidth
          startIcon={
            <Box display={"flex"}>
              <CiViewList />
            </Box>
          }
          endIcon={
            <Box display={"flex"} alignItems={"center"}>
              <IoIosArrowForward />
            </Box>
          }
        >
          <Typography flex={1} textAlign={"left"} lineHeight={1}>
            {getLanguage("myAppeal", lang)}
          </Typography>
        </Button>

        <Divider flexItem sx={{ my: "1rem" }} />

        <Button
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.primary",
            textTransform: "unset",
          }}
          fullWidth
          startIcon={
            <Box display={"flex"}>
              <BiDollarCircle />
            </Box>
          }
          endIcon={
            <Box display={"flex"} alignItems={"center"}>
              <IoIosArrowForward />
            </Box>
          }
        >
          <Typography
            fontSize={{ xs: "0.9rem", sm: "1rem" }}
            flex={1}
            textAlign={"left"}
          >
            {getLanguage("inDispute", lang)}
          </Typography>
        </Button>
      </Stack>

      <Stack
        display={{ xs: "none", sm: "flex" }}
        width={1}
        p={2}
        bgcolor={"background.lighter"}
      >
        <Box color={"text.primary"}>
          <Typography
            letterSpacing={1}
            fontSize={{ xs: "1rem", sm: "1.4rem" }}
            fontWeight={{ xs: 400, sm: 500 }}
          >
            {getLanguage("moreToLove", lang)}
          </Typography>
        </Box>
      </Stack>

      <Stack
        display={{ xs: "flex", sm: "none" }}
        width={1}
        py={2}
        px={0.5}
        gap={1}
        bgcolor={"background.lighter"}
      >
        <Button
          size="large"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.primary",
            px: "1rem",
          }}
          fullWidth
          endIcon={
            <Box display={"flex"} alignItems={"center"}>
              <IoIosArrowForward />
            </Box>
          }
        >
          <Typography
            flex={1}
            textAlign={"left"}
            lineHeight={1}
            letterSpacing={0.5}
            fontSize={{ xs: "1rem", sm: "1.1rem" }}
          >
            Settings
          </Typography>
        </Button>

        <Button
          size="large"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.primary",
            px: "1rem",
          }}
          fullWidth
          endIcon={
            <Box display={"flex"} alignItems={"center"}>
              <IoIosArrowForward />
            </Box>
          }
        >
          <Typography
            flex={1}
            textAlign={"left"}
            lineHeight={1}
            letterSpacing={0.5}
            fontSize={{ xs: "1rem", sm: "1.1rem" }}
          >
            Help Center
          </Typography>
        </Button>

        <Button
          size="large"
          sx={{
            display: "flex",
            alignItems: "center",
            color: "text.primary",
            px: "1rem",
          }}
          fullWidth
          endIcon={
            <Box display={"flex"} alignItems={"center"}>
              <IoIosArrowForward />
            </Box>
          }
        >
          <Typography
            flex={1}
            textAlign={"left"}
            lineHeight={1}
            letterSpacing={0.5}
            fontSize={{ xs: "1rem", sm: "1.1rem" }}
          >
            Suggestion
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default OverviewTabContent;
