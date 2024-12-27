import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { CgMenu, CgClose } from "react-icons/cg";

const Nav = () => {
    const [menu, setMenu] = useState(false);
    const toggleMenu = () => setMenu((prev) => !prev);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Products", path: "/products" },
        { name: "Contact", path: "/contact" },
        { name: "Cart", path: "/cart",
            icon: (
                <>
                    <FiShoppingCart />
                    <span className="h-4 aspect-square text-[10px] font-normal text-white flex justify-center items-center absolute -top-2 -right-2 p-0.5 bg-slate-500 rounded-full">0</span>
                </>
            ),
        },
    ];

    const renderNavLinks = (isMobile) =>
        navItems.map((item) => (
            <li key={item.name} className={`h-fit ${isMobile ? "w-full p-5" : "w-24"} flex justify-center items-center`} >
                <NavLink className={`h-fit relative text-md font-medium ${isMobile ? "text-white" : "text-zinc-900 hover:text-gray-500"}`} to={item.path} onClick={isMobile ? toggleMenu : undefined}>
                    {item.icon || item.name}
                </NavLink>
            </li>
        ));

    return (
        <>
            {/* Desktop Navigation */}
            <ul className="h-full grow hidden sm:flex justify-end items-center">
                {renderNavLinks(false)}
            </ul>

            {/* Mobile Navigation */}
            {menu && (<ul className="absolute inset-0 sm:hidden flex flex-col justify-center items-center bg-black/[0.8] backdrop-blur-[6px]">
                {renderNavLinks(true)}
            </ul>)}

            {/* Mobile Menu Toggle */}
            <div className="h-fit w-fit sm:hidden z-10 cursor-pointer text-2xl" onClick={toggleMenu}>
                {menu ? <CgClose color="white" /> : <CgMenu />}
            </div>
        </>
    );
};

export default Nav;