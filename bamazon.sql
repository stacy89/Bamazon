CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id int NOT NULL AUTO_INCREMENT,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(4,2) NOT NULL,
stock_quantity int NOT NULL
);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Mason Jar(12pak)', 'Kitcen', 20.99, 100);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Chef Knives(24pak)', 'Kitcen', 150.89, 50);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Bath Towel Set(White)', 'Bath', 30.50, 20);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Electric toothbrush', 'Bath', 9.99, 20);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Home Pod', 'Media', 375.99, 30);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Nitendo Switch', 'Media', 299.99, 10);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Throw Pillow', 'Home', 12.34, 300);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Leather Couch(Black)', 'Home', 1589.00, 4);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Spyro the Dragon', 'Gaming', 10.99, 1);

INSERT INTO Products (product_name, department_name, price, stock_quantity) VALUES ('Crash Banicoot', 'Gaming', 10.99, 1);


