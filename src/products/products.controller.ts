import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { IProduct } from "./products.model";



@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService){}

  @Get()
  async getAllProducts(){
    return await this.productsService.getProducts()
  }
  @Get(':id')
  async getProduct(@Param('id') id: string){
    return await this.productsService.getProductById(id)
  }
  @Post()
  async addProduct(@Body() data: IProduct){
    const result =  await this.productsService.insertProduct(data)
    return {id: result}
  }
  @Put(':id')
  async updateProduct(@Param('id') id: string, @Body() data: IProduct){
    const result = await this.productsService.updateProduct(id, data)
    return result;
  }
  @Delete(':id')
  async removeProduct(@Param('id') id: string){
    return await this.productsService.deleteProduct(id)
  }

}