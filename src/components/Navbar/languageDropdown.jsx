import useUserStore from "@/store/user";
import { ArrowDropDown, More } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  Typography,
} from "@mui/material";

function LanguageDropdown({ setOpenLanguage }) {
  const { lang, setLang, address, setAddress } = useUserStore();
  return (
    <>
      <Box
        position={"absolute"}
        top={"100%"}
        right={0}
        minWidth={300}
        bgcolor={"Background"}
        border={"1px solid lightgray"}
        p={"1.5rem"}
        borderRadius={"1rem"}
        flexDirection={"column"}
        gap={"1.25rem"}
        overflow={"auto"}
        color={"dark.main"}
        sx={{
          display: { xs: "none", md: "flex" },
          zIndex: 1000,
        }}
      >
        <Box display={"flex"} flexDirection={"column"} width={1}>
          <Typography fontSize={"1.3rem"} fontWeight={600}>
            Ship to
          </Typography>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              size="small"
              value={lang}
              onChange={({ target }) => setLang(target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" sx={{ display: "none" }}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>
                <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                  <Avatar
                    variant="square"
                    src="/assets/images/afar-flag.png"
                    sx={{ width: 25, height: 20 }}
                  />
                  <Typography fontSize={"0.8rem"}>Afar</Typography>
                </Box>
              </MenuItem>
              <MenuItem value={20}>
                <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                  <Avatar
                    variant="square"
                    src="/assets/images/gumuz-flag.png"
                    sx={{ width: 25, height: 20 }}
                  />
                  <Typography fontSize={"0.8rem"}>Benshangul-Gumuz</Typography>
                </Box>
              </MenuItem>
              <MenuItem value={20}>
                <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                  <Avatar
                    variant="square"
                    src="/assets/images/amhara-flag.png"
                    sx={{ width: 25, height: 20 }}
                  />
                  <Typography fontSize={"0.8rem"}>Amhara</Typography>
                </Box>
              </MenuItem>
              <MenuItem value={30}>
                <Box display={"flex"} gap={1} width={1} alignItems={"center"}>
                  <Avatar
                    variant="square"
                    src="/assets/images/harari-flag.png"
                    sx={{ width: 25, height: 20 }}
                  />
                  <Typography fontSize={"0.8rem"}>Harari</Typography>
                </Box>
              </MenuItem>
              <MenuItem value={30}>
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
        <Box display={"flex"} flexDirection={"column"} width={1}>
          <Typography fontSize={"1.3rem"} fontWeight={600}>
            Language
          </Typography>
          <FormControl sx={{ minWidth: 120 }}>
            <Select
              size="small"
              value={address}
              onChange={({ target }) => setAddress(target.value)}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="" sx={{ display: "none" }}>
                <em>None</em>
              </MenuItem>
              <MenuItem value={60}>
                <Typography fontSize={"0.8rem"}>English</Typography>
              </MenuItem>
              <MenuItem value={70}>
                <Typography fontSize={"0.8rem"}>Afan Oromo</Typography>
              </MenuItem>
              <MenuItem value={80}>
                <Typography fontSize={"0.8rem"}>አማርኛ</Typography>
              </MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Button
          onClick={() => setOpenLanguage((p) => !p)}
          color="white"
          fullWidth
          sx={{
            textTransform: "capitalize",
            borderRadius: "1.5rem",
            bgcolor: "black",
            "&:hover": {
              bgcolor: "darkslategray",
            },
          }}
        >
          Save
        </Button>
      </Box>
      <Box
        sx={{
          position: "absolute",
          width: "12px",
          height: "12px",
          transform: "rotate(45deg)",
          left: "50%",
          bottom: -6,
          bgcolor: "Background",
        }}
      />
    </>
  );
}

export default LanguageDropdown;
