const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({ //schema
    name:{
        type : String,
        trim : true,
        required : true
    },
    author:{
        type : String,
        required : true
    }
   
    
});

const Product = mongoose.model('Product' , productSchema); //model

module.exports = Product;