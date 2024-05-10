import React from "react";
import { Stack, Typography } from "@mui/material";
import useProductStore from "@/store/product";
import useDiscountStore from "@/store/discount";

export default function FreeshipingChoice() {
  const { product } = useProductStore();
  const { discount } = useDiscountStore();
  return (
    <>
      <Stack>
        <Typography
          sx={{
            backgroundColor: "demakkSecondary.main",
            minWidth: "max-content",
            borderRadius: ".5rem",
            m: { xs: ".5rem", sm: ".5rem 0rem 0rem 0rem" },
            ".choice": {
              minWidth: "max-content",
              p: "0rem .4rem ",
              fontSize: ".875rem",
              fontWeight: "bold",
              backgroundColor: "demakkSecondary.main",
              borderRadius: ".5rem",
            },
          }}
        >
          <Typography component={"span"} className="choice" mr={".25rem"}>
            Choice
          </Typography>
          {product?.getProductForCard().shipping(discount).status && (
            <Typography
              color={"text.primary"}
              sx={{ fontSize: ".75rem", fontWeight: "bold", padding: ".5rem" }}
            >
              Free shipping{" "}
              {product?.getProductForCard().shipping(discount).above > 0 &&
                ` over $${
                  product?.getProductForCard().shipping(discount).above
                }`}
            </Typography>
          )}
        </Typography>
      </Stack>
    </>
  );
}
