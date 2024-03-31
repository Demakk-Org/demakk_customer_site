import { Twitter } from "@mui/icons-material";
import { Box, Grid, Link } from "@mui/material";

function FooterSocialLinks({ icon, url }) {
  return (
    <Grid item xs={1.5} sm={4} lg={3} xl={2.4}>
      <Link href={url || "#"} color={"text.primary"}>
        <Box
          sx={{
            "&>svg": {
              width: "100%",
              height: "100%",
            },
            "&>svg:hover": {
              color: "demakkPrimary.main",
            },
          }}
        >
          {icon || <Twitter />}
        </Box>
      </Link>
    </Grid>
  );
}

export default FooterSocialLinks;
