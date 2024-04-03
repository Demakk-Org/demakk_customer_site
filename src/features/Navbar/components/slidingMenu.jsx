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
import language from "@/data/dictionary";

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

function SlidingMenu({ open, handleClose }) {
  const { address } = useUserStore();
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
              {language.en.demakk}
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
                {language.en.popularCategory}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/product.webp"}
              title={language.en.womensClothes}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product3.webp"}
              title={language.en.watches}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product2.webp"}
              title={language.en.bags}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product6.webp"}
              title={language.en.mensClothes}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product1.webp"}
              title={language.en.educationAndOfficeSupplies}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product5.webp"}
              title={language.en.sportsAndOutdoor}
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
                {language.en.shoppingInspiration}
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/shop.webp"}
              title={language.en.summerOOTDIdeas}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop2.webp"}
              title={language.en.coolHomeGadgets}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop1.webp"}
              title={language.en.beautyHacks}
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
                {language.en.settings}
              </Typography>
            </Button>
            <SmallDeviceButton
              title={language.en.shipTo}
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
              title={language.en.currency}
            />
            <SmallDeviceButton
              startImage={
                <TranslateOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={language.en.language}
            />
            <SmallDeviceButton
              startImage={
                <HeadsetMicOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={language.en.helpCenter}
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
