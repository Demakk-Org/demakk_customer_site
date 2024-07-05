import { LANG, Providers } from "@/store/user";
import { ObjectId } from "mongoose";
import { Image } from "./imageModel";
import { IAddress } from "./addressModel";

interface Role {
  _id: string;
  name: string;
}

interface View {
  pid: ObjectId;
  count: number;
}

interface Cart {
  orderItems: ObjectId[];
}

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email?: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneNumberVerified: boolean;
  role: Role;
  shippingAddress?: IAddress;
  billingAddress?: IAddress;
  cart: Cart;
  orders: ObjectId[];
  lang: LANG;
  blocked: boolean;
  providers: Providers;
  image: Image;
  searchTerms: string[];
  views: View[];
  favs: ObjectId[];
}

export default class GetUser {
  private _id: ObjectId;
  private firstName: string;
  private lastName: string;
  private email?: string;
  private emailVerified: boolean;
  private phoneNumber?: string;
  private phoneNumberVerified: boolean;
  private role: Role;
  private shippingAddress?: IAddress;
  private billingAddress?: IAddress;
  private cart: Cart;
  private orders: ObjectId[];
  private lang: LANG;
  private blocked: boolean;
  private image: Image;
  private searchTerms: string[];
  private views: View[];
  private favs: ObjectId[];

  constructor(user: IUser) {
    this._id = user._id;
    this.firstName = user.firstName;
    this.lastName = user.lastName;
    this.email = user.email;
    this.emailVerified = user.emailVerified;
    this.phoneNumber = user.phoneNumber;
    this.phoneNumberVerified = user.phoneNumberVerified;
    this.role = user.role;
    this.shippingAddress = user.shippingAddress;
    this.billingAddress = user.billingAddress;
    this.cart = user.cart;
    this.orders = user.orders;
    this.lang = user.lang;
    this.blocked = user.blocked;
    this.image = user.image;
    this.searchTerms = user.searchTerms;
    this.views = user.views;
    this.favs = user.favs;
  }

  getUser() {
    return {
      id: this._id,
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      emailVerified: this.emailVerified,
      phoneNumber: this.phoneNumber,
      phoneNumberVerified: this.phoneNumberVerified,
      role: this.role,
      shippingAddress: this.shippingAddress,
      billingAddress: this.billingAddress,
      cart: this.cart,
      orders: this.orders,
      lang: this.lang,
      blocked: this.blocked,
      image: this.image,
      searchTerms: this.searchTerms,
      views: this.views,
      favs: this.favs,
    };
  }
}
