// import router

import router from "./routes/category";

// require package
const express = require('express');
const mongoose = require('mongoose');
mongoose.connect('mongodb://root:gUgd0srLgixMS89ZR1XFvHjI@arthur.iran.liara.ir:32150/my-app?authSource=admin')



// use
const app = express()
app.use(express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: false }))

// use router
app.use(router);




app.listen(3005, () => { console.log('server is running') })