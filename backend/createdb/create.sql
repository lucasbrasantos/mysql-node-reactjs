
create schema cars_db

create table cars (
    id primary key AUTO_INCREMENT,
	make VARCHAR(100),
	model VARCHAR(30),
	year INT,
	color VARCHAR(50),
	mileage INT,
	price DECIMAL(10,2),
	fuel_type VARCHAR(8),
	transmission VARCHAR(9),
	engine_size DECIMAL(2,1),
	top_speed INT
);