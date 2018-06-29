var express = require('express');
var router = express.Router();
var Product = require('../models/product');


router.get('/', (req, res) => {
    res.json({
      message: 'Welcome to the product API'
    });
});

  
//Fetch Products
router.get('/fetch-products', function(req, res, next){
    
    Product.find(function (err, prod) {
        res.json(prod);
    }); 

});


router.get('/add-product', function(req, res){
    res.json('add-product');
});


//Create a Product
router.post('/add-product', function(req, res){

    var message;
    if(!req.body.nameProduct || !req.body.categoryProduct || !req.body.dateExpire || !req.body.priceProduct){
        message = "All fields are required";
        res.status(400);
        res.json({ message: message });
        
    } else {
        var productInfo = {
            nameProduct: req.body.nameProduct,
            categoryProduct: req.body.categoryProduct,
            dateExpire: req.body.dateExpire,
            priceProduct: req.body.priceProduct
        };
            Product.create(productInfo, function(err, newProduct) {
            if(err) 
            {
                console.log(err);
            }
            else {
                message = "product registered";
                res.json(newProduct);
            }
        });    
    }
});


//Fetch Product by ID
router.get('/fetch-product-id/:id', function(req, res, next){
    
    var idProduct = req.params.id;
    console.log("idProduct: ",idProduct);
    Product.findById({ '_id': idProduct }, function (err, prod) {
        res.json(prod);
    }); 
});


// Update the product
router.put('/update-product/:id', function(req, res, next){
    
    Product.findByIdAndUpdate(req.params.id,
    {
        nameProduct: req.body.nameProduct,
        categoryProduct: req.body.categoryProduct,
        dateExpire: req.body.dateExpire,
        priceProduct: req.body.priceProduct            
    }, function(err, response){
        if (err) {
            res.json(err);
        } else {
            console.log('product updated!', response);
            console.log('product updated!');
            res.json(response);
        }
    });
});


//Delete a product
router.delete('/:id', (req, res) => {
    const id = req.params.id;
    Product.findOneAndRemove({_id: id }, (err) => {
      if (err) {
        res.send({"error": err});
      }
      res.json({ 'id': id });
    
    });
  });

//export this router to use in our server.js
module.exports = router;