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
        bgcolor={"secondaryBg.light"}
        border={"1px solid lightgray"}
        p={"1.5rem"}
        borderRadius={"1rem"}
        overflow={"auto"}
        color={"secondaryBg.contrastText"}
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
              Ship to
            </Typography>
            <FormControl>
              <Select
                name="address"
                size="small"
                color={"bright"}
                value={localAddress}
                onChange={({ target }) => setLocalAddress(target.value)}
                sx={{
                  borderRadius: "0.5rem",
                  bgcolor: "bright.main",
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
                    <Typography fontSize={"0.8rem"}>Addis Ababa</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"afar"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/afar-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>Afar</Typography>
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
                      Benshangul-Gumuz
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
                    <Typography fontSize={"0.8rem"}>Amhara</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"harari"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/harari-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>Harari</Typography>
                  </Box>
                </MenuItem>
                <MenuItem value={"oromia"}>
                  <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                    <Avatar
                      variant="square"
                      src="/assets/images/oromia-flag.png"
                      sx={{ width: 25, height: 20 }}
                    />
                    <Typography fontSize={"0.8rem"}>Oromia</Typography>
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
              Language
            </Typography>
            <FormControl sx={{}}>
              <Select
                name="lang"
                size="small"
                color={"bright"}
                value={localLang}
                onChange={({ target }) => setLocalLang(target.value)}
                sx={{
                  borderRadius: "0.5rem",
                  minWidth: 120,
                  bgcolor: "bright.main",
                }}
              >
                <MenuItem value={"en"}>
                  <Typography fontSize={"0.8rem"}>English</Typography>
                </MenuItem>
                <MenuItem value={"or"}>
                  <Typography fontSize={"0.8rem"}>Afan Oromo</Typography>
                </MenuItem>
                <MenuItem value={"am"}>
                  <Typography fontSize={"0.8rem"}>አማርኛ</Typography>
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button
            type="submit"
            color="bright"
            size="large"
            fullWidth
            sx={{
              textTransform: "capitalize",
              borderRadius: "1.5rem",
              bgcolor: "secondaryBg.dark",
              "&:hover": {
                bgcolor: "darkslategray",
              },
            }}
          >
            Save
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
          bgcolor: "Background",
        }}
      />
    </>
  );
}

export default LanguageDropdown;
