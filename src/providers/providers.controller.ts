
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { ProvidersService } from './providers.service';
import { Provider } from './provider.entity';

@Controller('suppliers')
export class ProvidersController {
  constructor(private readonly providersService: ProvidersService) {}

  @Get()
  async findAll(): Promise<Provider[]> {
    return this.providersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Provider> {
    return this.providersService.findOne(id);
  }

  @Post()
  async create(@Body() data: Partial<Provider>): Promise<Provider> {
    return this.providersService.create(data);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Provider>): Promise<Provider> {
    return this.providersService.update(id, data);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.providersService.remove(id);
  }
}
