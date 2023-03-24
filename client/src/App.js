import './App.css';
import { Route,Routes } from 'react-router-dom';
import Landingpage from './Auth/Landing page/Landingpage';


import Reg from './Auth/SignUp/Reg'
import Publish from './pages/Writer/Publish/Publish';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/' element={<Landingpage/>} />
        <Route path='/signup' element={<Reg/>} />
        <Route path='/publish' element={<Publish />} />
       
        
        
      </Routes>
     
      
     
    

      
    </div>
  );
}

export default App;
