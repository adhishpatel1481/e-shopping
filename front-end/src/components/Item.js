import { useState } from "react";
import ImageShow from "./ImageShow";
import { FaArrowRight } from "react-icons/fa";

const Item=(props)=>{
    // console.log(props);
     let item=props.item ;
     let images=[item.thumbnail,...item.images];
     let len=images.length;
     const [ind,setInd]=useState(0);
    return(<>
            <img className="img" src={images[ind%len]} alt="product"/>
            <div onClick={()=>{setInd(ind+1)}}><button style={{padding:"0px",margin:"0px",height:"23px"}}>--></button></div>  
            <div className="items" >Name : {item.title}</div>
            <div className="items">Price : {item.price}</div>
            <div className="items" >Category : {item.category}</div>
            <div className="items">Company : {item.brand}</div>
            </>
    );
}
export default Item;