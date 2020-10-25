DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db

CREATE TABLE burgers (

id Int NOT NULL AUTO_INCREMENT,
burger_name varchar(30),
devoured BOOLEAN DEFAULT FALSE,
PRIMARY KEY (id)

)