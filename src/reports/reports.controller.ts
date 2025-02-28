
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ReportsService } from './reports.service';
import { Report } from './report.entity';

@Controller('reports')
export class ReportsController {
  constructor(private readonly reportsService: ReportsService) {}

 
  @Get()
  async findAll(): Promise<Report[]> {
    return this.reportsService.findAll();
  }

 
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Report> {
    return this.reportsService.findOne(id);
  }

 
  @Post()
  async create(@Body() data: Partial<Report>): Promise<Report> {
    return this.reportsService.create(data);
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Report>): Promise<Report> {
    return this.reportsService.update(id, data);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.reportsService.remove(id);
  }
}
