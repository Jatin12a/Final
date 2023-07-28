const express = require('express');
var app = express();
const path = require('path');
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.port || 5002
const productRoutes = require('./routes/productRoutes');



mongoose.connect(process.env.DB_URL)
.then(()=>{console.log("DB connected")})
.catch((err)=>{console.log(err)})

// app.get('/',(req,res)=>{
//     res.render('index');
// })



app.set('view engine' , 'ejs');
app.set('views' , path.join(__dirname , 'views'))




app.use(productRoutes);










app.listen(port ,(req,res)=>{
    console.log(`Server is running on ${port} http://localhost:${port}`)
})
