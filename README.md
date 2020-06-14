# EStore
E-commerce database

## Table of contents
--------------------
* [General info](#general-info)
* [Technologies](#technologies)
* [Setup](#setup)
* [Testing](#testing)
* [Features](#features)

## General info
--------------------
This project was created as an exercise practicing creating a database using MySQL and Sequelize.
	
## Technologies
--------------------
Project is created with:
* Sequelize verison: 5.21.12
* MySQL2 version: 2.1.0
* dotenv version: 8.2.0
	
## Setup
--------------------
### To run this project, make sure to install [MySQL](https://www.mysql.com/downloads/)
### To run this project, make sure to install [Insomnia](https://insomnia.rest/download/#windows) 

install the following locally using npm:

```
$ cd ../dir
$ npm init
$ npm install --save mysql2
$ npm install --save sequelize
$ npm install dotenv
```

## Testing
--------------------
(You may need to seed the database first)
To do so, run in the termial of project directory:
```
npm run seed
```
### To test this project, run the following in the terminal:
```
$ npm start
```
The server should run on PORT 3001
Then use Insomnia App to run GET, POST, PUT, and DELETE requests
to interact with the database

--------------------

Alternatively, visit the instructional video [GoogleDrive url video 1](https://drive.google.com/file/d/1_m7Mvk8qEG6-SUs28xZVq4qXf_DK6OyP/view):
Alternatively, visit the instructional video [GoogleDrive url video 2](https://drive.google.com/file/d/14xyV5gpGaQPlxdLys0GjU-aVR8VXd5Du/view):
```
https://drive.google.com/file/d/1_m7Mvk8qEG6-SUs28xZVq4qXf_DK6OyP/view
https://drive.google.com/file/d/14xyV5gpGaQPlxdLys0GjU-aVR8VXd5Du/view
```
## Features
--------------------
### Features include:
* Shows all Categories, Products, Tags
* Allows creation of new Categories, Products, Tags 
* Allows update of previously created Categories, Products, Tags
* Allows deletion of previously created Categories, Products, Tags