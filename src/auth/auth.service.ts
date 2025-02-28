
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  
  async validateUser(email: string, password: string): Promise<any> {
    
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }
    
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Contraseña inválida');
    }
    
    const { password_hash, ...result } = user;
    return result;
  }

 
  async login(user: any) {
    const payload = { email: user.email, sub: user.id_usuario };
    return {
      access_token: this.jwtService.sign(payload),
      user,
    };
  }
}
