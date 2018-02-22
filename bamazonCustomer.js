var mysql = require("mysql");

var prompt = require("prompt");
var color = require('colors/safe');
var table = require("cli-table");

var connection = mysql.createConnection({
	host: "127.0.0.1",
	user: "root",
	password: "",
});

var purchasedProducts = [];

connection.connect();

connection.query("SELECT item_id, product_name, price FROM products", function(error, data) {
	if (error) {
		throw error;
	}

	var table = new Table({
		head: ["Item ID", "Product Name", "Price"],
		style: {
			head: ["magenta"],
			compact: false,
			colAligns: ["center"]
		}
	});

	for (var i = 0; data.length; i++) {
		table.push(data[i].item_id, data[i].product_name, data[i].price);
	}

	purchasedItems();
});


function purchasedItems() {
	var userPrompt = {
		itemID:{description: colors.cyan('Enter the ID # of the item you wish to purchase.')},
		quantity:{description: colors.green('How many items would you like to purchase?')}
	};

	prompt.start();

	prompt.get(userPrompt, function(error, response) {

		purchasedProducts.push({itemID: response.itemID, quantity: response.quantity});

		connection.query("SELECT * FROM products WHERE item_id = ?", purchasedProducts[0].itemID, function(error, response) {
				if (error) {
					console.log("There isn't an item with provided info!");
				}

				if (response[0].stock_quantity < purchasedProducts[0].quantity) {
					console.log("Insufficient quantity!");	
				} else if (response[0].stock_quantity >= purchasedProducts[0].quantity) {
					console.log("You purchased " + purchasedProducts[0].quantity + " items.");
				
				var total = response[0].price * purchasedProducts[0].quantity;

				connection.query("UPDATE  ")
				}
		});
	});
};




