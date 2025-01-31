// React
import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Store
import { useDispatch } from "react-redux";
import { updateScreenSize } from "./store/slices/screenSlice.js";

// Pages and components
import Home from './pages/home/Home.jsx';
import About from './pages/about/About.jsx';
import Contact from './pages/contact/Contact.jsx';
import Products from './pages/products/Products.jsx';
import Cart from './pages/cart/Cart.jsx';
import Error from './pages/error/Error.jsx';
import SingleProduct from './pages/singleproduct/SingleProduct.jsx';
import Header from './components/Header.jsx';



const App = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handleResize = () => {
            dispatch(updateScreenSize(window.innerWidth));
        };

        window.addEventListener("resize", handleResize);
        handleResize(); // Set initial value
        return () => window.removeEventListener("resize", handleResize);
    }, [dispatch]);




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