
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Product } from '../products/product.entity';

@Entity('Alerta_Stock')
export class StockAlert {
  @PrimaryGeneratedColumn({ name: 'id_alerta' })
  id: number;

  @ManyToOne(() => Product)
  @JoinColumn({ name: 'id_producto' })
  product: Product;

  @Column()
  nivel_minimo: number;

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  estado: 'Activo' | 'Inactivo';

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;
}
