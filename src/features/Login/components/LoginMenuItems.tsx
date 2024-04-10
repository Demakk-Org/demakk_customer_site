import { LANG } from "@/store/user";
// import getAddress from "@/utils/getAddress";
import getLanguage from "@/utils/getLanguage";
import { Avatar, Box, MenuItem, Typography } from "@mui/material";

interface LoginModalItemsProps {
  value: string;
  imgSrc: string;
  lang: LANG;
}

function LoginMenuItems({ value, imgSrc, lang }: LoginModalItemsProps) {
  return (
    // <MenuItem key={key} value={getAddress(value)}>
    <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
      <Avatar
        variant="square"
        src={imgSrc}
        sx={{
          width: 25,
          height: 20,
          border: "1px solid",
          borderColor: "text.primary",
        }}
      />
      <Typography fontSize={"0.8rem"}>{getLanguage(value, lang)}</Typography>
    </Box>
    // </MenuItem>
  );
}

export default LoginMenuItems;
