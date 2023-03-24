import { useState } from "react";
import Course from "./Course";


export default function Courses(){
    const [filter,setFilter]=useState('All');

    return(
        <>
            <section className="px-24 py-16 bg-bgWhole">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]">Browse Our Popular Courses</h1>                   
                    <p className="w-[550px] text-center leading-6 py-3 text-[13px] font-[SatoshiLight] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>

                <div className="">
                    <div className="py-9 flex justify-center items-center w-full">
                        <button onClick={()=>setFilter('All')} className={`text-[12px] rounded font-[SatoshiBold]
                          mx-3 py-[10px] px-[16px] ${filter==='All' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>All Categories</button>
                        <button onClick={()=>setFilter('Design')} className={`text-[12px] rounded font-[SatoshiBold] 
                        mx-3 py-[10px] px-[16px] ${filter==='Design' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Design</button>
                        <button onClick={()=>setFilter('Development')} className={`text-[12px] rounded font-[SatoshiBold]
                         mx-3 py-[10px] px-[16px] ${filter==='Development' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Development</button>
                        <button onClick={()=>setFilter('Marketing')} className={`text-[12px] rounded font-[SatoshiBold]
                         mx-3 py-[10px] px-[16px] ${filter==='Marketing' ? 'bg-neutral text-bgPrimary' : 'bg-none text-txtLight' }`}>Marketing</button>
                    </div>

                    <div className="grid grid-cols-3 pb-5">
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