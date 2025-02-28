
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { Category } from './category.entity';

@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  
  @Get()
  async findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

 
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  
  @Post()
  async create(@Body() data: Partial<Category>): Promise<Category> {
    return this.categoriesService.create(data);
  }

  
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<Category>,
  ): Promise<Category> {
    return this.categoriesService.update(id, data);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.categoriesService.remove(id);
  }
}
