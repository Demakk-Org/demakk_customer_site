import {
  Box,
  Button,
  Card,
  Divider,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import React, { useEffect, useState } from "react";

export default function SideNav() {
  const [sideNavHeight, setSideNavHeight] = useState("calc(100vh - 150px)");

  //   useEffect(() => {
  //     const handleScroll = () => {
  //       const sideNav = document.getElementById("sidenav");
  //       if (!sideNav) return;
  //       const scrollHeight = sideNav.scrollHeight;
  //       const scrollTop = sideNav.scrollTop;
  //       const clientHeight = sideNav.clientHeight;

  //       const remainingHeight = scrollHeight - (scrollTop + clientHeight);

  //       if (scrollTop === 0) {
  //         setSideNavHeight("calc(100vh - 500px)");
  //       } else if (remainingHeight === 0) {
  //         // At the bottom
  //         setSideNavHeight("calc(100vh )");
  //       } else {
  //         setSideNavHeight(`calc(100vh - ${scrollTop}px)`);
  //       }
  //     };
  //     const sideNav = document.getElementById("sideNav");
  //     if (sideNav) sideNav.addEventListener("scroll", handleScroll);

  //     return () => {
  //       if (sideNav) sideNav.removeEventListener("scroll", handleScroll);
  //     };
  //   }, []);

  return (
    <Box
      position={"relative"}
      width={1}
      onScroll={() => setSideNavHeight("100px")}
    >
      {" "}
      <Box
        id="sidenav"
        height={sideNavHeight}
        overflow={"hidden"}
        boxShadow={2}
        sx={{
          p: "1rem 1rem 0",
          overflow: "hidden",
          //   overflowY: " auto",
          position: "sticky",
          top: "5rem",
          // onScroll:{setSideNavHeight("calc(100vh - 150px)")}
        }}
      >
        <Stack
          direction={"row"}
          justifyContent={"space-between"}
          // p={'0 1rem'}
        >
          <Typography fontWeight={"bold"}>Ship to</Typography>
          <Stack direction={"row"}>
            <LocationOnIcon />
            <Typography>Ethiopia</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ margin: ".5rem" }} />
        <Box>
          <Typography>shipping status</Typography>
          <Typography>select another produc</Typography>
        </Box>
        <Divider sx={{ margin: ".5rem" }} />
        <Box>
          <Typography fontWeight={"bold"}>Quantity</Typography>
          <Stack direction={"row"} alignItems={"center"} spacing={2}>
            <Box
              component={"button"}
              height={"2rem"}
              minWidth={"2rem"}
              borderRadius={"50%"}
              border={"none"}
              sx={{ borderRadius: "50%" }}
            >
              -
            </Box>

            <Typography>num</Typography>
            <Box
              component={"button"}
              height={"2rem"}
              minWidth={"2rem"}
              borderRadius={"50%"}
              border={"none"}
              sx={{ borderRadius: "50%" }}
            >
              +
            </Box>
          </Stack>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>
            description for the product{" "}
          </Typography>
          <Typography color={"error.main"}>ratings and reviews </Typography>
          <Typography color={"error.main"}>
            and other technical specifications
          </Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
          <Typography color={"error.main"}>only 5 left</Typography>
        </Box>
        <Box position={"sticky"} bottom={0} bgcolor={"background.paper"}>
          <Stack spacing={2} m={"1rem 0"}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "1.5rem",
                p: ".625rem .75rem",
              }}
            >
              Buy now
            </Button>
            <Button
              variant="contained"
              sx={{
                borderRadius: "1.5rem",
                mt: "1rem",
                p: ".625rem .75rem",
              }}
            >
              Add to cart
            </Button>
            <Stack direction={"row"} spacing={2}>
              <Button
                variant="outlined"
                startIcon={<ShareIcon />}
                sx={{
                  borderRadius: "1.5rem",
                  width: "60%",
                  color: "black",
                }}
              >
                share
              </Button>
              <Button
                variant="outlined"
                sx={{ borderRadius: "1.5rem", padding: "0 2rem" }}
              >
                fav
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
