
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import Homes from './components/Homes/Home';
import Register from './components/Register/Register';
import Login from './components/Login/Login'
import Products from './components/Products/Products'; // Make sure you have this component
import Address from "./components/AddressSelection/Address";
import Cart from "./components/Cart/Cart";
import Payment from "./components/Payment/Payment";
import Search from "./components/Search/Search";
import DropdownMenu from"./components/DropdownMenu/DropdownMenu";
import Project from "./components/Projects/Project";
import Services from "./components/Services/Services";
import About from "./components/About/About";
import Contact from "./components/Contact Us/Contact";
import Categories from './components/Categories/Categories';
// import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Cart from "./components/Cart/Cart";
function App() {
  return (
   
      <div className="App">
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/login" element={<Login />} />
<<<<<<< HEAD
          <Route path="/categories" element={<Categories />} />
=======
          <Route path="/register" element={<Register />} />
>>>>>>> 719a21a856e6e223ecf1286b2be1c040b7803467
          <Route path="/projects" element={<Project />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/" element={<Homes/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
          <Route path="/search" element={<Search />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/products" element={<Products />} />
          <Route path="/address-selection" element={<Address />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dropdown" element={<DropdownMenu/>}/>
        </Routes>
      </div>
    
  );
}

export default App;
