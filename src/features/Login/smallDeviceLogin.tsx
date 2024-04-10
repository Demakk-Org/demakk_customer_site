import useUserStore from "@/store/user";
import getAddress from "@/utils/getAddress";
import getLanguage from "@/utils/getLanguage";
import {
  Apple,
  Cancel,
  Circle,
  Close,
  ExpandMore,
  Facebook,
  Google,
  Twitter,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  Divider,
  FormControl,
  Grow,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Modal,
  OutlinedInput,
  Select,
  Slide,
  Typography,
} from "@mui/material";
import { Montserrat } from "next/font/google";
import { useState } from "react";
import handlePasswordChange from "./libs/handlePasswordChange";
import handleEmailChange from "./libs/handleEmailChange";
import handleClearEmailInput from "./libs/handleClearEmailInput";
import LoginMenuItems from "./components/LoginMenuItems";
import data from "@/data/library";

const style = {
  position: "absolute",
  top: { xs: "0%", sm: "50%" },
  left: { xs: "0%", sm: "50%" },
  transform: { sm: "translate(-50%, -50%)" },
  width: 1,
  maxWidth: { xs: 1, sm: "600px" },
  height: { xs: 1, sm: "unset" },
  bgcolor: "background.lightOpaque",
  borderRadius: { sm: "0.5rem" },
  p: { xs: "1rem", sm: "1rem 8rem 4rem 8rem" },
};

const font = Montserrat({ subsets: ["cyrillic"] });

interface SmallDeviceLoginProps {
  open: boolean;
  handleClose: () => void;
  localAddress?: string;
}

function SmallDeviceLogin({
  open,
  handleClose,
  localAddress,
}: SmallDeviceLoginProps) {
  const { lang, address, setAddress } = useUserStore();

  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [type, setType] = useState("log-in");

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography
          className={font.className}
          textAlign={"center"}
          fontSize={"1.5rem"}
          fontWeight={"600"}
          pt={{ sm: "1rem" }}
          pb={{ xs: "1rem", sm: "2rem" }}
          color={"demakkPrimary.main"}
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
              color={"primary"}
              textTransform={"capitalize"}
              fontWeight={type == "register" ? "bold" : "initial"}
            >
              {getLanguage("register", lang)}
            </Typography>
            <Grow in={type == "register"} timeout={500}>
              <Box
                width={"60%"}
                borderBottom={"4px solid"}
                borderColor={"demakkPrimary.light"}
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
              setType("log-in");
              setShowPass(false);
            }}
          >
            <Typography
              color={"primary"}
              textTransform={"capitalize"}
              fontWeight={type == "log-in" ? "bolder" : "initial"}
            >
              {getLanguage("logIn", lang)}
            </Typography>
            <Grow in={type == "log-in"} timeout={500}>
              <Box
                width={"60%"}
                borderBottom={"4px solid"}
                borderColor={"demakkPrimary.light"}
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
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <Box
                  position={"relative"}
                  display={"flex"}
                  alignItems={"baseline"}
                  gap={"0.25rem"}
                  width={1}
                >
                  <FormControl
                    variant="outlined"
                    fullWidth
                    sx={{ minWidth: 120 }}
                  >
                    <InputLabel
                      sx={{
                        p: "0.35rem 1rem",
                        fontSize: "0.8rem",
                        color: "text.primary",
                        zIndex: 1000,
                      }}
                      variant={"standard"}
                      id="demo-simple-select-label"
                    >
                      {getLanguage("yourLocation", lang)}:
                    </InputLabel>
                    <Select
                      name="address"
                      size="small"
                      color={"primary"}
                      value={address}
                      onChange={({ target }) =>
                        setAddress(getAddress(target.value))
                      }
                      displayEmpty
                      inputProps={{
                        name: "Your Location:",
                        id: "uncontrolled-native",
                      }}
                      sx={{
                        borderRadius: "0.5rem",
                        pt: "0.75rem",
                        bgcolor: "background.paper",
                      }}
                    >
                      {data.region.map((address, index) => {
                        console.log(address.code, "code");
                        return (
                          <MenuItem
                            key={index}
                            value={getAddress(address.code)}
                          >
                            <LoginMenuItems
                              key={index}
                              value={address.code}
                              imgSrc={address.flag}
                              lang={lang}
                            />
                          </MenuItem>
                        );
                      })}
                    </Select>
                  </FormControl>
                </Box>
                <OutlinedInput
                  id="login--email"
                  onChange={({ target }) =>
                    handleEmailChange({ value: target.value, setContinueStage })
                  }
                  size="small"
                  fullWidth
                  sx={{ m: "0.5rem 0", bgcolor: "background.paper" }}
                  placeholder={getLanguage("email", lang)}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() =>
                          handleClearEmailInput({ setContinueStage })
                        }
                      >
                        <Cancel fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Box display={"flex"} width={1} flexDirection={"column"}>
                  <OutlinedInput
                    id="login--password"
                    onChange={({ target }) =>
                      handlePasswordChange({
                        value: target.value,
                        setContinueStage,
                      })
                    }
                    name="new-password"
                    autoComplete={"new-password"}
                    size="small"
                    fullWidth
                    type={showPass ? "text" : "password"}
                    placeholder={getLanguage("password", lang)}
                    sx={{ bgcolor: "background.paper" }}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          edge="end"
                          onClick={() => setShowPass((p) => !p)}
                        >
                          {showPass ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                  />
                  <Box
                    display={"flex"}
                    flexDirection={"column"}
                    p={"0.5rem 1rem"}
                    color={"text.secondary"}
                  >
                    <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                      <Circle sx={{ fontSize: "6px" }} />
                      <Typography fontSize={"0.7rem"}>
                        6-20 {getLanguage("characters", lang)}
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                      <Circle sx={{ fontSize: "6px" }} />
                      <Typography fontSize={"0.7rem"}>
                        {getLanguage("containsNumberLetterOrSymbol", lang)}
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <span
                  style={{ cursor: !continueStage ? "not-allowed" : "pointer" }}
                >
                  <Button
                    fullWidth
                    size="large"
                    variant={"contained"}
                    disabled={!continueStage}
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "2rem",
                      m: "0.5rem 0",
                      bgcolor: "primary.light",
                    }}
                    // onClick={() => handleContinueButton()}
                  >
                    {getLanguage("createAccount", lang)}
                  </Button>
                </span>
                <Box
                  component={"a"}
                  href="#"
                  className={font.className}
                  fontSize={"0.75rem"}
                  sx={{ color: "text.secondary" }}
                >
                  {getLanguage("troubleSigningIn", lang)}
                </Box>
              </Box>
            </Slide>
          )}
          {type == "log-in" && (
            <Slide in={true} direction={"left"}>
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <OutlinedInput
                  id="login--email"
                  onChange={({ target }) =>
                    handleEmailChange({
                      value: target.value,
                      type: "log-in",
                      setContinueStage,
                    })
                  }
                  size={"small"}
                  fullWidth
                  placeholder={getLanguage("email", lang)}
                  sx={{ bgcolor: "background.paper" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() =>
                          handleClearEmailInput({ setContinueStage })
                        }
                      >
                        <Cancel fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <OutlinedInput
                  id="login--password"
                  size="small"
                  fullWidth
                  onChange={({ target }) =>
                    handlePasswordChange({
                      value: target.value,
                      type: "log-in",
                      setContinueStage,
                    })
                  }
                  type={showPass ? "text" : "password"}
                  placeholder={getLanguage("password", lang)}
                  sx={{ bgcolor: "background.paper" }}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() => setShowPass((p) => !p)}
                      >
                        {showPass ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
                <Box
                  component={"a"}
                  href="#"
                  className={font.className}
                  fontSize={"0.75rem"}
                  sx={{ color: "primary.main" }}
                >
                  {getLanguage("forgotPassword", lang)}
                </Box>
                <span
                  style={{ cursor: !continueStage ? "not-allowed" : "pointer" }}
                >
                  <Button
                    fullWidth
                    size="large"
                    variant={"contained"}
                    disabled={!continueStage}
                    sx={{
                      textTransform: "capitalize",
                      borderRadius: "2rem",
                      m: "0.5rem 0",
                      bgcolor: "primary.light",
                    }}
                    // onClick={() => handleContinueButton()}
                  >
                    {getLanguage("signIn", lang)}
                  </Button>
                </span>
              </Box>
            </Slide>
          )}

          <Divider>
            <Typography
              p={"1rem 1rem"}
              className={font.className}
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
            <Box
              display={"flex"}
              bgcolor={"action.hover"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="primary">
                <Facebook sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              flexGrow={0}
              bgcolor={"action.hover"}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="primary">
                <Google sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              bgcolor={"action.hover"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="primary">
                <Twitter sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              bgcolor={"action.hover"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="primary">
                <Apple sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
          </Box>
          {type == "register" && (
            <Typography fontSize={"0.7rem"} mt={{ xs: "0.5rem", sm: "1.5rem" }}>
              {getLanguage("registerPolicy", lang)}
            </Typography>
          )}
        </Box>
        <IconButton
          onClick={() => handleClose()}
          size="small"
          sx={{ position: "absolute", top: "1rem", right: "1rem" }}
        >
          <Close />
        </IconButton>
      </Box>
    </Modal>
  );
}

export default SmallDeviceLogin;
