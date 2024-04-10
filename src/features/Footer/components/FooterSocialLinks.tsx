import { Box, Grid, Link } from "@mui/material";

interface FooterSocialLinksInterface {
  icon: JSX.Element;
  url: string;
}

function FooterSocialLinks({ icon, url }: FooterSocialLinksInterface) {
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
          {icon}
        </Box>
      </Link>
    </Grid>
  );
}

export default FooterSocialLinks;
