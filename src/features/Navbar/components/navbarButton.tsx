import { Button } from "@mui/material";

interface NavbarButtonProps {
  name: string;
}

function NavbarButton({ name }: NavbarButtonProps) {
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
      {name}
    </Button>
  );
}

export default NavbarButton;
