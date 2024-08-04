import { chosenBackendUrl, LANG, Providers } from "@/store/user";
import { ObjectId } from "mongoose";
import { Image } from "./imageModel";
import { IAddress } from "./addressModel";
import axios from "axios";
import { IProduct, IProductForCard } from "./productModel";

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

interface IUserAddress {
  city: string;
  country: string;
  streetAddress: string;
  zipCode: string;
}

type Gender = "male" | "female" | null;

export interface IUser {
  _id: ObjectId;
  firstName: string;
  lastName: string;
  email?: string;
  emailVerified: boolean;
  phoneNumber?: string;
  phoneNumberVerified: boolean;
  role: Role;
  shippingAddress: IAddress | null;
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
  gender: Gender;
  address: IUserAddress;
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
  private shippingAddress: IAddress | null;
  private billingAddress?: IAddress;
  private cart: Cart;
  private orders: ObjectId[];
  private lang: LANG;
  private blocked: boolean;
  private image: Image;
  private searchTerms: string[];
  private views: View[];
  private favs: ObjectId[];
  private gender: Gender;
  private address: IUserAddress;

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
    this.gender = user.gender;
    this.address = user.address;
  }

  async getFavoriteProducts(): Promise<IProductForCard[]> {
    let productIdsParamValue =
      this.favs.length > 0 ? this.favs.join(",") : "empty";
    return axios
      .get(`${chosenBackendUrl}/product`, {
        params: { productIds: productIdsParamValue },
      })
      .then(({ data }) => {
        console.log(data.products.list);
        let products: IProductForCard[] = data.products.list;
        return products;
      })
      .catch((err) => {
        console.log(err);
        return [];
      });
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
      gender: this.gender,
      address: this.address,
    };
  }
}
