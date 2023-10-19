## Getting Started

First install dependencies

```bash
npm install

Second, run the tests:

```bash
npm run test

Third, run de web server:

```bash
npm run dev

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Arquitectura y Enfoque:

Para abordar el desafío, me centré en la arquitectura de componentes y la estructura de frontend utilizando Next.js y React, optando por una estructura basada en componentes que permite una organización clara y modular de la interfaz de usuario.

En el proyecto, he creado componentes reutilizables para representar elementos visuales, como la lista de países, la vista de detalles, el buscador y otros elementos de la interfaz de usuario. Cada componente tiene su propia lógica y funcionalidad, lo que facilita la mantenibilidad y escalabilidad del código.

Además, utilicé Next.js para la gestión de rutas y renderizado del lado del servidor, lo que mejora el rendimiento y la indexación de la aplicación.

Otras Consideraciones:

    Implementé la funcionalidad de búsqueda y filtros para una experiencia de usuario mejorada.
    Añadí soporte para el modo oscuro, mejorando la accesibilidad y personalización.
    Incluí pruebas unitarias para garantizar la robustez del código y su mantenibilidad a largo plazo.

Tecnologias, herramientas y versiones utilizadas:

- Next.js 13.5.6
- Axios 1.5.1
- React-Bootstrap 2.9.0
- Jest 29.7.0
- TypeScript
- CSS
- HTML
- JavaScript
- Postman
- NVM
- Node
- Npm

Gestion de Carpetas

restcountries-webpage
│
└── src
    │
    └── app
        │
        ├── components
        │   │
        │   ├── [Contiene los componentes de tu aplicación]
        │   │
        ├── interfaces
        │   │
        │   ├── [Contiene archivos relacionados con interfaces o tipos]
        │   │
        ├── styles
        │   │
        │   ├── [Contiene archivos de estilos CSS o SCSS]
        │   │
        ├── favicon.ico
        │
        ├── layout.tsx
        │
        ├── page.tsx
        │
        └── [country]
            │
            ├── [Vista al clickear en cualquier pais]

La comunicación entre los diferentes componentes se basa principalmente en el uso de props. Dado que el proyecto es relativamente pequeño y consta de dos vistas principales (la vista de inicio y la vista detallada de un país seleccionado), opté por mantener la comunicación simple y eficiente, sin la necesidad de introducir una capa de gestión de estado compleja, como Redux.

Comunicación mediante Props:

    La información es pasada de un componente a otro a través de props. Por ejemplo, cuando el usuario selecciona un país en la lista, se le envia un string por props que nos permitira luego solicitarle a la API unicamente el pais que requerimos visualizar el cual seria en el componente de la vista detallada. Esto garantiza que los datos estén disponibles en la vista de destino para su renderización.

    Algunos componentes también reciben funciones como props para manejar búsquedas o filtros. Estas funciones permiten que los componentes secundarios actualicen la información en función de las acciones del usuario en los componentes principales.

Esta estrategia de comunicación basada en props es adecuada para un proyecto de este tamaño, ya que mantiene la aplicación simple y eficaz en términos de rendimiento. No veo la necesidad de introducir una gestión de estado más compleja, como Redux, dado que la aplicación consta de solo dos vistas principales y los datos se pueden transmitir eficazmente a través de props.

Asimismo la gestion de estados he decidido manejar unicamente estados locales y si es necesario compartirlos via props para su correcto funcionamiento.

He utilizado la biblioteca Jest para diseñar y ejecutar estas pruebas, lo que me ha permitido asegurar la calidad y confiabilidad de la comunicación con la API y la funcionalidad de los componentes.

Implementación de Pruebas Unitarias:

    Las pruebas unitarias se han creado para verificar la comunicación efectiva con la API de restcountries.com. Esto incluye el manejo de las solicitudes HTTP y la correcta interpretación de los datos de respuesta. Además, se han realizado pruebas para garantizar que los componentes rendericen la información de manera precisa y consistente.

    Para ejecutar las pruebas unitarias, he configurado un script personalizado en el archivo package.json. Ejecutar el comando npm run test inicia Jest y ejecuta todas las pruebas definidas en el proyecto.

    Jest proporciona un entorno de pruebas eficiente y permite realizar afirmaciones (assertions) para verificar que los resultados de las funciones y componentes cumplan con los criterios esperados.

Muchas gracias
Sebastian Gomez
Despliegue en Vercel: https://rest-countries-web-app-2.vercel.app
