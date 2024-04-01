import { Link } from "@mui/material";

function FooterLink({ name, url }) {
  return (
    <Link
      href={url || "#"}
      underline="none"
      fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
      lineHeight={2}
      sx={{
        color: "text.links",
        "&:hover": {
          // bgcolor: "action.hover",
          color: "demakkPrimary.main",
        },
      }}
    >
      {name || "Enter link here!"}
    </Link>
  );
}

export default FooterLink;
