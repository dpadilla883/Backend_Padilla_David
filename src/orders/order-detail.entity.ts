
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { Order } from './order.entity';
import { Product } from '../products/product.entity';

@Entity('Detalle_Pedido')
export class OrderDetail {
  @PrimaryGeneratedColumn({ name: 'id_detalle_pedido' })
  id: number;

  @ManyToOne(() => Order)
  @JoinColumn({ name: 'id_pedido' })
  order: Order;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'id_producto' })
  product: Product;

  @Column()
  cantidad: number;

  @Column('decimal', { precision: 10, scale: 2 })
  precio_unitario: number;
}
