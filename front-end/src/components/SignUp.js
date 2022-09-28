import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp =()=>{
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPass]=useState("");
    const [user,setUser]=useState("customer");
    const [tn,setTn]=useState({color:"green"});
    const [te,setTe]=useState({color:"green"});
    const [tp,setTp]=useState({color:"green"});
    const navigate=useNavigate();
    useEffect(()=>{
        let auth=localStorage.getItem("user");
        auth=JSON.parse(auth);
        if(auth && auth.user==="customer")
          navigate('/dashboard');   
        else{if(auth && auth.user==="seller")
           navigate('/');}

    },[])
    const submitHand=async()=>{
        console.warn({name,email,password,user});
        let item={name,email,password,user};
        let data=await fetch('http://localhost:5000/signup',{
            method:'post',
            headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(item),
        });
        data=await data.json();
        console.log(data);
        if(data)
        {   localStorage.setItem("user",JSON.stringify(data));
            // localStorage.setItem("token",JSON.stringify(data.auth));
            if(data.user==="seller")
              navigate('/');
            else
               navigate('/dashboard');
        }
    }
    const checkName=(e)=>{
          let nam=e.target.value;
          setTn({color:"green"});
          for(let i in nam){
             if((nam[i]<'a' || nam[i]>'z') && (nam[i]<'A' || nam[i]>'Z') && nam[i]!==" "){
                console.warn(tn);
                setTn({color:"red"});
                break;
             }
            }
            setName(nam);
    }
    const checkMail=(e)=>{
        let mail=e.target.value;
        setTe({color:"green"});
        let patt=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/; 
        if(!mail.match(patt))
          setTe({color:"red"});
        setEmail(mail);
    }
    const checkPass=(e)=>{
        let pass=e.target.value;
        setTp({color:"green"});
        let patt=/^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;; 
        if(!patt.test(pass))
          setTp({color:"red"});
        setPass(pass);
    }
    return (<div className="signup">

        <h1 style={{color:"blue"}}>Register </h1>
        <input type="text" style={tn} value={name} onChange={checkName} placeholder="Name"/>
        <input type="text" style={te}  value={email} onChange={checkMail} placeholder="Email"/>
        <select  name="cars" onChange={(e)=>setUser(e.target.value)}>
         <option value="customer" se>customer</option>
         <option value="seller">seller</option>
         </select>
        <input type={"password"} style={tp} value={password} onChange={checkPass} placeholder="Password"/>
        <button onClick={submitHand} type="button">Sign Up</button>
       
    </div>);
}
export default SignUp;