
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { Category } from '../categories/category.entity';
import { Company } from '../companies/company.entity';
import { Provider } from '../providers/provider.entity';

@Entity('Product')
export class Product {
  @PrimaryGeneratedColumn({ name: 'product_id' })
  id: number;

  @Column({ length: 50, unique: true, nullable: true })
  barcode: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @Column({ default: 0 })
  stock: number;

 

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column('decimal', { precision: 10, scale: 2 ,nullable: true, default: 0})
purchasePrice: number;

  
  
  

  @Column('decimal', { precision: 10, scale: 2 })
  salePrice: number;

  @Column({ type: 'int', default: 0 })
  stockMinimum: number;

  @Column({ type: 'int', default: 0 })
  stockMaximum: number;

  @ManyToOne(() => Company, { nullable: true })
  @JoinColumn({ name: 'company_id' })
  company: Company;
  

  @ManyToOne(() => Provider)
  @JoinColumn({ name: 'provider_id' })
  provider: Provider;

  @CreateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  @UpdateDateColumn({ name: 'last_update' })
  lastUpdate: Date;
}
