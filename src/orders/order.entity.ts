
import { Entity, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, Column } from 'typeorm';
import { Company } from '../companies/company.entity';

@Entity('Pedido')
export class Order {
  @PrimaryGeneratedColumn({ name: 'id_pedido' })
  id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'id_empresa' })
  company: Company;

  @CreateDateColumn({ name: 'fecha_solicitud' })
  fecha_solicitud: Date;

  @Column({ type: 'datetime', nullable: true })
  fecha_entrega: Date;

  @Column({ type: 'enum', enum: ['pendiente', 'entregado', 'cancelado'], default: 'pendiente' })
  estado: 'pendiente' | 'entregado' | 'cancelado';
}
