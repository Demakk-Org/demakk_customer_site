import { Box } from "@mui/material";
import BottomNavbar from "./containers/BottomNavBar";
import TopNavbar from "./containers/TopNavBar";
import NavBarContainer from "./containers/NavBarContainer";

function NavBar({ isHome }: { isHome?: boolean }) {
  return (
    <>
      <Box position={"sticky"} top={0} zIndex={1000}>
        <NavBarContainer>
          <TopNavbar />
        </NavBarContainer>
      </Box>
      {isHome && <BottomNavbar />}
    </>
  );
}

export default NavBar;
