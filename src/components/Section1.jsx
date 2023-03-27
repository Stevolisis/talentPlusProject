import { Link } from "react-router-dom";
import { FiArrowUpRight, FiMenu } from 'react-icons/fi';
import { IoMdClose } from 'react-icons/io'
import { useState } from "react";

export default function Section1(){
console.log(window.innerWidth)
const [menuStatus,setMenuStatus]=useState(false);

    return(
        <>
            <section className="bg-bgPrimary text-neutral px-4 sm:px-12 md:px-24 bg-[url('/images/mainwave.png')] bg-cover">
                <div className="py-10 flex justify-between items-center">
                    <div>
                        <h1 className="font-[AmazingKids] text-[19px] sm:text-4xl text-neutral">Tech Time</h1>
                    </div>
                    <div className="hidden sm:flex items-center font-[SatoshiMedium] text-[13px]">
                        <Link to='/' className="mx-3">Home</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">About Us</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Courses</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Testimonial</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Community</Link>
                        <Link to='/' className="ml-3 py-[12px] px-[28px] bg-neutral text-bgPrimary rounded">Enroll Now</Link>
                    </div>
                    <div className="block sm:hidden">
                        {menuStatus ? <IoMdClose size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/> : <FiMenu size={22} onClick={()=>setMenuStatus(!menuStatus)} className='cursor-pointer'/>}
                    </div>
                    {menuStatus&&
                    <div className="z-20 absolute right-2 top-24 bg-bgSecondary p-7 pt-10 w-[170px] rounded-md font-[SatoshiLight] text-[13px]">
                        <Link to='/' className="block">Home</Link>
                        <Link to='/' className="block my-3 ">About Us</Link>
                        <Link to='/' className="block my-3 ">Courses</Link>
                        <Link to='/' className="block my-3 ">Testimonial</Link>
                        <Link to='/' className="block my-3 ">Community</Link>
                        <Link to='/' className="block mt-3 py-2 px-3 font-[SatoshiMedium] text-center bg-neutral text-bgPrimary rounded">Enroll Now</Link>

                    </div>}
                </div>

                <div className="flex justify-evenly items-center flex-col lg:flex-row">
                    
                    <div className="flex-1 py-2 sm:py-16 lg:py-0 h-full
                     flex flex-col justify-center items-center lg:items-start">
                        
                        <div className="absolute top-[390px] left-10 sm:left-12 ml-[-50px] block">
                            <img  className="w-7 h-7sm:w-[12px] sm:h-12 object-contain" src='/images/zigzagmain.png' alt="arrowmain"/>
                        </div>
                        <div className="hidden sm:block absolute top-44 left-44 ml-[-50px]">
                            <img  className="w-3 h-3 object-contain" src='/images/donutmain.png' alt="arrowmain"/>
                        </div>
                        <div className="hidden sm:block absolute top-48 left-[40vw] ml-[-50px]">
                            <img  className="w-2 h-2 object-contain" src='/images/circlemain.png' alt="arrowmain"/>
                        </div>
                        



                        <div className=" sm:px-0">
                            <p className="text-center lg:text-left leading-[44px] sm:leading-[63px] font-[ClashDisplayBold] text-[32px] sm:text-[3.05rem] text-neutral">Grow your skills to advance your career path</p>
                        </div>
                        <div className="py-3 sm:w-[400px] px-14 sm:px-0">
                            <p className="text-center lg:text-left text-[8px] sm:text-[13px] font-[SatoshiLight] text-[#E7E7E7]">Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>
                        </div>



                        
                        <div className="py-3 sm:py-3 flex z-10">
                            <button className="flex items-center mr-5 font-[SatoshiMedium] text-[8px] sm:text-[13px] py-[6px] px-[18px] sm:py-[10px] sm:px-[28px] text-neutral border-2 border-txtHeaderLight rounded">
                                Get Started Now <FiArrowUpRight className='ml-2 text-[13px] sm:text-[16px]'/></button>
                            <button className="font-[SatoshiMedium] text-[8px] sm:text-[13px] py-[6px] px-[20px] sm:py-[12px] sm:px-[28px] bg-neutral text-bgPrimary rounded">Enroll Now</button>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="w-8 h-8 sm:w-[45px] sm:h-[45px]" src='/images/preview1.png' alt='preview'/>
                                <img className="w-8 h-8 sm:w-[45px] sm:h-[45px] ml-[-15px]" src='/images/preview2.png' alt='preview'/>
                                <img className="w-8 h-8 sm:w-[45px] sm:h-[45px] ml-[-15px]" src='/images/preview3.png' alt='preview'/>
                                <img className="w-8 h-8 sm:w-[45px] sm:h-[45px] ml-[-15px]" src='/images/preview4.png' alt='preview'/>
                                <img className="w-8 h-8 sm:w-[45px] sm:h-[45px] ml-[-15px]" src='/images/preview5.png' alt='preview'/>
                            </div>
                            <div className="ml-1 flex justify-center items-center flex-col">
                                <p className="text-[19px] font-[ClashDisplaySemibold] leading-none">255K+</p>
                                <p className="text-[13px] font-[SatoshiLight] leading-none"> Previews</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 h-full pt-7 sm:pt-0">
                        <img className="w-full h-full object-contain" src='/images/main2.png' alt="arrowmain"/>
                        <div className="absolute top-[80vw] sm:top-[37vw] ml-0 lg:ml-[-100px] block">
                            <img className="w-20 h-20 sm:w-36 sm:h-36 object-contain" src='/images/arrowmain.png' alt="arrowmain"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}