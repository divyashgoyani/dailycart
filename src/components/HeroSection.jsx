import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export const HeroSection = ({ props }) => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Function to check screen size
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind's `sm` breakpoint is 640px
        };

        handleResize(); // Initial check
        window.addEventListener("resize", handleResize);

        // Cleanup event listener on component unmount
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={`h-fit w-full flex justify-center items-center max-w-[1300px] ${props.styles}`}>
            <div className={`flex justify-around items-center ${isMobile ? "flex-col px-5" : "w-3/4 aspect-[16/5] overflow-hidden"}`}>
                <div className={`h-full flex flex-col justify-center ${isMobile ? "flex-col mb-10" : "w-5/12"}`}>
                    <p className="text-base leading-4 text-slate-600 font-normal">Welcome to </p>
                    <p className="text-5xl text-slate-500 font-bold mb-2">{props.title} </p>
                    <p className="text-xs text-slate-500 font-normal mb-10">{props.desc} </p>
                    <div className="h-fit w-fit">
                        <NavLink className="w-28 flex justify-center items-center py-2.5 rounded bg-slate-500 hover:bg-slate-400 text-base leading-4 text-white font-normal" to={props.route}>{props.btntitle}</NavLink>
                    </div>
                </div>
                <div className={`h-full flex justify-center items-center ${isMobile ? "flex-col p-2.5" : "w-5/12 p-12"}`}>
                    <div className="h-full w-fit relative flex justify-center items-center">
                        <div className={`absolute bg-slate-200 rounded-xl overflow-hidden ${isMobile ? "-bottom-6 -left-2 top-12 right-12" : "bottom-20 left-20 -top-10 -right-10"}`}></div>
                        <img src={props.img} alt="hero-section-photo" className="relative rounded-xl overflow-hidden" />
                    </div>
                </div>
            </div>
        </div>
    );
};
