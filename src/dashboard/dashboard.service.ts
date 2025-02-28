import { Injectable } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { OrdersService } from '../orders/orders.service';

@Injectable()
export class DashboardService {
  constructor(
    private readonly productsService: ProductsService,
    private readonly ordersService: OrdersService,
  ) {}

  async getDashboardData() {
    const products = await this.productsService.findAll();
    
    const stockBajo = products.filter((p) => p.stock < p.stockMinimum);

   
    const pedidosPendientes = await this.ordersService.findByStatus('pendiente');

    return {
      totalProducts: products.length,
      stockBajoCount: stockBajo.length,
      pedidosPendientesCount: pedidosPendientes.length,
    };
  }
}
