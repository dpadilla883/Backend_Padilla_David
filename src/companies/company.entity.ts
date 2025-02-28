
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Product } from '../products/product.entity';

@Entity('Empresa')
export class Company {
  @PrimaryGeneratedColumn({ name: 'id_empresa' })
  id: number;

  @Column({ length: 100 })
  nombre: string;

  @Column({ length: 20, unique: true })
  ruc: string;

  @Column({ length: 255 })
  direccion: string;

  @Column({ length: 20, nullable: true })
  telefono: string;

  @Column({ length: 100, nullable: true })
  email_contacto: string;

  @Column({ length: 50, nullable: true })
  sector: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;

  @Column({ type: 'enum', enum: ['Activo', 'Inactivo'], default: 'Activo' })
  estado: 'Activo' | 'Inactivo';

  
  @OneToMany(() => User, (user) => user.company)
  users: User[];

  @OneToMany(() => Product, (product) => product.company)
  products: Product[];
}
