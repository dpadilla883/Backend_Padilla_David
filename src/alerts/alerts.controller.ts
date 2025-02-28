
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { AlertsService } from './alerts.service';
import { StockAlert } from './stock-alert.entity';

@Controller('alerts')
export class AlertsController {
  constructor(private readonly alertsService: AlertsService) {}

  @Get()
  async findAll(): Promise<StockAlert[]> {
    return this.alertsService.findAll();
  }

  @Post()
  async create(@Body() alertData: Partial<StockAlert>): Promise<StockAlert> {
    return this.alertsService.create(alertData);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<StockAlert> {
    return this.alertsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateData: Partial<StockAlert>): Promise<StockAlert> {
    return this.alertsService.update(id, updateData);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.alertsService.remove(id);
  }
}
