import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import Categorias from './components/Categorias';
import Hero from './components/Hero'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <BrowserRouter>
            <NavBar />
            <Cart />

            <Routes>
                <Route path="/hero" element={<Hero />} />
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/productos" element={<ItemListContainer />} />
                <Route path="/productos/:categoria" element={<ItemListContainer />} />
            </Routes>
            <ItemList />

        </BrowserRouter>
    </React.StrictMode>
);

