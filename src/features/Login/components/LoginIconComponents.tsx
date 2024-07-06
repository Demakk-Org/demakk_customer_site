import { Avatar, Box, IconButton } from "@mui/material";

interface ILoginIconComponents {
  imageUrl: string;
  loginFn: () => void;
  bgcolor?: boolean;
  disabled?: boolean;
}

function LoginIconComponents({
  imageUrl,
  loginFn,
  bgcolor,
  disabled,
}: ILoginIconComponents) {
  return (
    <Box display={"flex"} width={"fit-content"} borderRadius="50%">
      <IconButton color="primary" onClick={() => loginFn()} disabled={disabled}>
        <Avatar
          sx={{
            width: { xs: "40px", sm: "50px" },
            height: { xs: "40px", sm: "50px" },
            bgcolor: bgcolor ? "white" : "transparent",
          }}
          src={imageUrl}
        />
      </IconButton>
    </Box>
  );
}

export default LoginIconComponents;
