import mongoose, { StringExpressionOperator } from "mongoose";
import { Image } from "./imageModel";

export interface Deal {
  _id: mongoose.Types.ObjectId;
  dealType: { name: string };
  subTitle: string;
  images: Image;
  discounts: string[];
  startDate: Date;
  endDate: Date;
}

export interface ReturnedDeal {
  id: string;
  dealType: string;
  subTitle: string;
  images: string[];
  discounts: string[];
  startDate: Date;
  endDate: Date;
}

export class GetDeal {
  private id: mongoose.Types.ObjectId;
  private dealType: string;
  private subtitle: string;
  private image: string[];
  private discounts: string[];
  private startAt?: Date;
  private endAt?: Date;

  constructor(deal: Deal) {
    this.id = deal._id;
    this.dealType = deal.dealType.name;
    this.subtitle = deal.subTitle;
    this.image = deal.images?.images;
    this.discounts = deal.discounts;
    this.startAt = deal.startDate;
    this.endAt = deal.endDate;
  }

  getDeal() {
    return {
      id: this.id.toString(),
      dealType: this.dealType,
      subtitle: this.subtitle,
      image: this.image,
      discounts: this.discounts,
      startAt: this.startAt,
      endAt: this.endAt,
    };
  }
}
