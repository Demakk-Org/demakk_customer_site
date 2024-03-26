import { Typography } from "@mui/material";
import { Montserrat } from "next/font/google";

const font = Montserrat({ subsets: ["cyrillic"] });
function FooterLinksTitle({ name }) {
  return (
    <Typography
      fontWeight={"bolder"}
      className={font.className}
      mb={"0.5rem"}
      fontSize={"1rem"}
    >
      {name || "Customer Services"}
    </Typography>
  );
}

export default FooterLinksTitle;
