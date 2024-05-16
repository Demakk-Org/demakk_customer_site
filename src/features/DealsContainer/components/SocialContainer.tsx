import FooterSocialLinks from "@/features/Footer/components/FooterSocialLinks";
import useUserStore from "@/store/user";
import getLanguage from "@/utils/getLanguage";
import { Apple, Facebook, Google, Twitter } from "@mui/icons-material";
import { Box, Button, Typography } from "@mui/material";

function SocialContainer() {
  const { lang } = useUserStore();
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      p={"1.5rem"}
      bgcolor={"action.hover"}
      borderRadius={"1rem"}
    >
      <Box display={"flex"} gap={"1rem"}>
        <Box flex={1}>
          <Button
            size="large"
            fullWidth
            color={"primaryButton"}
            variant="contained"
            sx={{
              borderRadius: "2rem",
              textTransform: "capitalize",
              color: "demakkPrimary.main",
            }}
          >
            {getLanguage("register", lang)}
          </Button>
        </Box>
        <Box flex={1}>
          <Button
            size="large"
            variant="outlined"
            color="secondaryButton"
            fullWidth
            sx={{
              borderRadius: "2rem",
              textTransform: "capitalize",
              color: "text.primary",
            }}
          >
            {getLanguage("signIn", lang)}
          </Button>
        </Box>
      </Box>
      <Typography
        fontSize={"small"}
        textAlign={"center"}
        mt={"0.5rem"}
        color={"text.primary"}
      >
        {getLanguage("orContinueWith", lang)}
      </Typography>
      <Box
        display={"flex"}
        gap={"1rem"}
        justifyContent={"space-between"}
        p={"0 1rem"}
        fontSize={"1rem"}
      >
        <FooterSocialLinks
          url="#"
          icon={
            <Box component={"img"} src="/social/facebook (1).png" width={30} />
          }
        />
        <FooterSocialLinks
          url="#"
          icon={<Box component={"img"} src="/social/google.png" width={30} />}
        />
        <FooterSocialLinks
          url="#"
          icon={<Box component={"img"} src="/social/twitter.png" width={30} />}
        />
        <FooterSocialLinks
          url="#"
          icon={<Box component={"img"} src="/social/apple.png" width={30} />}
        />
      </Box>
    </Box>
  );
}

export default SocialContainer;
