import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';

export default function MoreProductsCard() {
  return (
    <Box
      width={1}
      maxWidth="230px"
      paddingRight={4}
      paddingLeft={4}
      sx={{ border: '1px dashed grey' }}
    >
      <Card width={1} sx={{ borderRadius: '8px' }}>
        <Box display={'flex'} flexDirection={'column'} width={1}>
          <CardMedia
            component="img"
            width={1}
            AspectRatio={1}
            image="/images/pants1.jpg"
            alt="Paella dish"
            sx={{ borderRadius: '8px' }}
          />
          <Box width={1}>
            <Typography noWrap>
              Products description and apecification for custumers use
            </Typography>
            <Box></Box>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
