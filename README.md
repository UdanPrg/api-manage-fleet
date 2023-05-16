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

Por medio de una herramienta de gestión de API's como Postman, podran encontrar en este documento las peticiones y la forma de realizar para las diversas funciones y/o data que se quiera obtener de la misma. También encontrarán un **archivo JSON**(*Fleet API.postman_collection.json*) que pueden importar a Postman para desplegar la collection ***Fleet API-*** y realizar las pruebas de manera más rápida.

# REST API Fleet application
Esta API tiene el objetivo de entregarle al usuario una herramienta para el manejo de flotas.

### Drivers Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| name | String | true | *-* |
| age | Number | true | *-*|
| aviable | Boolean | false | *-*|
| location | Object | false | *Es un Objeto. Cada dato en el objeto es de tipo número*|


## Lista de Endpoints para el modelo Drivers

#### URL request
    https://dominio.com/drivers || http://localhost:5000/drivers

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/drivers |
|***Obtener todos los elementos de Drivers*** |

**Response**

```json
[
    {
        "_id": "645b484cfef7a8f20d08fafe",
        "name": "Mario Martinez",
        "age": 32,
        "available": false,
        "location": {
            "latitude": 39.521887,
            "longitude": -75.068753,
            "_id": "645b49dcfef7a8f20d08fb09"
        },
        "createdAt": "2023-05-10T07:31:24.762Z",
        "updatedAt": "2023-05-10T07:38:04.291Z",
        "__v": 0
    },
    {
        "_id": "645ea912d6e69f748bd2bc00",
        "name": "Julio Contreras",
        "age": 31,
        "available": true,
        "location": {
            "latitude": 37.082028754870905,
            "longitude": -78.74487955112477,
            "_id": "645f38fd74dad1eda3dd7cf8"
        },
        "createdAt": "2023-05-12T21:01:06.261Z",
        "updatedAt": "2023-05-13T07:15:09.488Z",
        "__v": 0
    },
    {
        "_id": "645ea932d6e69f748bd2bc03",
        "name": "María Gonzales",
        "age": 34,
        "available": true,
        "location": {
            "latitude": 39.521887,
            "longitude": -75.068753,
            "_id": "645ea932d6e69f748bd2bc04"
        },
        "createdAt": "2023-05-12T21:01:38.084Z",
        "updatedAt": "2023-05-12T21:01:38.084Z",
        "__v": 0
    },
    {
        "_id": "645f3ccfbfbfabb68105fce9",
        "name": "1",
        "age": 45,
        "available": true,
        "location": {
            "latitude": 39.52162649068183,
            "longitude": -75.06271719885073,
            "_id": "645f3ccfbfbfabb68105fcea"
        },
        "createdAt": "2023-05-13T07:31:27.600Z",
        "updatedAt": "2023-05-13T07:31:27.600Z",
        "__v": 0
    },
    {
        "_id": "645f3d0dbfbfabb68105fcec",
        "name": "2",
        "age": 50,
        "available": true,
        "location": {
            "latitude": 39.52218828580313,
            "longitude": -75.07195747374423,
            "_id": "645f3d0dbfbfabb68105fced"
        },
        "createdAt": "2023-05-13T07:32:29.246Z",
        "updatedAt": "2023-05-13T07:32:29.246Z",
        "__v": 0
    },
    {
        "_id": "645f3d34bfbfabb68105fcef",
        "name": "3",
        "age": 60,
        "available": true,
        "location": {
            "latitude": 39.521638194806634,
            "longitude": -75.05892398383622,
            "_id": "645f3d34bfbfabb68105fcf0"
        },
        "createdAt": "2023-05-13T07:33:08.804Z",
        "updatedAt": "2023-05-13T07:33:08.804Z",
        "__v": 0
    },
    {
        "_id": "645f3d76bfbfabb68105fcf3",
        "name": "4",
        "age": 30,
        "available": true,
        "location": {
            "latitude": 39.53223860751768,
            "longitude": -75.10719526431626,
            "_id": "645f3d76bfbfabb68105fcf4"
        },
        "createdAt": "2023-05-13T07:34:14.668Z",
        "updatedAt": "2023-05-13T07:34:14.668Z",
        "__v": 0
    }
]
```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| POST   | ***/add***  | https://dominio.com/drivers/add |
|***Agrega/crear un nuevo elemento de Driver***|||

**body**
```json
{
    "name": "Mario Gonzales",
    "age": 32,
    "available": false,
    "location": {
        "latitude": 39.521887,
        "longitude": -75.068753,
    }
}
```

**Response**
```json
"New Driver Added!"
```

### Passengers Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| name | String | true | *-* |
| age | Number | false | *-*|
| location | Object | false | *Es un Objeto. Cada dato en el objeto es de tipo número*|


## Lista de Endpoints para el modelo passengers

#### URL request
    https://dominio.com/passengers || http://localhost:5000/passengers

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/passengers |
|***Obtener todos los elementos de Passengers*** |

**Response**

```json
[
    {
        "_id": "645f27aecf84bb2767552655",
        "name": "Victor Linares",
        "age": 40,
        "location": {
            "latitude": 39.51985811027989,
            "longitude": -75.05897398796465,
            "_id": "645f27aecf84bb2767552656"
        },
        "createdAt": "2023-05-13T06:01:18.343Z",
        "updatedAt": "2023-05-13T06:01:18.343Z",
        "__v": 0
    },
    {
        "_id": "645f27eacf84bb2767552658",
        "name": "Cupertino Sansoval",
        "age": 28,
        "location": {
            "latitude": 39.52500781222691,
            "longitude": -75.05698426486268,
            "_id": "645f27eacf84bb2767552659"
        },
        "createdAt": "2023-05-13T06:02:18.363Z",
        "updatedAt": "2023-05-13T06:02:18.363Z",
        "__v": 0
    },
    {
        "_id": "645f2827cf84bb276755265b",
        "name": "Mauricio Mendizabal",
        "age": 19,
        "location": {
            "latitude": 39.52359798817316,
            "longitude": -75.04178874275608,
            "_id": "645f28e3cf84bb2767552661"
        },
        "createdAt": "2023-05-13T06:03:19.500Z",
        "updatedAt": "2023-05-13T06:06:27.360Z",
        "__v": 0
    }
]
```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| POST   | ***/add***  | https://dominio.com/passengers/add |
|***Agrega/crear un nuevo elemento de Passenger***|||

**body**
```json
{
    "name": "Mario Gonzales",
    "age": 32,
    "location": {
        "latitude": 39.521887,
        "longitude": -75.068753
    }
}
```

**Response**
```json
"New Passenger Added!"
```

### Travels Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| passengerId | String | true | *-* |
| driverId | String | true | *-*|
| startTripLocation | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número y ambos son requeridos*|
| endTripLocation | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número y ambos son requeridos*|
| active | String | true | *-* |
| status | String | true | **Unique statuses accepted:** *"Status to travels", "Going for the passenger", "Driver near passenger", "Passenger on board", "Trip in progress", "Trip Completed"* |

## Lista de Endpoints para el modelo travels

#### URL request
    https://dominio.com/travels || http://localhost:5000/travels

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/travels |
|***Obtener todos los elementos de Travels*** |

**Response**

```json

```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| POST   | ***/add***  | https://dominio.com/travels/new |
|***Agrega/crear un nuevo elemento de Travel***|||

**body**
```json
{
    "passengerId": "645f2827cf84bb276755265b",
    "driverId": "645b484cfef7a8f20d08fafe",
    "startTripLocation": {
        "latitude": 39.52359798817316,
        "longitude": -75.04178874275608
    },
    "endTripLocation": {
        "latitude": 39.549344793446906,
        "longitude": -75.0663441505098
    },
    "active": true,
    "status": "Going for the passenger"
}
```

**Response**
```json
"New Travel Created!"
```








