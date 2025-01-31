import React from "react";
import { NavLink } from "react-router-dom";
import errorpageimage from './assets/errorpageimage.gif';

const Error = () => {
    return (
        <div className="w-full grow flex justify-center items-center">
            <div className="h-full w-full max-w-xl flex flex-col justify-center items-center">
                <div className="h-fit w-fit text-center">
                    <h1 className="text-9xl text-slate-700 font-bold relative">404</h1>
                    <img className="w-full -my-10" src={ errorpageimage } alt="404_image" />
                </div>

                <div className="w-full flex flex-col justify-center items-center">
                    <h3 className="text-4xl text-slate-500 font-medium mb-1">Look like you're lost</h3>
                    <p className="text-sm text-slate-400 font-normal mb-8">The page you are looking for is not available!</p>
                    <div className="h-fit w-fit">
                        <NavLink className="w-32 flex justify-center items-center py-2.5 rounded bg-slate-500 hover:bg-slate-400 text-base leading-4 text-white font-normal" to="/">Go to Home →</NavLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Error;