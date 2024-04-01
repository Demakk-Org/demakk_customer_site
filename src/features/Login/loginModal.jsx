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
  Box,
  Button,
  Divider,
  Grow,
  IconButton,
  InputAdornment,
  Modal,
  OutlinedInput,
  Typography,
} from "@mui/material";

import { useState } from "react";
import useUserStore from "@/store/user";
import { textValidator } from "@/utils/emailValidator";

const style = {
  minWidth: 375,
  maxWidth: 500,
  bgcolor: "background.paper",
  borderRadius: "1rem",
  p: "0 4rem 4rem 4rem",
  zIndex: 10000,
};

function LoginModal({ open, handleClose }) {
  const { setUser } = useUserStore();

  const [continueButton, setContinueButton] = useState(false);
  const [showPass, setShowPass] = useState(false);
  const [continueStage, setContinueStage] = useState(false);
  const [userExists, setUserExists] = useState(false);

  const handleEmailChange = (value) => {
    const buttonState = textValidator(value, "email");

    if (buttonState !== continueButton) setContinueButton((prev) => !prev);
    if (!buttonState && continueStage) {
      setContinueStage(false);
      setUserExists(false);
    }
  };

  const handleClearEmailInput = () => {
    const component = document.getElementById("login--email");

    component.value = "";
    handleEmailChange("");
  };

  const handleContinueButton = () => {
    const email = document.getElementById("login--email").value;

    if (!continueStage) {
      fetch("/api/user", { method: "post", body: JSON.stringify({ email }) })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.exists) {
            setUserExists(true);
          }

          setContinueStage(true);
        });
    }
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grow
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        in={open}
        timeout={500}
      >
        <Box sx={style}>
          <Typography
            textAlign={"center"}
            fontSize={"1.25rem"}
            fontWeight={"600"}
            pt={"1rem"}
            pb={"2rem"}
          >
            Register/Sign in
          </Typography>
          <Box
            overflow={"auto"}
            maxHeight="60vh"
            sx={{
              "&::-webkit-scrollbar": {
                display: "none",
              },
            }}
          >
            <Box
              position={"relative"}
              display={"flex"}
              alignItems={"baseline"}
              gap={"0.25rem"}
            >
              <Typography fontSize={"0.8rem"}>Location: </Typography>
              <Box
                display={"flex"}
                alignItems={"center"}
                sx={{ cursor: "pointer" }}
              >
                <Typography fontSize={"0.9rem"} fontWeight={"bold"}>
                  Ethiopia
                </Typography>
                <ExpandMore fontSize="medium" color="dark" />
              </Box>
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
            {continueStage && (
              <OutlinedInput
                id="login--password"
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
            )}
            {continueStage && !userExists && (
              <Box
                display={"flex"}
                flexDirection={"column"}
                p={"0.5rem 1rem"}
                color={"gray"}
              >
                <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                  <Circle sx={{ fontSize: "6px" }} />
                  <Typography fontSize={"0.7rem"}>6-20 Characters</Typography>
                </Box>
                <Box display={"flex"} gap={"0.5rem"} alignItems={"center"}>
                  <Circle sx={{ fontSize: "6px" }} />
                  <Typography fontSize={"0.7rem"}>
                    Contains numbers, letters or symbols
                  </Typography>
                </Box>
              </Box>
            )}
            <Button
              fullWidth
              size="large"
              variant={"contained"}
              disabled={!continueButton}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
                bgcolor: "primary.light",
              }}
              onClick={() => handleContinueButton()}
            >
              {!continueStage ? "Continue" : userExists ? "Log in" : "Register"}
            </Button>
            <Box
              component={"a"}
              href="#"
              fontSize={"0.75rem"}
              sx={{ color: "gray" }}
            >
              Trouble Signing in?
            </Box>
            <Divider>
              <Typography p={"1rem 1rem"} fontSize={"0.85rem"}>
                Or continue with
              </Typography>
            </Divider>
            <Button
              fullWidth
              color="success"
              startIcon={<Facebook />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                facebook
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Google />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
              onClick={() => {
                setUser({
                  name: "Emily",
                  img: "/assets/images/emily.png",
                });
                handleClose();
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                google
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Twitter />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                tweeter
              </Typography>
            </Button>
            <Button
              color="success"
              fullWidth
              startIcon={<Apple />}
              endIcon={<Box width={20} />}
              size="large"
              variant={"outlined"}
              sx={{
                textTransform: "capitalize",
                borderRadius: "2rem",
                m: "0.5rem 0",
              }}
            >
              <Typography flex={1} textTransform={"lowercase"}>
                apple
              </Typography>
            </Button>
            <Typography fontSize={"0.7rem"} mt={"0.5rem"}>
              By continuing, you confirm that you are an adult. By creating an
              account, you agree to the AliExpress.com Free Membership Agreement
              and Privacy Policy.
            </Typography>
          </Box>
          <IconButton
            onClick={() => handleClose()}
            size="small"
            sx={{ position: "absolute", top: "1rem", right: "1rem" }}
          >
            <Close />
          </IconButton>
        </Box>
      </Grow>
    </Modal>
  );
}

export default LoginModal;
