import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeFromCart } from '../redux/Action/action';
import { productList} from "../redux/Action/productAction";
import ImageShow from './ImageShow';
import Item from "./Item";
const Main=()=>{
  const dispatch=useDispatch();
  let products=useSelector(state=>state.productList);
  let search=useSelector(state=>state.searchData);
  let auth=localStorage.getItem("user");
  auth=JSON.parse(auth);
  if(search)
     products=search;
  useEffect(()=>{products=dispatch(productList())},[]);
  //console.warn(products);
  return (
    <div >
      <button className='Ebutton'   onClick={()=>dispatch(emptyCart())}>Empty Cart</button>
      <div className="table">
          {products? products.map((item)=>
           <div  style={{border:"1px solid blue",padding:"10px",margin:"10px",backgroundColor:"lightpink",}}>
            {/* <img className="img" src={item.thumbnail} alt="product"/>
            <div><FaArrowRight/></div> */} 
            <Item item={item}/>
            <button className='Abutton' onClick={()=>dispatch(addToCart(item))}>Add to Cart</button>
            <button className='Rbutton'  onClick={()=>dispatch(removeFromCart(item._id))}>Remove from Cart</button>
            </div>
          ):null}
          <br/>
          </div>
    </div>
  );
}
export default Main;