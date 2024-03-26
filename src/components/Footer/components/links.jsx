import { Link } from "@mui/material";

function FooterLink({ name, url }) {
  return (
    <Link
      href={url || "#"}
      underline="none"
      // color={"gary.main"}
      sx={{ color: "gray" }}
      fontSize={"0.9rem"}
      lineHeight={2}
    >
      {name || "Help Center"}
    </Link>
  );
}

export default FooterLink;
