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
import getLanguage from "@/utils/getLanguage";

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
              {getLanguage("demakk", lang)}
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
                {getLanguage("popularCategory", lang)}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/product.webp"}
              title={getLanguage("womensClothes", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product3.webp"}
              title={getLanguage("watches", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product2.webp"}
              title={getLanguage("bags", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product6.webp"}
              title={getLanguage("mensClothes", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product1.webp"}
              title={getLanguage("educationAndOfficeSupplies", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product5.webp"}
              title={getLanguage("sportsAndOutdoor", lang)}
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
                {getLanguage("shoppingInspiration", lang)}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/shop.webp"}
              title={getLanguage("summerOOTDIdeas", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop2.webp"}
              title={getLanguage("coolHomeGadgets", lang)}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop1.webp"}
              title={getLanguage("beautyHacks", lang)}
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
                {getLanguage("settings", lang)}
              </Typography>
            </Button>
            <SmallDeviceButton
              title={getLanguage("shipTo", lang)}
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
              title={getLanguage("currency", lang)}
            />
            <SmallDeviceButton
              startImage={
                <TranslateOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={getLanguage("language", lang)}
            />
            <SmallDeviceButton
              startImage={
                <HeadsetMicOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={getLanguage("helpCenter", lang)}
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
