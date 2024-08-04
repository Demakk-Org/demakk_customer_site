import {
  ArrowForwardIos,
  Close,
  HeadsetMicOutlined,
  MonetizationOnOutlined,
  PinDropOutlined,
  TranslateOutlined,
} from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";

import data from "@/data/library";

import SmallDeviceButton from "./smallDeviceButton";
import useUserStore from "@/store/user";
import { useTranslation } from "next-i18next";

const style = {
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "80%",
  bgcolor: "background.lightOpaque",
  boxShadow: 24,
  height: 1,
  overflow: "scroll",
};

interface SlidingMenuProps {
  open: boolean;
  handleClose: () => void;
}

function SlidingMenu({ open, handleClose }: SlidingMenuProps) {
  const { t } = useTranslation(["common", "saleTerms"]);
  const { lang, address } = useUserStore();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Slide direction="right" in={open}>
        <Box sx={style}>
          <Box
            width={1}
            display={"flex"}
            alignItems={"center"}
            gap={1}
            borderBottom={"1px solid lightgray"}
            p={{
              xs: 1,
              sm: 3,
            }}
          >
            <IconButton onClick={handleClose}>
              <Close sx={{ fontSize: { xs: 25, sm: 37.5, md: 40 } }} />
            </IconButton>
            <Typography
              fontWeight={"bold"}
              pr={"1rem"}
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "2rem",
                  md: "2.2rem",
                },
                color: {
                  xs: "text.primary",
                },
              }}
            >
              {t("demakk")}
            </Typography>
          </Box>
          <Divider flexItem sx={{ borderColor: "background.paper" }} />
          <Box
            id="category-container"
            p={{
              xs: 1,
              sm: 3,
            }}
          >
            <Button
              id="category-title"
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
                bgcolor: "transparent",
                color: "text.primary",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                {t("popularCategory", { ns: "saleTerms" })}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/product.webp"}
              title={t("womenClothes", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product3.webp"}
              title={t("watches", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product2.webp"}
              title={t("bags", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product6.webp"}
              title={t("mensClothes", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product1.webp"}
              title={t("educationAndOfficeSupplies", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product5.webp"}
              title={t("sportsAndOutdoor", { ns: "saleTerms" })}
            />
          </Box>
          <Box
            id="category-container"
            p={{
              xs: 1,
              sm: 3,
            }}
          >
            <Button
              id="category-title"
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
                bgcolor: "transparent",
                color: "text.primary",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                {t("shoppingInspiration", { ns: "saleTerms" })}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/shop.webp"}
              title={t("summerOOTDIdeas", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop2.webp"}
              title={t("coolHomeGadgets", { ns: "saleTerms" })}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop1.webp"}
              title={t("beautyHacks", { ns: "saleTerms" })}
            />
          </Box>
          <Box
            id="category-container"
            p={{
              xs: 1,
              sm: 3,
            }}
          >
            <Button
              id="category-title"
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
                bgcolor: "transparent",
                color: "text.primary",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                {t("settings")}
              </Typography>
            </Button>
            <SmallDeviceButton
              title={t("shipTo", lang)}
              startImage={
                <PinDropOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              endImage={data.flags[address] || "/assets/images/et-flag.png"}
            />
            <SmallDeviceButton
              startImage={
                <MonetizationOnOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={t("currency")}
            />
            <SmallDeviceButton
              startImage={
                <TranslateOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={t("language")}
            />
            <SmallDeviceButton
              startImage={
                <HeadsetMicOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={t("helpCenter")}
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
