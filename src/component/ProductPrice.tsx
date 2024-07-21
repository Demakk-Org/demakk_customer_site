import getPrice from "@/utils/getPrice";
import { Typography } from "@mui/material";

interface ProductPriceProps {
  productPrice: number;
}
export default function ProductPrice({ productPrice }: ProductPriceProps) {
  return (
    <Typography
      sx={{
        display: "flex",
        alignItems: "baseline",
        color: "main",
        ".currency": {
          fontSize: ".8rem",
          fontWeight: "bold",
          mr: "4px",
        },
        ".price-int": {
          fontSize: "1.5rem",
          fontWeight: "bold",
        },
        ".price-dec": {
          fontSize: ".8rem",
          fontWeight: "bold",
        },
      }}
    >
      <span className="currency">ETB</span>
      <span className="price-int">{getPrice(productPrice).int}</span>
      <span className="price-dec">.{getPrice(productPrice).dec}</span>
    </Typography>
  );
}
