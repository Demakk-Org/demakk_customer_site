import { ObjectId } from "mongoose";
import { Image } from "./imageModel";
import { GetDiscount, IDiscount } from "./discountModel";
import { GetProduct } from "./productModel";

export interface IDealType {
  name: string;
  subTitle: string;
}

export enum EStatus {
  active = "active",
  pending = "pending",
  closed = "closed",
}

export interface IDeal {
  _id: ObjectId;
  dealType: IDealType;
  images: Image;
  discounts: IDiscount[];
  status: EStatus;
  endDate: Date;
  startDate: Date;
}

export interface IReturnedDeal {
  id: string;
  dealType: IDealType;
  images: Image;
  discounts: () => GetDiscount[];
  status: EStatus;
  startDate: Date;
  endDate: Date;
}

export class GetDeal {
  private id: ObjectId;
  private dealType: IDealType;
  private images: Image;
  private discounts: IDiscount[];
  private startDate: Date;
  private endDate: Date;
  private status: EStatus;

  constructor(deal: IDeal) {
    this.id = deal._id;
    this.dealType = deal.dealType;
    this.images = deal.images;
    this.discounts = deal.discounts;
    this.startDate = deal.startDate;
    this.endDate = deal.endDate;
    this.status = deal.status;
  }

  getDiscountsFromDeal(): GetDiscount[] {
    let discounts: GetDiscount[] = [];
    this.discounts.forEach((discount) => {
      discounts.push(new GetDiscount(discount));
    });

    return discounts;
  }

  getAllProductsForDeal(): GetProduct[] {
    let products: GetProduct[] = [];
    this.getDiscountsFromDeal().forEach((discount) => {
      products = [...products, ...discount.getProductsFromDiscount()];
    });

    return products;
  }

  getDeal(): IReturnedDeal {
    return {
      id: this.id.toString(),
      dealType: this.dealType,
      images: this.images,
      discounts: this.getDiscountsFromDeal,
      status: this.status,
      startDate: this.startDate,
      endDate: this.endDate,
    };
  }
}
