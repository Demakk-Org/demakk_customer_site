import {
  Box,
  Button,
  MenuItem,
  OutlinedInput,
  Select,
  Stack,
} from "@mui/material";
import { SelectChangeEvent } from "@mui/material/Select/SelectInput";
import { useEffect, useState } from "react";
import { IoTrashBin } from "react-icons/io5";
import OrdersTabDisplayContainer from "./OrdersTabDisplayContainer";
import { CiSearch } from "react-icons/ci";
import IconFromReactIcons from "@/component/IconFromReactIcons";
import useOrderStore from "@/store/order";
import useUserStore from "@/store/user";
import { auth } from "@/firebase/firebase";
import getLanguage from "@/utils/getLanguage";

const timeFrames = ["allOrLastYear", "lastMonth", "last3Months", "last6Months"];
const orderType = [
  { type: "order", placeholder: "orderIdOrProduct" },
  { type: "track", placeholder: "trackingNumber" },
];

export const orderStatus = [
  { name: "completed", orderIndex: 0 },
  { name: "shipped", orderIndex: 1 },
  { name: "pending", orderIndex: 2 },
  { name: "cancelled", orderIndex: 3 },
];

function OrdersTabContent() {
  const { setOrderStatus, setOrderList, orderList } = useOrderStore();
  const { setBreadcrumbs, lang, refresh } = useUserStore();

  const [selectedOrderStatusType, setSelectedOrderStatusType] = useState(0);
  const [selectedTimeFrame, setSelectedTimeFrame] = useState(0);
  const [selectedOrderType, setSelectedOrderType] = useState(0);
  console.log(orderList);

  const handleTimeFrameChange = (event: SelectChangeEvent) => {
    setSelectedTimeFrame(timeFrames.indexOf(event.target.value as string));
  };

  const handleOrderTypeChange = (event: SelectChangeEvent) => {
    setSelectedOrderType(
      orderType.findIndex(
        (order) => order.type == (event.target.value as string)
      )
    );
  };

  useEffect(() => {
    setBreadcrumbs([
      { name: "home", url: "/" },
      { name: "account", url: "/account" },
      { name: "orders", url: "/order" },
    ]);
    setOrderStatus();
    setOrderList();
  }, [refresh]);

  if (!orderStatus.length) return <></>;

  return (
    <Stack gap={2}>
      <Stack p={2} bgcolor={"background.light"} gap={2}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack
            direction={"row"}
            gap={{ xs: "0.5rem", sm: "1.5rem" }}
            sx={{ overflowX: "auto" }}
            py={"0.5rem"}
          >
            {[{ name: "viewAll", orderIndex: -1 }, ...orderStatus]
              .sort((a, b) => a.orderIndex - b.orderIndex)
              .map((tab, ind) => (
                <Box key={ind} position="relative">
                  <Button
                    disableRipple
                    sx={{
                      p: { xs: "0rem" },
                      fontSize: { xs: "0.85rem", sm: "1rem" },
                      fontWeight:
                        selectedOrderStatusType === ind ? "bold" : "normal",
                      color: "text.primary",
                      "&:hover": {
                        color:
                          selectedOrderStatusType !== ind
                            ? "text.price"
                            : "text.primary",
                      },
                    }}
                    onClick={() => setSelectedOrderStatusType(ind)}
                  >
                    {getLanguage(tab.name, lang)}
                  </Button>
                  {selectedOrderStatusType === ind && (
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
            sx={{
              color: "text.primary",
              "&:hover": { fontWeight: "bold" },
              display: { xs: "none", sm: "flex" },
            }}
          >
            {getLanguage("deletedOrders", lang)}
          </Button>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent={"space-between"}
          gap={2}
        >
          <Stack direction={"row"}>
            <Select
              labelId="order type select bar"
              id="order type select bar"
              value={orderType[selectedOrderType].type}
              onChange={handleOrderTypeChange}
              size="small"
              sx={{
                p: "0rem",
                width: "100px",
                borderTopRightRadius: "0",
                borderBottomRightRadius: "0",
                borderRightWidth: "0px",
              }}
            >
              {orderType.map((order, ind) => (
                <MenuItem key={ind} value={orderType[ind].type}>
                  {getLanguage(order.type, lang)}
                </MenuItem>
              ))}
            </Select>
            <OutlinedInput
              id="order search bar"
              placeholder={getLanguage(
                orderType[selectedOrderType].placeholder,
                lang
              )}
              sx={{
                minWidth: { xs: "100px", sm: "300px", md: "400px" },
                borderRadius: "0",
                "&:hover": {
                  borderColor: "",
                },
              }}
              size="small"
            />
            <Button
              variant="contained"
              size="small"
              sx={{
                p: "0rem",
                borderTopLeftRadius: "0",
                borderBottomLeftRadius: "0",
              }}
            >
              <IconFromReactIcons
                width={20}
                icon={<CiSearch />}
              ></IconFromReactIcons>
            </Button>
          </Stack>
          <Select
            labelId="time frame select bar"
            id="time frame select bar"
            value={timeFrames[selectedTimeFrame]}
            onChange={handleTimeFrameChange}
            size="small"
            sx={{ width: "200px" }}
          >
            {timeFrames.map((timeFrame, ind) => (
              <MenuItem key={ind} value={timeFrames[ind]}>
                {getLanguage(timeFrame, lang)}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>

      <OrdersTabDisplayContainer
        selectedOrderStatusType={selectedOrderStatusType}
      />
    </Stack>
  );
}

export default OrdersTabContent;
