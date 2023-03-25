import { Link } from "react-router-dom";
import { FiArrowUpRight } from 'react-icons/fi';

export default function Section1(){
console.log(window.innerWidth)
    return(
        <>
            <section className="bg-bgPrimary text-neutral px-12 md:px-24 bg-[url('/images/mainwave.png')] bg-cover">
                <div className="py-10 flex justify-between items-center">
                    <div>
                        <h1 className="font-[AmazingKids] text-4xl text-neutral">Tech Time</h1>
                    </div>
                    <div className="flex items-center font-[SatoshiMedium] text-[13px]">
                        <Link to='/' className="mx-3">Home</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">About Us</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Courses</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Testimonial</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Community</Link>
                        <Link to='/' className="ml-3 py-[12px] px-[28px] bg-neutral text-bgPrimary rounded">Enroll Now</Link>
                    </div>
                </div>

                <div className="flex justify-evenly items-center flex-col lg:flex-row">
                    
                    <div className="flex-1 py-16 lg:py-0 h-full flex flex-col justify-center items-center lg:items-start">
                        
                        <div className="absolute top-[390px] left-12 ml-[-50px] block">
                            <img  className="w-12 h-12 object-contain" src='/images/zigzagmain.png' alt="arrowmain"/>
                        </div>
                        <div className="absolute top-44 left-44 ml-[-50px] block">
                            <img  className="w-3 h-3 object-contain" src='/images/donutmain.png' alt="arrowmain"/>
                        </div>
                        <div className="absolute top-48 left-[40vw] ml-[-50px] block">
                            <img  className="w-2 h-2 object-contain" src='/images/circlemain.png' alt="arrowmain"/>
                        </div>
                        
                        <div>
                            <p className="text-center lg:text-left leading-[63px] font-[ClashDisplayBold] text-[3.05rem] text-neutral">Grow your skills to advance your career path</p>
                        </div>
                        <div className="py-3 w-[400px]">
                            <p className="text-center lg:text-left text-[13px] font-[SatoshiLight] text-[#E7E7E7]">Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>
                        </div>
                        <div className="py-3 flex">
                            <button className="flex items-center mr-5 font-[SatoshiMedium] text-[13px] py-[10px] px-[28px] text-neutral border-2 border-txtHeaderLight rounded">
                                Get Started Now <FiArrowUpRight size={16} className='ml-2'/></button>
                            <button className="font-[SatoshiMedium] text-[13px] py-[12px] px-[28px] bg-neutral text-bgPrimary rounded">Enroll Now</button>
                        </div>
                        <div className="flex items-center">
                            <div className="flex items-center">
                                <img className="w-[45px] h-[45px]" src='/images/preview1.png' alt='preview'/>
                                <img className="w-[45px] h-[45px] ml-[-15px]" src='/images/preview2.png' alt='preview'/>
                                <img className="w-[45px] h-[45px] ml-[-15px]" src='/images/preview3.png' alt='preview'/>
                                <img className="w-[45px] h-[45px] ml-[-15px]" src='/images/preview4.png' alt='preview'/>
                                <img className="w-[45px] h-[45px] ml-[-15px]" src='/images/preview5.png' alt='preview'/>
                            </div>
                            <div className="ml-1 flex justify-center items-center flex-col">
                                <p className="text-[19px] font-[ClashDisplaySemibold] leading-none">255K+</p>
                                <p className="text-[13px] font-[SatoshiLight] leading-none"> Previews</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1 h-full">
                        <img className="w-full h-full object-contain" src='/images/main2.png' alt="arrowmain"/>
                        <div className="absolute top-[37vw] ml-0 lg:ml-[-100px] block">
                            <img className="w-36 h-36 object-contain" src='/images/arrowmain.png' alt="arrowmain"/>
                        </div>
                    </div>
                </div>

            </section>
        </>
    )
}