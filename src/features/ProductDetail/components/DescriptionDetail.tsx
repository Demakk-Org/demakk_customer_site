import {
  Container,
  List,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";

export default function DescriptionDetail() {
  return (
    <Container sx={{ p: "10px 12px" }}>
      <Stack width={1} direction={"row"} justifyContent={"space-between"}>
        <Typography
          color={"text.primary"}
          fontSize={".9rem"}
          fontWeight={"bold"}
        >
          Item description
        </Typography>
        <Typography fontWeight={"bold"} display={{ xs: "none", sm: "block" }}>
          Report Item
        </Typography>
      </Stack>
    </Container>
  );
}
