import { Document } from "mongoose";

import mongoose from 'mongoose';

export const ProductSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String, required: true },
});


export interface IProduct extends Document {
  id: string;
  title: string;
  price: number;
  description: string;
}
