import { Navigate, Outlet } from "react-router-dom";

const PrivateComponent=()=>{
    let auth=localStorage.getItem("user");
    auth=JSON.parse(auth);
  return(<>{auth ?
       <Outlet />:<Navigate to="/login"/>}
  </>);
}
export default PrivateComponent;