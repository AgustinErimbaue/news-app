# Proyecto de Noticias

Este es un proyecto de aplicación web para leer noticias de diferentes fuentes. La aplicación utiliza React para el frontend y consume datos de la API de NewsAPI para mostrar las últimas noticias de la BBC.

## Funcionalidades

- **Inicio**: Página principal donde se muestra una breve descripción del proyecto.
- **Listado de Noticias**: Página que muestra una lista de las últimas noticias obtenidas de la API de NewsAPI. Cada noticia incluye un título, descripción, fecha de publicación, fuente y un enlace para leer la noticia completa.
- **Formulario de Publicación**: Página donde los usuarios pueden enviar nuevas noticias. El formulario incluye campos para el titular, el resumen y el cuerpo de la noticia. Antes de enviar, se realizan validaciones simples en los campos.
- **Header y Footer**: Componentes de encabezado y pie de página que se muestran en todas las páginas de la aplicación. El encabezado contiene un menú de navegación y el pie de página incluye enlaces rápidos, información de contacto y enlaces a las redes sociales.

## Tecnologías Utilizadas

- **React**: Biblioteca de JavaScript para construir interfaces de usuario.
- **React Router**: Para la navegación entre páginas dentro de la aplicación.
- **Axios**: Cliente HTTP basado en promesas para realizar solicitudes a la API de NewsAPI.
- **Sass**: Preprocesador CSS para estilizar los componentes de la aplicación de manera más eficiente.

## Configuración

1. Clona este repositorio en tu máquina local.
2. Instala las dependencias usando npm:
3. Crea una cuenta en [NewsAPI](https://newsapi.org/) y obtén una clave de API.
4. Coloca tu clave de API en el archivo `Form.js` donde se realiza la solicitud a la API de NewsAPI.

## Ejecución

Una vez que hayas realizado la configuración:


Esto iniciará la aplicación en tu navegador. Puedes acceder a la aplicación en [http://localhost:3000](http://localhost:3000).

## Contribuir

Si deseas contribuir a este proyecto, ¡eres bienvenido! Puedes realizar una bifurcación del repositorio, hacer tus cambios y enviar una solicitud de extracción.

## Autor

Este proyecto fue creado por [Agustin Erimbaue](agustibernabe@email.com).


