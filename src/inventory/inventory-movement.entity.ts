
/*
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../products/product.entity';
import { User } from '../users/user.entity';

@Entity('Movimiento_Inventario')
export class InventoryMovement {
  @PrimaryGeneratedColumn({ name: 'id_movimiento' })
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'id_producto' })
  product: Product;

  @Column({ type: 'enum', enum: ['entrada', 'salida', 'ajuste'] })
  tipo_movimiento: 'entrada' | 'salida' | 'ajuste';

  @Column()
  cantidad: number;

  @CreateDateColumn({ name: 'fecha_movimiento' })
  fecha_movimiento: Date;

  @Column({ length: 255, nullable: true })
  motivo: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'id_usuario' })
  user: User;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  costo_unitario: number;

  @Column({ length: 100, nullable: true })
  ubicacion: string;
}

*/