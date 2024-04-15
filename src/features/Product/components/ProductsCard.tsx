import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  Rating,
  Grid,
  Container,
  Stack,
} from '@mui/material';

import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Pdata from '@/data/Pdata';
import Pricing from './Pricing';
import AdvanceDeal from './AdvanceDeal';
import ShippingChoice from './ShippingChoice';
import RatingAndTopSeling from './RatingAndTopSeling';
import CartingButton from './CartingButton';

export default function ProductsCard() {
  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '3rem 6rem', xs: '1rem 2rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
    >
      {Pdata.products.map((product) => (
        <Grid item xs={6} sm={4} md={2.4} key={product.name}>
          <Box position="relative">
            <Box
              display="flex"
              width={1}
              sx={{
                '&:hover .buttons': {
                  display: 'flex',
                },
                '&:hover div .hovered-container': {
                  display: 'block',
                },
                '&:hover > div > div': { zIndex: 4 },
                '&:hover > div': { zIndex: 5 },
                '&:hover': {
                  position: 'absolute',
                  top: 0,
                  left: 0,
                },
              }}
            >
              <Card
                sx={{
                  width: '100%',
                  position: 'relative',
                  boxShadow: 'none',
                  borderRadius: '8px',
                  display: 'flex',
                  flexDirection: 'column',
                  zIndex: 2,
                  overflow: 'visible',
                  background: 'none',
                }}
              >
                <Box width={1} position={'relative'} zIndex={2}>
                  <CardMedia
                    component="img"
                    width={1}
                    image={product.image}
                    alt={product.alt}
                    sx={{ borderRadius: '.5rem', aspectRatio: 1 }}
                  />
                  <Box
                    position="absolute"
                    top="0px"
                    left="0px"
                    right="0px"
                    bottom="0px"
                    sx={{
                      borderRadius: '.5rem',
                      backgroundColor: 'rgba(0, 0, 0, .04);',
                    }}
                  ></Box>
                  <CartingButton />
                </Box>
                <Stack
                  display="flex"
                  flexDirection="column"
                  width={1}
                  mt={'8px'}
                  zIndex={2}
                >
                  <Typography
                    sx={{ lineHeight: '1.5' }}
                    noWrap
                    title={product.description}
                    fontSize={'.875rem'}
                  >
                    {product.description}
                  </Typography>

                  <Stack direction={'row'} spacing={0.5}>
                    <RatingAndTopSeling numOfSold={product.numberOfSold} />
                  </Stack>

                  <Stack direction={'row'} spacing={1} alignItems={'baseline'}>
                    <Pricing price={product.price} oldPrice={product.oldPrice} />
                  </Stack>
                  <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                    <AdvanceDeal
                      deal={product.dealType}
                      extraDiscount={product.extraDiscount}
                      discountPercent={product.discountPercent}
                    />
                  </Stack>
                  <Stack>
                    <ShippingChoice />
                  </Stack>
                </Stack>

                <Stack
                  className="buttons"
                  direction={'row'}
                  width={1}
                  display="none"
                  justifyContent="space-between"
                  mt={'8px'}
                  zIndex={2}
                >
                  <Button
                    variant="contained"
                    color="primaryButton"
                    sx={{
                      fontSize: { md: '.6rem', xs: '.5rem' },
                      fontWeight: 'bold',
                      borderRadius: '14px',
                    }}
                  >
                    See preview
                  </Button>
                  <Button
                    variant="contained"
                    color="primaryButton"
                    sx={{
                      fontSize: { md: '.6rem', xs: '.5rem' },
                      fontWeight: 'bold',
                      borderRadius: '14px',
                    }}
                  >
                    Similar items
                  </Button>
                </Stack>
                <Box
                  className="hovered-container"
                  display="none"
                  position="absolute"
                  sx={{
                    height: 'calc(100% + 2rem)',
                    width: 'calc(100% + 2rem)',
                    top: '-1rem',
                    left: '-1rem',
                    backgroundColor: 'background.paper',
                    boxShadow: (theme) => theme.shadows[10],
                    zIndex: '3 !important',
                    borderRadius: '1rem',
                  }}
                ></Box>
              </Card>
            </Box>
          </Box>
        </Grid>
      ))}
    </Grid>
  );
}
