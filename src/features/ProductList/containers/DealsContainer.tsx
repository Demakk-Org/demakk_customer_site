import { Box, Divider, Stack, Typography } from "@mui/material";

interface DealProps {
  deal: string;
}

export default function DealsContainer({ deal }: DealProps) {
  return (
    <Stack
      width={"100%"}
      direction={"row"}
      alignItems={"center"}
      divider={
        <Divider>
          <Box
            height={"4px"}
            minWidth={"4px"}
            borderRadius={"50%"}
            sx={{ backgroundColor: "error.light" }}
          ></Box>
        </Divider>
      }
    >
      <Typography
        minWidth={"max-content"}
        fontSize={".6rem"}
        fontWeight={"bold"}
        color={"bright.main"}
        p={"0rem .4rem .2rem"}
        borderRadius={".2rem"}
        sx={{ backgroundColor: "error.light" }}
      >
        {deal}
      </Typography>
    </Stack>
  );
}
