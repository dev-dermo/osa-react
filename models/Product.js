const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const productSchema = new Schema({
	title: String,
	category: String,
	description: String,
	details: Array,
	colors: Array,
	thickness: String,
	images: Array
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;