import { Button, Card, CardMedia, Typography, Box, Stack } from '@mui/material';
import React from 'react';
import ShippingChoice from './components/ShippingChoice';
import TopSellingCard from './components/TopSellingCard';
import SoldQuantity from './components/SoldQuantity';
import ProductRating from './components/ProductRating';
import AddToCartButton from './components/AddToCartButton';
import DealsContainer from './containers/DealsContainer';
import SellingPrice from './components/SellingPrice';

interface productDataProps {
  product: any;
}

export default function ProductCard({ product }: productDataProps) {
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
                title={product.description}
                fontSize={'.875rem'}
              >
                {product.description}
              </Typography>
              <Stack direction={{ xs: 'column-reverse', sm: 'column' }}>
                <Stack direction={'row'} spacing={0.5} alignItems={'center'}>
                  <Stack
                    direction={{ xs: 'row-reverse', sm: 'row' }}
                    spacing={1}
                    alignItems={'center'}
                  >
                    <ProductRating value={4} />
                    <SoldQuantity numOfSold={product.numberOfSold} />
                  </Stack>
                  <TopSellingCard
                    topSoldItem={product.topSoldItem}
                    days={product.date}
                    numOfSold={product.numberOfSold}
                  />
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
                fontSize: { md: '.65rem', xs: '.5rem' },
                fontWeight: 'bold',
                borderRadius: '14px',
                minWidth: 'max-content',
              }}
            >
              See preview
            </Button>
            <Button
              variant="contained"
              color="primaryButton"
              sx={{
                fontSize: { md: '.7rem', xs: '.5rem' },
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
