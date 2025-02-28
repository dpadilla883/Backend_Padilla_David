
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Company } from '../companies/company.entity';
import { User } from '../users/user.entity';

export enum ReportType {
  INVENTORY = 'inventory',
  SALES = 'sales',
  LOSSES = 'losses',
}

@Entity('Report')
export class Report {
  @PrimaryGeneratedColumn({ name: 'report_id' })
  id: number;

  @ManyToOne(() => Company)
  @JoinColumn({ name: 'company_id' })
  company: Company;

  @Column({ type: 'enum', enum: ReportType, default: ReportType.INVENTORY })
  type: ReportType;

  @CreateDateColumn({ name: 'generation_date' })
  generationDate: Date;

  @Column({ name: 'pdf_file', length: 255, nullable: true })
  pdfFile: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
