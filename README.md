# Detalles Proyecto Genesis

> __Script de la Base de datos__
```sql
CREATE DATABASE DBGENESIS

USE DBGENESIS

CREATE TABLE IF NOT EXISTS tasa_cambio(
 id_peticion BIGINT  NOT NULL AUTO_INCREMENT PRIMARY KEY,
 fecha DATE NOT NULL,
 hora TIME NOT NULL,
 tasa_venta DECIMAL(10, 5) NOT NULL,
 tasa_compra DECIMAL(10, 5) NOT NULL
);
```


#### Pasos para levantar los servicios y la aplicación

1. Clonar el repositorio:

   ```console
   $ git clone https://github.com/AlfonsoOvalle/genesisPtuebaTecnica.git
   ```

2. En la carpeta raiz localizar el siguiente directorios:

   ```console
      BackEndGenesis(Java)
      FrontEndGenesis (React js)
      SQL 
   ```

3. Ingresar al directorio SQL y ejecutar el Script.sql, para poder crear la base de datos y las tablas a utilizar:

   ```console
   $ Asegurarse que la base de datos DBGENESIS exista
   ```
   
4. Abrir el BackEnd en el editor preferido, verificando la ruta del servidor de base dedatos tenga la ip y otras configuraciones que se detallan en el archivo de propiedades:

   ```console
    spring.datasource.url=jdbc:mysql://localhost:3306/DBGENESIS
    spring.datasource.username=<usuario>
    spring.datasource.password=<password>
   ```
   Ejecutar el proyecto verificando que este corriendo en el puerto 8080:
     
5. Abrir el FrontEnd y ejecutando el siguiente comando para descargar las dependencias:
   ```console
   $ npm install
   ```
6. Ejecutar el FrontEnd con el siguiente comando:
   ```console
   $ npm start
   ```
   Si no hay ningun error la aplicacion se ejecutara en el puerto 3000:
   
6. Detalle de servicios y puertos:
   ```console
   $ BackEnd(Java), Puerto: localhost:8080
   $ FrontEnd(React), Puerto: localhost:3000
   $ Base de Datos(MySql), Puerto: 3306
   ```

6. Detalle Servicios:
     ```console
   $ url: localhost:8080/variablesDisponibles
     metodo: GET
     Entrada: N/A
     
   $ url: localhost:8080/TipoCambioRango
     metodo: POST
     Entrada: {
    "fechainit":"01-01-2024",
    "fechafin":"01-08-2024"
    }

   $ url: localhost:8080/TipoCambioFechaInicial
     metodo: POST
     Entrada: {
    "fechainit":"01-01-2000"
    }


   $ url: localhost:8080/obtenerTasaPromedio
     metodo: GET
     Entrada: N/A

   $ url: localhost:8080/agregarTasaPromedio
     metodo: POST
     Entrada: {
    "fecha":"2024-07-25",
    "hora":"12:45:25",
    "tasa_venta":"1.90",
    "tasa_compra":"10.52"
    }         
   ``` 
