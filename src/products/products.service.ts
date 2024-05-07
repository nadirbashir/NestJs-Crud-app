import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { IProduct } from "./products.model";

@Injectable()
export class ProductsService {
  products:any = []

  constructor(@InjectModel('Product') private readonly productModel: Model<IProduct>){}
  async getProducts(){
    const products =  await this.productModel.find();
    return products
  }
  async getProductById(id: string){
    const product = await this.productModel.find({_id: id})
    if(!product) return 'product not found'
    return product
  }
  async insertProduct(product: IProduct){
    const newProduct = new this.productModel(product);
    const result = await newProduct.save();
    return result.id as string;
  }
  async updateProduct(id: string, data: IProduct){
    const product = await this.productModel.find({_id: id})
    if(!product) return 'product not found'
    
    const updatedProduct = await this.productModel.updateOne({_id: id},data)
   
    return updatedProduct;
  }
  async deleteProduct(id: string){
    const product = await this.productModel.find({_id: id})
    if(!product) return 'product not found'
    
    const result = await this.productModel.deleteOne({_id: id})

    return result;
  }
}