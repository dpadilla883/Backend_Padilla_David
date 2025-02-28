
import { Entity, PrimaryColumn, CreateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { User } from './user.entity';
import { Role } from '../roles/roles.entity';

@Entity('Usuario_Rol')
export class UserRole {
  @PrimaryColumn({ name: 'id_usuario' })
  id_usuario: number;

  @PrimaryColumn({ name: 'id_rol' })
  id_rol: number;

  @CreateDateColumn({ name: 'fecha_asignacion' })
  fecha_asignacion: Date;

  @ManyToOne(() => User, user => user.userRoles)
  @JoinColumn({ name: 'id_usuario' })
  user: User;

  @ManyToOne(() => Role, role => role.userRoles)
  @JoinColumn({ name: 'id_rol' })
  role: Role;
}
