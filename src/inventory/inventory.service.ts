
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Inventory } from './inventory.entity';

@Injectable()
export class InventoryService {
  constructor(
    @InjectRepository(Inventory)
    private readonly inventoryRepository: Repository<Inventory>,
  ) {}

  async findAll(): Promise<Inventory[]> {
    return this.inventoryRepository.find();
  }

  async findOne(id: number): Promise<Inventory> {
    const inventory = await this.inventoryRepository.findOne({ where: { id } });
    if (!inventory) {
      throw new NotFoundException(`Inventory with id ${id} not found`);
    }
    return inventory;
  }

  async create(data: Partial<Inventory>): Promise<Inventory> {
    const inventory = this.inventoryRepository.create(data);
    return this.inventoryRepository.save(inventory);
  }

  async update(id: number, data: Partial<Inventory>): Promise<Inventory> {
    await this.inventoryRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.inventoryRepository.delete(id);
  }
}
