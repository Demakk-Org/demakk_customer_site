import { Box, Button, Grid, Stack } from '@mui/material';
import React from 'react';

export default function HoveringButtons() {
  return (
    <Grid
      container
      className="buttons"
      spacing={1}
      direction={'row'}
      width={1}
      display="none"
      justifyContent="space-between"
      alignItems={'center'}
      mt={'1rem'}
      zIndex={2}
    >
      <Grid item md={6} height={'100%'}>
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            fontSize: { md: '.75rem', xs: '.5rem' },
            fontWeight: 'bold',
            borderRadius: '24px',
            height: '100%',
          }}
        >
          See preview
        </Button>
      </Grid>
      <Grid item md={6} height={'100%'}>
        <Button
          variant="contained"
          color="primaryButton"
          sx={{
            fontSize: { md: '.8rem', xs: '.5rem' },
            fontWeight: 'bold',
            borderRadius: '24px',
            height: '100%',
            lineHeight: 1,
          }}
        >
          Similar items
        </Button>
      </Grid>
    </Grid>
  );
}
