import './App.css';
import AllProducts from './views/AllProducts';
import Main from './views/Main';
import SingleProduct from './views/SingleProduct';
import Nav from './components/Nav';
import EditProduct from './views/EditProduct';
import {
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Nav/>
      <div className='container'>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/products" element={<AllProducts/>}/>
          <Route path="/products/:id" element={<SingleProduct/>}/>
          <Route path="/products/:id/edit" element={<EditProduct/>}/>
        </Routes>
      </div>
    </div>
  );
}

export default App;
