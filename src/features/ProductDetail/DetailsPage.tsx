import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Stack,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';

import Image from './containers/images/ItemImages';
import Contents from './containers/contents/Contents';
import Head from 'next/head';
import RelatedItemCard from './containers/relatedItemCard/RelatedItemCard';
import { useEffect } from 'react';
import useProductStore from '@/store/product';
import useDiscountStore from '@/store/discount';
import { LANG } from '@/store/user';
import RelatedItemListing from './containers/relatedItemCard/RelatedItemListing';
// import RelatedItemListing from './containers/relatedItemCard/relatedItemListing';

export default function DetailsPage() {
  const { products, setProducts, page, limit, nextPage, prevPage } =
    useProductStore();
  console.log(products, 'from productListing');
  const { discount, setDiscount } = useDiscountStore();

  useEffect(() => {
    setProducts({ limit, lang: LANG.en, page });
    setDiscount();
  }, [page]);
  return (
    <>
      <Box overflow="auto">
        {/* <NavBar /> */}

        {/* container for image description and side nav */}
        <Grid
          container
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          m={'2rem'}
        >
          {/* images related items description along the column */}
          <Grid item xs={9} container>
            {/* image, related images and  description */}

            <Grid
              item
              direction={{ xs: 'column', sm: 'row' }}
              container
              spacing={2}
            >
              <Grid item xs={5}>
                <Image />
              </Grid>
              <Grid item xs={7}>
                <Contents />
              </Grid>
            </Grid>
            <Divider sx={{ m: '2rem 0rem' }} orientation="horizontal" />
            <RelatedItemListing />
          </Grid>
          {/* for side scrollable nav */}
          <Grid
            position={'relative'}
            item
            display={{ xs: 'none', sm: 'flex' }}
            xs
            //  sx={{ bgcolor: 'blue' }}
          >
            <Box>
              <Paper
                elevation={1}
                sx={{
                  p: '1rem 1rem 0',
                  height: '100vh',
                  // maxHeight: 'calc(100vh - 112px)'
                }}
              >
                <Stack
                  direction={'row'}
                  justifyContent={'space-between'}
                  // p={'0 1rem'}
                >
                  <Typography fontWeight={'bold'}>Ship to</Typography>
                  <Stack direction={'row'}>
                    <LocationOnIcon />
                    <Typography>Ethiopia</Typography>
                  </Stack>
                </Stack>
                <Divider sx={{ margin: '.5rem' }} />
                <Box>
                  <Typography>shipping status</Typography>
                  <Typography>select another produc</Typography>
                </Box>
                <Divider sx={{ margin: '.5rem' }} />
                <Box>
                  <Typography fontWeight={'bold'}>Quantity</Typography>
                  <Stack direction={'row'} alignItems={'center'} spacing={2}>
                    <Box
                      component={'button'}
                      height={'2rem'}
                      minWidth={'2rem'}
                      borderRadius={'50%'}
                      border={'none'}
                      sx={{ borderRadius: '50%' }}
                    >
                      -
                    </Box>

                    <Typography>num</Typography>
                    <Box
                      component={'button'}
                      height={'2rem'}
                      minWidth={'2rem'}
                      borderRadius={'50%'}
                      border={'none'}
                      sx={{ borderRadius: '50%' }}
                    >
                      +
                    </Box>
                  </Stack>
                  <Typography color={'error.main'}>only 5 left</Typography>
                </Box>
                <Box position={'sticky'}>
                  <Stack spacing={2} m={'1rem 0'}>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: '1.5rem',
                        p: '.625rem .75rem',
                      }}
                    >
                      Buy now
                    </Button>
                    <Button
                      variant="contained"
                      sx={{
                        borderRadius: '1.5rem',
                        mt: '1rem',
                        p: '.625rem .75rem',
                      }}
                    >
                      Add to cart
                    </Button>
                    <Stack direction={'row'} spacing={2}>
                      <Button
                        variant="outlined"
                        startIcon={<ShareIcon />}
                        sx={{
                          borderRadius: '1.5rem',
                          width: '60%',
                          color: 'black',
                        }}
                      >
                        share
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ borderRadius: '1.5rem', padding: '0 2rem' }}
                      >
                        fav
                      </Button>
                    </Stack>
                  </Stack>
                </Box>
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
