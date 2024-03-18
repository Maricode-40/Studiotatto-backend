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

Citas: modificarlas y anularlas. Podrá crear citas con tatuadores y cada tatuador tendrá
un portfolio de tatuajes (servicios).

También existirá una zona de usuario con sus datos personales, que solo
podrá ver él mismo.

## Stack 🚀 🚀

lenguaje principal - Typescript

MySQL ![MySQL](https://img.shields.io/badge/mysql-%2300000f.svg?style=for-the-badge&logo=mysql&logoColor=white)

JavaScript ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

🛠️ TypeORM, ES6 Javascript, API REST
Docker, MySQL , funcionalidad de async/await

<a href="https://www.expressjs.com/">
    <img src= "https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
</a>

<a href="https://nodejs.org/es/">
    <img src= "https://img.shields.io/badge/node.js-026E00?style=for-the-badge&logo=node.js&logoColor=white"/>
</a>

## Diagrama BD

<img src="./img/StudioDBmysql.png" alt="DB" />

Registro de usuarios

● Login de usuarios

● Perfil de usuario

● Modificación de datos del perfil

● Ver todas las citas existentes (role tatuador).

● Listar tatuadores

## Licencia

Este proyecto se encuentra bajo licencia de "Mi Nombre"

# Endpoints principales

- REGISTER

        POST http://localhost:3000

  body:

  ```js
     {
     "id": 70,
       "firstName":"Cristiano"
       "lastName":"Ronaldo"
       "email":"cronaldino@gmailcom",
       "password":xx
       "isActive": true,

       }
  ```

- LOGIN - AUTH

        POST  `/api/auth/login`

  body:

  ```js
      {
          "id":41
       "firstName":"Cristiano"
       "lastName":"Ronaldo"
       "email":"cronaldino@gmail.com"
       "password":xx
      }
  ```

- DETALLES DEL PERFIL- RUTA

         GET  `/api/users/profile`

-

## Instalación en local

Sigue estos pasos para instalar y ejecutar el proyecto localmente:

1.  Clona este repositorio: `git clone`
2.  Instala las dependencias: `npm install`
3.  Inicia la aplicación: `npm start`
4.  Instala dependencias `package json` `gitgnore`
    y modulos node: `node modules`
5.  Conectamos nuestro repositorio con la base de datos -en mi caso utlilize imagenes de Docker -mysql.

6.  Ejecutamos las migraciones por medio de los archivos Factories y Models (Entity) Poblar la DB por medio de los Seeders. Yo en mi caso he realizado un archivo mysql en workbench por separado.

    <img src="./img/dockermysql.png" />

7.  Ejecutamos el servidor `npm run dev`
8.  Comienza a definir cada uno de las endpoints por recurso por medio de los ficheros rutas. (EL CRUD)

9.  Comenzamos la atenticación de los usuarios por medio de un token `JWT` string codificado.

10. Este token contiene toda la información codificada y se genrara por medio de la API con todos los datos y extra información interna.

11. Por último configuramos los middleware de Autorizaciones /ErrorHandler 🎉 y 🎁 listo tienes una API lista para Servir datos.

---

## Webgrafia:

Para desarrollar este proyecto puedes consultar en:

<a href="https://typeorm.io/" target="_blank"> Documentación TypeORM</a>

<a href="https://jwt.io/" target="_blank"> Documentación Json Web Token</a>

<a href="https://fakerjs.dev/" target="_blank"> Faker Data Generator </a>

## Contact 👩🏽‍💻

<a href="https://www.linkedin.com/in/marissarico" target="_blank"> <img src="https://img.shields.io/badge/-LinkedIn-%230077B5?style=for-the-badge&logo=linkedin&logoColor=white" target="_blank"></a>
