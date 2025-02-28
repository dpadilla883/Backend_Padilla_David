
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StockAlert } from './stock-alert.entity';
import {  NotFoundException } from '@nestjs/common';

@Injectable()
export class AlertsService {
  constructor(
    @InjectRepository(StockAlert)
    private alertsRepository: Repository<StockAlert>,
  ) {}

  async findAll(): Promise<StockAlert[]> {
    
    return this.alertsRepository.find({ relations: ['product'] });
  }

  async create(alertData: Partial<StockAlert>): Promise<StockAlert> {
    const alert = this.alertsRepository.create(alertData);
    return this.alertsRepository.save(alert);
  }

  async findOne(id: number): Promise<StockAlert> {
    const alert = await this.alertsRepository.findOne({ where: { id }, relations: ['product'] });
    if (!alert) {
      throw new NotFoundException(`StockAlert con ID ${id} no existe`);
    }
    return alert;
  }

  async update(id: number, updateData: Partial<StockAlert>): Promise<StockAlert> {
    await this.alertsRepository.update(id, updateData);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.alertsRepository.delete(id);
  }
}
