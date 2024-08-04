import { ObjectId } from "mongoose";
import { IProductVariant } from "./productModel";
import { IAddress } from "./addressModel";

export interface IOrderStatus {
  _id?: ObjectId;
  name: string;
  orderIndex: number;
}

export interface ICoupon {
  _id: ObjectId;
  name: string;
  discountAmount: number;
  discountType: { name: string };
  appliesToProductCategory: ObjectId[];
}

export interface IOrderItem {
  _id: ObjectId;
  productVariant: IProductVariant;
  quantity: number;
  couponCode?: ICoupon;
  isChecked: boolean;
}

export interface IOrder {
  _id: ObjectId;
  orderItems: IOrderItem[];
  orderDate: Date;
  deliverDate: Date;
  orderStatus: String;
  deliveryAddress: IAddress;
}

export class GetOrder {
  private id: ObjectId;
  private orderItems: IOrderItem[];
  private orderDate: Date;
  private deliveryDate: Date;
  private orderStatus: String;
  private deliveryAddress: IAddress;

  constructor(order: IOrder) {
    this.id = order._id;
    this.orderItems = order.orderItems;
    this.orderDate = order.orderDate;
    this.deliveryDate = order.deliverDate;
    this.orderStatus = order.orderStatus;
    this.deliveryAddress = order.deliveryAddress;
  }

  getOrder() {
    return {
      id: this.id.toString(),
      orderItems: this.orderItems,
      orderDate: this.orderDate,
      deliveryDate: this.deliveryDate,
      orderStatus: this.orderStatus,
      deliveryAddress: this.deliveryAddress,
    };
  }
}

export class Orders {
  private orders: GetOrder[];

  constructor(orders: GetOrder[]) {
    this.orders = orders;
  }

  sort() {
    let orders = this.orders;

    orders.sort((b, a) => {
      let orderADate = a.getOrder().orderDate;
      let orderBDate = b.getOrder().orderDate;

      return (
        Date.parse(orderADate as unknown as string) -
        Date.parse(orderBDate as unknown as string)
      );
    });

    return new Orders(orders);
  }

  filterOrderByTime({ timeFrame }: { timeFrame?: string }) {
    let orders = this.orders;

    if (!timeFrame || timeFrame == "all") return new Orders(orders);

    if (timeFrame == "thisYear") {
      const currentYear = new Date().getFullYear();
      const lastYear = currentYear;

      orders = orders.filter((order) => {
        const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
        return ordersYear == lastYear;
      });
    }

    if (timeFrame == "today") {
      const currentDate = new Date();

      const thisYear = currentDate.getFullYear();
      const thisMonth = currentDate.getMonth();
      const thisDay = currentDate.getDate();

      orders = orders.filter((order) => {
        let orderDate = order.getOrder().orderDate;

        const orderYear = new Date(orderDate).getFullYear();
        const orderMonth = new Date(orderDate).getMonth();
        const orderDay = new Date(orderDate).getDate();

        return (
          orderYear == thisYear &&
          orderMonth == thisMonth &&
          orderDay == thisDay
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

      orders = orders.filter((order) => {
        const orderDate = new Date(order.getOrder().orderDate);
        return orderDate >= startOfWeek && orderDate <= endOfWeek;
      });
    }

    if (timeFrame == "thisMonth") {
      const currentMonth = new Date().getMonth();
      const thisMonth = currentMonth;

      orders = orders.filter((order) => {
        const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
        return ordersMonth == thisMonth;
      });
    }

    if (timeFrame == "last3Months") {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const last3Month = currentMonth - 3;

      orders = orders.filter((order) => {
        const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
        const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
        return ordersMonth >= last3Month && ordersYear == currentYear;
      });
    }

    if (timeFrame == "last6Months") {
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth();
      const last3Month = currentMonth - 6;

      orders = orders.filter((order) => {
        const ordersMonth = new Date(order.getOrder().orderDate).getMonth();
        const ordersYear = new Date(order.getOrder().orderDate).getFullYear();
        return ordersMonth >= last3Month && ordersYear == currentYear;
      });
    }

    return new Orders(orders);
  }

  getOrders() {
    return { orders: this.orders };
  }
}

export class OrderItems {
  private orderItems: IOrderItem[];

  constructor(orderItems: IOrderItem[]) {
    this.orderItems = orderItems;
  }

  getSelectedOrderItems() {
    let oi = this.orderItems.filter((oi) => oi.isChecked);
    return new OrderItems(oi);
  }

  getOutOfStockOrderItems() {
    let oi = this.orderItems.filter(
      (oi) => oi.productVariant.numberOfAvailable <= 0
    );

    return new OrderItems(oi);
  }

  getAvailableOrderItems() {
    let oi = this.orderItems.filter(
      (oi) => oi.productVariant.numberOfAvailable > 0
    );

    return new OrderItems(oi);
  }

  getTotalPriceOfSelectedOrderItems() {
    return this.getAvailableOrderItems()
      .getSelectedOrderItems()
      .getOrderItems()
      .reduce((acc, oi) => acc + oi.quantity * oi.productVariant.price, 0);
  }

  getOrderItemsForOrderDetail(orderItemId: ObjectId | null) {
    if (!orderItemId) return new OrderItems(this.orderItems);

    return new OrderItems(
      this.orderItems.filter((oi) => oi._id == orderItemId)
    );
  }

  getPriceForOrderDetail() {
    let orderItemsPrice = this.orderItems.reduce(
      (acc, oi) => acc + oi.quantity * oi.productVariant.price,
      0
    );

    return orderItemsPrice;
  }

  getLength() {
    return this.orderItems.length;
  }

  getOrderItems() {
    return this.orderItems;
  }
}
