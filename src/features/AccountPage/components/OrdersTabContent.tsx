import { Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Divider,
  FormControl,
  IconButton,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import SelectInput, {
  SelectChangeEvent,
} from "@mui/material/Select/SelectInput";
import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import OrdersTabDisplayContainer from "./OrdersTabDisplayContainer";
import { CiSearch } from "react-icons/ci";
import IconFromReactIcons from "@/component/IconFromReactIcons";

export const ordersTabs = [
  "View All",
  "To pay",
  "To ship",
  "Shipped",
  "Processed",
];
const timeFrames = [
  "All / Last year",
  "Last 6 months",
  "Last 1 year",
  "Last 2 years",
];
const orderType = ["Order", "Track"];

function OrdersTabContent() {
  const [selectedTab, setSelectedTab] = useState(0);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(0);
  const [selectedOrderType, setSelectedOrderType] = useState(0);

  const handleTimeFrameChange = (event: SelectChangeEvent) => {
    setSelectedTimeFrame(timeFrames.indexOf(event.target.value as string));
  };

  const handleOrderTypeChange = (event: SelectChangeEvent) => {
    setSelectedOrderType(orderType.indexOf(event.target.value as string));
  };

  return (
    <Stack gap={2}>
      <Stack p={2} bgcolor={"background.light"} gap={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"} gap={"0.5rem"}>
            {ordersTabs.map((tab, ind) => (
              <Box key={ind} position="relative">
                <Button
                  disableRipple
                  sx={{
                    fontSize: "1rem",
                    fontWeight: selectedTab === ind ? "bold" : "normal",
                    color: "text.primary",
                    "&:hover": {
                      color:
                        selectedTab !== ind ? "text.price" : "text.primary",
                    },
                  }}
                  onClick={() => setSelectedTab(ordersTabs.indexOf(tab))}
                >
                  {tab}
                </Button>
                {selectedTab === ind && (
                  <Box
                    position="absolute"
                    width="30px"
                    height={"4px"}
                    bgcolor={"text.price"}
                    top={"100%"}
                    left={"calc(50% - 15px)"}
                  ></Box>
                )}
              </Box>
            ))}
          </Stack>
          <Button
            size="small"
            disableRipple
            startIcon={<IoTrashBin fontSize={"0.8rem"} />}
            sx={{ color: "text.primary", "&:hover": { fontWeight: "bold" } }}
          >
            Deleted Orders
          </Button>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"row"}>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={orderType[selectedOrderType]}
              onChange={handleOrderTypeChange}
              size="small"
              sx={{
                width: "100px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                borderRightWidth: "0px",
              }}
            >
              {orderType.map((order, ind) => (
                <MenuItem key={ind} value={orderType[ind]}>
                  {order}
                </MenuItem>
              ))}
            </Select>
            <OutlinedInput
              sx={{
                width: "300px",
                borderRadius: "0",
                "&:hover": {
                  borderColor: "",
                },
              }}
              size="small"
            />
            <Button
              variant="contained"
              sx={{
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            >
              <IconFromReactIcons icon={<CiSearch />}></IconFromReactIcons>
            </Button>
          </Stack>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={timeFrames[selectedTimeFrame]}
            onChange={handleTimeFrameChange}
            size="small"
            sx={{ width: "200px" }}
          >
            {timeFrames.map((timeFrame, ind) => (
              <MenuItem key={ind} value={timeFrames[ind]}>
                {timeFrame}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>

      <OrdersTabDisplayContainer selectedTab={selectedTab} />
    </Stack>
  );
}

export default OrdersTabContent;
