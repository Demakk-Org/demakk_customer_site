import {
  Box,
  Button,
  Container,
  Divider,
  Drawer,
  Grid,
  Paper,
  Rating,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ShareIcon from '@mui/icons-material/Share';

import NavBar from '../Navbar';
import Image from './containers/images/ItemImages';
import Contents from './containers/contents/Contents';
import { ST } from 'next/dist/shared/lib/utils';

export default function DetailsPage({ data }: any) {
  return (
    <>
      <Box overflow="auto">
        <NavBar />

        {/* container for image description and side nav */}
        <Grid
          container
          direction={{ xs: 'column', sm: 'row' }}
          spacing={2}
          m={'2rem'}
        >
          {/* image, related images and  description */}
          <Grid
            item
            direction={{ xs: 'column', sm: 'row' }}
            xs={9}
            container
            spacing={2}

            // md={10}
          >
            <Grid item xs={5}>
              <Image data={data} />
            </Grid>
            <Grid item xs={7}>
              <Contents data={data} />
            </Grid>
          </Grid>
          {/* for side scrollable nav */}
          <Grid
            item
            display={{ xs: 'none', sm: 'flex' }}
            xs
            //  sx={{ bgcolor: 'blue' }}
          >
            {/* <Drawer
              variant="permanent"
              anchor="right"
              sx={{ bgcolor: 'blue' }} 
            >
              <Toolbar />
              <Divider />
            </Drawer> */}
            <Box>
              <Paper
                elevation={1}
                sx={{ p: '1rem 1rem 0', maxHeight: 'calc(100vh - 112px)' }}
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
