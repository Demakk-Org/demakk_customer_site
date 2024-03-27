import React from 'react';
import { Card, CardMedia, Box, Typography, Link } from '@mui/material';

export default function MoreProductsCard() {
  return (
    <Box
      sx={{
        width: '230px',
        height: '357.35px',
        borderRadius: '8px',
        paddingLeft: '8px',
        display: 'flex',
      }}
    >
      <Card
        sx={{
          width: '214px',
          height: '357.35px',
          borderRadius: 4,
          boxShadow: 'none',
        }}
      >
        <Link
          sx={{
            width: '214px',
            height: '357.35px',
            display: 'flex',
            flexDirection: 'column',
            textDecoration: 'none',
          }}
        >
          <Box
            sx={{
              width: '214px',
              height: '214px',
              display: 'flex',
              position: 'relative',
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: '214px',
                height: '214px',
                borderRadius: 4,
              }}
              image="/images/pants1.jpg"
              title="Contemplative Reptile"
            />
            <Box
              sx={{
                width: '48px',
                height: '48px',
                position: 'absolute',
                top: '70%',
                left: '70%',
              }}
            ></Box>
            <Box
              sx={{
                width: '48px',
                height: '48px',
                display: 'flex',
                backgroundColor: '#f5f5dc',
                position: 'absolute',
                top: '70%',
                left: '70%',
                borderRadius: '50%',
              }}
            ></Box>
          </Box>
          <Box
            sx={{
              width: '214px',
              height: '143.35px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Box
              sx={{
                width: '214px',
                height: '18.79px',
                marginTop: '8px',
              }}
            >
              <Typography
                variant="h3"
                style={{ fontSize: '15px' }}
                color="black"
                noWrap
                title="shirt product for everybody as you as our customer"
              >
                shirt product for everybody for our customer
              </Typography>
            </Box>
            <Box
              sx={{
                width: '214px',
                height: '16px',
                display: 'flex',
                flexDirection: 'row',
                gap: 0.5,
              }}
            >
              <Box
                sx={{
                  width: '55px',
                  height: '16px',
                  display: 'flex',
                  alignItems: 'flex-end',
                }}
              >
                {/* <Box
                  sx={{
                    width: '55px',
                    height: '16px',
                  }}
                >
                  <Rating
                    name="read-only"
                    precision={0.5} // Set precision to show half stars
                    readOnly // Make the rating read-only
                    sx={{
                      fontSize: '14px',
                      fontWeight: 'bold',
                      marginRight: '4px',
                    }}
                  />
                </Box> */}
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                  }}
                >
                  <Box
                    sx={{
                      width: '10px',
                      height: '10px',
                    }}
                  ></Box>
                  <img
                    src="/images/star.png"
                    alt="image"
                    width="10"
                    height="10"
                  />
                </Box>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'lightyellow',
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'lightgreen',
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'lightyellow',
                  }}
                ></Box>
                <Box
                  sx={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: 'lightgreen',
                  }}
                ></Box>
              </Box>
              <Box
                sx={{
                  width: '47.06px',
                  height: '16px',
                }}
              >
                <Typography
                  component="span"
                  variant="body2"
                  sx={{ fontSize: '0.75rem', color: 'black' }}
                >
                  128 sold
                </Typography>
              </Box>
              <img src="/images/top.webp" height="16" width="93" />
            </Box>
            <Box
              sx={{
                width: '214px',
                height: '32.67px',
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: '97.18px',
                  height: '32.67px',
                }}
              >
                {' '}
                <span
                  style={{
                    fontSize: '12px',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  ETB
                </span>
                <span
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  2
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'black',
                  }}
                >
                  ,
                </span>
                <span
                  style={{
                    fontSize: '24px',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  483
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'black',
                  }}
                >
                  .
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: 'black',
                    fontWeight: 'bold',
                  }}
                >
                  86
                </span>
              </Box>
              <Box
                sx={{
                  width: '68.4px',
                  height: '16px',
                }}
              >
                <Typography
                  component="span"
                  style={{
                    textDecoration: 'line-through',
                    color: 'hsl(0, 0%, 60%)',
                  }}
                  variant="body4"
                >
                  ETB7,646.75
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '214px',
                height: '17.4px',
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
              }}
            >
              <img src="/images/wellcome.png" height="16" width="74.5" />
              <Typography
                component="span"
                style={{
                  paddingLeft: '4px',
                }}
                variant="body2"
                noWrap
              >
                .
              </Typography>
              <img src="/images/arrow.webp" height="16" width="11" />
              <Box
                style={{
                  width: '110.89px',
                  height: '14.72px',
                  paddingLeft: '4px',
                }}
              >
                <Typography
                  component="span"
                  title="Save ETB4,544.5535"
                  variant="body2"
                  noWrap
                  style={{
                    paddingLeft: '4px',
                  }}
                >
                  Save ETB4,544.5535
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                width: '214px',
                height: '40.5px',
                paddingTop: '2px',
              }}
            >
              <img src="/images/choice.jpg" height="16" width="38" />
              <Typography
                component="span"
                style={{
                  color: 'black',
                  width: '163.24px',
                  height: '38.92px',
                  paddingLeft: '4px',
                }}
                variant="body2"
              >
                Free shipping over ETB568.56
              </Typography>
            </Box>
          </Box>
        </Link>
      </Card>
    </Box>
  );
}
