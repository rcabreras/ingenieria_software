
# Sistema de Empleo FUCN

Este proyecto es una aplicación web desarrollada para gestionar ofertas de empleo para los egresados de la FUCN, permitiendo a las empresas publicar vacantes y a los egresados postularse a ellas. Incluye funcionalidades para la gestión de perfiles, empresas y ofertas de empleo, así como una página de inicio de sesión para la autenticación.

## Características

- **Gestión de Empleos**: Crear, editar, eliminar y listar ofertas de empleo.
- **Gestión de Perfiles**: Administrar perfiles de egresados con funcionalidades de búsqueda, edición y creación.
- **Gestión de Empresas**: Administrar detalles de las empresas, incluyendo la creación, edición y eliminación.
- **Autenticación**: Sistema de inicio de sesión seguro con protección de rutas para usuarios autenticados.

## Tecnologías Utilizadas

- **Frontend**: React, React Router
- **Backend**: Node.js, Express
- **Base de Datos**: MongoDB
- **Estilos**: CSS

## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto localmente:

### Requisitos Previos

- Node.js (v14 o posterior)
- MongoDB (localmente o en la nube, como MongoDB Atlas)

### Configuración

1. **Clonar el Repositorio**:

   ```bash
   git clone https://github.com/tuusuario/fucn-employment-system.git
   cd fucn-employment-system
   ```

2. **Instalar Dependencias**:

   Navega a las carpetas de frontend y backend e instala las dependencias:

   ```bash
   # Para el backend
   cd backend
   npm install

   # Para el frontend
   cd ../frontend
   npm install
   ```

3. **Configurar Variables de Entorno**:

   En la carpeta del backend, crea un archivo `.env` y añade tu configuración:

   ```
   MONGODB_URI=tu_mongodb_uri
   PORT=3000
   JWT_SECRET=tu_jwt_secret
   ```

4. **Ejecutar el Backend**:

   En la carpeta del backend, inicia el servidor:

   ```bash
   npm start
   ```

5. **Ejecutar el Frontend**:

   En la carpeta del frontend, inicia la aplicación React:

   ```bash
   npm start
   ```

   El frontend estará disponible en `http://localhost:3001`.

## Uso

- **Inicio de Sesión**: Accede a la página de login e ingresa tus credenciales para acceder al sistema.
- **Gestionar Empleos**: Navega a la sección "Empleos" para ver, crear, editar o eliminar ofertas de empleo.
- **Gestionar Perfiles**: Navega a la sección "Perfiles" para administrar perfiles de egresados.
- **Gestionar Empresas**: Navega a la sección "Empresas" para administrar los detalles de las empresas.

## Endpoints de la API

### Empleos

- `GET /api/jobs`: Obtener todas las ofertas de empleo.
- `POST /api/jobs`: Crear una nueva oferta de empleo.
- `PUT /api/jobs/:id`: Actualizar una oferta de empleo.
- `DELETE /api/jobs/:id`: Eliminar una oferta de empleo.

### Perfiles

- `GET /api/graduates`: Obtener todos los perfiles.
- `POST /api/graduates`: Crear un nuevo perfil.
- `PUT /api/graduates/:id`: Actualizar un perfil.
- `DELETE /api/graduates/:id`: Eliminar un perfil.

### Empresas

- `GET /api/companies`: Obtener todas las empresas.
- `POST /api/companies`: Crear una nueva empresa.
- `PUT /api/companies/:id`: Actualizar una empresa.
- `DELETE /api/companies/:id`: Eliminar una empresa.

## Pruebas

Para probar los endpoints, puedes usar Postman o cualquier otra herramienta de prueba de API. Por ejemplo:

- **Obtener Todos los Perfiles**: Envía una solicitud GET a `http://localhost:3000/api/profiles`.

## Solución de Problemas

- **Errores Comunes**:
  - Asegúrate de que MongoDB esté ejecutándose y sea accesible.
  - Verifica las variables de entorno para valores correctos.
  - Reinicia el servidor si los cambios no se reflejan.

## Contribuciones

¡Las contribuciones son bienvenidas! Por favor, haz un fork del repositorio y envía un pull request para cualquier mejora o corrección de errores.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
