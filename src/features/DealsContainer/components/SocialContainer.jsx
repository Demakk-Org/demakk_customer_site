import { Apple, Facebook, Google, Twitter } from "@mui/icons-material";
import { Box, Button, Link, Typography } from "@mui/material";

function SocialContainer() {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      gap={1}
      p={"1.5rem"}
      bgcolor={"contrastBg.light"}
      borderRadius={"1rem"}
    >
      <Box display={"flex"} gap={"1rem"}>
        <Box flex={1}>
          <Button
            size="large"
            color="dark"
            fullWidth
            variant="contained"
            sx={{ borderRadius: "2rem", color: "dark.contrastText" }}
          >
            Register
          </Button>
        </Box>
        <Box flex={1}>
          <Button
            size="large"
            variant="outlined"
            fullWidth
            sx={{ borderRadius: "2rem" }}
            color="dark"
          >
            Sign in
          </Button>
        </Box>
      </Box>
      <Typography fontSize={"small"} textAlign={"center"} mt={"0.5rem"}>
        Or continue with
      </Typography>
      <Box display={"flex"} gap={"0.5rem"} justifyContent={"space-between"}>
        <Link href="#" flex={1} color={"dark.light"} textAlign={"center"}>
          <Facebook fontSize="large" />
        </Link>
        <Link href="#" flex={1} color={"dark.light"} textAlign={"center"}>
          <Google fontSize="large" />
        </Link>
        <Link href="#" flex={1} color={"dark.light"} textAlign={"center"}>
          <Twitter fontSize="large" />
        </Link>
        <Link href="#" flex={1} color={"dark.light"} textAlign={"center"}>
          <Apple fontSize="large" />
        </Link>
      </Box>
    </Box>
  );
}

export default SocialContainer;
