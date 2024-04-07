import { Link, List } from "@mui/material";

interface FooterLinkInterface {
  name: string;
  url: string;
}

function FooterLink({ name, url }: FooterLinkInterface) {
  return (
    <List disablePadding>
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
    </List>
  );
}

export default FooterLink;
