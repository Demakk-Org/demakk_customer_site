import React, { useState } from 'react';
import {
  Card,
  CardMedia,
  Box,
  Typography,
  Button,
  Rating,
  Grid,
} from '@mui/material';
// import from '@mui/material/Rating';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import data from '../../../../utils/data';

export default function MoreProductsCard() {
  const [hovered, setHovered] = useState(false);
  return (
    // <Box sx={{ flexGrow: 1 }}>
    <Grid
      container
      display={'flex'}
      // columns={{ xs: 4, sm: 8, md: 12 }}
      sx={{ marginTop: '20px', marginRight: '20px', marginLeft: '20px' }}
    >
      {data.products.map((product) => (
        <Grid item md={2.4} key={product}>
          <Box
            width={1}
            maxWidth="230px"
            paddingRight={'8px'}
            paddingLeft={'8px'}
          >
            <Card
              width={1}
              display={'flex'}
              flexDirection={'column'}
              // sx={{ borderRadius: '8px' }}
              sx={{
                boxShadow: 'none',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: '10px',
                },
              }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
            >
              <Box width={1} position={'relative'}>
                <CardMedia
                  component="img"
                  width={1}
                  aspectRatio={1}
                  image={product.image}
                  alt={product.alt}
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
              <Box width={1} mt={'8px'}>
                <Typography
                  noWrap
                  title={product.description}
                  fontSize={'.85rem'}
                >
                  {product.description}
                </Typography>
                <Box display={'flex'} alignItems={'center'} gap={'.5rem'}>
                  <Rating
                    name="half-rating"
                    defaultValue={3.5}
                    precision={0.5}
                    // size="small"
                    sx={{ fontSize: '.8rem' }}
                  />
                  <Typography fontSize={'.7rem'}>125 sold</Typography>
                </Box>

                <Box
                  width={1}
                  display={'flex'}
                  flexDirection={'row'}
                  alignItems={'center'}
                  // gap={1}
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
                    ETB4,626.74
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
              <Box
                sx={{ visibility: hovered ? 'visible' : 'hidden' }}
                display={'flex'}
                justifyContent="center"
                mt={'8px'}
                gap={4.5}
              >
                <Button
                  sx={{
                    fontSize: '.6rem',
                    fontWeight: 'bold',
                    borderRadius: '14px',
                    backgroundColor: '#f5f5dc',
                  }}
                >
                  See preview
                </Button>
                <Button
                  sx={{
                    fontSize: '.6rem',
                    fontWeight: 'bold',
                    borderRadius: '14px',
                    backgroundColor: '#f5f5dc',
                  }}
                >
                  Similar items
                </Button>
              </Box>
            </Card>
          </Box>
        </Grid>
      ))}
    </Grid>
    // </Box>
  );
}
