import { IconButton, useTheme } from "@mui/material";
import React from "react";
import AddShoppingCartRoundedIcon from "@mui/icons-material/AddShoppingCartRounded";

interface AddToCartButton {
  id: string;
}

export default function AddToCartButton({ id }: AddToCartButton) {
  const theme = useTheme();

  return (
    <>
      <IconButton
        id={id}
        size="large"
        aria-label="add to shopping cart"
        color="primaryButton"
        sx={{
          position: "absolute",
          bottom: "10%",
          right: "10%",
          backgroundColor:
            theme.palette.mode === "dark" ? "bright.main" : "background.paper",
          ".cart-icon": {
            color: "dark.main",
          },
          "&:hover": {
            bgcolor: theme.palette.mode === "dark" ? "dark.main" : "black",
            ".cart-icon": {
              color:
                theme.palette.mode === "dark"
                  ? "primary.main"
                  : "background.paper",
            },
          },
        }}
      >
        <AddShoppingCartRoundedIcon className="cart-icon" />
      </IconButton>
    </>
  );
}
