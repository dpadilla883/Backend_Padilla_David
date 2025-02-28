# Nombre: David Padilla

# NRC: 1406

# Backend Proyecto PYMEs

## Descripción

Este proyecto backend está desarrollado con NestJS y TypeORM, y utiliza MySQL como sistema de gestión de bases de datos. Proporciona una API REST para gestionar las funcionalidades de la aplicación (usuarios, productos, inventario, pedidos, etc.).

## Instalación

1. **Clonar el repositorio**

   ```bash
   git clone https://github.com/dpadilla883/Backend_Padilla_David.git
   ```
   ```bash
   cd Backend_Padilla_David
   ```
2. **Instalar dependencias**

   ```bash
   npm install
   ```
   ```bash
   npm install -g @nestjs/cli
   ```
   ```bash
   npm install --save @nestjs/typeorm typeorm mysql2
   ```

3. **Configurar la Base de Datos**

   En MySQL Workbench vamos a crear una base de datos con el nombre
   gestion_proyecto con sus respectivas tablas y atributos.
```bash
   -- Crear la base de datos gestion_proyecto
DROP DATABASE IF EXISTS gestion_proyecto;
CREATE DATABASE gestion_proyecto;
USE gestion_proyecto;
```
-- Tabla: categoria
CREATE TABLE categoria (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT
);

-- Tabla: empresa
CREATE TABLE empresa (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    direccion TEXT,
    telefono VARCHAR(50),
    email VARCHAR(100) UNIQUE
);

-- Tabla: proveedor
CREATE TABLE proveedor (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    contacto VARCHAR(255),
    telefono VARCHAR(50),
    email VARCHAR(100) UNIQUE,
    empresa_id INT,
    FOREIGN KEY (empresa_id) REFERENCES empresa(id) ON DELETE SET NULL
);

-- Tabla: producto
CREATE TABLE producto (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL,
    categoria_id INT,
    proveedor_id INT,
    FOREIGN KEY (categoria_id) REFERENCES categoria(id) ON DELETE SET NULL,
    FOREIGN KEY (proveedor_id) REFERENCES proveedor(id) ON DELETE SET NULL
);

-- Tabla: inventario
CREATE TABLE inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cantidad INT NOT NULL,
    fecha_actualizacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (producto_id) REFERENCES producto(id) ON DELETE CASCADE
);

-- Tabla: movimiento_inventario
CREATE TABLE movimiento_inventario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    inventario_id INT,
    tipo_movimiento ENUM('entrada', 'salida') NOT NULL,
    cantidad INT NOT NULL,
    fecha TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (inventario_id) REFERENCES inventario(id) ON DELETE CASCADE
);

-- Tabla: pedido
CREATE TABLE pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fecha_pedido DATE NOT NULL,
    estado ENUM('pendiente', 'procesado', 'cancelado') NOT NULL,
    proveedor_id INT,
    FOREIGN KEY (proveedor_id) REFERENCES proveedor(id) ON DELETE SET NULL
);

-- Tabla: detalle_pedido
CREATE TABLE detalle_pedido (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pedido_id INT,
    producto_id INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    FOREIGN KEY (pedido_id) REFERENCES pedido(id) ON DELETE CASCADE,
    FOREIGN KEY (producto_id) REFERENCES producto(id) ON DELETE CASCADE
);

-- Tabla: alerta_stock
CREATE TABLE alerta_stock (
    id INT AUTO_INCREMENT PRIMARY KEY,
    producto_id INT,
    cantidad_minima INT NOT NULL,
    notificado BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (producto_id) REFERENCES producto(id) ON DELETE CASCADE
);

-- Tabla: usuario
CREATE TABLE usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    contrasena VARCHAR(255) NOT NULL
);

-- Tabla: rol
CREATE TABLE rol (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL UNIQUE
);

-- Tabla: usuario_rol (relación entre usuarios y roles)
CREATE TABLE usuario_rol (
    usuario_id INT,
    rol_id INT,
    PRIMARY KEY (usuario_id, rol_id),
    FOREIGN KEY (usuario_id) REFERENCES usuario(id) ON DELETE CASCADE,
    FOREIGN KEY (rol_id) REFERENCES rol(id) ON DELETE CASCADE
);

-- Tabla: reportes
CREATE TABLE reportes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(255) NOT NULL,
    descripcion TEXT,
    fecha_generacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


5. **Iniciar el servidor**

   Para desarrollo:

   ```bash
   npm run start:dev
   ```

   Para producción:

   ```bash
   npm run start:prod
   ```

   El servidor se ejecutará generalmente en `http://localhost:3000`.

## Uso

- La API expone múltiples endpoints, por ejemplo:
  - **Autenticación:**  
    - `POST /auth/register` para registrar un nuevo usuario.
    - `POST /auth/login` para iniciar sesión.
  - **Usuarios:**  
    - `GET /users` para obtener la lista de usuarios.
    - `POST /users`, `PUT /users/:id`, `DELETE /users/:id` para crear, actualizar y eliminar usuarios.
  - **Productos, Inventario, Pedidos, etc.:**  
    - Consulta la documentación de endpoints o los controladores correspondientes.

- Para el backend se puede probar la API usando Postman.

## Requisitos Previos

- [Node.js](https://nodejs.org/) 
- [npm](https://www.npmjs.com/)
- [MySQL Server](https://www.mysql.com/) 
- [Git](https://git-scm.com/)
  
