import { Avatar, Box, Button, Typography } from "@mui/material";

interface SmallDeviceButtonProps {
  title: string;
  startImage?: string | JSX.Element;
  endImage?: string | JSX.Element;
}

function SmallDeviceButton({
  title,
  startImage,
  endImage,
}: SmallDeviceButtonProps) {
  return (
    <Button
      fullWidth
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: { xs: 1, sm: 2, md: 1 },
        color: "text.primary",
        "&:hover": {
          bgcolor: "action.hover",
        },
      }}
    >
      {startImage && (
        <Avatar
          alt="Name"
          src={typeof startImage == "string" ? startImage : "unset"}
          variant={"rounded"}
          sx={{
            width: { xs: 30, sm: 60, md: 30 },
            height: { xs: 30, sm: 60, md: 30 },
            color: "text.primary",
            bgcolor: "transparent",
            fontsize: "1.5rem !important",
          }}
        >
          {typeof startImage != "string" ? (
            <Box
              display={"flex"}
              sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "1.25rem" } }}
            >
              {startImage}
            </Box>
          ) : (
            <></>
          )}
        </Avatar>
      )}
      <Typography
        textTransform={"none"}
        sx={{ fontSize: { xs: "0.9rem", sm: "1.4rem", md: "1rem" } }}
      >
        {title}
      </Typography>
      {endImage && (
        <Avatar
          alt="Name"
          src={typeof endImage === "string" ? endImage : "unset"}
          variant={"rounded"}
          sx={{
            width: { xs: 30, sm: 60 },
            height: { xs: 30, sm: 60 },
            color: "black",
            bgcolor: "transparent",
            ml: "auto",
          }}
        >
          {typeof endImage !== "string" ? (
            <Box
              display={"flex"}
              sx={{ fontSize: { xs: "1.5rem", sm: "2.5rem", md: "1.25rem" } }}
            >
              {endImage}
            </Box>
          ) : (
            <></>
          )}
        </Avatar>
      )}
    </Button>
  );
}

export default SmallDeviceButton;
