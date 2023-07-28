
const express = require('express');
const Product = require('../models/product');

const router = express.Router() //mini server -> acts like app



// displaying all the products
router.get('/' , async(req,res)=>{
    let products = await Product.find({}); //finding the products
    res.render('products/index' , {products});
})


// adding a form for new product
router.get('/products/new' , (req,res)=>{
    res.render('products/new')
})

// actually adding product in the DB
router.post('/products' , async(req,res)=>{
    let {name , price} = req.body; //by default undefined
    // console.log(name , price , desc , img);
    await Product.create({name, price});
    // res.send('check your console')
    res.redirect('/products');
})

// for showing details of particular product
router.get('/products/:id' , async(req,res)=>{
    let {id} = req.params;
    let foundProduct = await Product.findById(id).populate('');
    res.render('products/show' , {foundProduct})
})





module.exports = router;