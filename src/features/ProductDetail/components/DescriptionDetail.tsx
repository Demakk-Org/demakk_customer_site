import { List, ListItemText, Stack, Typography } from "@mui/material";

export default function DescriptionDetail() {
  return (
    <>
      <Stack width={1} direction={"row"} justifyContent={"space-between"}>
        <Typography component={"h1"} variant="h6" fontWeight={"bold"}>
          Description
        </Typography>
        <Typography fontWeight={"bold"}>Report Item</Typography>
      </Stack>

      <List component={"dl"}>
        <ListItemText primary={"specifications:"}></ListItemText>
        <List component={"ul"}>
          <ListItemText
            primary={"specifications"}
            secondary={"Awesome Product"}
          />
        </List>
        <ListItemText primary={"Features:"}></ListItemText>

        <ListItemText primary={"specifications"} />
      </List>
    </>
  );
}
