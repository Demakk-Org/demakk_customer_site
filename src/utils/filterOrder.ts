import { GetOrder } from "@/model/orderModel";
import { TFunction } from "i18next";

export const timeFrames = [
  "all",
  "today",
  "thisWeek",
  "thisMonth",
  "last3Months",
  "last6Months",
  "lastYear",
];

export const getTimeFrames = (t: TFunction<"common", undefined>) => {
  return timeFrames.map((timeFrame) => ({
    name: timeFrame,
    value: t(timeFrame, { ns: "common" }),
  }));
};

export const filterOrderByTime = ({
  orders,
  timeFrame,
}: {
  orders: GetOrder[] | null;
  timeFrame?: string;
}) => {
  if (!orders) return [];

  if (!timeFrame || timeFrame == "all") return orders;

  if (timeFrame == "thisYear") {
    const currentYear = new Date().getFullYear();
    const lastYear = currentYear - 1;

    return orders.filter((order) => {
      const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
      return ordersYear == lastYear;
    });
  }

  if (timeFrame == "today") {
    const currentDate = new Date();

    const thisYear = currentDate.getFullYear();
    const thisMonth = currentDate.getMonth();
    const thisDay = currentDate.getDate();

    return orders.filter((order) => {
      let orderDate = order.getOrder().orderDate;

      const orderYear = new Date(orderDate).getFullYear();
      const orderMonth = new Date(orderDate).getMonth();
      const orderDay = new Date(orderDate).getDate();

      return (
        orderYear == thisYear && orderMonth == thisMonth && orderDay == thisDay
      );
    });
  }

  if (timeFrame == "thisWeek") {
    const currentDate = new Date();

    const startOfWeek = new Date(currentDate);
    const dayOfWeek = currentDate.getDay();
    startOfWeek.setDate(currentDate.getDate() - dayOfWeek);
    startOfWeek.setHours(0, 0, 0, 0);

    const endOfWeek = new Date(startOfWeek);
    endOfWeek.setDate(startOfWeek.getDate() + 6);
    endOfWeek.setHours(23, 59, 59, 999);

    return orders.filter((order) => {
      const orderDate = new Date(order.getOrder().orderDate);
      return orderDate >= startOfWeek && orderDate <= endOfWeek;
    });
  }

  if (timeFrame == "lastMonth") {
    const currentMonth = new Date().getMonth();
    const thisMonth = currentMonth;

    return orders.filter((order) => {
      const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
      return ordersMonth == thisMonth;
    });
  }

  if (timeFrame == "last3Months") {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const last3Month = currentMonth - 3;

    return orders.filter((order) => {
      const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
      const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
      return ordersMonth >= last3Month && ordersYear == currentYear;
    });
  }

  if (timeFrame == "last6Months") {
    const currentYear = new Date().getFullYear();
    const currentMonth = new Date().getMonth();
    const last3Month = currentMonth - 6;

    return orders.filter((order) => {
      const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
      const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
      return ordersMonth >= last3Month && ordersYear == currentYear;
    });
  }

  return orders;
};
