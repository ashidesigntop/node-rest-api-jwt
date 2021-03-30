# node-rest-api-jwt CRUD operations with JWT

routes

POST http://localhost:3000/users/register

POST http://localhost:3000/users/authenticate

JWT token received in above request will be used to access protected movie routes. We will pass token in header with key=x-access-token and value=jwt token
POST http://localhost:3000/addUsers

GET http://localhost:3000/addUsers

GET http://localhost:3000/addUsers/5ae63c5027bbe422cce696a3

PUT http://localhost:3000/addUsers/5ae63c5027bbe422cce696a3

DELETE http://localhost:3000/addUsers/5ae63c5027bbe422cce696a3
