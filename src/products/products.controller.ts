
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Product } from './product.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

 
  @Get()
  async findAll(): Promise<Product[]> {
    return this.productsService.findAll();
  }

  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Product> {
    return this.productsService.findOne(id);
  }


  @Post()
  async create(@Body() data: Partial<Product>): Promise<Product> {
    return this.productsService.create(data);
  }

 
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Product>): Promise<Product> {
    return this.productsService.update(id, data);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.productsService.remove(id);
  }
  
}
