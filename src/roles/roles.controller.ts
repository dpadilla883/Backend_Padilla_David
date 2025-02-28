
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { RolesService } from './roles.service';
import { Role } from './roles.entity';

@Controller('roles')
export class RolesController {
  constructor(private readonly rolesService: RolesService) {}

  
  @Get()
  async findAll(): Promise<Role[]> {
    return this.rolesService.findAll();
  }

  
  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Role> {
    return this.rolesService.findOne(id);
  }

  
  @Post()
  async create(@Body() data: Partial<Role>): Promise<Role> {
    return this.rolesService.create(data);
  }

  
  @Put(':id')
  async update(@Param('id') id: number, @Body() data: Partial<Role>): Promise<Role> {
    return this.rolesService.update(id, data);
  }

  
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.rolesService.remove(id);
  }
}
