const mongoose = require('mongoose');

const productGroupSchema = new mongoose.Schema({
    name: String,
    products: Array
}
,
{
    timestamps: true
}
)