import React from "react";
import { HeroSection } from "../../components/HeroSection";
import homepageimage from './assets/homepageimage.jpg';
import Services from "../../components/Services";
import Trusted from "../../components/Trusted";

const Home = () => {
    const details = {
        title: "Apna Store",
        desc: "Your one-stop shop for all your needs! Explore a wide range of quality products at unbeatable prices, delivered straight to your doorstep. Shop smart, shop easy with Apna Store!",
        img: homepageimage,
        route: '/products',
        btntitle: 'Shop now!',
        styles: 'py-10',
    };

    return (
        <div className="w-full grow flex flex-col items-center overflow-auto">
            <HeroSection props={ details } />
            <Services />
            <Trusted />
        </div>
    );
};

export default Home;