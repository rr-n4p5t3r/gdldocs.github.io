# ¡Bienvenido a bordo y empecemos!

## Lo primero

Esta sección contiene información crucial para contribuir a nuestro proyecto. Animamos a participar activamente y a realizar cualquier pregunta que pueda surgir. Agradecemos enormemente su cooperación en seguir estas pautas. Léalo detenidamente y siéntase libre de unirse a nuestro Discord.

> Importante: Esta documentación se genera utilizando Docsify, un generador de documentación simple y flexible. Puede obtener más información sobre Docsify en su sitio web oficial: 

## Pasos rápidos para contribuir

1. Forkea el repositorio oficial de Documentación de GoldenDog Linux Repositorio. _(Si no sabes cómo hacerlo, ve a: [aca](como-hacer-fork.md))_
2. Agrega tu archivo .md, asegúrate de colocarlo en el directorio correcto para el idioma. [Estructura de carpetas.](como-contribuir.md#estructura-de-carpetas)
3. Ingresa la ruta correspondiente al archivo recién creado en _sidebar.md, asegurándote de que coincida con el idioma correcto. Asegúrate de cumplir con este paso o tu inclusión podría no ser aceptada.
4. Crea una nueva solicitud pull y espera a que sea revisada y aprobada. (Más detalles en: [aca](como-hacer-fork.md#pasos-iniciales))

## Información adicional

### Estructura de carpetas

La estructura actual de carpetas se muestra a continuación. Por favor, adhiérase a esta estructura. Cualquier reestructuración propuesta debe estar justificada y estará sujeta a revisión. Las rutas se generan a partir de estos directorios, de ahí la importancia de mantener esta estructura para la simplicidad de las rutas de documentación.

    gdldocs.github.io
    ├── docs/
    │   ├── es/ (Documentación en Español)
    │   │   ├── _sidebar.md (Barra Lateral para Documentación en Español)
    │   │   └── *.md (Todos los archivos de documentación en español con extensión .md)
    │   └── _sidebar.md (Barra Lateral para Documentación en Inglés)
    │   └── *.md (Todos los archivos de documentación en inglés con extensión .md)
    └── scripts/ (Carpeta de scripts)

    Última actualización: 30/07/2024

### Archivo _sidebar.md

En términos más simples, el archivo _sidebar.md es como un índice o un menú de navegación para su documentación Docsify. Define la estructura de su documentación y ayuda a los visitantes a navegar fácilmente entre diferentes páginas.
```
    # _sidebar.md

    - Introducción
        - ¿Qué es GoldenDog Linux?
        - Introducción
    - Guías
        - Uso básico
        - Funciones avanzadas
```

> Nota: Cada elemento sangrado debajo de un elemento superior estará contenido por el más a la izquierda, y se mostrará al hacer clic en el contenedor. Ejemplo: Introducción contiene la sección ¿Qué es Docsify?, y solo se ve al hacer clic en el elemento Introducción.

### Complementos (Plugins)

Los complementos de Docsify son pequeños fragmentos de código que amplían la funcionalidad de Docsify, lo que le permite personalizar y mejorar su sitio de documentación. Pueden agregar nuevas funciones, modificar el comportamiento existente o integrarse con otros servicios.

Esta documentación utiliza:

* Complemento de búsqueda de texto
* Tema Docsify Darklight
* Docsify Sidebar Collapse

Última actualización: 30/07/2024

### Docsify-cli a servidor local

Utilice Docsify-cli de Docsify para iniciar un servidor local y ver la página de documentación.

1. Si no lo tienes, instala Node.js y npm:

Puede descargar e instalar Node.js desde el sitio web oficial: Node

> nota: npm generalmente se incluye con Node.js.

2. Usa con npm:
```
    npm install docsify-cli -g
```

> Esto instala globalmente la dependencia Docsify CLI, lo que permite la visualización del servidor de desarrollo local.

3. Dentro de la ruta del directorio, ejecute el siguiente comando en su terminal:
```
docsify serve docs
```

> Vaya a localhost:3000 aquí está la vista de la página de documentación local.


