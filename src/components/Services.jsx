import React, { useEffect, useState } from "react";

const Services = () => {
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
        <div className={`h-fit w-full flex justify-center items-center  ${isMobile ? "text-red-500" : "max-w-[1300px] text-green-500"}`}>Services</div>
    );
};

export default Services;