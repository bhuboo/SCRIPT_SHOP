import "./App.css";
import Login from "./Auth/Login/Login";
import { Routes, Route, Await, useNavigate } from "react-router-dom";
import My_script from "./pages/Writer/My_script/my_script";
import Landingpage from "./Auth/Landing page/Landingpage";
import Reg from "./Auth/SignUp/Reg";
import Update_pass from "./Auth/Update Password/Update_pass";
import Publish from "./pages/Writer/Publish/Publish";
import Writer_Home from "./pages/Writer/Writer_Home/Writer_Home";
import { useSelector } from "react-redux";



function App() {

  const token =useSelector((state)=>state.auth)
  
  
  return (
    <div className="App">

      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<Reg />} />
        <Route path="/Login" element={<Login />} />
       {token && 
        <Route path="/WriterHome" element={<Writer_Home/>} />
       } 
        <Route path="/publish" element={<Publish />} />
        <Route path="/update-pass" element={<Update_pass />} />
        <Route path="/my-script" element={<My_script />} />
      </Routes>
    </div>
  );
}

export default App;
