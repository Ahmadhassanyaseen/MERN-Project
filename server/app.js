require('dotenv').config();
const express = require('express');
const startDB = require('./db/db');
const cors = require('cors');

// Routes
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const vendorRoutes = require('./routes/vendors');
const roleRoutes = require('./routes/role');
const conversationRoutes = require('./routes/conversation');
const messageRoutes = require('./routes/message');
const testRoutes = require("./routes/test");
const batchRoutes = require('./routes/batch');
const itemRoutes = require("./routes/item");
const taskRoutes = require("./routes/task");
// Configurations
const app = express();
const port = process.env.PORT || 3000;
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
// Routes
app.use('/users' , userRoutes);
app.use('/products' , productRoutes);
app.use('/vendor' , vendorRoutes);
app.use('/role' , roleRoutes);
app.use('/conversation' , conversationRoutes);
app.use('/message' , messageRoutes);
app.use('/batch' , batchRoutes);
app.use('/item' , itemRoutes);
app.use('/task' , taskRoutes);
app.use('/test' , testRoutes);

const start = async()=>{
    try{
       await startDB();
        app.listen(port , ()=>{
            console.log(`Server is running on ${port}`);
        });
    }
    catch(err){
        console.log(err);
    }
}
start();