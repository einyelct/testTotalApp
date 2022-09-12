# Todo Vue

Aplicación de ejemplo de tareas realizadas y pendientes, donde podremos crear nuevas tareas, marcarlas como hechas, eliminarlas y editarlas.


![alt text](https://github.com/einyelct/testTotalApp/blob/main/src/assets/CapturaTodo.JPG)
# Funcionamiento
**Ejecuciones previas.**
>Ejecutar el siguiente comando

	 npm install
>arrancar la api de json-Server
	
	npm run db:serve
>Arrancar la App
	
	>npm run server



## Crear nuevas tareas

En la entrada de texto principal (input), al arrancar la aplicación, estará enfocado para empezar a escribir las tareas, que al pulsar la tecla **Intro**, se guardara la tarea nueva como pendiente y se enviara a la base de datos, esta aparecerá en la sección de todas las tareas y en la sección de tareas pendientes.
## Editar tareas

Solo se podran editar las tareas pendientes, haciendo doble click sobre el texto de la tarea, para guardar el cambio, hacer click en **intro**; si el campo esta vacío, esta se eliminara o si se hace click en el botón de esc, no se producirá ningun cambio y se saldra del modo de edición.
Las tareas pendientes se podran marcar y desmarcar como completadas.
Cada tarea se podra eliminar por separado.
Se podra marcar todas como completadas o no completadas haciendo click en la flecha junto al Input.

## Vistas

La aplicación consta de tres vistas, all / active / completed;

>all: Muestra todas las tareas.
>active; muestra las tareas por completar.
>completed: muestra las tareas completadas.
