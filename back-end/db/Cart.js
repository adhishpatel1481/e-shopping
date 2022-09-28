let mongoose=require('mongoose');
let cartSchema=new mongoose.Schema({
    userId:String,
    productId:String,
    productCount:Number
});
module.exports=mongoose.model('carts',cartSchema);