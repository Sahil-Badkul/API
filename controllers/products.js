const Product = require("../models/products");
const getAllProducts = async (req, res) => {
    const {company, name, featured, sort, select } = req.query;
    const queryObject = {}
    if(company){
        queryObject.company = company;
    }
    if(featured){
        queryObject.featured = featured;
    }
    if(name){
        // This is regex query for search incasesensitive and contining that name.
        queryObject.name = { $regex : name, $options : "i"};
    }
    let apiData = Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }
    const products = await apiData;
    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    // page = 2;
    // limit = 3;
    // skip = 1*3 = 3;
    let skip = (page - 1) * limit;
    apiData = apiData.skip(skip).limit(limit);
    // Product.find({}) --> return all collection
    res.status(200).json({ products });
};

const getAllProductsTesting = async (req, res) => {
    const myData = await Product.find(req.query);
    res.status(200).json({ myData });
};

module.exports = {getAllProducts, getAllProductsTesting};
