
create schema cars_db

create table cars (
    id INT primary key AUTO_INCREMENT,
	make VARCHAR(100),
	color VARCHAR(50),
	year INT,
);