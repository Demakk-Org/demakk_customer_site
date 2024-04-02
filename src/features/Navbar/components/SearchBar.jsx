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
      size="small"
    >
      <OutlinedInput
        placeholder="Search for any product..."
        sx={{
          borderRadius: "1.5rem",
          width: "100%",
          pl: "1rem",
          pr: "0.25rem",
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label="search"
              size="small"
              // onClick={handleSearch}
              edge="end"
              sx={{
                m: "0",
                aspectRatio: "initial",
                borderRadius: "1.5rem",
                bgcolor: "background.lighter",
                color: {
                  xs: "text.primary",
                },
                p: "0.25rem 1rem",
                "&:hover": {
                  bgcolor: "primaryBg.main",
                },
              }}
            >
              <Box display={"flex"} color={"primaryBg"}>
                <CiSearch color="inherit" fontSize={"1.5rem"} />
              </Box>
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}

export default SearchBar;
