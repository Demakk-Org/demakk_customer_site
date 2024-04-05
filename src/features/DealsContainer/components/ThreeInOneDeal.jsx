import { Box, Grid, Typography } from "@mui/material";

function ThreeInOneDeal({ top, title, subtitle, first }) {
  return (
    <Grid item width={1} height={"50%"}>
      <Box height={1} p={!top ? "0.5rem 0 0 0" : "0 0 0.5rem 0"}>
        <Box
          height={1}
          p={"1.5rem"}
          borderRadius={"1rem"}
          bgcolor={"background.lighter"}
        >
          <Typography
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            color={first ? "primary.main" : "text.primary"}
          >
            {title || "Welcome Deal"}
          </Typography>
          <Typography fontSize={"1.1rem"} mb={3}>
            {subtitle || "Your exclusive price"}
          </Typography>
          <Grid container spacing={2} width={1}>
            {Array(3)
              .fill(true)
              .map((val, ind) => (
                <Grid
                  key={ind}
                  item
                  xs={4}
                  display={"flex"}
                  flexDirection={"column"}
                >
                  <Box
                    width={1}
                    component={"img"}
                    src={`/assets/images/product${ind + 2}.webp`}
                    sx={{
                      aspectRatio: 1,
                      objectFit: "cover",
                      border: "1px solid lightgray",
                      borderRadius: "1rem",
                    }}
                  />
                  <Box
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    pt={"0.5rem"}
                  >
                    <Typography
                      fontSize={"0.8rem"}
                      fontWeight={"bold"}
                      color={"text.price"}
                      sx={{ textWrap: "nowrap" }}
                    >
                      US $
                      <Typography component={"span"} fontSize={"1.2rem"}>
                        18
                      </Typography>
                      .55
                    </Typography>
                    <Typography
                      fontSize={"0.8rem"}
                      p={"0rem 0.5rem"}
                      color={"text.secondary"}
                      bgcolor={"background.lighter"}
                      borderRadius={"0.5rem"}
                    >
                      54%
                    </Typography>
                  </Box>
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Grid>
  );
}

export default ThreeInOneDeal;
