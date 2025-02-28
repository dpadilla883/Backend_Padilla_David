
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('Categoria')
export class Category {
  @PrimaryGeneratedColumn({ name: 'id_categoria' })
  id: number;

  @Column({ length: 50 })
  nombre: string;

  @Column({ length: 255, nullable: true })
  descripcion: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;
}
