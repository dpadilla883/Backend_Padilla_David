
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from './provider.entity';

@Injectable()
export class ProvidersService {
  constructor(
    @InjectRepository(Provider)
    private readonly providersRepository: Repository<Provider>,
  ) {}

  async findAll(): Promise<Provider[]> {
    return this.providersRepository.find();
  }

  async findOne(id: number): Promise<Provider> {
    const provider = await this.providersRepository.findOne({ where: { id } });
    if (!provider) {
      throw new NotFoundException(`Provider with id ${id} not found`);
    }
    return provider;
  }

  async create(data: Partial<Provider>): Promise<Provider> {
    const newProvider = this.providersRepository.create(data);
    return this.providersRepository.save(newProvider);
  }

  async update(id: number, data: Partial<Provider>): Promise<Provider> {
    await this.providersRepository.update(id, data);
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.providersRepository.delete(id);
  }
}
