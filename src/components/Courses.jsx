import { useState } from "react";
import Course from "./Course";


export default function Courses(){
    const [filter,setFilter]=useState('All');

    return(
        <>
            <section className="px-4 sm:px-12 md:px-24 pt-12 pb-7 md:pt-16 md:pb-16 bg-bgWhole">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]">Browse Our Popular Courses</h1>                   
                    <p className="sm:w-[550px] text-center leading-4 sm:leading-6 py-3 text-[8px] sm:text-[13px] font-[SatoshiLight] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>

                <div className="">
                    <div className="pt-4 pb-7 sm:pt-9 sm:pb-9 flex justify-center items-center w-full">
                        <button onClick={()=>setFilter('All')} className={`text-[8px] sm:text-[12px] rounded font-[SatoshiBold]
                          mx-2 py-1 px-3 sm:mx-3 sm:py-[10px] sm:px-[16px] ${filter==='All' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>All Categories</button>
                        <button onClick={()=>setFilter('Design')} className={`text-[8px] sm:text-[12px] rounded font-[SatoshiBold] 
                        mx-2 py-1 px-3 sm:mx-3 sm:py-[10px] sm:px-[16px] ${filter==='Design' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Design</button>
                        <button onClick={()=>setFilter('Development')} className={`text-[8px] sm:text-[12px] rounded font-[SatoshiBold]
                         mx-2 py-1 px-3 sm:mx-3 sm:py-[10px] sm:px-[16px] ${filter==='Development' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Development</button>
                        <button onClick={()=>setFilter('Marketing')} className={`text-[8px] sm:text-[12px] rounded font-[SatoshiBold]
                         mx-2 py-1 px-3 sm:mx-3 sm:py-[10px] sm:px-[16px] ${filter==='Marketing' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Marketing</button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 pb-5">
                        <Course filter={filter}/>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="px-6 py-3 bg-bgPrimary rounded text-neutral text-xs font-[SatoshiMedium]">Explore All Courses</button>
                    </div>
                </div>
            </section>
        </>
    )
}