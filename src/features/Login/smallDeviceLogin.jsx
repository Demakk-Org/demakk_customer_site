import useUserStore from "@/store/user";
import { textValidator } from "@/utils/emailValidator";
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

const style = {
  position: "absolute",
  top: { xs: "0%", sm: "50%" },
  left: { xs: "0%", sm: "50%" },
  transform: { sm: "translate(-50%, -50%)" },
  width: 1,
  maxWidth: { xs: 1, sm: "600px" },
  height: { xs: 1, sm: "unset" },
  bgcolor: "background.paper",
  borderRadius: { sm: "0.5rem" },
  p: { xs: "1rem", sm: "1rem 8rem 4rem 8rem" },
};

const font = Montserrat({ subsets: ["cyrillic"] });

function SmallDeviceLogin({ open, handleClose, localAddress }) {
  const { address, setAddress } = useUserStore();

  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [type, setType] = useState("log-in");

  const handleEmailChange = (value) => {
    const buttonState = textValidator(value, "email");
    const password = document.getElementById("login--password").value;

    const passwordState = textValidator(password, "password");

    if (buttonState && passwordState) {
      setContinueStage(true);
    } else {
      setContinueStage(false);
    }
  };

  const handlePasswordChange = (value) => {
    const buttonState = textValidator(value, "password");
    const email = document.getElementById("login--email").value;

    const emailState = textValidator(email, "email");

    if (buttonState && emailState) {
      setContinueStage(true);
    } else {
      setContinueStage(false);
    }
  };

  const handleClearEmailInput = () => {
    const component = document.getElementById("login--email");

    component.value = "";
    handleEmailChange("");
  };

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
          color={"primary"}
          display={{ sm: "none" }}
        >
          Demakk
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
              color={"dark.main"}
              textTransform={"capitalize"}
              fontWeight={type == "register" && "bold"}
            >
              Register
            </Typography>
            <Grow in={type == "register"} timeout={500}>
              <Box width={"60%"} borderBottom={"4px solid orange"} />
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
              color={"dark.main"}
              textTransform={"capitalize"}
              fontWeight={type == "log-in" && "bolder"}
            >
              Log in
            </Typography>
            <Grow in={type == "log-in"} timeout={500}>
              <Box width={"60%"} borderBottom={"4px solid orange"} />
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
                      sx={{ p: "0.35rem 1rem", fontSize: "0.8rem" }}
                      variant={"standard"}
                      id="demo-simple-select-label"
                      color="dark"
                    >
                      Your Location:
                    </InputLabel>
                    <Select
                      name="address"
                      size="small"
                      color={"secondary"}
                      value={address}
                      onChange={({ target }) => setAddress(target.value)}
                      displayEmpty
                      // inputProps={{ "aria-label": "Without label" }}
                      inputProps={{
                        name: "Your Location:",
                        id: "uncontrolled-native",
                      }}
                      sx={{
                        borderRadius: "0.5rem",
                        pt: "0.75rem",
                      }}
                    >
                      <MenuItem value={"addis-ababa"}>
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
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
                            Addis Ababa
                          </Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value={"afar"}>
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
                          <Avatar
                            variant="square"
                            src="/assets/images/afar-flag.png"
                            sx={{ width: 25, height: 20 }}
                          />
                          <Typography fontSize={"0.8rem"}>Afar</Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value={"gumuz"}>
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
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
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
                          <Avatar
                            variant="square"
                            src="/assets/images/amhara-flag.png"
                            sx={{ width: 25, height: 20 }}
                          />
                          <Typography fontSize={"0.8rem"}>Amhara</Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value={"harari"}>
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
                          <Avatar
                            variant="square"
                            src="/assets/images/harari-flag.png"
                            sx={{ width: 25, height: 20 }}
                          />
                          <Typography fontSize={"0.8rem"}>Harari</Typography>
                        </Box>
                      </MenuItem>
                      <MenuItem value={"oromia"}>
                        <Box
                          display={"flex"}
                          gap={1}
                          width={1}
                          alignItems={"center"}
                        >
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
                <OutlinedInput
                  id="login--email"
                  onChange={({ target }) => handleEmailChange(target.value)}
                  size="small"
                  fullWidth
                  sx={{ m: "0.5rem 0" }}
                  placeholder="Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() => handleClearEmailInput()}
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
                      handlePasswordChange(target.value)
                    }
                    name="new-password"
                    autoComplete={"new-password"}
                    size="small"
                    fullWidth
                    type={showPass ? "text" : "password"}
                    placeholder="Password"
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
                    color={"gray"}
                  >
                    <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                      <Circle sx={{ fontSize: "6px" }} />
                      <Typography fontSize={"0.7rem"}>
                        6-20 Characters
                      </Typography>
                    </Box>
                    <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                      <Circle sx={{ fontSize: "6px" }} />
                      <Typography fontSize={"0.7rem"}>
                        Contains numbers, letters or symbols
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
                    Create account
                  </Button>
                </span>
                <Box
                  component={"a"}
                  href="#"
                  className={font.className}
                  fontSize={"0.75rem"}
                  sx={{ color: "gray" }}
                >
                  Trouble Signing in?
                </Box>
              </Box>
            </Slide>
          )}
          {type == "log-in" && (
            <Slide in={true} direction={"left"}>
              <Box display={"flex"} flexDirection={"column"} gap={"1rem"}>
                <OutlinedInput
                  id="login--email"
                  onChange={({ target }) => handleEmailChange(target.value)}
                  size={"small"}
                  fullWidth
                  placeholder="Email"
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        edge="end"
                        onClick={() => handleClearEmailInput()}
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
                  onChange={({ target }) => handlePasswordChange(target.value)}
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
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
                  sx={{ color: "blue" }}
                >
                  Forgot password?
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
                    Sign in
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
            >
              Or continue with
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
              border={"1px solid gray"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="info">
                <Facebook sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              border={"1px solid gray"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="info">
                <Google sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              border={"1px solid gray"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton color="dark">
                <Twitter sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
            <Box
              display={"flex"}
              border={"1px solid gray"}
              flexGrow={0}
              width={"fit-content"}
              borderRadius="50%"
            >
              <IconButton>
                <Apple sx={{ width: { sm: 35 }, height: { sm: 35 } }} />
              </IconButton>
            </Box>
          </Box>
          {type == "register" && (
            <Typography fontSize={"0.7rem"} mt={{ xs: "0.5rem", sm: "1.5rem" }}>
              By continuing, you confirm that you are an adult. By creating an
              account, you agree to the AliExpress.com Free Membership Agreement
              and Privacy Policy.
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
