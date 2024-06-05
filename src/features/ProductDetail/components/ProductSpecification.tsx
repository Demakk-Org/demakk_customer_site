import {
  Box,
  Button,
  Collapse,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { useState } from "react";

export default function ProductSpecification() {
  const [expand, setExpand] = useState(false);

  const handleToggle = () => {
    setExpand(!expand);
  };

  return (
    <Container sx={{ p: { xs: "0 .75rem .75rem", sm: 0 } }}>
      <Stack direction={"row"} justifyContent={"space-between"} p={".75rem 0"}>
        <Typography
          color={"text.primary"}
          fontSize={{ xs: ".9rem", sm: "20px" }}
          fontWeight={"bold"}
        >
          Specifications
        </Typography>
        <ArrowForwardIosIcon
          fontSize="small"
          sx={{ display: { xs: "block", sm: "none" } }}
        />
      </Stack>
      <Divider sx={{ display: { xs: "none", sm: "block" } }} />
      <Stack
        direction={"column"}
        alignItems={"center"}
        spacing={{ xs: 1, sm: 2 }}
        p={{ xs: ".75rem", sm: "1rem" }}
        sx={{
          background: { xs: "#f0f0f0", sm: "none" },
          display: { xs: "none", sm: "grid" },
        }}
      >
        <Collapse in={expand} orientation="vertical" collapsedSize={45}>
          <Grid container direction={"row"} spacing={{ xs: 0, sm: 2 }}>
            <Grid
              item
              xs={6}
              sm={2}
              sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
            >
              <Typography
                color={{ xs: "text.blurred", sm: "text.primary" }}
                fontSize={{ xs: ".75rem", sm: "1rem" }}
                p={{ xs: "0", sm: "0 0 1rem 0" }}
              >
                Product Type
              </Typography>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
                basic
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={2}
              sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
            >
              <Typography
                color={{ xs: "text.blurred", sm: "text.primary" }}
                fontSize={{ xs: ".75rem", sm: "1rem" }}
              >
                Fit
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
                fit for your size just select your size
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ display: { xs: "none", sm: "block" } }} />
          <Grid container direction={"row"} spacing={{ xs: 0, sm: 2 }}>
            <Grid
              item
              xs={6}
              sm={2}
              sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
            >
              <Typography
                color={{ xs: "text.blurred", sm: "text.primary" }}
                fontSize={{ xs: ".75rem", sm: "1rem" }}
                p={{ xs: "0", sm: "0 0 1rem 0" }}
              >
                Product Type
              </Typography>
            </Grid>

            <Grid item xs={6} sm={4}>
              <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
                basic
              </Typography>
            </Grid>
            <Grid
              item
              xs={6}
              sm={2}
              sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
            >
              <Typography
                color={{ xs: "text.blurred", sm: "text.primary" }}
                fontSize={{ xs: ".75rem", sm: "1rem" }}
              >
                Fit
              </Typography>
            </Grid>
            <Grid item xs={6} sm={4}>
              <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
                fit for your size just select your size
              </Typography>
            </Grid>
          </Grid>
          <Divider sx={{ display: { xs: "none", sm: "block" } }} />
        </Collapse>
        {/* <Button
          // variant="contained"
          // sx={{ color: "text.primary", bgcolor: "background.blurred" }}
          onClick={handleToggle}
        > */}
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          // marginTop={".5rem"}
        >
          <Box
            component={"button"}
            p={".5rem 1.5rem"}
            color={"text.primary"}
            sx={{
              fontSize: "1rem",
              fontWeight: "bold",
              bgcolor: "background.blurred",
              border: "none",
              borderRadius: "1rem",
            }}
            onClick={handleToggle}
          >
            View more
          </Box>
        </Box>

        {/* </Button> */}
      </Stack>
      <Stack
        spacing={{ xs: 1, sm: 0 }}
        p={{ xs: ".75rem", sm: "0" }}
        sx={{
          background: { xs: "#f0f0f0", sm: "none" },
          display: { xs: "block", sm: "none" },
        }}
      >
        <Grid container direction={"row"} spacing={{ xs: 0, sm: 2 }}>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
          >
            <Typography
              color={{ xs: "text.blurred", sm: "text.primary" }}
              fontSize={{ xs: ".75rem", sm: "1rem" }}
              p={{ xs: "0", sm: "0 0 1rem 0" }}
            >
              Product Type
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
              basic
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
          >
            <Typography
              color={{ xs: "text.blurred", sm: "text.primary" }}
              fontSize={{ xs: ".75rem", sm: "1rem" }}
            >
              Fit
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
              fit for your size just select your size
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ display: { xs: "none", sm: "block" } }} />
        <Grid container direction={"row"} spacing={{ xs: 0, sm: 2 }}>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
          >
            <Typography
              color={{ xs: "text.blurred", sm: "text.primary" }}
              fontSize={{ xs: ".75rem", sm: "1rem" }}
              p={{ xs: "0", sm: "0 0 1rem 0" }}
            >
              Product Type
            </Typography>
          </Grid>

          <Grid item xs={6} sm={4}>
            <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
              basic
            </Typography>
          </Grid>
          <Grid
            item
            xs={6}
            sm={2}
            sx={{ background: { xs: "none", sm: "#f0f0f0" } }}
          >
            <Typography
              color={{ xs: "text.blurred", sm: "text.primary" }}
              fontSize={{ xs: ".75rem", sm: "1rem" }}
            >
              Fit
            </Typography>
          </Grid>
          <Grid item xs={6} sm={4}>
            <Typography fontSize={{ xs: ".75rem", sm: "1rem" }}>
              fit for your size just select your size
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ display: { xs: "none", sm: "block" } }} />
      </Stack>
    </Container>
  );
}
