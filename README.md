[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/LBrZCaaW)
# Taller en Parejas: Creación de un Endpoint con Express.js

Este proyecto consiste en un reto de desarrollo backend en el que se debe crear un endpoint llamado `user-info` utilizando el framework Express.js. El objetivo principal es que, al hacer una solicitud GET a este endpoint, se retorne un objeto JSON con la información de uno o dos estudiantes, dependiendo de si el equipo está compuesto por una o dos personas.

## Contexto

En este reto, debes crear un servidor Express.js que contenga dos endpoints principales. Cada uno de estos endpoints debe devolver información de los estudiantes participantes:

- `GET /user-info/1` para el primer estudiante.
- `GET /user-info/2` para el segundo estudiante (si aplica).

Si un estudiante trabaja solo, el endpoint `GET /user-info/1` será el único requerido y no debe existir el endpoint `/user-info/2`.

### Requisitos del JSON

El objeto JSON que debe retornar cada endpoint debe tener la siguiente estructura:

```json
{
  "name": "Nombre del estudiante",
  "lastName": "Apellido del estudiante",
  "email": "Correo del estudiante",
  "id": "ID de la universidad"
}
```

### Requisitos técnicos

- Crear un proyecto básico en Node.js con Express.js.
- Definir los endpoints para obtener datade los usuarios i.e `GET /user-info/1` y `GET /user-info/2` según la cantidad de integrantes del equipo, **es importante que NO queme en el código estos IDs, sino que genere un único endpoint que reciba como parámetro el ID de los estudiantes y con base en él retorne la información. OJO, valide las entradas.**
- Configurar el servidor para que escuche en el puerto `3000` o cualquier otro de tu elección.
- Asegurarse de que el servidor esté funcionando correctamente y que cada endpoint retorne el JSON adecuado.

### Instrucciones de uso

1. Clonar este repositorio en tu máquina local.
2. Instalar las dependencias del proyecto con `npm install`.
3. Definir el/los endpoint(s) en el archivo de rutas principal de Express.js.
4. Ejecutar el servidor con el comando `npm start`.
5. Probar los endpoints haciendo solicitudes GET a `http://localhost:3000/user-info/1` y `http://localhost:3000/user-info/2` (si aplica).

### Rúbrica de evaluación

| Aspecto                        | Puntuación |
| ------------------------------ | ---------- |
| Estructura del proyecto         | 1.0        |
| Implementación correcta de el/los endpoints | 1        |
| Respuesta correcta del JSON en ambos endpoints | 1.5       |
| Buenas prácticas en Express.js  | 0.5        |
| Servidor desplegado correctamente  | 1        |
| Total                          | 5          |

### Casos especiales

- Si el equipo está formado por un solo estudiante, únicamente se debe implementar el endpoint `/user-info/1`.
- Si hay dos estudiantes, ambos endpoints deben estar implementados y retornar información correcta.

### Recursos adicionales

- [Guía de Express.js](https://expressjs.com/es/)
- [Guía de Node.js](https://nodejs.org/es/docs/)
- [ Despliegue de aplicaciones Node.js en Netlify](https://www.netlify.com/blog/2016/09/29/a-step-by-step-guide-deploying-on-netlify/)
- [Despliegue de aplicaciones Express.js en Vercel](https://vercel.com/docs/deployments/overview/)


## 👨‍💻 Autor

- **Nombre:** Sofy Alejandra Prada Murillo
- **Código estudiantil:** 0000336152  
- **Correo:** [sofyprmu@unisabana.edu.co](mailto:sofyprmu@unisabana.edu.co)

- **Nombre:** Esteban Sequeda Henao  
- **Código estudiantil:** 0000328378  
- **Correo:** [estebansehe@unisabna.edu.con](mailto:estebansehe@unisabna.edu.con)
-**link vercel:** express-101-byte-me-rose.vercel.app

