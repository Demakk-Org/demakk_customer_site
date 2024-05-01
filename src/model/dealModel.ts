import mongoose, { StringExpressionOperator } from "mongoose";
import { Image } from "./imageModel";

export interface IDealType {
  name: string;
  subTitles: string;
}

export enum EStatus {
  active = "active",
  pending = "pending",
  closed = "closed",
}

export interface Deal {
  _id: mongoose.Types.ObjectId;
  dealType: IDealType;
  images: Image;
  discounts: string[];
  startDate: Date;
  status: EStatus;
  endDate: Date;
}

export interface ReturnedDeal {
  id: string;
  dealType: IDealType;
  subTitle: string;
  images: string[];
  discounts: string[];
  status: EStatus;
  startDate: Date;
  endDate: Date;
}

export class GetDeal {
  private id: mongoose.Types.ObjectId;
  private dealType: IDealType;
  private image: string[];
  private discounts: string[];
  private startAt?: Date;
  private endAt?: Date;
  private status: EStatus;

  constructor(deal: Deal) {
    this.id = deal._id;
    this.dealType = deal.dealType;
    this.image = deal.images?.imageUrls;
    this.discounts = deal.discounts;
    this.startAt = deal.startDate;
    this.endAt = deal.endDate;
    this.status = deal.status;
  }

  getDeal() {
    return {
      id: this.id.toString(),
      dealType: this.dealType,
      image: this.image,
      discounts: this.discounts,
      status: this.status,
      startAt: this.startAt,
      endAt: this.endAt,
    };
  }
}
