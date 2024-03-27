import { Link } from "@mui/material";

function FooterLink({ name, url }) {
  return (
    <Link
      href={url || "#"}
      underline="none"
      sx={{ color: "gray" }}
      fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
      lineHeight={2}
    >
      {name || "Help Center"}
    </Link>
  );
}

export default FooterLink;
