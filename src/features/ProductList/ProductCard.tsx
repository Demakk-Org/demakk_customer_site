import { Button, Card, CardMedia, Typography, Box, Stack } from '@mui/material';
import React from 'react';
import ShippingChoice from './components/ShippingChoice';
import TopSellingCard from './components/TopSellingCard';
import SoldQuantity from './components/SoldQuantity';
import ProductRating from './components/ProductRating';
import AddToCartButton from './components/AddToCartButton';
import DealsContainer from './containers/DealsContainer';
import SellingPrice from './components/SellingPrice';
import HoveringButtons from './components/HoveringButtons';
import mongoose from 'mongoose';

interface ProductDataProps {
  id: mongoose.Types.ObjectId;
  ratings?: number;
  images?: string;
  price: number;
  oldPrice?: number;
  name: string;
  dealType?: string;
  numberOfSold?: number;
  extraDiscount?: number;
  discountPercent?: number;
  choice?: boolean;
  freeShip?: number;
  topSelling?: {
    status: boolean;
    days: number;
  };
}

export default function ProductCard({
  product,
}: {
  product: ProductDataProps;
}) {
  return (
    <Box position="relative">
      <Box
        display="flex"
        width={1}
        sx={{
          '&:hover .buttons': {
            display: { xs: 'none', sm: 'flex' },
          },
          '&:hover div .hovered-container': {
            display: { xs: 'none', sm: 'block' },
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
              image={product.images}
              // alt={product.alt}
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
                backgroundColor: 'background.gray',
              }}
            ></Box>
            <AddToCartButton id="add to cart" />
          </Box>
          <Stack
            display="flex"
            flexDirection="column"
            width={1}
            mt={'8px'}
            zIndex={2}
          >
            <Stack direction={{ xs: 'column-reverse', sm: 'column' }}>
              <Typography
                sx={{ lineHeight: '1.5' }}
                noWrap
                title={product.name}
                fontSize={'.875rem'}
              >
                {product.name}
              </Typography>
              <Stack direction={{ xs: 'column-reverse', sm: 'column' }}>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                  <Stack
                    direction={{ xs: 'row-reverse', sm: 'row' }}
                    spacing={1}
                    alignItems={'center'}
                  >
                    {product.ratings && (
                      <ProductRating ratingValue={product.ratings} />
                    )}
                    {product.numberOfSold && (
                      <SoldQuantity numOfSold={product.numberOfSold} />
                    )}
                  </Stack>
                  {product.topSelling?.status && (
                    <TopSellingCard
                      // topSoldItem={product.topSoldItem}
                      days={product.topSelling?.days}
                      // numOfSold={product.numberOfSold}
                    />
                  )}
                </Stack>

                <Stack
                  direction={'row'}
                  spacing={1}
                  alignItems={'baseline'}
                  justifyContent={'flex-start'}
                >
                  <SellingPrice
                    price={product.price}
                    oldPrice={product.oldPrice}
                  />
                </Stack>
              </Stack>
            </Stack>
            <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
              <DealsContainer
                deal={product.dealType}
                extraDiscount={product.extraDiscount}
                discountPercent={product.discountPercent}
              />
            </Stack>
            <Stack>
              <ShippingChoice
                choice={product.choice}
                freeShippingPrice={product.freeShip}
              />
            </Stack>
          </Stack>

          <HoveringButtons />
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
              boxShadow: (theme) => theme.shadows[2],
              zIndex: '3 !important',
              borderRadius: '1rem',
            }}
          ></Box>
        </Card>
      </Box>
    </Box>
  );
}
