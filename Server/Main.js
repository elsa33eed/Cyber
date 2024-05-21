const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const ProductsRouter = require('./Routes/Products');
const CategoriesRouter = require('./Routes/Categories');
const UsersRouter = require('./Routes/Users');
const DiscountsRouter = require('./Routes/Discounts');
const AddressesRouter = require('./Routes/UsersAddresses');
const PaymentsRouter = require('./Routes/UsersPayments');
const ShoppingCartsRouter = require('./Routes/ShoppingCarts');
const CartItemsRouter = require('./Routes/CartItems');
const OrdersDetailsRouter = require('./Routes/OrdersDetails');
const OrdersItemsRouter = require('./Routes/OrderItems');
const PaymentDetailsRouter = require('./Routes/PaymentsDetails');
const PORT = process.env.PORT || 7005;

//handle Parsing
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//use Products router
app.use('/api/Products',ProductsRouter)

//use Categories router
app.use('/api/Categories',CategoriesRouter)

//use User router
app.use('/api/Users',UsersRouter)

//use Discount router
app.use('/api/Discounts',DiscountsRouter)

//use Address router
app.use('/api/Addresses',AddressesRouter)

//use Payment router
app.use('/api/Payments',PaymentsRouter)

//use ShoppingCart router
app.use('/api/ShoppingCarts',ShoppingCartsRouter)

//use CartItem router
app.use('/api/CartItems',CartItemsRouter)

//use OrderDetails router
app.use('/api/OrdersDetails',OrdersDetailsRouter)

//use OrdersItems router
app.use('/api/OrdersItems',OrdersItemsRouter)

//use PaymentDetails router
app.use('/api/PaymentDetails',PaymentDetailsRouter)

//listen on server
app.listen(PORT,()=>{console.log("http://localhost:"+PORT);})