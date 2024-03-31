import { Button } from "@mui/material";

function NavbarButton({ name }) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "transparent",
        "&:hover": {
          bgcolor: "secondaryBg.light",
          color: "secondaryBg.contrastText",
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
