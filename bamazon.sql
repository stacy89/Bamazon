DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
item_id int NOT NULL,
product_name VARCHAR(50) NOT NULL,
department_name VARCHAR(50) NOT NULL,
price DECIMAL(10,4) NOT NULL,
stock_quantity int NOT NULL
);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('39082', 'Mason Jar(12pak)', 'Kitcen', 20.99, 100);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('29810', 'Chef Knives(24pak)', 'Kitcen', 150.89, 50);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('67832', 'Bath Towel Set(White)', 'Bath', 30.50, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('90384', 'Electric toothbrush', 'Bath', 9.99, 20);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('10001', 'Home Pod', 'Media', 375.99, 30);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('89027', 'Nitendo Switch', 'Media', 299.99, 10);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('32094', 'Throw Pillow', 'Home', 12.34, 300);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('56730', 'Leather Couch(Black)', 'Home', 1589.00, 4);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('8008', 'Spyro the Dragon', 'Gaming', 10.99, 1);

INSERT INTO products (item_id, product_name, department_name, price, stock_quantity) VALUES ('90901', 'Crash Banicoot', 'Gaming', 10.99, 1);


