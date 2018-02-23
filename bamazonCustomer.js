var mysql = require("mysql");

var inquirer = require("inquirer");
var color = require('colors/safe');


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
			console.log(data[i].id, data[i].product_name, data[i].price, data[i].stock_quantity);
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
			console.log(userPurchase);

			connection.query("SELECT * FROM products WHERE id=?", userPurchase.item, function(err, res) {
				for (var i = 0; i < res.length; i++) {
				console.log(res[i]);
			}
				console.log(userPurchase.quantity);
				console.log(res.RowDataPacket.stock_quantity);

				if (userPurchase.quantity > res.stock_quantity) {
					console.log("Insufficient quantity! Please try again later.");
					runProgram();
				} else {
					var itemQuantity = parseFloat(userPurchase.quantity);
					console.log(itemQuantity)
					// res.stock_quantity - userPurchase.quantity;
					// var total = res.price * userPurchase.quantity;
					// console.log("You total is " + total);
				}
			});
		});

};


// function purchasedItems() {
// 	var userPrompt = {
// 		itemID:{description: colors.cyan('Enter the ID # of the item you wish to purchase.')},
// 		quantity:{description: colors.green('How many items would you like to purchase?')}
// 	};

// 	prompt.start();

// 	prompt.get(userPrompt, function(error, response) {

// 		purchasedProducts.push({itemID: response.itemID, quantity: response.quantity});

// 		connection.query("SELECT * FROM products WHERE item_id = ?", purchasedProducts[0].itemID, function(error, response) {
// 				if (error) {
// 					console.log("There isn't an item with provided info!");
// 				}

// 				if (response[0].stock_quantity < purchasedProducts[0].quantity) {
// 					console.log("Insufficient quantity!");	
// 				} else if (response[0].stock_quantity >= purchasedProducts[0].quantity) {
// 					console.log("You purchased " + purchasedProducts[0].quantity + " items.");
				
// 				var total = response[0].price * purchasedProducts[0].quantity;

// 				connection.query("UPDATE  ")
// 				}
// 		});
// 	});
// };




