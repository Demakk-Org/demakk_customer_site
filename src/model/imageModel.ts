import mongoose, { ObjectId } from 'mongoose';

export interface Image {
  rid: ObjectId;
  type: string;
  name: string;
  description: string;
  imageUrls: string[];
  primary: number;
  _id: ObjectId;
}
