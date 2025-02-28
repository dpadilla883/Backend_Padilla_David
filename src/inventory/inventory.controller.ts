
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { InventoryService } from './inventory.service';
import { Inventory } from './inventory.entity';

@Controller('inventory')
export class InventoryController {
  constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  async findAll(): Promise<Inventory[]> {
    return this.inventoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Inventory> {
    return this.inventoryService.findOne(parseInt(id, 10));
  }

  @Post()
  async create(@Body() data: Partial<Inventory>): Promise<Inventory> {
    return this.inventoryService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() data: Partial<Inventory>): Promise<Inventory> {
    return this.inventoryService.update(parseInt(id, 10), data);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.inventoryService.remove(parseInt(id, 10));
  }
}
