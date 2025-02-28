
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { OrderDetail } from './order-detail.entity';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepository: Repository<Order>,

    @InjectRepository(OrderDetail)
    private readonly detailRepository: Repository<OrderDetail>,
  ) {}

 
  async findAllOrders(): Promise<Order[]> {
    
    return this.orderRepository.find();
  }

  async findOneOrder(id: number): Promise<Order> {
    const order = await this.orderRepository.findOne({ where: { id } });
    if (!order) {
      throw new NotFoundException(`Pedido con ID ${id} no encontrado`);
    }
    return order;
  }

  async createOrder(data: Partial<Order>): Promise<Order> {
    const newOrder = this.orderRepository.create(data);
    return this.orderRepository.save(newOrder);
  }

  async updateOrder(id: number, data: Partial<Order>): Promise<Order> {
    await this.orderRepository.update(id, data);
    return this.findOneOrder(id);
  }

  async removeOrder(id: number): Promise<void> {
    await this.orderRepository.delete(id);
  }

  
  async findAllDetails(): Promise<OrderDetail[]> {
    
    return this.detailRepository.find();
  }

  async findOneDetail(id: number): Promise<OrderDetail> {
    const detail = await this.detailRepository.findOne({ where: { id } });
    if (!detail) {
      throw new NotFoundException(`Detalle de pedido con ID ${id} no encontrado`);
    }
    return detail;
  }

  async createDetail(data: Partial<OrderDetail>): Promise<OrderDetail> {
    const newDetail = this.detailRepository.create(data);
    return this.detailRepository.save(newDetail);
  }

  async updateDetail(id: number, data: Partial<OrderDetail>): Promise<OrderDetail> {
    await this.detailRepository.update(id, data);
    return this.findOneDetail(id);
  }

  async removeDetail(id: number): Promise<void> {
    await this.detailRepository.delete(id);
  }
  async findByStatus(status: 'pendiente' | 'entregado' | 'cancelado'): Promise<Order[]> {
    return this.orderRepository.find({
      where: { estado: status },
    });
  }
}
