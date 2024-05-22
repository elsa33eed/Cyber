const bodyParser = require('body-parser');
const cors = require('cors');
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

var corsOptions = {
    origin: '*',
    optionsSuccessStatus: 200 
}

//use Products router
app.use('/api/Products',cors(corsOptions),ProductsRouter)

//use Categories router
app.use('/api/Categories',cors(corsOptions),CategoriesRouter)

//use User router
app.use('/api/Users',cors(corsOptions),UsersRouter)

//use Discount router
app.use('/api/Discounts',cors(corsOptions),DiscountsRouter)

//use Address router
app.use('/api/Addresses',cors(corsOptions),AddressesRouter)

//use Payment router
app.use('/api/Payments',cors(corsOptions),PaymentsRouter)

//use ShoppingCart router
app.use('/api/ShoppingCarts',cors(corsOptions),ShoppingCartsRouter)

//use CartItem router
app.use('/api/CartItems',cors(corsOptions),CartItemsRouter)

//use OrderDetails router
app.use('/api/OrdersDetails',cors(corsOptions),OrdersDetailsRouter)

//use OrdersItems router
app.use('/api/OrdersItems',cors(corsOptions),OrdersItemsRouter)

//use PaymentDetails router
app.use('/api/PaymentDetails',cors(corsOptions),PaymentDetailsRouter)

//listen on server
app.listen(PORT,()=>{console.log("http://localhost:"+PORT);})