
import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { CompaniesService } from './companies.service';
import { Company } from './company.entity';

@Controller('companies')
export class CompaniesController {
  constructor(private readonly companiesService: CompaniesService) {}


  @Get()
  async findAll(): Promise<Company[]> {
    return this.companiesService.findAll();
  }

  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Company> {
    return this.companiesService.findOne(id);
  }

 
  @Post()
  async create(@Body() data: Partial<Company>): Promise<Company> {
    return this.companiesService.create(data);
  }

  
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() data: Partial<Company>,
  ): Promise<Company> {
    return this.companiesService.update(id, data);
  }

 
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.companiesService.remove(id);
  }
}
