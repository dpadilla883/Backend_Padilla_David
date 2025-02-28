
import { Entity, Column, JoinColumn,PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn, ManyToOne, OneToMany } from 'typeorm';
import { Company } from '../companies/company.entity';
import { UserRole } from './user-role.entity';

@Entity('usuario')
export class User {
  @PrimaryGeneratedColumn()
  id_usuario: number;

  @Column()
  nombre_completo: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  telefono: string;

  @Column({ default: 'Activo' })
  estado: string;

  @CreateDateColumn({ name: 'fecha_creacion' })
  fecha_creacion: Date;

  @Column({ nullable: true })
  ultima_conexion: Date;

  @Column()
  password_hash: string;

  @ManyToOne(() => Company, (company) => company.users)
  id_empresa: Company;

  
  
  @JoinColumn({ name: 'id_empresa' }) 
  company: Company;

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];
}
