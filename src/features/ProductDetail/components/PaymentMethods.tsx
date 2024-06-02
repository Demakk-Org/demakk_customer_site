import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

export default function PaymentMethods() {
  return (
    <Box width={1} sx={{ p: "0  .75rem" }}>
      <Typography color={"text.primary"} fontSize={".9rem"} fontWeight={"bold"}>
        Payment methods
      </Typography>
      <Box alignItems={"flex-start"} gap={1}>
        <Stack>
          <Typography
            minWidth={"max-content"}
            color={"text.primary"}
            fontSize={".75rem"}
          >
            security guaranteed
          </Typography>
        </Stack>
        <Box
          component={"img"}
          src={"/assets/images/pay5.webp"}
          width={"30px"}
          height={"20px"}
        />
        <Box
          component={"img"}
          src={"/assets/images/pay4.webp"}
          width={"30px"}
          height={"20px"}
        />
        <Box
          component={"img"}
          src={"/assets/images/pay3.webp"}
          width={"30px"}
          height={"20px"}
        />
        <Box
          component={"img"}
          src={"/assets/images/pay2.webp"}
          width={"30px"}
          height={"20px"}
        />
      </Box>
    </Box>
  );
}
