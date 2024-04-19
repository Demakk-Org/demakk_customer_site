import { IconButton } from '@mui/material';
import React from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

interface AddToCartButton {
  id: string;
}

export default function AddToCartButton({ id }: AddToCartButton) {
  return (
    <>
      <IconButton
        id={id}
        size="large"
        aria-label="add to shopping cart"
        color="primaryButton"
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '10%',
          backgroundColor: 'background.paper',
          '&:hover': {
            '.cart-icon': { color: 'background.paper' },
          },
        }}
      >
        <AddShoppingCartRoundedIcon className="cart-icon" />
      </IconButton>
    </>
  );
}
