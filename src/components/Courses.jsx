import { useState } from "react";
import Course from "./Course";


export default function Courses(){
    const [filter,setFilter]=useState('All');
    const courseLists=[
        {image:'/images/courses1.png',title:'Introduction to user research in UX Design',category:'Design',
        author:{name:'Leonard Victor', profile_img:'/images/cs1.png'},lessons:15,
        duration:'23hrs 50mins',rating:{rate:'4.7k',population:'32.7k+'},price:15.00},

        {image:'/images/courses2.png',title:'Introduction to new marketing audience',category:'Marketing',
        author:{name:'Jeffrey Williams', profile_img:'/images/cs2.png'},lessons:22,
        duration:'23hrs 50mins',rating:{rate:'4.7k',population:'8.7k+'},price:32.00},

        {image:'/images/courses3.png',title:'Introduction to Html, CSS & Bootstrap',category:'Development',
        author:{name:'Claretta Mason', profile_img:'/images/cs3.png'},lessons:55,
        duration:'45hrs 50mins',rating:{rate:'4.7k',population:'12.7k+'},price:55.00},

        {image:'/images/courses4.png',title:'Introduction to javascript, Git & Github',category:'Development',
        author:{name:'Jessica Duke', profile_img:'/images/cs4.png'},lessons:15,
        duration:'30hrs 50mins',rating:{rate:'4.7k',population:'32.7k+'},price:45.00},

        {image:'/images/courses5.png',title:'Introduction to outroom marketing analysis',category:'Marketing',
        author:{name:'Samuel Jacobs', profile_img:'/images/cs5.png'},lessons:26,
        duration:'33hrs 50mins',rating:{rate:'4.7k',population:'4.7k+'},price:25.00},

        {image:'/images/courses6.png',title:'Introduction to live marketing analysis',category:'Marketing',
        author:{name:'Adam Smith', profile_img:'/images/cs6.png'},lessons:32,
        duration:'10hrs 50mins',rating:{rate:'4.7k',population:'15.7k+'},price:25.00},
    ]

    return(
        <>
            <section className="px-4 sm:px-12 md:px-24 pt-12 pb-7 md:pt-16 md:pb-16 bg-bgWhole">
                <div className="flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]">Browse Our Popular Courses</h1>                   
                    <p className="px-7 sm:px-0 sm:w-[550px] text-center leading-4 sm:leading-6 py-3 text-[8px] sm:text-[13px] font-[SatoshiLight] text-txtLight">
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
                        <Course filter={filter} courseLists={courseLists}/>
                    </div>

                    <div className="flex justify-center items-center">
                        <button className="px-4 sm:px-6 py-2 sm:py-3 bg-bgPrimary rounded-sm sm:rounded text-neutral text-[8px] sm:text-xs font-[SatoshiMedium]">Explore All Courses</button>
                    </div>
                </div>
            </section>
        </>
    )
}