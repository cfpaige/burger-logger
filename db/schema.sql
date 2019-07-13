CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL DEFAULT "All The Eggs And Bacon",
	devoured BOOLEAN DEFAULT false,
	createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY (id)
);