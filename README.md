# Delivery-time-api
Rest API for consulting delivery time from Correios.

## Table of Content
* [General info](#general-info)
* [Technologies and Dependencies](#technologies-and-dependencies)
* [Author](#author)
* [License and copyright](#license-and-copyright)

### General info
Application for consulting delivery time consuming a SOAP web service from Correios.

### Technologies and dependencies
* Express - Node.js library;
* Soap - Library for soap web services;

### Setup
**_For development_**\
In the project directory, you can run:\
`npm run swagger-autogen`

Open [http://localhost:3004/api-docs](http://localhost:3004/api-docs) to start testing using Swagger.

**_Running in a container_**\
`sudo docker container run -p 3004:3004 brenorvale/api-delivery-time:latest`\

Also,\
Open [http://localhost:3004/api-docs](http://localhost:3004/api-docs) to start testing using Swagger.

### Author
Breno Ribeiro do Val.

### License and copyright
MIT.
