### Como Contribuir con la Documentación de GoldenDog

1. Crea un fork desde el [Repositorio](https://github.com/gdldocs/gdldocs.github.io) oficial de Goldendog Linux. 
2. Agregue su archivo.md, asegúrese de ponerlo en el directorio correcto (Por idioma).
3. Introduzca en el _sidebar.md la ruta correspondiente al archivo recién creado.
4. Cree un nuevo Pull Request y espere a que sea revisado y aprobado.

¡Gracias por contribuir con el proyecto!

# Guía Rápida: Cómo hacer fork y contribuir al proyecto

## Pasos iniciales

1. Abre tu terminal.
2. Navega al directorio donde quieres clonar el repositorio.
3. Ejecuta el siguiente comando:

   ``` bash
   git clone --recursive https://github.com/TU_USUARIO/gdldocs.github.io
   ```

   > **Nota**: Reemplaza `TU_USUARIO` con tu nombre de usuario de GitHub.

4. Git clonará el repositorio principal y todos sus submódulos.

## Crear una nueva rama

5. Crea una nueva rama con el siguiente comando:

   ``` bash
   git branch nombre-de-la-nueva-rama
   ```

   Para versiones anteriores de Git, usa:

   ``` bash
   git checkout -b nombre-de-la-nueva-rama
   ```

   > **Nota**: Crear una nueva rama facilita las actualizaciones, simplifica los pull requests y separa los cambios, lo que facilita la revisión y la gestión de los mismos.

## Realizar cambios y crear Pull Request

6. Realiza tus cambios y commits en esta nueva rama.
7. Empuja la nueva rama a tu fork:

   ``` bash
   git push origin nombre-de-la-nueva-rama
   ```

8. Finalizado el proceso, crea una Pull Request desde la rama creada en tu fork hacia el repositorio original.

## Sugerencias para nombres de ramas y commits

1. Usa prefijos descriptivos:
   - `docs` para documentación
   - `fix` para correcciones
2. Usa guiones para separar las palabras:
   - `add-docs`
   - `fix-memory`
3. Para los commits, explica el "qué" y el "por qué", no el "cómo".

Si necesitas apoyo adicional, puedes visitar el canal de Discord para obtener ayuda.
