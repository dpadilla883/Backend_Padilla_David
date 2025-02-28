
import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { Order } from './order.entity';
import { OrderDetail } from './order-detail.entity';

@Controller('orders')
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) {}

  
  @Get()
  async findAllOrders(): Promise<Order[]> {
    return this.ordersService.findAllOrders();
  }

  
  @Get(':id')
  async findOneOrder(@Param('id') id: number): Promise<Order> {
    return this.ordersService.findOneOrder(id);
  }

 
  @Post()
  async createOrder(@Body() data: Partial<Order>): Promise<Order> {
    return this.ordersService.createOrder(data);
  }

 
  @Put(':id')
  async updateOrder(@Param('id') id: number, @Body() data: Partial<Order>): Promise<Order> {
    return this.ordersService.updateOrder(id, data);
  }

  
  @Delete(':id')
  async removeOrder(@Param('id') id: number): Promise<void> {
    return this.ordersService.removeOrder(id);
  }

  
  @Get('details')
  async findAllDetails(): Promise<OrderDetail[]> {
    return this.ordersService.findAllDetails();
  }


  @Get('details/:id')
  async findOneDetail(@Param('id') id: number): Promise<OrderDetail> {
    return this.ordersService.findOneDetail(id);
  }

  
  @Post('details')
  async createDetail(@Body() data: Partial<OrderDetail>): Promise<OrderDetail> {
    return this.ordersService.createDetail(data);
  }

  
  @Put('details/:id')
  async updateDetail(@Param('id') id: number, @Body() data: Partial<OrderDetail>): Promise<OrderDetail> {
    return this.ordersService.updateDetail(id, data);
  }

 
  @Delete('details/:id')
  async removeDetail(@Param('id') id: number): Promise<void> {
    return this.ordersService.removeDetail(id);
  }
}
