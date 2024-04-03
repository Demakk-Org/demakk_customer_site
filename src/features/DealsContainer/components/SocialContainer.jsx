import language from "@/data/dictionary";
import FooterSocialLinks from "@/features/Footer/components/FooterSocialLinks";
import { Apple, Facebook, Google, Twitter } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

function SocialContainer() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      p={"1.5rem"}
      bgcolor={"background.reddish"}
      borderRadius={"1rem"}
    >
      <Box display={"flex"} gap={"1rem"}>
        <Box flex={1}>
          <Button
            size="large"
            fullWidth
            color="demakkPrimary"
            variant="contained"
            sx={{
              borderRadius: "2rem",
              textTransform: "capitalize",
            }}
          >
            {language.en.register}
          </Button>
        </Box>
        <Box flex={1}>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            sx={{
              borderRadius: "2rem",
              textTransform: "capitalize",
              color: "text.primary",
              borderColor: "text.primary",
            }}
          >
            {language.en.signIn}
          </Button>
        </Box>
      </Box>
      <Typography fontSize={"small"} textAlign={"center"} mt={"0.5rem"}>
        {language.en.orContinueWith}
      </Typography>
      <Box
        display={"flex"}
        gap={"1rem"}
        justifyContent={"space-between"}
        p={"0 1rem"}
      >
        <FooterSocialLinks icon={<Facebook />} />
        <FooterSocialLinks icon={<Google />} />
        <FooterSocialLinks icon={<Apple />} />
        <FooterSocialLinks icon={<Twitter />} />
      </Box>
    </Box>
  );
}

export default SocialContainer;
