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
} from '@mui/material';

import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import Pdata from '@/data/Pdata';

export default function ProductsCard() {
  return (
    <Grid
      container
      spacing={2}
      padding={{ md: '3rem 6rem', xs: '1rem 2rem', sm: '1.5rem 3rem' }}
      mt="1.5rem"
    >
      {Pdata.products.map((product) => (
        <Grid item xs={6} sm={4} md={2.4} key={product}>
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
                flexDirection={'column'}
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
                    backgroundColor="rgba(0, 0, 0, .04);"
                    borderRadius=".5rem"
                  ></Box>
                  <Box
                    width={48}
                    height={48}
                    borderRadius="50%"
                    bottom={'10%'}
                    right={'10%'}
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                    position={'absolute'}
                    backgroundColor="background.paper"
                    sx={{
                      '&:hover': {
                        backgroundColor: (theme) => theme.palette.darken.main,
                        color: (theme) => theme.palette.brighten.main,
                        cursor: 'pointer',
                      },
                    }}
                  >
                    <AddShoppingCartRoundedIcon color="inherit" />
                  </Box>
                </Box>
                <Box
                  display="flex"
                  flexDirection="column"
                  width={1}
                  mt={'8px'}
                  zIndex={2}
                >
                  <Typography
                    variant="h3"
                    sx={{ lineHeight: '1.5' }}
                    noWrap
                    title={product.description}
                    fontSize={'.875rem'}
                  >
                    {product.description}
                  </Typography>
                  {product.numOfReviews > product.numReviewsThreshold && (
                    <Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
                      <Rating
                        name="half-rating"
                        value={product.productRating}
                        precision={0.5}
                        readOnly
                        sx={{ fontSize: '.8rem' }}
                      />

                      <Typography fontSize={'.7rem'}>
                        {product.numOfReviews} sold
                      </Typography>
                    </Box>
                  )}

                  <Box
                    width={1}
                    display={'flex'}
                    flexDirection={'row'}
                    alignItems={'center'}
                  >
                    <Typography fontSize={'.6rem'} fontWeight={'bold'}>
                      ETB
                    </Typography>
                    <Typography
                      fontSize={'large'}
                      fontWeight={'bold'}
                      pb={'.25rem'}
                    >
                      2,536
                    </Typography>
                    <Typography fontSize={'.75rem'} fontWeight={'bold'}>
                      .64
                    </Typography>

                    <Typography
                      fontSize={'.75rem'}
                      marginLeft={1}
                      sx={{
                        textDecoration: 'line-through',
                        color: 'hsl(0, 0%, 60%)',
                        fontSize: '.75rem',
                      }}
                    >
                      {product.discount}
                    </Typography>
                  </Box>
                  <Box
                    overflow="hidden"
                    width={1}
                    display={'flex'}
                    gap={0.5}
                    alignItems={'center'}
                  >
                    <Typography
                      minWidth="max-content"
                      fontSize={'.55rem'}
                      backgroundColor={'secondary.main'}
                      fontWeight={'bold'}
                      borderRadius={1}
                      pl=".5rem"
                      pr=".5rem"
                      color={'main.black'}
                      sx={{ display: 'inline' }}
                    >
                      {product.discountType}
                    </Typography>
                    <Box
                      component="span"
                      width=".1875rem"
                      height=".1875rem"
                      borderRadius="50%"
                      backgroundColor="#fd384f"
                    ></Box>
                    <Typography
                      minWidth="max-content"
                      fontSize={'.6rem'}
                      backgroundColor={'primary.main'}
                      fontWeight={'bold'}
                      borderRadius={1}
                      pl=".5rem"
                      pr=".5rem"
                      sx={{ display: 'inline' }}
                    >
                      Welcome deal
                    </Typography>
                    <Typography fontSize={'12px'}>56%</Typography>
                  </Box>
                  <Box width={1} mt={'1px'}>
                    <Typography fontSize=".875rem" marginTop={'4px'}>
                      Freeshipping over ETB4,633.63
                    </Typography>
                  </Box>
                </Box>

                <Box
                  className="buttons"
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
                </Box>
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
