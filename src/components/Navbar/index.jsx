import {
  ExpandLess,
  ExpandMore,
  Language,
  Menu,
  PersonOutlineOutlined,
  Search,
  ShoppingCart,
} from "@mui/icons-material";
import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Typography,
} from "@mui/material";
import AllCategories from "./allCategories";
import { useState } from "react";

function index() {
  const [allPropOpen, setAllPropOpen] = useState(true);
  return (
    <Box
      sx={{
        position: "fixed",
        p: {
          xs: "0.5rem 1rem 0.5rem 1rem",
          sm: "0.75rem 2rem 0.75rem 4rem",
          md: "0.5rem 4rem 0.5rem 9rem",
        },
        bgcolor: {
          xs: "white",
          sm: "dark.main",
        },
        color: {
          xs: "black",
          sm: "white",
        },
      }}
      top={0}
      left={0}
      width={1}
    >
      <Grid container alignItems={"center"} width={"100%"}>
        <Grid item sx={{ display: { sm: "none" } }}>
          <IconButton>
            <Menu />
          </IconButton>
        </Grid>
        <Grid item>
          <Typography
            fontWeight={"bold"}
            pr={"2rem"}
            sx={{
              fontSize: {
                xs: "1.2rem",
                sm: "1.5rem",
                md: "2rem",
              },
              color: {
                xs: "primary.main",
                sm: "primaryLight.main",
              },
            }}
          >
            Demakk
          </Typography>
        </Grid>
        <Grid
          item
          md
          sx={{
            m: "0 2rem",
            display: {
              xs: "none",
              md: "flex",
            },
          }}
        >
          <FormControl
            sx={{
              minWidth: "25ch",
              flex: "1",
              display: "flex",
            }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              placeholder="Search for any product..."
              sx={{
                borderRadius: "1.5rem",
                width: "100%",
                pl: "1rem",
                pr: "0.25rem",
                bgcolor: "white.main",
                color: {
                  xs: "white",
                  sm: "black",
                },
              }}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    size="small"
                    // onClick={handleClickShowPassword}
                    edge="end"
                    color="black"
                    sx={{
                      m: "0",
                      aspectRatio: "initial",
                      borderRadius: "1.5rem",
                      bgcolor: "dark.main",
                      color: {
                        xs: "dark.main",
                        sm: "white.main",
                      },
                      p: "0.25rem 1rem",
                      "&:hover": {
                        bgcolor: "dark.main",
                      },
                    }}
                  >
                    <Search color="white" />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
        <Grid item display={"flex"} ml={"auto"}>
          <Grid container alignItems={"center"} spacing={{ xs: 0, sm: 2 }}>
            <Grid item>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ display: { xs: "none", sm: "flex" } }}
                color={"white.main"}
              >
                <IconButton
                  sx={{
                    fontSize: { xs: "small" },
                    color: {
                      xs: "dark.main",
                      sm: "white.main",
                    },
                  }}
                >
                  <Language fontSize="large" />
                </IconButton>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  fontSize={"0.5rem"}
                >
                  <Typography fontSize={"0.8rem"}>EN/</Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      USD
                    </Typography>
                    <ExpandMore fontSize="small" color="dark" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box display={"flex"} alignItems={"center"} color={"white.main"}>
                <IconButton
                  size="medium"
                  sx={{
                    color: {
                      xs: "dark.main",
                      sm: "white.main",
                    },
                  }}
                >
                  <PersonOutlineOutlined
                    sx={{ fontSize: { xs: 25, sm: 40 } }}
                  />
                </IconButton>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  fontSize={"0.5rem"}
                >
                  <Typography
                    fontSize={"0.8rem"}
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    Welcome
                  </Typography>
                  <Box
                    display={"flex"}
                    alignItems={"center"}
                    sx={{ display: { xs: "none", sm: "flex" } }}
                  >
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      Sign in/Register
                    </Typography>
                    <ExpandMore fontSize="small" color="dark" />
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item>
              <Box
                display={"flex"}
                gap={"0.25rem"}
                alignItems={"center"}
                color={"white.main"}
              >
                <IconButton
                  size="medium"
                  sx={{
                    color: {
                      xs: "dark.main",
                      sm: "white.main",
                    },
                  }}
                >
                  <ShoppingCart sx={{ fontSize: { xs: 25, sm: 40 } }} />
                </IconButton>
                <Box
                  display={"flex"}
                  flexDirection={"column"}
                  gap={"0.25rem"}
                  fontSize={"0.5rem"}
                  sx={{ display: { xs: "none", sm: "flex" } }}
                >
                  <Typography
                    fontSize={"0.6rem"}
                    fontWeight={"bold"}
                    sx={{
                      bgcolor: { xs: "dark.main", sm: "white.main" },
                      color: { xs: "white", sm: "black" },
                      borderRadius: "1rem",
                      textAlign: "center",
                    }}
                  >
                    0
                  </Typography>
                  <Box display={"flex"} alignItems={"center"}>
                    <Typography fontSize={"0.8rem"} fontWeight={"bold"}>
                      Cart
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          sm={12}
          flex={1}
          sx={{
            display: {
              xs: "flex",
              md: "none",
            },
            mt: {
              sm: "0.5rem",
            },
          }}
        >
          <FormControl
            sx={{ minWidth: "25ch", flex: "1", display: "flex" }}
            variant="outlined"
            size="small"
          >
            <OutlinedInput
              placeholder="Search for any product..."
              sx={{
                borderRadius: "1.5rem",
                width: "100%",
                pl: "1rem",
                letterSpacing: "0.4px",
                bgcolor: "rgba(10,10,10,0.09)",
                color: "black",
              }}
              color="primary"
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="search"
                    edge="end"
                    // onClick={handleClickShowPassword}
                  >
                    <Search />
                  </IconButton>
                </InputAdornment>
              }
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box
        mt={"1rem"}
        width={1}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          justifyContent: "center",
          // gap: "1rem",
        }}
      >
        <Box
          position={"relative"}
          onMouseOver={() => setAllPropOpen(true)}
          onMouseLeave={() => setAllPropOpen(false)}
          bgcolor={allPropOpen && "rgba(240, 240, 240, 1)"}
          sx={{
            borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
            "&:hover button": { borderColor: "transparent" },
          }}
        >
          <Button
            color={allPropOpen ? "dark" : "white"}
            variant="outlined"
            startIcon={<Menu />}
            endIcon={allPropOpen ? <ExpandLess /> : <ExpandMore />}
            sx={{
              borderRadius: allPropOpen ? "1.5rem 1.5rem 0 0" : "1.5rem",
              p: "0.5rem 1.5rem",
              display: "flex",
              alignItems: "center",
              // border: "transparent",
              "&:hover": {
                borderColor: "transparent",
              },
            }}
          >
            <Typography textTransform={"capitalize"} mr={6}>
              All Categories
            </Typography>
          </Button>
          <Box
            position={"absolute"}
            width={1}
            top={"100%"}
            borderRadius={"0 0 1.5rem 1.5rem"}
            left={0}
            bgcolor={"rgba(240, 240, 240, 1)"}
          >
            {allPropOpen && <AllCategories />}
          </Box>
        </Box>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            borderRadius: "1.5rem",
            fontSize: "1rem",
          }}
        >
          NN
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            borderRadius: "1.5rem",
            textTransform: "capitalize",
            fontSize: "1rem",
          }}
        >
          Best Sellers
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            borderRadius: "1.5rem",
            textTransform: "capitalize",
            fontSize: "1rem",
          }}
        >
          Top Brands
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            borderRadius: "1.5rem",
            textTransform: "capitalize",
            fontSize: "1rem",
          }}
        >
          Consumer Electronics
        </Button>
        <Button
          variant="contained"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            borderRadius: "1.5rem",
            textTransform: "capitalize",
            fontSize: "1rem",
          }}
        >
          Home Improvement & Lighting
        </Button>
        <Box>
          <Button
            // color="dark"
            variant="contained"
            endIcon={<ExpandMore />}
            sx={{
              borderRadius: "1.5rem",
              fontSize: "1rem",

              p: "0.5rem 1.5rem",
              bgcolor: "transparent",
              "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
            }}
          >
            <Typography textTransform={"capitalize"}>More</Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default index;
