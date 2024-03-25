import { Button } from "@mui/material";

function NavbarButton({ name }) {
  return (
    <Button
      variant="contained"
      sx={{
        bgcolor: "transparent",
        "&:hover": { bgcolor: "rgba(255, 255, 255, 0.2)" },
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
