import mongoose from "mongoose";
import { Rating } from "./ratingModel";
import { Image } from "./imageModel";

export interface Product {
  id: mongoose.Types.ObjectId;
  name: string;
  description: string;
  price: number;
  ratings?: Rating;
  productCategory: string;
  tags: string[];
  images?: Image;
  reviews?: mongoose.Types.ObjectId;
  popularity: number;
}

export class GetProduct {
  private id: mongoose.Types.ObjectId;
  private name: string;
  private description: string;
  private price: number;
  private ratings?: Rating;
  private productCategory: string;
  private tags: string[];
  private images?: Image;
  private reviews?: mongoose.Types.ObjectId;
  private popularity: number;

  constructor(product: Product) {
    this.id = product.id;
    this.name = product.name;
    this.description = product.description;
    this.price = product.price;
    this.ratings = product.ratings;
    this.productCategory = product.productCategory;
    this.tags = product.tags;
    this.images = product.images;
    this.reviews = product.reviews;
    this.popularity = product.popularity;
  }

  getDiscountList(){
    
  }

  getProductforCard() {
    return {
      id: this.id,
      name: this.name,
      price: this.price,
      ratings: this.ratings?.average,
      images: this.images?.images[0],
    };
  }
}
