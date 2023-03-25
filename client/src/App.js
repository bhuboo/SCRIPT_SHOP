import './App.css';
import Login from './Auth/Login/Login';
import {Routes,Route} from 'react-router-dom'
import My_script from './pages/Writer/My_script/my_script';
import Landingpage from './Auth/Landing page/Landingpage';
import Reg from './Auth/SignUp/Reg'
import Update_pass from './Auth/Update Password/Update_pass'
import Publish from './pages/Writer/Publish/Publish';

function App() {
  return (
    <div className="App">
   
  
      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/signup' element={<Reg/>} />
        <Route path='/publish' element={<Publish />} />
        <Route path='/Login' element={<Login />} />
      <Route path='/Update_pass' element={<Update_pass />} />
      <Route path='/My_script' element={<My_script />} />
        
        
      </Routes>
     
      
     
    

      
    </div>
  );
}

export default App;
