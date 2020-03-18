-- to create a new database
CREATE DATABASE Parcial_1;

-- to use database
use Parcial_1;

-- creating a new table
CREATE TABLE RESTAURANTE(
	idRestaurante INT NOT NULL PRIMARY KEY IDENTITY,
	NIT VARCHAR(20) NOT NULL,
	razonSocial VARCHAR(30) NOT NULL,
	especialidad VARCHAR(20) NOT NULL,
	telefono INT NOT NULL
);

CREATE TABLE PRODUCTO(
	idProducto INT NOT NULL PRIMARY KEY IDENTITY,
	categoria VARCHAR(20) NOT NULL,
	foto IMAGE NOT NULL,
	descripcion TEXT NOT NULL,
	precio FLOAT(15) NOT NULL,
	puntuacion FLOAT(10),
	numVotos INT,
	acumulacionPuntos INT,
	idRestaurante INT NOT NULL,
	ingredientes VARCHAR(500) NOT NULL
);

CREATE TABLE MENU(
	idMenu INT NOT NULL PRIMARY KEY IDENTITY,
	idProducto_1 INT NOT NULL,
	idProducto_2 INT NOT NULL,
	precio FLOAT NOT NULL,
	categoria VARCHAR(20) NOT NULL
):

CREATE TABLE USUARIO(
	idUsuario INT NOT NULL PRIMARY KEY IDENTITY,
	nombre VARCHAR(30) NOT NULL,
	apellido VARCHAR(30) NOT NULL,
	direccion VARCHAR(40) NOT NULL,
	ultimoMenuComprado INT, 
	ultimoProductoComprado INT
);
-- to show all tables
show tables;

-- to describe table
describe USUARIO;
describe MENU;
describe PRODUCTO;
describe RESTAURANTE;