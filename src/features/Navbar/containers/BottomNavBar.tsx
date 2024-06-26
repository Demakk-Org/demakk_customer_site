import { ExpandLess, ExpandMore, Menu } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

import { useState } from "react";

import AllCategories from "../components/allCategories";
import NavbarButton from "../components/navbarButton";
import MoreCategories from "../components/moreCategories";
import language from "@/data/dictionary";
import getLanguage from "@/utils/getLanguage";
import useUserStore from "@/store/user";

function BottomNavbar() {
  const { lang } = useUserStore();

  const [allPropOpen, setAllPropOpen] = useState(false);
  const [openMore, setOpenMore] = useState(false);

  const handleOnMouseOver = () => {
    let container = document.getElementById(
      "more-product-container"
    ) as HTMLDivElement;
    let body = document.querySelector("body");
    let after = document.getElementById("after-container") as HTMLDivElement;

    if (container && body) {
      let containerLeft = container.getBoundingClientRect().left;
      let containerWidth = container.getBoundingClientRect().width;
      let bodyWidth = body.clientWidth;

      if (bodyWidth - (containerWidth + containerLeft) < 0) {
        container.style.left = "unset";
        container.style.right = "0";
        after.style.left = "unset";
        after.style.right = "20%";
      }
    }
  };

  return (
    <Box
      width={1}
      p={"1rem 0"}
      gap={1}
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
        bgcolor: {
          xs: "background.lightOpaque",
        },
        justifyContent: "center",
      }}
    >
      <Box
        position={"relative"}
        onMouseOver={() => setAllPropOpen(true)}
        onMouseLeave={() => setAllPropOpen(false)}
        bgcolor={allPropOpen ? "background.lightOpaque" : "unset"}
        sx={{
          borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
          "&:hover>button": {
            borderColor: "transparent",
            bgcolor: "action.hover",
            color: "text.primary",
          },
        }}
      >
        <Button
          variant="outlined"
          startIcon={<Menu />}
          color="primaryButton"
          endIcon={allPropOpen ? <ExpandLess /> : <ExpandMore />}
          sx={{
            display: "flex",
            alignItems: "center",
            p: "0.5rem 1.5rem",
            color: allPropOpen ? "text.primary" : "text.secondary",
            borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
          }}
        >
          <Typography fontWeight={"bold"} textTransform={"capitalize"} mr={6}>
            {language.en.allCategories}
          </Typography>
        </Button>
        <Box
          position={"absolute"}
          width={1}
          maxHeight={"70vh"}
          top={"100%"}
          borderRadius={"0 0 1.5rem 1.5rem"}
          left={0}
          bgcolor={"background.lightOpaque"}
          zIndex={100}
        >
          {allPropOpen && <AllCategories />}
        </Box>
      </Box>
      <NavbarButton name={getLanguage("nn", lang)} />
      <NavbarButton name={getLanguage("bestSellers", lang)} />
      <NavbarButton name={getLanguage("topBrands", lang)} />
      <NavbarButton name={getLanguage("consumerElectronics", lang)} />
      <NavbarButton name={getLanguage("homeImprovementAndLighting", lang)} />
      <Box
        position={"relative"}
        onMouseEnter={() => {
          setOpenMore(true);
        }}
        onMouseOver={() => {
          handleOnMouseOver();
        }}
        onMouseLeave={() => {
          setOpenMore(false);
        }}
        sx={{
          "&:hover>button": {
            borderColor: "transparent",
            bgcolor: "secondaryBg.light",
          },
        }}
      >
        <Button
          variant="contained"
          endIcon={openMore ? <ExpandLess /> : <ExpandMore />}
          sx={{
            borderRadius: "1.5rem",
            fontSize: "1rem",
            color: "text.primary",
            p: "0.5rem 1.5rem",
            bgcolor: "transparent",
            "&:hover": {
              bgcolor: "action.hover",
            },
          }}
        >
          <Typography textTransform={"capitalize"}>
            {getLanguage("more", lang)}
          </Typography>
        </Button>
        {openMore && <MoreCategories />}
      </Box>
    </Box>
  );
}

export default BottomNavbar;
