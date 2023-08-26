
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/NavBar';
import Cart from './components/Cart.jsx';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemList from './components/ItemList';
import Hero from './components/Hero'
import Contacto from './components/Contacto';
import { CartProvider } from './context/CartContext';
import Carrito from './components/Carrito';
import Checkout from './components/Checkout';

function App() {

    return (
        <div>
            <CartProvider >
                <BrowserRouter>
                    <NavBar />
                    <Cart />
                    <Routes>
                        <Route path="/" element={<Hero />} />
                        <Route path="/hero" element={<Hero />} />
                        <Route path="/item/:id" element={<ItemDetailContainer />} />
                        <Route path="/productos" element={<ItemListContainer />} />
                        <Route path="/productos/:category" element={<ItemListContainer />} />
                        <Route path="/contacto" element={<Contacto />} />
                        {/* <Route path="/carrito" element={<Carrito />} /> */}
                        <Route path="/checkout" element={<Checkout />} />
                    </Routes>

                    <ItemList />
                </BrowserRouter>
            </CartProvider>
        </div >
    );
}

export default App;