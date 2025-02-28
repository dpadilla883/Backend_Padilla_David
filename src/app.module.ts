// src/app.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AlertsModule } from './alerts/alerts.module';

import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

import { CategoriesModule } from './categories/categories.module';

import { CompaniesModule } from './companies/companies.module';

import { InventoryModule } from './inventory/inventory.module';

import { OrdersModule } from './orders/orders.module';

import { ProductsModule } from './products/products.module';

import { ProvidersModule } from './providers/providers.module';

import { ReportsModule } from './reports/reports.module';

import { RolesModule } from './roles/roles.module';

import { DashboardModule } from './dashboard/dashboard.module';
// Importa los módulos que vayas a crear (AuthModule, UsersModule, etc.)
// Por ejemplo, import { UsersModule } from './users/users.module';

@Module({
  imports: [
    // Configuración de la conexión a MySQL:
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',         // Dirección del servidor MySQL (probablemente localhost)
      port: 3306,                // Puerto MySQL
      username: 'root',    // Usuario configurado en MySQL Workbench
      password: 'davs321.', // Contraseña del usuario
      database: 'gestion_proyecto',     // Nombre de la base de datos a utilizar
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      //synchronize: true, 
      //dropSchema: true,       // Útil en desarrollo (actualiza el esquema automáticamente)
    }),
    // Importa aquí tus módulos (UsersModule, AuthModule, etc.)
    AlertsModule,
    UsersModule,
    CategoriesModule,
    AuthModule,
    CompaniesModule,
    InventoryModule,
    OrdersModule,
    ProductsModule,
    ProvidersModule,
    ReportsModule,
    RolesModule,
    DashboardModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
