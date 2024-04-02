import {
  Box,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import { CiSearch } from "react-icons/ci";

function SearchBar() {
  return (
    <FormControl
      sx={{ minWidth: "25ch", flex: "1", display: "flex" }}
      variant="outlined"
      size={"small"}
    >
      <OutlinedInput
        placeholder="Search for any product..."
        sx={{
          borderRadius: "3rem",
          width: "100%",
          p: { sm: "0.25rem 0", md: "0rem" },
          pl: { xs: "1rem", sm: "2rem", md: "1rem" },
          pr: "0.25rem",
          fontSize: { xs: "1rem", sm: "1.5rem", md: "1.2rem" },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              // onClick={handleSearch}
              edge="end"
              sx={{
                width: { xs: "40px", sm: "70px", md: "50px" },
                height: { xs: "30px", sm: "46px", md: "35px" },
                m: "0",
                mr: { xs: "0.25rem", sm: "0.5rem", md: "0.4rem" },
                aspectRatio: "initial",
                borderRadius: "1.5rem",
                bgcolor: "background.paper",
                color: {
                  xs: "text.primary",
                },
                p: "0.25rem 1rem",
                fontSize: { xs: "1.5rem", sm: "2rem", md: "1.4rem" },
              }}
            >
              <Box display={"flex"} color={"text.primary"}>
                <CiSearch color="inherit" />
              </Box>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchBar;
