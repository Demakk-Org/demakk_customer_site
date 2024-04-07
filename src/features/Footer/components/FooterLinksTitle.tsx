import { Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

interface FooterLinksTitleInterface {
  name: string;
}

const font = Montserrat({ subsets: ["cyrillic"] });
function FooterLinksTitle({ name }: FooterLinksTitleInterface) {
  return (
    <Typography
      fontWeight={"bolder"}
      className={font.className}
      mb={"0.5rem"}
      fontSize={{ xs: "0.8rem", sm: "1rem" }}
      color={"text.primary"}
    >
      {name || "Enter name here!"}
    </Typography>
  );
}

export default FooterLinksTitle;
