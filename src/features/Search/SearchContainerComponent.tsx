import { Grid, Stack } from "@mui/material";
import SearchFilterSectionForLargeDevices from "./SearchFilterSectionForLargeDevices";
import SearchResultDisplaySection from "./SearchResultDisplaySection";
import SearchFilterSectionForSmallDevices from "./SearchFilterSectionForSmallDevices";

function SearchContainerComponent() {
  return (
    <Stack width={1}>
      <Grid container justifyContent={"flex-start"}>
        <Grid item xs={12} md={3}>
          <SearchFilterSectionForLargeDevices />
          <SearchFilterSectionForSmallDevices />
        </Grid>

        <Grid item xs>
          <SearchResultDisplaySection />
        </Grid>
      </Grid>
    </Stack>
  );
}

export default SearchContainerComponent;
