var mysql = require("mysql");

var inquirer = require("inquirer");

var connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
  host: 3306,
  database: "bamazon"
});

connection.connect(function(err){
	if (err) {
		throw err;
	}

	showItems();	
});

function showItems() {
	connection.query("SELECT id, product_name, price, stock_quantity FROM products", function(error, data) {
		if (error) {
			throw error;
		}

		for (var i = 0; i < data.length; i++) {
			console.log("|-----------------------------------------------|");
			console.log("         ", data[i].id, data[i].product_name, data[i].price, data[i].stock_quantity);
			console.log("|-----------------------------------------------|");
		}
		runProgram();
	});
};

function runProgram(){
	inquirer
		.prompt([
			{	
				name: "item",
				type: "input",
				message: "Please enter the ID of the item you would like to purchase."
			}, 
			{
				name: "quantity",
				type: "input",
				message: "How many of these would you like to purchase?"
			}	
		]).then(function(userPurchase) {

			connection.query("SELECT * FROM products WHERE id=?", userPurchase.item, function(err, res) {

				if (userPurchase.quantity > res[0].stock_quantity) {
					console.log("Insufficient quantity! Please try again later.");
					runProgram();
				} else {
					var newStockQuantity = res[0].stock_quantity - userPurchase.quantity;

					var total = res[0].price * userPurchase.quantity;

					console.log("You total is " + total);
					updateItem(newStockQuantity, userPurchase.id);
				}
			});
		});
};

function updateItem(newStockQuantity, itemId) {
	inquirer
		.prompt ([
			{
				name: "confirm", 
				type: "input",
				message: "Are you sure you want to continue with this purcahse?"
			}
		]).then(function(userConfirmation) {
			// console.log(userConfirmation);
			if (userConfirmation.confirm === "yes") {
				connection.query("UPDATE products SET ? WHERE ?", 
				[{
					stock_quantity: newStockQuantity
				},
				{
					id: itemId
				}], function(error, data) {
					if (error) {
						throw error;
					}
					// console.log(data);
					console.log("===============================================");
					console.log("Your transaction has been completed. Thank you!");
					console.log("===============================================");
					connection.end();
				});
			} else {
				console.log("================");
				console.log("Okay, next time!"); 
				console.log("================");
				connection.end();
			}
		});
};












