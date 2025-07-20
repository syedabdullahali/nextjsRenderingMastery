CREATE DATABASE IF NOT EXISTS STORE;
USE STORE;

DROP TABLE IF EXISTS CUSTOMERS;
DROP TABLE IF EXISTS PRODUCT;

CREATE TABLE IF NOT EXISTS CUSTOMERS (
    customerId INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    email VARCHAR(100),
    city VARCHAR(50),
    age INT
);

CREATE TABLE IF NOT EXISTS PRODUCT (
  productId INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  qnt INT,
  price INT,
  discription VARCHAR(100)
);

INSERT INTO CUSTOMERS (name, email, city, age) VALUES
('Ali', 'ali@example.com', 'Mumbai', 25),
('Sara', 'sara@example.com', 'Delhi', 30),
('John', 'john@example.com', 'Mumbai', 28),
('Ayesha', 'ayesha@example.com', 'Hyderabad', 22);

INSERT INTO PRODUCT (name, qnt, price, discription) VALUES 
('iphone', 21, 4000, 'Made By Apple'),
('iphone', 11, 5000, 'Made By Apple'),
('iphone', 31, 6000, 'Made By Apple'),
('iphone', 23, 7000, 'Made By Apple');

SELECT * FROM CUSTOMERS;
SELECT * FROM PRODUCT;
