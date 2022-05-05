
# Technical Assignment on Node J

 Question2: Create a API with storing the information in array to perform CRUD operation for entering, updating, 
deleting the information of a college student. Every request should validate the data.


## Project Setup
Database used int he project mangoDB.
In order to run the project, setup .env and set MONGO_URI variable equal to DB connection string in root folder.

In order to avoid port collisions, in the source code port value is 5000

//Get all Data  
method-GET  
localhost:5000/api/v1/

//Create  Data  
method-POST 
localhost:5000/api/v1/

//Get Single Data  
method-GET  
localhost:5000/api/v1/:id

//Update Data  
method-PATCH 

localhost:5000/api/v1/:id

//delete Data  
method-DELETE 
localhost:5000/api/v1/:id



## Run Locally

Clone the project

```bash
  git clone https://github.com/siddharthraj09/testtttttttt
```
Go to the project directory

```bash
  cd backend
```

Install dependencies

```bash
  npm i express mongoose dotenv express-async-handler nodemon
```

Start the server (option 1)

```bash
  npm start
```

Start the server using nodemon(option 2)

```bash
  npm run server
```

