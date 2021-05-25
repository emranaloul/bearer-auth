# bearer-auth

## About 
A bearer Auth has been provided and the user can sign in using the token generating by JWT
<hr>

## Author
Emran Aloul
<hr>

## Links

* [Pull Request](https://github.com/emranaloul/bearer-auth/pull/1)
* [demployment](https://emran-bearer-auth.herokuapp.com/)
* [Actions](https://github.com/emranaloul/bearer-auth/actions)
* [Repo](https://github.com/emranaloul/bearer-auth)

<hr>

## Setup
1. `(.env)` file 

```
PORT=6000
MANGOOSE_URI=mongodb+srv://emran:Ltuc@1234@cluster0.32b6w.mongodb.net/auth
SECRET=1111
```
2. Install the following dependencies

```
npm init -y 
npm i cors dotenv express morgan mongoose
npm i -D jest supertest
npm i @code-fellows/supergoose 
mongod --dbpath=/Users/path/to/data/db

```
## Running the app 
1. clone the repo.
2. Enter the command `npm start`
3. Use endpoints :
   ## signup

  ### *  `/signup`

<br>

- **Method** : post 
- **CRUD Operation** : Create / Add username and password
- **Response Body**   : JSON

```
{
    "user": {
        "_id": "60ad612eee763b39542cd13b",
        "username": "emranaloul92",
        "password": "$2b$10$9CRuuQatFM4MsKVoB3PUsOrZcjcNqx.u.0UocR.GEwb.qzqozNAOW",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtcmFuYWxvdWw5MiIsImlhdCI6MTYyMTk3NTM0MiwiZXhwIjoxNjIxOTc1OTQyfQ.zB5bakxJvK19wZvSg0ac6tQAsEQQdOJqdgQlMrSEiS8"
}

```
   ## sigin
  ### * `/signin`
<br>

- **Method** : post 
- **CRUD Operation** : signin to exist user
- **Response Body**  : JSON

```
{
    "user": {
        "_id": "60ad612eee763b39542cd13b",
        "username": "emranaloul92",
        "password": "$2b$10$9CRuuQatFM4MsKVoB3PUsOrZcjcNqx.u.0UocR.GEwb.qzqozNAOW",
        "__v": 0
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImVtcmFuYWxvdWw5MiIsImlhdCI6MTYyMTk3NTM0MiwiZXhwIjoxNjIxOTc1OTQyfQ.zB5bakxJvK19wZvSg0ac6tQAsEQQdOJqdgQlMrSEiS8"
}

```

## users
  ### * `/users`
<br>

- **Method** : get 
- **CRUD Operation** : getting current users
- **Response Body**  : JSON

```
[
    "omar",
    "Emran",
    "Emrann",
    "emranaloul",
    "emran",
    "emranaloul92"
]
```

## secret
  ### * `/users`
<br>

- **Method** : get 
- **CRUD Operation** : sign in using 
- **Response Body**  : JSON

```
Welcome to the secret area!
```


4. Test . 
* There's 2 test files . basic-auth-middleware.test.js basic-auth-middleware.test.js router.test.js
* In terminal run :

```
npm test

```
<br><br><br>
<hr>
<br><br>

## UML Diagram
![basic-auth](https://g.top4top.io/p_1971i8ur01.png)
