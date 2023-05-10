## Guide Model

| Data | Type | Required | Description|
| firstName | String | true | *-* |
| lastName | String | true | *-*|
| nickName | String | false | *-*|
| age | String | true | *-*|
| birthday | Object | true | *Is an Object. Each data in object is a Type Number and is Required*|
| email | String | true | *-*|

**POST** request to create user

**URL** -> http://domain-name.com/user

```json
{
    "fisrtName": "Lucas",
    "lastName": "Smith",
    "nickName": "luke",
    "age": 23,
    "birthday": {
        "day": 20,
        "month": 5,
        "year": 1999
    },
    "email": "example@corp.com"
}
```