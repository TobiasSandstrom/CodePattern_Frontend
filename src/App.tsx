import Navbar from './Views/Components/Navbar';
import {Routes, Route} from 'react-router-dom'
import Home from './Views/Pages/Home';
import ProductDetails from './Views/Pages/ProductDetails';


function App() {
  return (
    <>
      <Navbar/>
        <div className="App">
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product/:category/:id' element={<ProductDetails/>}/>
          </Routes>
        </div>
    
    </>
  );
}

export default App;
