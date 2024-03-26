import { Avatar, Box, Button, Typography } from "@mui/material";

function SmallDeviceButton({ title, startImage, endImage }) {
  return (
    <Button
      fullWidth
      color={"dark"}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: { xs: 1, sm: 2, md: 1 },
        // mb: "0.5rem",
      }}
    >
      {startImage && (
        <Avatar
          alt="Name"
          src={typeof startImage == "string" && startImage}
          variant={"rounded"}
          sx={{
            width: { xs: 30, sm: 60, md: 30 },
            height: { xs: 30, sm: 60, md: 30 },
            color: "black",
            bgcolor: "transparent",
            fontsize: "1.5rem !important",
          }}
        >
          <Box
            display={"flex"}
            sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "1.25rem" } }}
          >
            {typeof startImage != "string" && startImage}
          </Box>
        </Avatar>
      )}
      <Typography
        fontWeight={"light"}
        textTransform={"none"}
        sx={{ fontSize: { xs: "0.9rem", sm: "1.4rem", md: "1rem" } }}
      >
        {title || "The title here..."}
      </Typography>
      {endImage && (
        <Avatar
          alt="Name"
          src={typeof endImage === "string" && endImage}
          variant={"rounded"}
          sx={{
            width: { xs: 30, sm: 60 },
            height: { xs: 30, sm: 60 },
            color: "black",
            bgcolor: "transparent",
            ml: "auto",
          }}
        >
          <Box
            display={"flex"}
            sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "1.25rem" } }}
          >
            {typeof endImage !== "string" && endImage}
          </Box>
        </Avatar>
      )}
    </Button>
  );
}

export default SmallDeviceButton;