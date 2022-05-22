import react,{useState} from "react";
import { Route,Routes } from "react-router-dom";

import Login from "./Login";
import Preferences from "./Preferences";


function App(){
    // const adminUser={

    //   name:"nithya",
    //   password:"123"
    // }

    // const [user,setUser]=useState({name: '' , password:''})
    // const [error,setError]=useState("")

    // const login=(details)=>{
    //     console.log(details);
    // }

    // const logout=()=>{
    //   console.log("Logout");
    // }
    //  return(
    //  <div>

    //    {(user.name != '')?(
    //      <div>
    //        <h2>Welcome</h2>
    //        <button>Logout</button>
    //      </div>

    //    ):(<Form></Form>)}

    //  </div>
    //  )

    return(
      <div>
        <Routes>
          
           <Route  path="/" element={<Login/>}/>
           <Route path="home" element={<Login/>} />
           <Route path="users" element={<Preferences></Preferences>}></Route>
         
      
        </Routes>
       
      </div>
    )
}
export default App