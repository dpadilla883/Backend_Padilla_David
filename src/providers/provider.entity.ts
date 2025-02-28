
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn } from 'typeorm';

@Entity('Provider')
export class Provider {
  @PrimaryGeneratedColumn({ name: 'provider_id' })
  id: number;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  contact: string;

  @Column({ length: 20, nullable: true })
  phone: string;

  @Column({ length: 100, unique: true })
  email: string;

  @Column({ length: 255, nullable: true })
  address: string;

  @CreateDateColumn({ name: 'creation_date' })
  creationDate: Date;
}
