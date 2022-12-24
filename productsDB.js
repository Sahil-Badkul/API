const connectDB = require('./db/connect');
const Product = require('./models/products');

const ProductJson = require('./products.json');

const start = async () => {
    try{
        await connectDB();
        await Product.deleteMany();
        await Product.create(ProductJson);
        console.log("success");
    }catch(err){
        console.log(err);
    }
}

start();