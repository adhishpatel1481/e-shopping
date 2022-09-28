import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItems from "./CartItems";
import Item from "./Item";
const Cart=()=>{
  let  data=useSelector(state=>state.cartData);
  console.log(data);
  let dict=new Map() ;
  for(let i=0;i<data.length;++i){
    if(dict.has(data[i]))
        dict.set(data[i],dict.get(data[i])+1);
    else
       dict.set(data[i],1);
  }
  dict=[...dict];
//   for (const [key, value] of dict) {
//     console.warn(`${key} = ${value}`);
//   }
  let amount=data.length && data.map(item=>Number(item.price)).reduce((prev,next)=>prev+next);
  console.warn("in",amount);
  return(<>
     <Link to={"/dashboard"}>Products list</Link>
     <h1>cart page</h1>
     <div className="cart-page">
        <div className="cart-page-items">
            { dict.map(item=>{
                return <CartItems item={item}/>
            })
            }
        </div>
        <div>
        <div className="price">
        <div className="amts"><span>amount</span><span className="sp">{amount}</span></div>
        <div className="amts"><span>discount</span><span>000</span></div>
        <div className="amts"><span>tax</span><span>000</span></div>
        <div className="amts"><span>total</span><span>{amount}</span></div>
        </div>
        </div>
     </div>
  </>);
}
export default Cart;