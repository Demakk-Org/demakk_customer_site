import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import useUserStore, { LANG } from "@/store/user";
import { useState } from "react";
import useTokenStore from "@/store/token";
import handleUpdateUser from "@/api/user/handleUpdateUser";
import usePageStore from "@/store/page";
import { useTranslation } from "next-i18next";
import RegionDropdownSelect from "@/component/RegionDropdownSelect";
import { useRouter } from "next/router";

interface LanguageDropdownProps {
  setOpenLanguage: (value: boolean) => void;
}

function LanguageDropdown({ setOpenLanguage }: LanguageDropdownProps) {
  const router = useRouter();
  const { t } = useTranslation("locationNames");
  const { token } = useTokenStore();
  const { lang, setLang, address, setAddress } = useUserStore();
  const { setLoading } = usePageStore();

  const [localLang, setLocalLang] = useState(lang);
  const [localAddress, setLocalAddress] = useState(address);

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (lang == localLang && address == localAddress) return;

    if (address != localAddress) setAddress(localAddress);
    if (lang != localLang) {
      setLang(localLang);
      const { pathname, asPath, query } = router;
      token
        ? handleUpdateUser({ language: localLang, token, setLoading }).then(
            () => {
              router.push({ pathname, query }, asPath, { locale: localLang });
            }
          )
        : router.push({ pathname, query }, asPath, { locale: localLang });
    }

    setOpenLanguage(false);
  };

  return (
    <>
      <Box
        position={"absolute"}
        top={"110%"}
        right={0}
        minWidth={300}
        bgcolor={"background.paper"}
        border={"1px solid lightgray"}
        p={"1.5rem"}
        borderRadius={"1rem"}
        overflow={"auto"}
        color={"text"}
        sx={{
          display: { xs: "none", md: "flex" },
          zIndex: 1000,
        }}
      >
        <form
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.25rem",
          }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <Box
            className="address--container"
            display={"flex"}
            flexDirection={"column"}
            width={1}
          >
            <Typography
              color={"text.primary"}
              fontSize={"1.3rem"}
              fontWeight={600}
            >
              {t("shipTo", { ns: "common" })}
            </Typography>

            <RegionDropdownSelect
              value={localAddress}
              setValue={setLocalAddress}
            />
          </Box>
          <Box
            className="language--container"
            display={"flex"}
            flexDirection={"column"}
            width={1}
          >
            <Typography
              color={"text.primary"}
              fontSize={"1.3rem"}
              fontWeight={600}
            >
              {t("language", { ns: "common" })}
            </Typography>
            <FormControl sx={{}}>
              <Select
                name="language"
                size="small"
                color={"primary"}
                value={localLang}
                onChange={({ target }) => setLocalLang(target.value as LANG)}
                sx={{
                  borderRadius: "0.5rem",
                  minWidth: 120,
                  bgcolor: "background.lighter",
                }}
              >
                <MenuItem value={LANG.en}>
                  <Typography fontSize={"0.8rem"}>
                    {t("english", { ns: "common" })}
                  </Typography>
                </MenuItem>
                <MenuItem value={LANG.om}>
                  <Typography fontSize={"0.8rem"}>
                    {t("afanOromo", { ns: "common" })}
                  </Typography>
                </MenuItem>
                <MenuItem value={LANG.am}>
                  <Typography fontSize={"0.8rem"}>
                    {t("amharic", { ns: "common" })}
                  </Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            size="large"
            fullWidth
            sx={{
              textTransform: "capitalize",
              borderRadius: "1.5rem",
              bgcolor: "background.lighter",
              color: "text.primary",
            }}
          >
            {t("save", { ns: "actions" })}
          </Button>
        </form>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "12px",
          height: "12px",
          transform: "rotate(45deg)",
          left: "50%",
          bottom: -12,
          bgcolor: "background.paper",
        }}
      />
    </>
  );
}

export default LanguageDropdown;
