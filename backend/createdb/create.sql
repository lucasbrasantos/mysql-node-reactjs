
create schema cars_db
use cars_db

create table cars (
    id INT primary key AUTO_INCREMENT,
	brand VARCHAR(100),
	color VARCHAR(50),
	year INT,
);


-- ALTER TABLE cars AUTO_INCREMENT = 1;