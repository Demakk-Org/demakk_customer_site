import mongoose from 'mongoose';

export interface Image {
  rid: mongoose.Types.ObjectId;
  type: string;
  name: string;
  description: string;
  imageUrls: string[];
  primary: number;
}
