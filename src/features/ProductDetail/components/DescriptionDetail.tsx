import {
  Container,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

export default function DescriptionDetail() {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Container sx={{ p: { xs: "10px 12px", sm: 0 } }}>
      <Stack width={1} direction={"row"} justifyContent={"space-between"}>
        <Typography
          color={"text.primary"}
          fontSize={{ xs: ".9rem", sm: "1.25rem" }}
          fontWeight={"bold"}
        >
          {isSmallScreen ? "Item description" : "Description"}
        </Typography>
        <Typography fontWeight={"bold"} display={{ xs: "none", sm: "block" }}>
          Report Item
        </Typography>
      </Stack>
    </Container>
  );
}
