CREATE DATABASE IF NOT EXISTS companydb;

USE companydb;

CREATE TABLE employee ( 
    id INT(11) NOT NULL AUTO_INCREMENT,
    name VARCHAR(45) DEFAULT NULL,
    salary INT(5) DEFAULT NULL,
    PRIMARY KEY (id)
);

INSERT INTO employee VALUES
('Juan', 2500),
('María', 3000),
('Pedro', 2800),
('Esteban', 3200);