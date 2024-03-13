<em> Bienvenidos a mi primer proyecto Backend </em>

### Backend Estudio Tattoo

<details>
  <summary>Contenido </summary>
  <ol>
  <li><a href="#Objetivo">Objetivo</a></li>

  <li><a href="#sobre-el-proyecto-🔎">Sobre el proyecto</a></li>
  <li><a href="#Stack-🚀">Stack</a></li>
  <li><a href="#Diagrama">Diagrama</a></li>
  <li><a href="#Licencia">Licencia</a></li>
  <li><a href="#Instalacion">Instalación</a></li>
  <li><a href="#Webgrafia">Webgrafia</a></li>
  <li><a href="#Contacto">Contact0</a></li>
  </ol>
</details>

## Objetivo-🎯

Crear un sistema de gestión de citas para un estudio de tatuajes.

## Sobre el proyecto-🔎

El cliente deberá ser capaz de registrarse en la aplicación, hacer login y acceder a su área de cliente, todo ello visualmente desde el navegador.
citas: modificarlas y anularlas.
Podrá crear citas con tatuadores y cada tatuador tendrá
un portfolio de tatuajes,

También existirá una zona de usuario con sus datos personales, que solo
podrá ver él mismo.

## Stack 🚀 🚀

MySQL ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white)

JavaScript ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

🛠️ TypeORM, ES6 Javascript, API REST
Docker, MySQL , TS, funcionalidad de async/await

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>
<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>

## Diagrama BD

<img src="./img/newDiagramDB.png" alt="DB" />

Registro de usuarios

● Login de usuarios

● Perfil de usuario

● Modificación de datos del perfil

● Creación de citas

● Editar citas

● Eliminación de citas

● Ver todas las citas que tengo como cliente (solo las propias)

● Ver todas las citas existentes (role tatuador).

● Listar tatuadores

## Licencia

Este proyecto se encuentra bajo licencia de "Mi Nombre"

# Endpoints principales

- AUTH

  - REGISTER

          POST http://localhost:

    body:

    ```js
        {
            "user": "David",
            "email": "david@david.com",
            "password": "princes"
        }
    ```

  - LOGIN

          POST

    body:

    ```js
        {
            "user": "David",
            "email": "david@david.com",
            "password": "princes"
        }
    ```

- - RECUPERAR RU

          GET

  - ...

### Users (esto remover al fin de semana)

| Método | URI                                        | Acción               | Rol   |
| ------ | ------------------------------------------ | -------------------- | ----- |
| GET    | `/api/users/profile`                       | Detalles del perfil  | user  |
| PUT    | `/api/users/profile`                       | Actualiza perfil     | user  |
| GET    | `/api/users/appointments`                  | Obtener mis citas    | user  |
| GET    | `/api/users/services`                      | Obtener servicios    | user  |
| POST   | `/api/users/appointments`                  | Agregar citas        | user  |
| DELETE | `/api/users/service/{serviceId}`           | Eliminar mi servicio | user  |
| DELETE | `/api/users/appointments/{appointmentsId}` | Eliminar mi cita     | user  |
| POST   | `/api/users`                               | Nuevo usuario        | admin |
| GET    | `/api/users`                               | Lista de usuarios    | admin |
| GET    | `/api/users/{id}`                          | Detalles de usuario  | admin |
| PUT    | `/api/users/{id}`                          | Actualiza usuario    | admin |
| DELETE | `/api/users/{id}`                          | Elimina usuario      | admin |
| GET    | `/api/users/{id}/appointments`             | Citas por usuario    | admin |
| PUT    | `/api/users/{id}/role`                     | Cambiar rol          | admin |

### SERVICES

| Método | URI                  | Acción             | Rol   |
| ------ | -------------------- | ------------------ | ----- |
| GET    | `/api/service`       | Lista de servicios | -     |
| POST   | `/api/service`       | Nuevo servicio     | admin |
| GET    | `/api/tatuador/{id}` | Detalles tatuador  | -     |
| PUT    | `/api/tatuador/{id}` | Actualiza tatuador | admin |
| DELETE | `/api/tatuador/{id}` | Elimina tatuador   | admin |

### APPOINTMENTS

| Método | URI                     | Acción         | Rol   |
| ------ | ----------------------- | -------------- | ----- |
| GET    | `/api/appointment`      | Lista de citas | -     |
| POST   | `/api/appointment`      | Nueva cita     | admin |
| GET    | `/api/appoitnment/{id}` | Detalles citas | -     |
| PUT    | `/api/appointment/{id}` | Actualiza cita | admin |
| DELETE | `/api/appointment/{id}` | Elimina cita   | admin |

### Autenticación

| Método | URI                  | Acción                    |
| ------ | -------------------- | ------------------------- |
| POST   | `/api/auth/register` | Registra un nuevo usuario |
| POST   | `/api/auth/login`    | Iniciar sesión.           |

## Instalación

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1.  Clona este repositorio: `git clone`
2.  Instala las dependencias: `npm install`
3.  Inicia la aplicación: `npm start`
4.  Instala dependencias `package json` `gitgnore`
    y modulos node: `node modules`

## Webgrafia:

Para desarrollar este proyecto puedes consultar en:

<a href="https://typeorm.io/" target="_blank"> Documentación TypeORM</a>

<a href="https://jwt.io/" target="_blank"> Documentación Json Web Token</a>

<a href="https://fakerjs.dev/" target="_blank"> Faker Data Generator </a>

## Contact 👩🏽‍💻

<a href="https://www.linkedin.com/in/marissarico" target="_blank"> <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
