import { Addresses } from "@/store/user";
import {
  Avatar,
  Box,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction } from "react";
import { useTranslation } from "next-i18next";

const RegionDropdownSelect = ({
  value,
  setValue,
}: {
  value: Addresses;
  setValue: Dispatch<SetStateAction<Addresses>>;
}) => {
  const { t } = useTranslation(["locationNames"]);

  return (
    <FormControl>
      <Select
        name="address"
        size="small"
        color={"primary"}
        value={value}
        onChange={({ target }) => setValue(target.value as Addresses)}
        sx={{
          borderRadius: "0.5rem",
          bgcolor: "background.lighter",
          minWidth: 120,
        }}
      >
        <MenuItem value={"addis-ababa"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/addis-ababa-flag.png"
              sx={{
                width: 25,
                height: 20,
                border: "1px solid lightgray",
              }}
            />
            <Typography fontSize={"0.8rem"}>{t("addis-ababa")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"afar"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/afar-flag.png"
              sx={{ width: 25, height: 20 }}
            />
            <Typography fontSize={"0.8rem"}>{t("afar")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"gumuz"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/gumuz-flag.png"
              sx={{ width: 25, height: 20 }}
            />
            <Typography fontSize={"0.8rem"}>{t("gumuz")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"amhara"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/amhara-flag.png"
              sx={{ width: 25, height: 20 }}
            />
            <Typography fontSize={"0.8rem"}>{t("amhara")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"harari"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/harari-flag.png"
              sx={{ width: 25, height: 20 }}
            />
            <Typography fontSize={"0.8rem"}>{t("harari")}</Typography>
          </Box>
        </MenuItem>
        <MenuItem value={"oromia"}>
          <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
            <Avatar
              variant="square"
              src="/assets/images/oromia-flag.png"
              sx={{ width: 25, height: 20 }}
            />
            <Typography fontSize={"0.8rem"}>{t("oromia")}</Typography>
          </Box>
        </MenuItem>
      </Select>
    </FormControl>
  );
};

export default RegionDropdownSelect;
