// src/roles/role.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, OneToMany } from 'typeorm';
import { UserRole } from '../users/user-role.entity';

@Entity('Role')
export class Role {
  @PrimaryGeneratedColumn({ name: 'role_id' })
  id: number;

  @Column({ length: 50, unique: true })
  name: string;

  @Column({ length: 255, nullable: true })
  description: string;

  @CreateDateColumn({ name: 'creation_date' })
  creationDate: Date;

  // Relación opcional: Un rol puede tener múltiples asignaciones (UserRole)
  @OneToMany(() => UserRole, (userRole) => userRole.role)
  userRoles: UserRole[];
}
