import { Box, Typography } from "@mui/material";

interface BenefitListCardInterface {
  icon: JSX.Element;
  title: string;
  desc: string;
}

function BenefitListCard({ icon, title, desc }: BenefitListCardInterface) {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      width={{ md: 150 }}
    >
      <Box
        display={"flex"}
        fontSize={"2rem"}
        pb={"0.5rem"}
        color={"text.primary"}
      >
        {icon}
      </Box>
      <Typography
        color={"text.primary"}
        fontSize={"0.7rem"}
        fontWeight={"bold"}
      >
        {title}
      </Typography>
      <Typography
        fontSize={"0.6rem"}
        color={"text.secondary"}
        textAlign={"center"}
      >
        {desc}
      </Typography>
    </Box>
  );
}

export default BenefitListCard;
