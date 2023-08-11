import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart.jsx';
import Hero from './components/Hero.jsx';
import Categorias from './components/Categorias';
import Example from './components/Cart.jsx';
import CategoriaBolsas from './components/CategoriaBolsas';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <App /> */}
        <NavBar />
        <Cart />
        <Hero />
        <Categorias />
        <CategoriaBolsas />
    </React.StrictMode>
);