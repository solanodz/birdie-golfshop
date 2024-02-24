
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css';
import NavBar from './components/Navbar';
import ItemListContainer from './pages/ItemListContainer';
import ItemDetailContainer from './pages/ItemDetailContainer';
import ItemList from './components/ItemList';
import Hero from './pages/Hero'
import Contacto from './pages/Contacto';
import { CartProvider } from './context/CartContext';
import Checkout from './pages/Checkout';
import { Toaster } from 'sonner';
import MaxWidthWrapper from './components/MaxWidthWrapper';
import AllProducts from './pages/AllProducts';


function App() {

    return (
        <div>
            <MaxWidthWrapper>
                <Toaster
                    position="bottom-right"
                    richColors={true}
                    reverseOrder={false}
                />
                <CartProvider>

                    <BrowserRouter>
                        <NavBar />
                        <Routes>
                            <Route path="/" element={<Hero />} />
                            <Route path="/hero" element={<Hero />} />
                            <Route path="/item/:id" element={<ItemDetailContainer />} />
                            <Route path="/productos" element={<ItemListContainer />} />
                            <Route path="/productos/:category" element={<ItemListContainer />} />
                            <Route path="/contact" element={<Contacto />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/all-products" element={<AllProducts />} />
                        </Routes>
                        <ItemList />
                    </BrowserRouter>
                </CartProvider>
            </MaxWidthWrapper>
        </div >
    );
}

export default App;