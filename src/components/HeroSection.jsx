import React from 'react';
import { NavLink } from "react-router-dom";

export const HeroSection = ( { props } ) => {
    console.log("-->", props);


    return (
        <div className={`h-fit w-full flex justify-center items-center max-w-[1300px] ${props.styles}`}>
            <div className='w-3/4 aspect-[16/5] flex justify-around items-center overflow-hidden'>
                <div className="h-full w-5/12 flex flex-col justify-center">
                    <p className="text-base leading-4 text-slate-600 font-normal">Welcome to</p>
                    <p className="text-5xl text-slate-500 font-bold mb-2">{ props.title }</p>
                    <p className="text-xs text-slate-500 font-normal mb-10">{ props.desc }</p>
                    <div className="h-fit w-fit">
                        <NavLink className="w-28 flex justify-center items-center py-2.5 rounded bg-slate-500 hover:bg-slate-400 text-base leading-4 text-white font-normal" to={props.route}>{ props.btntitle }</NavLink>
                    </div>
                </div>
                <div className="h-full w-5/12 p-12 flex justify-center items-center">
                    <div className="h-full w-fit relative flex justify-center items-center">
                        <div className="absolute bottom-20 left-20 -top-10 -right-10 bg-slate-200 rounded-xl overflow-hidden"></div>
                        <img src={ props.img } alt="hero-section-photo" className="relative rounded-xl overflow-hidden" />
                    </div>
                </div>
            </div>
        </div>
    )
}
