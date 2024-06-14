import useUserStore, { LANG } from "@/store/user";
import getAddress from "@/utils/getAddress";
import getLanguage from "@/utils/getLanguage";
import { Close } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grow,
  IconButton,
  MenuItem,
  Modal,
  Select,
  Slide,
  Stack,
  Typography,
} from "@mui/material";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
import handleGoogleSignUp from "./libs/handleGoogleSignUp";
import Loading from "@/component/Loading";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import { demakkFont } from "@/pages/_app";

const style = {
  position: "absolute",
  top: { xs: "0%", sm: "50%" },
  left: { xs: "0%", sm: "50%" },
  transform: { sm: "translate(-50%, -50%)" },
  width: 1,
  maxWidth: { xs: 1, sm: "600px" },
  maxHeight: { sm: "90vh" },
  height: { xs: 1, sm: "unset" },
  bgcolor: "background.lightOpaque",
  borderRadius: { sm: "0.5rem" },
  p: { xs: "1rem", sm: "1rem 8rem" },
  overflowY: "auto",
};

interface SmallDeviceLoginProps {
  open: boolean;
  handleClose: () => void;
  localAddress?: string;
  setSnackBar: Dispatch<
    SetStateAction<{
      type: "success" | "error";
      open: boolean;
      message: string;
    }>
  >;
}

function SmallDeviceLogin({
  open,
  handleClose,
  localAddress,
  setSnackBar,
}: SmallDeviceLoginProps) {
  const { lang, address, setAddress, setLang } = useUserStore();

  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [type, setType] = useState<"login" | "register">("login");
  const [loading, setLoading] = useState(false);
  console.log(continueStage);

  useEffect(() => {
    setContinueStage(false);
  }, [type]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <>
        <Box sx={style}>
          <Typography
            className={demakkFont.className}
            textAlign={"center"}
            fontSize={"1.5rem"}
            fontWeight={"600"}
            pt={{ sm: "1rem" }}
            pb={{ xs: "1rem", sm: "2rem" }}
            color={"demakkPrimary.dark"}
            display={{ sm: "none" }}
          >
            {getLanguage("demakk", lang)}
          </Typography>
          <Box
            display={"flex"}
            justifyContent={"center"}
            alignItems={"flex-start"}
            gap={"1rem"}
          >
            <Button
              disableRipple
              sx={{
                width: "max-content",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "0.25rem",
              }}
              onClick={() => {
                setType("register");
                setShowPass(false);
              }}
            >
              <Typography
                color={"demakkPrimary.dark"}
                textTransform={"capitalize"}
                fontWeight={type == "register" ? "bold" : "initial"}
              >
                {getLanguage("register", lang)}
              </Typography>
              <Grow in={type == "register"} timeout={500}>
                <Box
                  width={"60%"}
                  borderBottom={"4px solid"}
                  borderColor={"demakkPrimary.main"}
                />
              </Grow>
            </Button>
            <Button
              disableRipple
              sx={{
                width: "max-content",
                display: "flex",
                gap: "0.25rem",
                flexDirection: "column",
                justifyContent: "center",
              }}
              onClick={() => {
                setType("login");
                setShowPass(false);
              }}
            >
              <Typography
                color={"demakkPrimary.dark"}
                textTransform={"capitalize"}
                fontWeight={type == "login" ? "bolder" : "initial"}
              >
                {getLanguage("logIn", lang)}
              </Typography>
              <Grow in={type == "login"} timeout={500}>
                <Box
                  width={"60%"}
                  borderBottom={"4px solid"}
                  borderColor={"demakkPrimary.main"}
                />
              </Grow>
            </Button>
          </Box>

          <Box
            overflow={"auto"}
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
              mt: "1rem",
            }}
          >
            {type == "register" && (
              <Slide in={true} direction={"right"}>
                <Box>
                  <RegisterComponent
                    setContinueStage={setContinueStage}
                    handleClose={handleClose}
                    setSnackBar={setSnackBar}
                    setLoading={setLoading}
                    continueStage={continueStage}
                  />
                </Box>
              </Slide>
            )}

            {type == "login" && (
              <Slide in={true} direction={"left"}>
                <Box>
                  <LoginComponent
                    setContinueStage={setContinueStage}
                    handleClose={handleClose}
                    setSnackBar={setSnackBar}
                    setLoading={setLoading}
                    continueStage={continueStage}
                  />
                </Box>
              </Slide>
            )}

            <Divider>
              <Typography
                p={"1rem 1rem"}
                className={demakkFont.className}
                fontSize={"0.85rem"}
                color={"text.primary"}
              >
                {getLanguage("orContinueWith", lang)}
              </Typography>
            </Divider>
            <Box
              display={"flex"}
              width={1}
              alignItems={"center"}
              gap="1rem"
              justifyContent={"center"}
            >
              <IconButton color="primary">
                <Avatar src="/social/facebook.png" />
              </IconButton>
              <IconButton
                color="primary"
                onClick={() =>
                  handleGoogleSignUp({
                    setSnackBar,
                    handleClose,
                    lang,
                    setLoading,
                  })
                }
              >
                <Avatar src="/social/google.png" />
              </IconButton>
              <IconButton color="primary">
                <Avatar src="/social/twitter.png" />
              </IconButton>
              <IconButton color="primary">
                <Avatar src="/social/apple.png" />
              </IconButton>
            </Box>
            {type == "register" && (
              <Typography
                color={"text.primary"}
                fontSize={"0.7rem"}
                textAlign={"center"}
                mt={{ xs: "0.5rem", sm: "1.5rem" }}
              >
                {getLanguage("registerPolicy", lang)}
              </Typography>
            )}
          </Box>

          {/* select language component */}
          <Stack alignItems={"center"} mt={4}>
            <Box
              className="language--container"
              display={"flex"}
              flexDirection={"column"}
              alignItems={"center"}
              width={0.4}
              gap={1}
            >
              <Typography
                color={"text.primary"}
                fontSize={{ xs: "0.85rem", sm: "1rem" }}
                fontWeight={600}
              >
                {getLanguage("language", lang)}
              </Typography>
              <FormControl sx={{}}>
                <Select
                  name="language"
                  size="small"
                  color={"primary"}
                  value={lang}
                  onChange={({ target }) => {
                    console.log("target", target.value);
                    setLang(target.value as LANG);
                  }}
                  sx={{
                    borderRadius: "0.5rem",
                    minWidth: 120,
                    bgcolor: "background.lighter",
                  }}
                >
                  <MenuItem value={LANG.en} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("english", lang)}
                    </Typography>
                  </MenuItem>
                  <MenuItem value={LANG.or} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("afanOromo", lang)}
                    </Typography>
                  </MenuItem>
                  <MenuItem value={LANG.am} sx={{ minHeight: "unset" }}>
                    <Typography fontSize={"0.8rem"}>
                      {getLanguage("amharic", lang)}
                    </Typography>
                  </MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Stack>

          <IconButton
            onClick={() => handleClose()}
            size="small"
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <Close />
          </IconButton>
        </Box>

        {loading && <Loading />}
      </>
    </Modal>
  );
}

export default SmallDeviceLogin;
