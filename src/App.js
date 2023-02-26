// import logo from './logo.svg';

import { useState } from "react";
import { Navigate, useNavigate, useNavigation } from "react-router-dom";
import Maincomponent from "./components/Maincomponent/Maincomponent";
 
 
 
 
function App() {
  // const [login ,setLogin]=useState(true)
  // const navigator=useNavigate()
  // const login2=()=>{
  //   if(login==true){
  //     navigator("/LoginForm")  
  //   }else{
  //     navigator("/error")
  //   }
  // }
  return (
    <>    
     {/* <button onClick={login2} className="btn btn-success" style={{justifyContent:'center'}}>onClick</button> */}
     <Maincomponent />
    </>
  )
}

export default App;
