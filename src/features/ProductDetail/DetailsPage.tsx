import { Box, Button, CardMedia, Grid } from '@mui/material';
import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import NavBar from '../Navbar';
import { Image } from '../../model/imageModel';

export default function DetailsPage({ data }: any) {
  // const router = useRouter();
  // const id = router.query;
  // console.log(id, 'productDetails');

  return (
    <>
      <Box overflow="auto">
        <NavBar />

        {/* container for image description and side nav */}
        <Grid container spacing={2} m={'2rem'}>
          {/* image, related images and  description */}
          <Grid
            item
            container
            direction={'row'}
            md={10}
            sx={{ bgcolor: 'background.reddish' }}
          >
            <Grid item width={'45%'}>
              <Box>
                <CardMedia
                  component="img"
                  width={1}
                  alt={data.images.name}
                  image={data.images.images[0]}
                  // title="Contemplative Reptile"
                  sx={{
                    borderRadius: '.5rem',
                    aspectRatio: 1,
                    display: 'block',
                    maxWidth: '100 %',
                  }}
                />
              </Box>

              <Box>related images</Box>
            </Grid>
            <Grid item flexGrow={1} sx={{ bgcolor: 'green' }}>
              welcome deal
            </Grid>
          </Grid>
          {/* for side scrollable nav */}
          <Grid item xs sx={{ bgcolor: 'blue' }}>
            <Button> hello</Button>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
