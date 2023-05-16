# Iniciar Proyecto
Debera clonar el repositorio en el entorno local con el siguiente comando:

    git clone https://github.com/UdanPrg/api-manage-fleet.git

Luego entrar a la carpeta /api-manage-fleet y descargando todos los paquetes para el proeyecto ejecutando el siguiente comando:

    npm install

Al tener los paquetes instalados solo deberá ejecutar el siguiente comando desde la raíz del proyecto para iniciar el servidor y comenzar a realizar las peticiones:

    npm start

*Mensaje de respuesta existosa al iniciar el servidor*
<code>
    Server is running on port: 5000
    MongoDB database connection established successfully
</code>

Por medio de una herramienta de gestión de API's como Postman, podran encontrar en este documento las peticiones y la forma de realizar para las diversas funciones y/o data que se quiera obtener de la misma. También encontrarán un **archivo JSON**(***Fleet API.postman_collection.json***) que pueden importar a Postman para desplegar la collection ***Fleet API*** y realizar las pruebas de manera más rápida.

# REST API Fleet application
Esta API tiene el objetivo de entregarle al usuario una herramienta para el manejo de flotas.

Puede consultar la documentación para realizar las pruebas en el siguiente link [https://documenter.getpostman.com/view/1874150/2s93kxaQgk](https://documenter.getpostman.com/view/1874150/2s93kxaQgk)

### Drivers Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| name | String | true | *-* |
| age | Number | true | *-*|
| aviable | Boolean | false | *-*|
| location | Object | false | *Es un Objeto. Cada dato en el objeto es de tipo número*|

### Passengers Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| name | String | true | *-* |
| age | Number | false | *-*|
| location | Object | false | *Es un Objeto. Cada dato en el objeto es de tipo número*|


### Travels Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| passengerId | String | true | *-* |
| driverId | String | true | *-*|
| startTripLocation | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número y ambos son requeridos*|
| endTripLocation | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número y ambos son requeridos*|
| active | String | true | *-* |
| status | String | true | **Unique statuses accepted:** *"Status to travels", "Going for the passenger", "Driver near passenger", "Passenger on board", "Trip in progress", "Trip Completed"* |