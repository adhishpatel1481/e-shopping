import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList=()=>{
    const [products,setProducts]=useState([]);
    useEffect(()=>{
        getData();
        console.warn(products);
    },[])
    const getData=async()=>{
        let user=localStorage.getItem("user");
        user=JSON.parse(user);
        console.log("user",typeof(user._id));
        let data=await fetch(`http://localhost:5000/products/${user._id}`);
        data=await data.json();
        setProducts(data);
        console.warn(data);
    }
    const delProd=async(id)=>{
        console.log(id)
        let data=await fetch(`http://localhost:5000/delete/${id}`,{
            method:"delete"
        });
        data=await data.json();
        if(data)
           getData();
    }
    const searchHand=async(e)=>{
        let k = e.target.value;
        if(!k){
           getData();
           return;
        }
        let data=await fetch(`http://localhost:5000/search/${k}`);
        data=await data.json();
        setProducts(data);

    }
    return(products?
        <div className="product-list"> 
         <h1>Product list</h1>
         <input className="search" placeholder="search product" onChange={searchHand} />
         <ul >
            <li style={{width:"50px"}}>s.no</li>
            <li style={{width:"200px"}}>name</li>
            <li style={{width:"100px"}}>price</li>
            <li style={{width:"200px"}}>category</li>
            <li style={{width:"200px"}}>company</li>
            <li style={{width:"200px"}}>operations</li>
         </ul>
        { 
            products.length>0?products.map((item,i)=>{
               return <ul className="product-list ul-data" >
            <li style={{width:"50px",backgroundColor:"white"}}>{i+1}</li> 
            <li style={{width:"200px",backgroundColor:"white"}}>{item.title}</li>
            <li style={{width:"100px",backgroundColor:"white"}}>{item.price}</li>
            <li style={{width:"200px",backgroundColor:"white"}}>{item.category}</li>
            <li style={{width:"200px",backgroundColor:"white"}}>{item.brand}</li>
            <li style={{width:"200px",backgroundColor:"grey"}}><button onClick={()=>delProd(item._id)}>delete</button><Link to={`/update/${item._id}`}>Update</Link></li>
         </ul>
            }):
            <h1>product not found</h1>
        }
        
    </div>:<h1>product not found</h1>);
}
export default ProductList;