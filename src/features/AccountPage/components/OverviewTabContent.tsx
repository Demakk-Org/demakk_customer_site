import {
  Avatar,
  Box,
  Button,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import { ImageType } from "@/component/FirebaseImageUploadComponent";
import ImageFromFirebase from "@/component/ImageFromFirebase";
import useUserStore from "@/store/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BiDollarCircle } from "react-icons/bi";
import { CiViewList } from "react-icons/ci";
import { IoIosArrowForward, IoIosHeartEmpty } from "react-icons/io";
import { PiClockCountdown, PiUserList } from "react-icons/pi";
import { RiCoupon2Line } from "react-icons/ri";
import useOrderStore from "@/store/order";
import { useTranslation } from "next-i18next";
import MoreToLoveComponent from "./MoreToLoveComponent";

function OverviewTabContent() {
  const { t } = useTranslation(["account"]);
  const { setOrderStatusType } = useOrderStore();
  const { setBreadcrumbs, user } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    setBreadcrumbs([
      { name: t("home", { ns: "common" }), url: "/" },
      { name: t("account", { ns: "account" }), url: "/account" },
    ]);
  }, [setBreadcrumbs]);

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
        <Stack direction={"row"} alignItems={"center"} spacing={3}>
          <Box width={{ xs: 50, md: 60 }} height={{ xs: 50, md: 60 }}>
            <ImageFromFirebase
              name={user?.getUser().image?.imageUrls[0] || ""}
              width={"100%"}
              quality={"240p"}
              type={ImageType.user}
              shape="circular"
            />
          </Box>
          {(user?.getUser().firstName || user?.getUser().lastName) && (
            <Typography
              fontSize={"1.35rem"}
              fontWeight={600}
              color={"text.primary"}
              letterSpacing={"1px"}
            >
              {user?.getUser().firstName} {user?.getUser().lastName}
            </Typography>
          )}
        </Stack>
        <Grid container>
          <Grid item xs={4} sm={3}>
            <Box
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ textDecoration: "none" }}
              component={"a"}
              href="/wish-list"
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
                {t("wishList")}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Stack
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "not-allowed" }}
            >
              <Box width={{ xs: 25, sm: 35 }} height={{ xs: 25, sm: 35 }}>
                <PiUserList style={{ width: "inherit", height: "inherit" }} />
              </Box>
              <Typography
                fontSize={{ xs: "0.85rem", sm: "1.1rem" }}
                letterSpacing={1}
                fontWeight={{ xs: 300, sm: 400 }}
              >
                {t("following")}
              </Typography>
            </Stack>
          </Grid>

          <Grid item display={{ xs: "none", sm: "block" }} sm={3}>
            <Stack
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "not-allowed" }}
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
                {t("viewed")}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={4} sm={3}>
            <Stack
              alignItems={"center"}
              gap={1}
              color={"text.primary"}
              sx={{ cursor: "not-allowed" }}
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
                {t("coupons")}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Box>

      <Stack width={1} p={2} bgcolor={"background.lighter"}>
        <Stack
          justifyContent={"space-between"}
          alignItems={"center"}
          color={"text.primary"}
          direction={"row"}
        >
          <Typography
            letterSpacing={1}
            fontSize={{ xs: "1rem", sm: "1.4rem" }}
            fontWeight={{ xs: 300, sm: 500 }}
          >
            {t("myOrders")}
          </Typography>
          <Button
            onClick={() => {
              setOrderStatusType(-1);
              router.push("/order");
            }}
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
              {t("viewAll", { ns: "common" })}
            </Typography>
          </Button>
        </Stack>

        <Divider flexItem sx={{ my: "1rem" }} />

        <Grid container py={"1rem"}>
          <Grid item xs={3}>
            <Stack
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              gap={1}
              color={"text.primary"}
              onClick={() => {
                setOrderStatusType(3);
                router.push("/order");
              }}
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
                textAlign={"center"}
              >
                {t("unpaid", { ns: "order" })}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              alignItems={"center"}
              sx={{ cursor: "pointer" }}
              gap={1}
              color={"text.primary"}
              onClick={() => {
                setOrderStatusType(2);
                router.push("/order");
              }}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/toBeShipped.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>

              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                sx={{ textWrap: "wrap" }}
                textAlign={"center"}
              >
                {t("toBeShipped", { ns: "order" })}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={3}>
            <Stack
              alignItems={"center"}
              gap={1}
              sx={{ cursor: "pointer" }}
              color={"text.primary"}
              onClick={() => {
                setOrderStatusType(1);
                router.push("/order");
              }}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/shipment.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                textAlign={"center"}
                sx={{ textWrap: "wrap" }}
              >
                {t("shipped", { ns: "order" })}
              </Typography>
            </Stack>
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
              onClick={() => {
                setOrderStatusType(0);
                router.push("/order");
              }}
            >
              <Box width={{ xs: 35, sm: 45 }} height={{ xs: 35, sm: 45 }}>
                <Avatar
                  variant={"rounded"}
                  src="/assets/images/underReview.webp"
                  sx={{ width: "inherit", height: "inherit" }}
                />
              </Box>
              <Typography
                fontSize={{ xs: "0.75rem", sm: "1rem" }}
                letterSpacing={1}
                textAlign={"center"}
                sx={{ textWrap: "wrap" }}
              >
                {t("toBeReviewed", { ns: "order" })}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Divider
          flexItem
          sx={{ my: "1rem", display: { xs: "none", sm: "flex" } }}
        />

        <Button
          disabled
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
            {t("myAppeal")}
          </Typography>
        </Button>

        <Divider flexItem sx={{ my: "1rem" }} />

        <Button
          disabled
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
            {t("inDispute")}
          </Typography>
        </Button>
      </Stack>

      <MoreToLoveComponent />

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
          onClick={() => router.push("/account/settings")}
        >
          <Typography
            flex={1}
            textAlign={"left"}
            lineHeight={1}
            letterSpacing={0.5}
            fontSize={{ xs: "1rem", sm: "1.1rem" }}
          >
            {t("settings")}
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
            {t("helpCenter")}
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
            {t("suggestion")}
          </Typography>
        </Button>
      </Stack>
    </Stack>
  );
}

export default OverviewTabContent;
