import './App.css';
import { Route , Routes } from 'react-router-dom';
import Home from './componants/Home';
import Register from './componants/Register';
import Print from './componants/Print';
import Update from './componants/Update';

function App() {
  return (

    <div>

       <Routes>
        <Route  path='/' element={<Home/>} />
        <Route  path='/Register' element={<Register/>} />
        <Route  path='/Print' element={<Print/>} />
        <Route  path='/update/:id' element={<Update/>} />
      </Routes>
    </div>
  );
}

export default App;
