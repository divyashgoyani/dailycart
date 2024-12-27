import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../src/home/Home.jsx';
import About from '../src/about/About.jsx';
import Contact from '../src/contact/Contact.jsx';
import Products from '../src/products/Products.jsx';
import Cart from '../src/cart/Cart.jsx';
import Error from '../src/error/Error.jsx';
import SingleProduct from '../src/singleproduct/SingleProduct.jsx';
import Header from '../src/components/Header.jsx';

const App = () => {
    return (
        <div className="h-screen w-screen relative flex flex-col">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/singleproduct/:id" element={<SingleProduct />} />
                    <Route path="/*" element={<Error />} />
                </Routes>
            </Router>
        </div>
    );
};

export default App;