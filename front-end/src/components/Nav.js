import { FaShopify } from 'react-icons/fa';
import {Link, useNavigate} from 'react-router-dom';
const Nav=()=>{
    let auth=localStorage.getItem("user");
     auth=JSON.parse(auth);
    const navigate=useNavigate();
    const logout=()=>{
        localStorage.clear(); 
        navigate('/login');
    }
    return <>
      { auth && auth.user==="seller"?
       <Link to='/'>
               <FaShopify className="logo"/>
        </Link >:
        <Link to='/dashboard'>
               <FaShopify className="logo"/>
        </Link >
        }
        <div>
       { auth && auth.user==="seller"?
        <ul className='nav-ul'>
            <li><Link to='/'>Product List</Link></li>
            <li><Link to='/add'>Add</Link></li>
            <li><Link to='/update'>Update</Link></li>
            <li style={{float:"right",color:'red'}}><Link to='/profile'>Profile</Link></li>
            <li style={{float:"right",color:'red'}}><Link onClick={logout} to='/login'>Logout</Link></li>
        </ul>:
        auth?
        null
           :
        <ul className='nav-ul nav-right'>
            <li><Link to='/signup'>SignUp </Link></li>
            <li><Link to='/login'>Login</Link></li>
        </ul>}
        </div>
    </>
}
export default Nav;