import { Stack, Typography } from "@mui/material";
import useProductStore from "@/store/product";

export default function ItemDescription() {
  const { product } = useProductStore();
  return (
    <Stack width={1}>
      <Typography
        fontWeight={"bold"}
        sx={{
          m: { xs: ".5rem", sm: ".5rem 0" },
          lineHeight: 1.25,
          color: "text.primary",
        }}
      >
        {product?.getProductForPage().description}
      </Typography>
    </Stack>
  );
}
