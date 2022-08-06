import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom'
import Home from './page/home';
import Shop from './page/shop';
import Cart from './page/cart';
import Checkout from './page/checkout';
import Login from './page/login';
import Register from './page/register';
import Detail from './page/detail';
import Navbar from './component/Navbar';
import Footer from './component/Footer';
import CardLiveChat from './component/CardLiveChat';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/shop/:id' element={<Shop />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/detail/:id' element={<Detail />} />
      </Routes>
      <Footer />
      <CardLiveChat />
    </React.Fragment>
  );
}

export default App;

