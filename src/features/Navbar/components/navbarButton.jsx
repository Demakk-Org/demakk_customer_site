import { Button } from "@mui/material";

function NavbarButton({ name }) {
  return (
    <Button
      variant="contained"
      color="secondaryButton"
      sx={{
        bgcolor: "transparent",
        color: "text.primary",
        "&:hover": {
          bgcolor: "action.hover",
        },
        borderRadius: "1.5rem",
        textTransform: "capitalize",
        fontSize: "1rem",
      }}
    >
      {name || "name here!"}
    </Button>
  );
}

export default NavbarButton;
