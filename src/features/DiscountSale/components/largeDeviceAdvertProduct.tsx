import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { LuCornerLeftDown } from "react-icons/lu";
import { RiCoupon2Fill } from "react-icons/ri";

interface LargeDeviceAdvertProductProps {
  title: string;
  icon?: JSX.Element;
  first: any;
  second: any;
}

function LargeDeviceAdvertProduct({
  title,
  icon,
  first,
  second,
}: LargeDeviceAdvertProductProps) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      p={"1rem 0.75rem"}
      height={1}
      gap={2}
      borderRadius={"1rem"}
      bgcolor={"background.lighter"}
      sx={{
        cursor: "pointer",
        userSelect: "none",
      }}
    >
      <Box display={"flex"} alignItems={"center"} gap={2} color={"bright"}>
        <Box
          fontSize={"1.4rem"}
          display={"flex"}
          alignItems={"center"}
          color={"text.primary"}
        >
          {icon || <RiCoupon2Fill fontSize={"inherit"} color="inherit" />}
        </Box>
        <Typography
          textTransform={"capitalize"}
          fontSize={"1.4rem"}
          fontWeight={"bold"}
          color={"text.primary"}
          noWrap
        >
          {title || "Big Saves"}
        </Typography>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        sx={{
          "&:hover": { bgcolor: "action.hover" },
          "&:hover img": {
            transform: "scale(1.05)",
            transition: "transform ease-in-out 0.3s",
          },
        }}
      >
        <Grid container>
          <Grid item md={4} sx={{ overflow: "hidden" }}>
            <Box
              width={1}
              height={1}
              component={"img"}
              src={first.image || "/assets/images/product7.webp"}
              sx={{
                objectFit: "cover",
                aspectRatio: "3/4",
              }}
            />
          </Grid>
          <Grid item md={8}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection="column"
              height={1}
              bgcolor={"background.lighter"}
              color={"text.primary"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box
                  fontSize={"1.2rem"}
                  display={"flex"}
                  alignItems={"center"}
                  color="error.main"
                >
                  <LuCornerLeftDown fontSize={"inherit"} color="inherit" />
                </Box>
                <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                  -{first.discountValue || "50"}%
                </Typography>
              </Box>
              <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                US $1{first.price || "35.25"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        display={"flex"}
        flexDirection={"column"}
        flex={1}
        sx={{
          "&:hover": { bgcolor: "action.hover" },
          "&:hover img": {
            transform: "scale(1.05)",
            transition: "transform ease-in-out 0.3s",
          },
        }}
      >
        <Grid container>
          <Grid item md={4} sx={{ overflow: "hidden" }}>
            <Box
              width={1}
              height={1}
              component={"img"}
              src={second?.image || "/assets/images/product8.webp"}
              sx={{
                objectFit: "cover",
                aspectRatio: "3/4",
                backgroundPosition: "0% 0%",
              }}
            />
          </Grid>
          <Grid item md={8}>
            <Box
              display={"flex"}
              alignItems={"center"}
              justifyContent={"center"}
              flexDirection="column"
              height={1}
              bgcolor={"background.lighter"}
              color={"text.primary"}
            >
              <Box display={"flex"} alignItems={"center"}>
                <Box
                  fontSize={"1.2rem"}
                  display={"flex"}
                  alignItems={"center"}
                  color="error.main"
                >
                  <LuCornerLeftDown fontSize={"inherit"} color="inherit" />
                </Box>
                <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                  -{second.discountValue || "50"}%
                </Typography>
              </Box>
              <Typography fontSize={"1.2rem"} fontWeight={"bold"}>
                US ${second.price || "30.35"}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default LargeDeviceAdvertProduct;
