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
import useOrderStore, { orderStatus } from "@/store/order";
import useUserStore from "@/store/user";
import useTokenStore from "@/store/token";
import { useTranslation } from "next-i18next";
import MoreToLoveComponent from "./MoreToLoveComponent";
import { getTimeFrames } from "@/utils/filterOrder";

function OrdersTabContent() {
  const { t } = useTranslation(["order", "common"]);

  const orderType = [
    { type: t("order_one"), placeholder: t("orderIdOrProduct") },
    { type: t("track"), placeholder: t("trackingNumber") },
  ];

  const {
    setOrderList,
    orderStatusType,
    setOrderStatusType,
    setDeletedOrderList,
    emptyOrderList,
  } = useOrderStore();
  const { setBreadcrumbs } = useUserStore();
  const { token } = useTokenStore();

  const [selectedTimeFrame, setSelectedTimeFrame] = useState("all");
  const [selectedOrderType, setSelectedOrderType] = useState(0);

  const [viewDeletedOrders, setViewDeletedOrders] = useState(false);

  const handleTimeFrameChange = (event: SelectChangeEvent) => {
    setSelectedTimeFrame(event.target.value as string);
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
      { name: t("home", { ns: "common" }), url: "/" },
      { name: t("account", { ns: "account" }), url: "/account" },
      { name: t("orders"), url: "/order" },
    ]);

    !viewDeletedOrders ? setOrderList(token) : setDeletedOrderList(token);
  }, [token, setBreadcrumbs, setOrderList, viewDeletedOrders]);

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
            {orderStatus.map((tab, ind) => (
              <Box key={ind} position="relative">
                <Button
                  disableRipple
                  sx={{
                    p: { xs: "0rem" },
                    fontSize: { xs: "0.85rem", sm: "1rem" },
                    minWidth: "max-content",
                    fontWeight:
                      orderStatusType === tab.orderIndex && !viewDeletedOrders
                        ? "bold"
                        : "normal",
                    color: "text.primary",
                    "&:hover": {
                      color:
                        orderStatusType !== tab.orderIndex || viewDeletedOrders
                          ? "text.price"
                          : "text.primary",
                    },
                  }}
                  onClick={() => {
                    viewDeletedOrders && emptyOrderList();
                    setViewDeletedOrders(false);
                    setOrderStatusType(tab.orderIndex);
                  }}
                >
                  {t(tab.name, { ns: "order" })}
                </Button>
                {orderStatusType === tab.orderIndex && !viewDeletedOrders && (
                  <Box
                    position="absolute"
                    width="30px"
                    height={"4px"}
                    bgcolor={"text.price"}
                    top={"100%"}
                    left={"calc(50% - 15px)"}
                  />
                )}
              </Box>
            ))}
          </Stack>
          <Button
            size="small"
            disableRipple
            startIcon={<IoTrashBin fontSize={"0.8rem"} />}
            onClick={() => {
              !viewDeletedOrders && emptyOrderList();
              setViewDeletedOrders(true);
            }}
            sx={{
              color: viewDeletedOrders ? "demakkPrimary.main" : "text.primary",
              "&:hover": { fontWeight: "bold" },
              display: { xs: "none", sm: "flex" },
            }}
          >
            {t("deletedOrders")}
          </Button>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          display={{ xs: "none", md: "flex" }}
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
                  {order.type}
                </MenuItem>
              ))}
            </Select>
            <OutlinedInput
              id="order search bar"
              placeholder={orderType[selectedOrderType].placeholder}
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
            value={selectedTimeFrame}
            onChange={handleTimeFrameChange}
            size="small"
            sx={{ width: "200px" }}
          >
            {getTimeFrames(t).map((timeFrame, ind) => (
              <MenuItem key={ind} value={timeFrame.name}>
                {timeFrame.value}
              </MenuItem>
            ))}
          </Select>
        </Stack>
      </Stack>

      <OrdersTabDisplayContainer
        filter={selectedTimeFrame}
        viewDeletedOrders={viewDeletedOrders}
      />

      <MoreToLoveComponent />
    </Stack>
  );
}

export default OrdersTabContent;
