import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { FaShopify} from "react-icons/fa";
import { useEffect, useState } from "react";
import { searchData } from "../redux/Action/productAction";
 const Header=()=>{
    let auth=localStorage.getItem("user");
    auth=JSON.parse(auth);
    const dispatch=useDispatch();
    let result,productIds;
    let products=useSelector(state=>state.productList);
    // useEffect(()=>{
    //     productIds=dispatch(cartProductList({userId:auth._id}));
    // })
    result=useSelector(state=>state.cartData);
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear(); 
        navigate('/login');
    }
    return(
        <div className="header">
            <ul className="nav-ul-cust">
            <li style={{float:"right",color:'red'}}><Link to='/profile'>Profile</Link></li>
            <li style={{float:"right",color:'red'}}><Link onClick={logout} to='/login'>Logout</Link></li>
            </ul>
            <input className="search" style={{fontSize:"19px",padding: "10px",width:"400px"}} type="text" placeholder="search"  onChange={(e)=>{dispatch(searchData(e.target.value))}}/>
            <Link to={'/cart'}>
            <span className="noti">{result.length}</span>
            <img className="cart" src="https://www.graphicsprings.com/filestorage/stencils/3055581cff0526602142cbb0bfba9fca.png?width=500&height=500" alt="logo"/>
            </Link>
        </div>
    );
 }
 export default Header;