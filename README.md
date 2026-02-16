## Project_API_REST_ARK

## FUNCIONAMIENTO GENERAL DE LA API:





## Operacion 1: Visualizar todos los dinosaurios del JSON:

·Para mostrar todos las criaturas del JSON en el navegador utilizamos la siguiente ruta: http://localhost:3000/api/ark/todos


## Operacion 2: Filtrar la criatura por su ID mediante path-param

·Para mostrar la criatura que tu quieras simplemente en la ruta: http://localhost:3000/api/ark/ <- Seguido del ultimo "/", escribimos el id, Ejemplo: http://localhost:3000/api/ark/5


## Operacion 3: Filtrar las criaturas por su categoria utilizando Query param:

·Para mostrar las criaturas de una categoria concreta, escrivimos lo siguiente: http://localhost:3000/api/ark?categoria=nombre_categoria

·Ejemplo: 
	  
	  http://localhost:3000/api/ark?categoria=terrestre

	  http://localhost:3000/api/ark?categoria=insecto
		
	  http://localhost:3000/api/ark?categoria=jefe

	  http://localhost:3000/api/ark?categoria=actuatico

## Operacion 4: Mostar a partir de un JSON que el usuario introduce con una peticion POST:

·El funcionamiento de esta operacion funciona de la siguiente manera:

	1: El usuario inicia el api
	
	2: El usuario ejecuta el archivo "calculate.http"

	3: Al ejecutar el metodo post, se te devuelve una lista de un JSON con cada uno de los alumnos filtrados


