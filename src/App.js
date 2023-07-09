import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home';
import Products from './component/Products';
import Contact from './component/Contact';
import About from './component/About';
import Footer from './component/Footer';
import ErrorPage from './component/ErrorPage';
import ProductDetail from './component/ProductDetail';
import Cart from './component/Cart';

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route strict exact path='/' element={<Home />} />
        <Route strict exact path='/products' element={<Products />} />
        <Route strict exact path='/contact' element={<Contact />} />
        <Route strict exact path='/about' element={<About />} />
        <Route strict exact path='/cart' element={<Cart />} />
        <Route strict exact path='/productdetail/:id' element={<ProductDetail />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
