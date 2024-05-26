import useDiscountStore from "@/store/discount";
import useProductStore from "@/store/product";
import { Box, Stack, Typography } from "@mui/material";

export default function Deal() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  const item = product?.getProductForPage();
  return (
    <Box
      borderRadius={".5rem"}
      sx={{
        backgroundColor: { xs: "demakkSecondary.main", sm: "error.light" },

        // zIndex: "5 !important",
      }}
      mt={{ xs: "-2rem", sm: "4px" }}
      // zIndex={{ xs: 1, sm: "none" }}
    >
      {/* {item?.deals(discount) ? ( */}
      <Stack direction={"row"}>
        <Typography
          fontSize={".85rem"}
          color={{ xs: "text.dealHeader", sm: "bright.main" }}
          fontWeight={"bold"}
          p={{ xs: ".5rem 1rem 1rem 1rem", sm: ".4rem 1rem " }}
        >
          {/* {item?.deals(discount)} */}
          Super deal
        </Typography>
      </Stack>
      {/* ) : (
        <></>
      )} */}
    </Box>
  );
}
