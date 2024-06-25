import { Stack, Typography } from "@mui/material";

interface ProductPriceProps {
  prodctPriceInt: string;
  productPriceDec: string;
}
export default function ProductPrice({
  prodctPriceInt,
  productPriceDec,
}: ProductPriceProps) {
  return (
    <>
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
        <span className="price-int">{prodctPriceInt}</span>
        <span className="price-dec">.{productPriceDec}</span>
      </Typography>
    </>
  );
}
