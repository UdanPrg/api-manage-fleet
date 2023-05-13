# REST API Fleet application
Esta API tiene el objetivo de entregarle al usuario una herramienta para el manejo de flotas.
## Models
Los modelos son constructores sofisticados compilados a partir de definiciones *<code>Schema</code>*. Los modelos son responsables de crear y leer documentos de la base de datos MongoDB subyacente.
### Guide Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| firstName | String | true | *-* |
| lastName | String | true | *-*|
| nickName | String | false | *-*|
| age | Number | true | *-*|
| birthday | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número y es requerido*|
| email | String | true | *-*|


## Lista de Endpoints para el modelo GUIDES

#### URL request
    https://dominio.com/guides || http://localhost:5000/guides

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/guides |
|***Obtener todos los elementos de Guides*** |

**Response**

```json
[
    {
        "_id": "645ae3f00e996c2e625ed3f9",
        "fisrtName": "Lucas",
        "lastName": "Smith",
        "nickName": "luke",
        "age": 23,
        "birthday": {
            "day": 20,
            "month": 5,
            "year": 1999,
            "_id": "645ae3f00e996c2e625ed3fa"
        },
        "email": "example@corp.com",
        "createdAt": "2023-05-10T00:23:12.048Z",
        "updatedAt": "2023-05-10T00:23:12.048Z",
        "__v": 0
    },
    {
        "_id": "645ae963937f206540b632ab",
        "fisrtName": "Madelin",
        "lastName": "Dominguez",
        "nickName": "Samm",
        "age": 20,
        "birthday": {
            "day": 21,
            "month": 2,
            "year": 2003,
            "_id": "645aeb42937f206540b632b7"
        },
        "email": "example.maddie@corp.com",
        "createdAt": "2023-05-10T00:46:27.965Z",
        "updatedAt": "2023-05-10T00:54:26.710Z",
        "__v": 0
    }
]
```


| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/id***  | https://dominio.com/guides/645ae3f00e996c2e625ed3f9 |
|***Obtener un elemento especifico de Guides por el ID***|||

**Response**

```json
{
    "_id": "645ae3f00e996c2e625ed3f9",
    "fisrtName": "Lucas",
    "lastName": "Smith",
    "nickName": "luke",
    "age": 23,
    "birthday": {
        "day": 20,
        "month": 5,
        "year": 1999,
        "_id": "645ae3f00e996c2e625ed3fa"
    },
    "email": "example@corp.com",
    "createdAt": "2023-05-10T00:23:12.048Z",
    "updatedAt": "2023-05-10T00:23:12.048Z",
    "__v": 0
}
```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| POST   | ***/add***  | https://dominio.com/guides/add |
|***Agrega/crear un nuevo elemento de Guides***|||

**body**
```json
{
    "fisrtName": "Lucas",
    "lastName": "Smith",
    "nickName": "luke",
    "age": 23,
    "birthday": {
        "day": 20,
        "month": 5,
        "year": 1999,
    },
    "email": "example@corp.com",
}
```

**Response**
```json
"New Guide Added!"
```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| POST   | ***/update/id***  | https://dominio.com/guides/update/645ae3f00e996c2e625ed3f9 |
|***Actualizar un elemento de Guides por el ID***|||

**body**
```json
{
    "fisrtName": "Lucas",
    "lastName": "Smith",
    "nickName": "luca", // Elemento a modificar
    "age": 23,
    "birthday": {
        "day": 20,
        "month": 5,
        "year": 1999,
    },
    "email": "example@corp.com",
}
```
**Response**

```json
"Guide 645ae963937f206540b632ab Updated!"
```

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| DELETE | ***/id***  | https://dominio.com/guides/645ae59e0e996c2e625ed401 |
|***Actualizar un elemento de Guides por el ID***|||

**Response**

```json
"Guide 645ae59e0e996c2e625ed401 deleted."
```

### Drivers Model

| Data | Type | Required | Description|
| ------- | ------- | ------- | ------- |
| name | String | true | *-* |
| age | Number | true | *-*|
| aviable | Boolean | false | *-*|
| location | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número*|


## Lista de Endpoints para el modelo Drivers

#### URL request
    https://dominio.com/drivers || http://localhost:5000/drivers

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/drivers |
|***Obtener todos los elementos de Drivers*** |

**Response**

```json

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
| age | Number | true | *-*|
| aviable | Boolean | false | *-*|
| location | Object | true | *Es un Objeto. Cada dato en el objeto es de tipo número*|


## Lista de Endpoints para el modelo passengers

#### URL request
    https://dominio.com/passengers || http://localhost:5000/passengers

| Método | Endpoint | Ejemplo  |
| ------ | -------- | -------- |
| GET    | ***/***  | https://dominio.com/passengers |
|***Obtener todos los elementos de Passengers*** |

**Response**

```json

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