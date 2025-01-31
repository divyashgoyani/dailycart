import React from "react";
import { HeroSection } from "../../components/HeroSection";
import aboutpageimage from './assets/aboutpageimage.jpg';


const About = () => {
    const details = {
        title: "Who We Are",
        desc: "Apna Store is your trusted destination for quality products, great value, and seamless shopping. We aim to make your everyday shopping simple and hassle-free",
        img: aboutpageimage,
        route: '/',
        btntitle: 'Go Home →',
        styles: 'py-10',
    };


    return (
        <div className="w-full grow flex flex-col items-center overflow-auto">
            <HeroSection props={ details } />
        </div>
    );
};

export default About;