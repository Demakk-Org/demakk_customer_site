import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import Size from "./Size";

export default function ProductSpecification() {
  return (
    <Container sx={{ p: { xs: "0 .75rem .75rem" } }}>
      <Stack direction={"row"} justifyContent={"space-between"} p={".75rem 0"}>
        <Typography
          color={"text.primary"}
          fontSize={".9rem"}
          fontWeight={"bold"}
        >
          Specifications
        </Typography>
        <ArrowForwardIosIcon fontSize="small" />
      </Stack>
      <Stack spacing={1} p={".75rem"} sx={{ background: "#f0f0f0" }}>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography color={"text.blurred"} fontSize={".75rem"}>
              Product Type
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={".75rem"}>basic</Typography>
          </Grid>
        </Grid>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography color={"text.blurred"} fontSize={".75rem"}>
              Fit
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={".75rem"}>
              fit for your size just select your size
            </Typography>
          </Grid>
        </Grid>
        <Grid container direction={"row"}>
          <Grid item xs={6}>
            <Typography color={"text.blurred"} fontSize={".75rem"}>
              Pattern type
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography fontSize={".75rem"}>
              slotted
            </Typography>
          </Grid>
        </Grid>
      </Stack>
    </Container>
  );
}
