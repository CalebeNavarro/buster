# Buster

Projeto finalizado

# Usuário [/users]

Conta dos usuários

### Novo (Create) [POST /users/register]

+ Request (application/json)

    + Body

          {
            "email": "calebe.snavarro@gmail.com",
            "name": "Calebe",
            "password": "senhaBemForte"
          }

+ Response 200 (application/json)

    + Body

          {
            "id": "634f901e-0670-4222-b221-652b2c299899",
            "name": "calebe",
            "email": "calebe.snavarro@gmail.com",
            "money": 0,
            "admin": false,
            "cart": {
              "id": "c1eac297-ac77-477b-b492-538b3187a606",
              "paid": false,
              "total": 0
            }
          }

+ Request (application/json)

  + Parameters
      + Apenas admin consegue criar outros admin


  + Headers

        Authorization: Bearer [access_token]

    + Body

          {
            "email": "root_user@root.com",
            "name": "SuperUser",
            "password": "senhaBemForte",
            "admin": true
          }

+ Response 200 (application/json)

    + Body

          {
            "id": "1ab9702a-876f-4640-99cd-a8a9ceca5831",
            "name": "superuser",
            "email": "root_user@root.com",
            "money": 0,
            "admin": true,
            "cart": {
              "id": "fd42254c-b70c-4e7a-bc57-be2e9b64efe5",
              "paid": false,
              "total": 0
            }
          }

### Logar (Login) [POST /users/login]

+ Request (application/json)

    + Body

          {
            "email": "calebe.snavarro@gmail.com",
            "password": "senhaBemForte"
          }

    + Response 200 (application/json)

          {
            "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im5lZXdAa2VuemllLmNvbS5ieiIsImFkbWluIjpmYWxzZSwiaWF0IjoxNjU0NTQwNTM4LCJleHAiOjE2NTQ2MjY5Mzh9.xjv9hu7i7aDoDIJn0wp6tL2qOk_FUbRsNRO5hi1IV0Q"
          }

### Listar (List) [GET]

+ Request (application/json)

  + Headers

        Authorization: Bearer [access_token]

+ Response 200 (application/json)

      {
        "id": "634f901e-0670-4222-b221-652b2c299899",
        "name": "calebe",
        "email": "calebe.snavarro@gmail.com",
        "money": 0,
        "admin": false
      }

### Listar com carrinho (List) [GET /users/cart]

+ Request (application/json)

  + Headers

        Authorization: Bearer [access_token]

+ Response 200 (application/json)

      {
        "id": "634f901e-0670-4222-b221-652b2c299899",
        "name": "calebe",
        "email": "calebe.snavarro@gmail.com",
        "money": 0,
        "admin": false,
        "cart": {
          "id": "c1eac297-ac77-477b-b492-538b3187a606",
          "paid": false,
          "total": 0
        }
      }
