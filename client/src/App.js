import './App.css';
import Login from './Auth/Login/Login';
import {Routes,Route} from 'react-router-dom'
import Update_pass from './Auth/Update Password/Update_pass';
import My_script from './pages/Writer/My_script/My_script'




function App() {
  return (
    <div className="App">
    <Routes>
      <Route path='/Login' element={<Login />} />
      <Route path='/Update_pass' element={<Update_pass />} />
      <Route path='/My_script' element={<My_script />} />
    </Routes>
    
    
    
   
     
    </div>
  );
}

export default App;
