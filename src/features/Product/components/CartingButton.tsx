import { IconButton } from '@mui/material';
import React from 'react';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

export default function CartingButton() {
  return (
    <div>
      <IconButton
        size="large"
        aria-label="add to shopping cart"
        sx={{
          position: 'absolute',
          color: 'black',
          bottom: '10%',
          right: '10%',
          backgroundColor: 'background.paper',
          '&:hover': {
            background: 'black',
            '.cart-icon': { color: 'white' },
          },
        }}
      >
        <AddShoppingCartRoundedIcon
          className="cart-icon"
          sx={{
            '&:hover': {
              color: (theme) => theme.palette.brighten.main,
            },
          }}
        />
      </IconButton>
    </div>
  );
}
