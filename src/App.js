
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Products from './components/Products';
import About from './components/About';
import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
    <Header></Header> 
    <Routes>
      <Route path='/' element={<Home></Home>}></Route>
      <Route path='/products' element={<Products></Products>}></Route>
      <Route path='/about' element={<About></About>}></Route>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    
  );
}

export default App;
