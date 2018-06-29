const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//Esquema DB mongoDB
const productSchema = new Schema({
    nameProduct: {
        type: String,
        required: true
    },
    categoryProduct: {
        type: String,
        required: true
    },
    dateExpire: {
        type: String,
        required: true
    },
    priceProduct: {
        type: Number,
        required: true
    }
});

const Product = mongoose.model("product", productSchema);
module.exports = Product;