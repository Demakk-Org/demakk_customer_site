import { Box, Button, Divider, Stack, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ShareIcon from "@mui/icons-material/Share";
import React, { useEffect, useState } from "react";
import Deal from "./Deal";
import ItemPrice from "./ItemPrice";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

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
    <Box width={1}>
      <Box
        overflow={"hidden"}
        boxShadow={1}
        sx={{
          p: "1rem 1rem 0",
          borderRadius: ".5rem",
          overflow: "hidden",
          overflowY: " auto",
          position: "sticky",
          top: "5rem",
          bgcolor: (theme) =>
            theme.palette.mode === "dark"
              ? "background.lightOpaque"
              : "background.paper",
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
          // sx={{ bgcolor: "brighten.main" }}
        >
          <Typography fontWeight={"bold"} sx={{ color: "text.primary" }}>
            Ship to
          </Typography>
          <Stack direction={"row"}>
            <LocationOnIcon sx={{ color: "text.primary" }} />
            <Typography sx={{ color: "text.primary" }}>Ethiopia</Typography>
          </Stack>
        </Stack>
        <Divider sx={{ margin: ".5rem" }} />
        <Box>
          <Typography sx={{ color: "text.primary" }}>
            shipping status
          </Typography>
          <Typography sx={{ color: "text.primary" }}>
            select another produc
          </Typography>
        </Box>
        <Divider sx={{ margin: ".5rem" }} />
        <Box>
          <Typography fontWeight={"bold"} sx={{ color: "text.primary" }}>
            Quantity
          </Typography>
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

            <Typography sx={{ color: "text.primary" }}>num</Typography>
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
          <Typography color={"error.main"} sx={{ color: "text.primary" }}>
            only 5 left
          </Typography>
        </Box>
        <Box position={"sticky"} bottom={0}>
          <Stack spacing={2} m={"1rem 0"}>
            <Button
              variant="contained"
              sx={{
                borderRadius: "1.5rem",
                p: ".625rem .75rem",
                bgcolor: "error.light",
                color: "background.paper",
                fontWeight: "bold",
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
                bgcolor: "background.reddish",
                color: "text.dealHeader",
                fontWeight: "bold",
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
                  fontWeight: "bold",
                  fontSize: "16px",
                  color: "text.primary",
                  borderColor: "text.primary",
                }}
              >
                share
              </Button>
              <Button
                variant="outlined"
                sx={{
                  borderRadius: "1.5rem",
                  padding: "0 2rem",
                  color: "text.primary",
                  borderColor: "text.primary",
                }}
              >
                <FavoriteBorderIcon />
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}
