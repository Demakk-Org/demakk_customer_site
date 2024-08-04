import {
  Box,
  Button,
  FormControl,
  IconButton,
  InputAdornment,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";
import { demakkFont } from "@/pages/_app";
import useSearchStore, { useLocalSearchStore } from "@/store/search";
import useTokenStore from "@/store/token";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { useTranslation } from "next-i18next";

function SearchBar() {
  const { t } = useTranslation(["common"]);
  const {
    searchResults,
    fetchSearchResults,
    addSearchTerm,
    autoComplete,
    fetchAutoComplete,
    resetAutoComplete,
    fetchRelatedProducts,
  } = useSearchStore();
  const { setSearchState, searchText } = useLocalSearchStore();
  const router = useRouter();
  const { token } = useTokenStore();

  const [localSearchText, setLocalSearchText] = useState(searchText || "");

  let timeToFetchAutoComplete: any;

  useEffect(() => {
    document.addEventListener("click", (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const searchElement = target.closest("#search") as HTMLElement | null;

      if (!searchElement) {
        resetAutoComplete();
      }
    });

    setLocalSearchText(searchText);

    fetchRelatedProducts({ token, searchProducts: searchResults });
  }, [
    searchResults,
    token,
    resetAutoComplete,
    fetchRelatedProducts,
    searchText,
  ]);

  const handleFetchAutoComplete = (query: string) => {
    if (query.length == 0) {
      resetAutoComplete();
      return;
    }

    if (timeToFetchAutoComplete) {
      clearTimeout(timeToFetchAutoComplete);
    }

    if (query.length > 1) {
      timeToFetchAutoComplete = setTimeout(() => {
        fetchAutoComplete({ query, token });
        clearTimeout(timeToFetchAutoComplete);
      }, 500);
    }
  };

  return (
    <Stack
      position={"relative"}
      sx={{ minWidth: "25ch", flex: "1", display: "flex" }}
    >
      <FormControl variant="outlined" size={"small"} fullWidth>
        <OutlinedInput
          name="search"
          id="search"
          placeholder={t("searchPlaceholder")}
          sx={{
            borderRadius: "3rem",
            width: "100%",
            p: { sm: "0.25rem 0", md: "0rem" },
            pl: { xs: "1rem", sm: "2rem", md: "1rem" },
            pr: "0.25rem",
            fontSize: { xs: "1rem", sm: "1.5rem", md: "1rem" },
            bgcolor: "background.paper",
          }}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="search"
                onClick={() => {
                  let term = (
                    document.getElementById("search") as HTMLInputElement
                  ).value;
                  addSearchTerm(term);
                  console.log(term);
                  router.push(`/?searchText=${term}`);
                  resetAutoComplete();
                  setSearchState(true);
                }}
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
          onChange={({ target }) => {
            handleFetchAutoComplete(target.value);
            setLocalSearchText(target.value);
          }}
          value={localSearchText}
        />
      </FormControl>

      {autoComplete.length > 0 && (
        <Stack
          id="autocomplete-list"
          bgcolor={"background.lightOpaque"}
          position={"absolute"}
          top={"110%"}
          left={0}
          width={1}
          border={"1px solid"}
          borderColor={"text.primary"}
          p={"0.5rem 1rem"}
          borderRadius={4}
          spacing={1}
        >
          {autoComplete.map((term, index) => (
            <Button
              size="small"
              variant="text"
              fullWidth
              key={index}
              onClick={() => {
                (document.getElementById("search") as HTMLInputElement).value =
                  term;
                resetAutoComplete();
                router.push(`/?searchText=${term}`);
              }}
            >
              <Typography
                width={1}
                textAlign={"left"}
                className={demakkFont.className}
                color={"text.primary"}
              >
                {term}
              </Typography>
            </Button>
          ))}
        </Stack>
      )}
    </Stack>
  );
}

export default SearchBar;
