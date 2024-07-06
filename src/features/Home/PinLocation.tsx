import { Box, Typography } from "@mui/material";
import { LuMapPin } from "react-icons/lu";

import useUserStore, { Addresses } from "@/store/user";
import getRegion from "@/utils/getRegion";
import { t } from "i18next";

function PinLocation() {
  const { address, lang } = useUserStore();
  return (
    <Box
      display={{ xs: "flex", md: "none" }}
      gap={"0.75rem"}
      p={{ xs: "0.75rem 1rem", sm: "1rem 1.5rem" }}
      alignItems={"center"}
      bgcolor={"background.lighter"}
    >
      <Box
        fontSize={{ xs: "1rem", sm: "2rem" }}
        display={"flex"}
        alignItems={"center"}
        color={"text.primary"}
      >
        <LuMapPin fontSize={"inherit"} />
      </Box>
      <Typography
        color={"text.primary"}
        fontWeight={"bold"}
        fontSize={{ xs: "0.9rem", sm: "1.5rem" }}
      >
        {t("deliverTo")} {t(getRegion(Addresses[address]).code)}
      </Typography>
    </Box>
  );
}

export default PinLocation;
