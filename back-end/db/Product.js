const mongoose=require('mongoose');
const productSchema=new mongoose.Schema({
    title:String,
    description:String,
    price:Number,
    userId:String,
    discountPercentage:Number,
    rating:Number,
    stock:Number,
    brand:String,
    category:String,
    thumbnail:String,
    images:[String]
});
module.exports= mongoose.model('products',productSchema);