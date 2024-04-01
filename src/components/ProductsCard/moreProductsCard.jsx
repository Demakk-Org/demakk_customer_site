import React from 'react';
import { Card, CardMedia, Box, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';

export default function MoreProductsCard() {
  return (
    <Box width={1} maxWidth="230px" paddingRight={'8px'} paddingLeft={'8px'}>
      <Card
        width={1}
        display={'flex'}
        flexDirection={'column'}
        sx={{ borderRadius: '8px' }}
      >
        <Box width={1} position={'relative'}>
          <CardMedia
            component="img"
            width={1}
            aspectRatio={1}
            image="/images/pants1.jpg"
            alt="Paella dish"
            sx={{ borderRadius: '8px' }}
          />
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
            backgroundColor="#f5f5dc"
            sx={{
              '&:hover': {
                backgroundColor: 'blue',
              },
            }}
          >
            <AddShoppingCartRoundedIcon />
          </Box>
        </Box>
        <Box width={1}>
          <Typography noWrap fontSize={'.85rem'}>
            Products description and apecification for custumers use
          </Typography>
          <Box display={'flex'} gap={'.75rem'}>
            <Rating
              name="half-rating"
              defaultValue={2.5}
              precision={0.5}
              size="small"
            />
            <Typography fontSize={'.7rem'}>xyz sold</Typography>
          </Box>

          <Box
            width={1}
            display={'flex'}
            flexDirection={'row'}
            alignItems={'center'}
            gap={1}
          >
            <Typography
              fontSize={'.75rem'}
              fontWeight={'bold'}
              display={'flex'}
              alignItems={'center'}
            >
              ETB
              <Typography fontSize={'large'} fontWeight={'bold'} pb={'.25rem'}>
                2,536
              </Typography>
              <Typography fontSize={'.75rem'} fontWeight={'bold'}>
                .64
              </Typography>
            </Typography>
            <Typography
              fontSize={'.75rem'}
              sx={{
                textDecoration: 'line-through',
                color: 'hsl(0, 0%, 60%)',
                fontSize: '.75rem',
              }}
            >
              ETB2,536.64
            </Typography>
          </Box>
          <Box width={1} display={'flex'} gap={0.5} alignItems={'center'}>
            <Typography
              fontSize={'.6rem'}
              backgroundColor={'orange'}
              fontWeight={'bold'}
              borderRadius={1}
            >
              choiceDay
            </Typography>
            <Typography>.</Typography>
            <Typography
              fontSize={'.6rem'}
              backgroundColor={'red'}
              fontWeight={'bold'}
              borderRadius={1}
            >
              Welcome deal
            </Typography>
            <Typography>56%</Typography>
          </Box>
          <Box width={1}>
            <Typography noWrap fontSize={12} marginTop={2}>
              Freeshipping over ETB4,633.63
            </Typography>
          </Box>
        </Box>
      </Card>
    </Box>
  );
}
