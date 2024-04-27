const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const MobileRouter = require('./Routes/Mobiles');
const LaptopRouter = require('./Routes/Laptops');
const AccessoriesRouter = require('./Routes/Accessories');
const CategoriesRouter = require('./Routes/AcessoriesCategory');
const UserRouter = require('./Routes/Users');
const PORT = process.env.PORT || 7005;

//handle Parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//use mobiles router
app.use('/api/mobiles',MobileRouter)

//use laptops router
app.use('/api/laptops',LaptopRouter)

//use Accessories router
app.use('/api/Accessories',AccessoriesRouter)

//use Categories router
app.use('/api/AccessoriesCategories',CategoriesRouter)

//use User router
app.use('/api/Users',UserRouter)

//listen on server
app.listen(PORT,()=>{console.log("http://localhost:"+PORT);})