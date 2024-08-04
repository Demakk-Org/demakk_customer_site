import { Box, Typography } from "@mui/material";
import { LuMapPin } from "react-icons/lu";

import useUserStore from "@/store/user";
import { useTranslation } from "next-i18next";

function PinLocation() {
  const { t } = useTranslation(["locationNames", "common"]);
  const { address } = useUserStore();

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
        {t("deliverTo", { ns: "common" })} {t(address, { ns: "locationNames" })}
      </Typography>
    </Box>
  );
}

export default PinLocation;
