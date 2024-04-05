import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

import useUserStore from "@/store/user";
import { useState } from "react";
import language from "@/data/dictionary";
import getLanguage from "@/utils/getLanguage";

function LanguageDropdown({ setOpenLanguage }) {
  const { lang, setLang, address, setAddress } = useUserStore();

  const [localLang, setLocalLang] = useState(lang);
  const [localAddress, setLocalAddress] = useState(address);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      lang,
      e.target.lang.value,
      "address",
      address,
      e.target.address.value
    );
    const language = e.target.lang.value;
    const location = e.target.address.value;

    if (lang != language) setLang(language);
    if (address != location) setAddress(location);
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
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              {getLanguage("shipTo", lang)}
            </Typography>
            <FormControl>
              <Select
                name="address"
                size="small"
                color={"text"}
                value={localAddress}
                onChange={({ target }) => setLocalAddress(target.value)}
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
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("addisAbaba", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"afar"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/afar-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("afar", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"gumuz"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/gumuz-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("benshangulGumuz", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"amhara"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/amhara-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("amhara", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"harari"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/harari-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("harari", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"oromia"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/oromia-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("oromia", lang)}
                    </Typography>
                  </Box>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box
            className="language--container"
            display={"flex"}
            flexDirection={"column"}
            width={1}
          >
            <Typography fontSize={"1.3rem"} fontWeight={600}>
              {getLanguage("language", lang)}
            </Typography>
            <FormControl sx={{}}>
              <Select
                name="lang"
                size="small"
                color={"text"}
                value={localLang}
                onChange={({ target }) => setLocalLang(target.value)}
                sx={{
                  borderRadius: "0.5rem",
                  minWidth: 120,
                  bgcolor: "background.lighter",
                }}
              >
                <MenuItem value={"en"}>
                  <Typography fontSize={"0.8rem"}>
                    {getLanguage("english", lang)}
                  </Typography>
                </MenuItem>
                <MenuItem value={"or"}>
                  <Typography fontSize={"0.8rem"}>
                    {getLanguage("afanOromo", lang)}
                  </Typography>
                </MenuItem>
                <MenuItem value={"am"}>
                  <Typography fontSize={"0.8rem"}>
                    {getLanguage("amharic", lang)}
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
              bgcolor: "dark",
              color: "bright",
            }}
          >
            {getLanguage("save", lang)}
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
