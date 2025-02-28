
import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('Inventario')
export class Inventory {
  @PrimaryGeneratedColumn({ name: 'id_inventario' })
  id: number;

  
  @Column({ name: 'company_id', type: 'int' })
  company_id: number;

  @Column({ type: 'datetime', default: () => 'CURRENT_TIMESTAMP' })
  fecha_actualizacion: Date;
}
