import ImageShow from "./ImageShow";
import { FaArrowRight } from "react-icons/fa";
import {Card,Button,Badge} from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../redux/Action/action";
const CartItems=(props)=>{
    console.log(props);
    const dispatch=useDispatch();
    let item=props.item[0];
    let value=props.item[1];
    //  let images=[item.thumbnail,...item.images];
    //  let len=images.length;
    //  const [ind,setInd]=useState(0);
    const countAddHandl=()=>{
        dispatch(addToCart(item)); 
        value+=1;
    }
    const countDelHandl=()=>{
        dispatch(removeFromCart(item._id)); 
        value-=1;
    }
    return(<div style={{display:"flex", backgroundColor:"lightgray"}}>
            <div className="cart-item-div" >
            <img className="cart-img" src={item.thumbnail} alt="product"/>
            <div className="cart-items" >Name : {item.title}</div>
            <div className="cart-items">Price : {item.price}</div>
            <div className="cart-items" >Category : {item.category}</div>
            <div className="cart-items">Company : {item.brand}</div>
            </div>
            <div className="cart-item-button" style={{width: "166px"}}>
             <button style={{backgroundColor:"lightgreen"}} onClick={countAddHandl}>+ 1</button>  <button style={{backgroundColor:"red"}} onClick={countDelHandl}>- 1</button>
             <button style={{backgroundColor:"voilet",width:"130px"}}>items:{value} </button>
             <button style={{backgroundColor:"voilet",width:"130px"}}>Total Price:{item.price*value} </button>
            </div>
            </div>
    );
}
export default CartItems;