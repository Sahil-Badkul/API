const mongoose = require("mongoose");
const { options } = require("../routes/products");

const uri = "mongodb+srv://Sahil:yl9OROSJjEdPQ9Tn@sahilproductsapi.vrmynf1.mongodb.net/SahilProductsAPI?retryWrites=true&w=majority";

const connectDB = () => {
    mongoose.set('strictQuery', false);
    return mongoose.connect(uri, {
        useNewUrlParser: true, 
        useUnifiedTopology : true,
    });
}

module.exports = connectDB;