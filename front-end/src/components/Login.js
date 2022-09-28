import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login=()=>{
  const [email,setEmail]=useState("");
  const [password,setPass]=useState("");
  const navigate=useNavigate();
  useEffect(()=>{
    let auth=localStorage.getItem("user");
    auth=JSON.parse(auth);
        if(auth && auth.user==="customer")
          navigate('/dashboard');   
        else {if(auth && auth.user==="seller")
                navigate('/');}
  },[])
  const submitHand=async()=>{
     let item={email,password};
     console.warn(item);
     let data=await fetch('http://localhost:5000/login',{
        method:'post',
        headers:{
            'Accept': 'application/json',
            'Content-Type':'application/json'
        },
        body:JSON.stringify(item),
     });
     data= await data.json();
     if(data){
        localStorage.setItem("user",JSON.stringify(data));
        // localStorage.setItem("token",JSON.stringify(data.auth));
        if(data.user==="seller")
            navigate('/');
        else
          navigate('/dashboard');
        
    }
     else 
      { setEmail('');
        setPass('');
      }
     console.warn(data);
  }
  return (<div className="login">
        <h1 style={{color:"blue"}}>Login </h1>
        <input type="text" value={email} onChange={(e)=>{setEmail(e.target.value)}} placeholder="Email"/>
        <input type={"password"}  value={password} onChange={(e)=>{setPass(e.target.value)}} placeholder="Password"/>
        <button onClick={submitHand} type="button">Login</button>
  </div>);
}
export default Login;