require('./db/config')
const mongoose=require('mongoose');
const express=require('express');
const cors=require('cors');
const Product=require('./db/Product');
const Cart=require('./db/Cart');
const User=require('./db/User');

const app=express();

app.use(express.json());
app.use(cors());

app.post('/signup',async(req,resp)=>{
        let user=new User(req.body);
        let result=await user.save();
        resp.send(result);
})
app.post('/login',async(req,resp)=>{
    if(req.body.email && req.body.password){
        console.log(req.body);
        let user=await User.findOne(req.body).select("-password");
        if(user){
            resp.send(user);
           }
        else
           resp.send({result:"user not found"});
        }
    else
        resp.send({result:"user not found"});

})
app.post('/addproduct',async(req,resp)=>{
    let product= new Product(req.body);
    let result=await product.save();
    console.log(result);
    resp.send(result);
})

app.get('/products/:id',async(req,resp)=>{
    console.log({userId:String(req.params.id)});
    let products=await Product.find({userId:req.params.id});
    resp.send(products);
})
app.get('/product/:id',async(req,resp)=>{
    let product=await Product.findOne({productId:req.params.id})
    resp.send(product);
})
app.get('/products',async(req,resp)=>{
    let products=await Product.find();
    resp.send(products);
})
app.put('/product/:id',async(req,resp)=>{
    let data= await Product.updateOne({userId:req.params.id},{$set:req.body});
    resp.send(data);
})

app.get('/search/:key',async(req,resp)=>{
       let products=await Product.find({"$or":[
        {title:{$regex:req.params.key}},
        {brand:{$regex:req.params.key}},
        {category:{$regex:req.params.key}}
    ]});
    resp.send(products);
})

app.post('/addtocart',async(req,resp)=>{
    console.log(req.body);
    let item=await Cart.findOne(req.body);
    console.log("database",item);
    if(item){
        let data= await Cart.updateOne(req.body,{$set:{productCount:item.productCount+1}});
        console.log(data);
        resp.send(data);
    }
    else{
    item=await Cart({...req.body,productCount:1});
    let result=await item.save();
    console.log("inserted to cart",result);
    resp.send(result);}
})
app.get('/productlist/:userId',async(req,resp)=>{
    console.log(req.params.userId);
    let products= await Cart.find({userId:req.params.userId}).select("-productId");
    console.log(products);
    resp.send(products);
})
app.listen(5000);