import { useState } from "react";
import Alert from 'react-bootstrap/Alert';

const AddProduct=()=>{
    let user=localStorage.getItem("user");
    const [product,setProduct]=useState({       
                      title:"",
                      description:"",
                      price:"",
                     discountPercentage:"",
                     rating:"",
                     stock:"",
                     brand:"",
                     category:"",
                     thumbnail:"",
                     images:['','','','',''],
                     userId:JSON.parse(user)._id
                         });
    const [view,setView]=useState({v1:0,v2:0,v3:0,v4:0});
    // const [price,setPrice]=useState("");
    // const [category,setCat]=useState("");
    // const [company,setCom]=useState("");
    const [err,setErr]=useState(false);
    const submitHand=async()=>{
        if(! product.title || ! product.price || ! product.category || !product.brand){
            setErr(true);
            return false;
        }
        
        product.images[4]=product.thumbnail;
        //console.log(product);
        let data=await fetch('http://localhost:5000/addproduct',{
            method:"post",
            headers:{
                'Content-Type':'application/json',
                'Accept':'application/json',
            },
            body:JSON.stringify(product)
        });
        data=await data.json(); 
        console.log(data)
        if(data){
            alert("added successfully");
            setProduct({       
                title:"",
                description:"",
                price:"",
               discountPercentage:"",
               rating:"",
               stock:"",
               brand:"",
               category:"",
               thumbnail:"",
               images:['','','','',''],
               userId:JSON.parse(user)._id
                   })
             setView({v1:0,v2:0,v3:0,v4:0});
        }
        else{
            alert("some error");
        }
    }
    return(<div className="product">
        <h1>Add Product</h1>
        <input type="text" value={product.title} onChange={(e)=>setProduct({...product,title:e.target.value})} placeholder="Product Name" />
        {err && !product.title ?<span className="err">Enter Valid Name</span>:null}
        <input type="number" value={product.price} onChange={(e)=>setProduct({...product,price:e.target.value})} placeholder="Product Price" />
        {err && !product.price ?<span className="err">Enter Valid Price</span>:null}
        <input type="text" value={product.category} onChange={(e)=>setProduct({...product,category:e.target.value})} placeholder="Product Category" />
        {err && ! product.category ?<span className="err">Enter Valid Category</span>:null}
        <input type="text" value={product.brand} onChange={(e)=>setProduct({...product,brand:e.target.value})} placeholder="Product Company" />
        {err && ! product.brand ?<span className="err">Enter Valid Company<br/></span>:null}
        <input type="text" value={ product.description} onChange={(e)=>setProduct({...product, description:e.target.value})} placeholder="Product description" />
        {err && ! product.description ?<span className="err">Enter Valid Name</span>:null}
        <input type="number" value={product.discountPercentage} onChange={(e)=>setProduct({...product,discountPercentage:e.target.value})} placeholder="Product discountPercentage" />
        {err && ! product.discountPercentage ?<span className="err">Enter Valid Name</span>:null}
        <input type="number" value={product.rating} onChange={(e)=>setProduct({...product,rating:e.target.value})} placeholder="Product rating" />
        {err && ! product.rating ?<span className="err">Enter Valid Name</span>:null}
        <input type="number" value={product.stock} onChange={(e)=>setProduct({...product,stock:e.target.value})} placeholder="Product stock" />
        {err && ! product.stock ?<span className="err">Enter Valid Name</span>:null}
        <input type="text" value={product.thumbnail} onChange={(e)=>setProduct({...product,thumbnail:e.target.value})} placeholder="Product thumbnail image url" />
        {err && ! product.thumbnail ?<span className="err">Enter Valid Name</span>:null}
        <form style={{float:"left",position:"relative"}}>
          <input type="checkbox"  onChange={()=>{setView({...view,v1:view.v1^1});if(view.v1===0)product.images[0]='';}} value="Bike"/>
          {view.v1?<input type="text" value={product.images[0]} onChange={(e)=>{setProduct({...product,images:[...product.images.slice(0, 0), e.target.value, ...product.images.slice(1)]})}}  placeholder="Product view1 image url" />:<label for="vehicle1"> view 1</label>}
          <input type="checkbox" onChange={()=>{setView({...view,v2:view.v2^1});if(view.v2===0)product.images[1]='';}} value="Car"/>
          {view.v2?<input type="text" value={product.images[1]} onChange={(e)=>{setProduct({...product,images:[...product.images.slice(0, 1), e.target.value, ...product.images.slice(2)]})}} placeholder="Product view2 image url" />:<label for="vehicle2"> view 2</label>}
          <input type="checkbox" onChange={()=>{setView({...view,v3:view.v3^1});if(view.v3===0)product.images[2]='';}} value="Boat"/>
          {view.v3?<input type="text" value={product.images[2]} onChange={(e)=>{setProduct({...product,images:[...product.images.slice(0, 2), e.target.value, ...product.images.slice(3)]})}} placeholder="Product view1 image url" />:<label for="vehicle3">view 3</label>}
          <input type="checkbox" onChange={()=>{setView({...view,v4:view.v4^1});if(view.v4===0)product.images[3]='';}} value="Boat"/>
          {view.v4?<input type="text" value={product.images[3]} onChange={(e)=>{setProduct({...product,images:[...product.images.slice(0, 3), e.target.value, ...product.images.slice(4)]})}} placeholder="Product view1 image url" />:<label for="vehicle3"> view 4</label>}
        </form>
        <button onClick={submitHand}>Add Product</button>
    </div>);
}
export default AddProduct;