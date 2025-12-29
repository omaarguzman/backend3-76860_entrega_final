# Proyecto Backend III - API de Adopción de Mascotas (Entrega 1)

Este repositorio corresponde a la entrega final del curso de Backend de Coderhouse (Comisión #76860). Es una API RESTful construida con Node.js, Express y MongoDB, diseñada para gestionar usuarios, mascotas y adopciones.

El proyecto implementa una arquitectura por capas (DAO, Repositorio, Servicios, Controladores) para una clara separación de responsabilidades y mantenibilidad.

## 🚀 Tecnologías Principales

* **Node.js**
* **Express:** Para el manejo del servidor y las rutas.
* **MongoDB:** Como base de datos no relacional.
* **Mongoose:** Como ODM para modelar los datos de la aplicación.
* **JWT (jsonwebtoken):** Para la autenticación y manejo de sesiones basadas en tokens.
* **Bcrypt:** Para el hasheo y validación de contraseñas.
* **Multer:** Para la subida de archivos (imágenes de mascotas).
* **@faker-js/faker:** Para la generación de datos de prueba (mocking).

## 🏛️ Arquitectura

El proyecto sigue un patrón de diseño basado en capas para desacoplar la lógica:

* **`src/dao` (Data Access Object):** Capa de persistencia. Interactúa directamente con la base de datos (Mongoose).
* **`src/repository` (Repositorio):** Abstrae la lógica de acceso a datos. Utiliza un repositorio genérico para las operaciones CRUD comunes.
* **`src/services` (Servicios):** Orquesta la lógica de negocio. Es el punto de entrada para los controladores.
* **`src/controllers` (Controladores):** Maneja la lógica de las peticiones (request) y respuestas (response) HTTP.
* **`src/routes` (Rutas):** Define los endpoints de la API y los asocia a un controlador.
* **`src/utils`:** Contiene funciones de ayuda (helpers) como el hasheo de contraseñas y la configuración de `multer`.

## 🐳 Docker

El proyecto ha sido dockerizado para facilitar su despliegue.

### Instalación y Ejecución

1. **Descargar la imagen:**
   ```bash
   docker pull jogrdocker/adopciones-app:latest