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
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import SmallDeviceButton from "./smallDeviceButton";
import useUserStore from "@/store/user";
import data from "@/data/library";
const style = {
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "80%",
  bgcolor: "background.paper",
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
              {/* <GoHome/> */}
            </IconButton>
            <Typography
              fontWeight={"bold"}
              pr={"1rem"}
              sx={{
                fontSize: {
                  xs: "1.2rem",
                  sm: "1.7rem",
                  md: "2rem",
                },
                color: {
                  xs: "primary.main",
                  md: "primaryLight.main",
                },
              }}
            >
              Demakk
            </Typography>
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
              color={"dark"}
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                Popular Category
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/product.webp"}
              title={"Women's Clothes"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product3.webp"}
              title={"Watches"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product2.webp"}
              title={"Bags"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product1.webp"}
              title={"Education & Office supplies"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/product5.webp"}
              title={"Sports & Outdoor"}
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
              color={"dark"}
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                Shopping inspirations
              </Typography>
            </Button>
            <SmallDeviceButton
              startImage={"/assets/images/shop.webp"}
              title={"Summer OOTD ideas"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop2.webp"}
              title={"Cool home gadgets"}
            />
            <SmallDeviceButton
              startImage={"/assets/images/shop1.webp"}
              title={"Beauty hacks"}
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
              color={"dark"}
              fullWidth
              endIcon={<ArrowForwardIos />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
              }}
            >
              <Typography
                textTransform={"capitalize"}
                fontWeight={"bold"}
                sx={{ fontSize: { sm: "1.7rem" } }}
              >
                Settings
              </Typography>
            </Button>
            <SmallDeviceButton
              title={"Ship to"}
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
              title={"Currency"}
            />
            <SmallDeviceButton
              startImage={
                <TranslateOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={"Languages"}
            />
            <SmallDeviceButton
              startImage={
                <HeadsetMicOutlined
                  sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem" } }}
                />
              }
              title={"Help Center"}
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
