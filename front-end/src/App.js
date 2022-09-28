import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Cart from './components/Cart';
import { Route, Routes } from 'react-router-dom';
import PrivateComponent from './components/PrivateComponent';
import SignUp from './components/SignUp';
import Login from './components/Login';
import Nav from './components/Nav';
import ProductList from './components/ProductList';
import AddProduct from './components/AddProduct';
import PrivateComponent1 from './components/PrivateComponent1';
import PrivateComponent2 from './components/PrivateComponent2';
import Logout from './components/Logout';
import { useEffect } from 'react';

function App() {
  // let auth='';
  // useEffect(()=>{
  //   auth=localStorage.getItem("user");
  //   auth=JSON.parse(auth);
  // },[auth]);
  let auth=localStorage.getItem("user");
  auth=JSON.parse(auth);
  return (
    <div className="App">
     <Nav />
    <Routes>
      {!auth || auth.user==="seller"?
      <Route element={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProduct/>}/>
      <Route path="/update/:id" element={<h1>UpdateProduct</h1>}/>
      <Route path="*" element={<ProductList/>}/>
      </Route>:null}
      {!auth || auth.user==="customer"?
      <Route element={<PrivateComponent1/>}>
      <Route path='/dashboard' element={<><Header/><Main/></>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path="*" element={<><Header/><Main/></>}/>
      </Route>:null}
      <Route element={<PrivateComponent2/>}>
      <Route path="/logout" element={<Logout/>}/>
      <Route path="/profile" element={<h1>profile page</h1>}/>
      </Route>
      <Route path="/signup" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
    </Routes>
    </div>
  );
}

export default App;
