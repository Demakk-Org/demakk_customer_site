import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import React, { useEffect, useState } from "react";
import Deal from "./Deal";
import ItemPrice from "./ItemPrice";

export default function SideNav() {
  const [sideBarContent, setSideBarContent] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offSet = window.scrollY;
      if (offSet > 200) {
        setSideBarContent(true);
      } else {
        setSideBarContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box id="main-content" position={"relative"} width={1} sx={{}}>
      {" "}
      <Box
        id="sidenav"
        height={"500px"}
        overflow={"hidden"}
        boxShadow={2}
        sx={{
          p: "1rem 1rem 0",
          overflow: "hidden",
          overflowY: " auto",
          position: "sticky",
          top: "5rem",
        }}
      >
        {sideBarContent && (
          <>
            <Deal />
            <ItemPrice />
            <Divider sx={{ margin: ".5rem" }} />
          </>
        )}

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
