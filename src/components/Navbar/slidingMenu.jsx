import { Close, EastOutlined } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  IconButton,
  Modal,
  Slide,
  Typography,
} from "@mui/material";
import SmallDeviceButton from "./smallDeviceButton";
// import { GoHome } from "@/";
const style = {
  position: "absolute",
  top: "0%",
  left: "0%",
  width: "80%",
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: {
  //   xs: 1,
  //   sm: 3,
  // },
  height: 1,
  overflow: "scroll",
};

function SlidingMenu({ open, handleClose }) {
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
              endIcon={<EastOutlined />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
              }}
            >
              <Typography textTransform={"capitalize"} fontWeight={"bold"}>
                Popular Category
              </Typography>
            </Button>
            <SmallDeviceButton
              imgUrl={"/assets/images/product.webp"}
              title={"Women's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product3.webp"}
              title={"Watches"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product2.webp"}
              title={"Bags"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product1.webp"}
              title={"Education & Office supplies"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product5.webp"}
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
              endIcon={<EastOutlined />}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                mb: "0.5rem",
              }}
            >
              <Typography textTransform={"capitalize"} fontWeight={"bold"}>
                Shopping inpirations
              </Typography>
            </Button>
            <SmallDeviceButton
              imgUrl={"/assets/images/product.webp"}
              title={"Women's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product3.webp"}
              title={"Watches"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product2.webp"}
              title={"Bags"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product1.webp"}
              title={"Education & Office supplies"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product6.webp"}
              title={"Men's Clothes"}
            />
            <SmallDeviceButton
              imgUrl={"/assets/images/product5.webp"}
              title={"Sports & Outdoor"}
            />
          </Box>
        </Box>
      </Slide>
    </Modal>
  );
}

export default SlidingMenu;
