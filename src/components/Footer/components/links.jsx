import { Link } from "@mui/material";

function FooterLink({ name, url }) {
  return (
    <Link
      href={url || "#"}
      underline="none"
      sx={{ color: "dark.main" }}
      fontSize={{ xs: "0.7rem", sm: "0.9rem" }}
      lineHeight={2}
      // color={"dark"}
    >
      {name || "Enter link here!"}
    </Link>
  );
}

export default FooterLink;
