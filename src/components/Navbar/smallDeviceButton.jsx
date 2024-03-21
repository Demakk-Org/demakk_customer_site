import { Avatar, Button, Typography } from "@mui/material";

function SmallDeviceButton({ imgUrl, title }) {
  return (
    <Button
      fullWidth
      color={"dark"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: 1,
        mb: "0.5rem",
      }}
    >
      <Avatar
        alt="Name"
        src={imgUrl}
        variant={"rounded"}
        sx={{ width: 25, height: 25 }}
      />
      <Typography
        fontWeight={"light"}
        textTransform={"capitalize"}
        fontSize={"0.9rem"}
      >
        {title || "The title here..."}
      </Typography>
    </Button>
  );
}

export default SmallDeviceButton;
