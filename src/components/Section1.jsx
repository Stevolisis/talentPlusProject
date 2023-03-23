import { Link } from "react-router-dom";

export default function Section1(){

    return(
        <>
            <div className="bg-bgPrimary text-neutral px-24">
                <div className="py-10 flex justify-between items-center">
                    <div>
                        <p className="font-[AmazingKids] text-4xl">Tech Time</p>
                    </div>
                    <div className="flex items-center font-[SatoshiMedium] text-[13px]">
                        <Link to='/' className="mx-3">Home</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">About Us</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Courses</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Testimonial</Link>
                        <Link to='/' className="mx-3 text-txtHeaderLight">Community</Link>
                        <Link to='/' className="ml-3 py-[12px] px-[28px] bg-neutral text-bgPrimary rounded-[4px]">Enroll Now</Link>
                    </div>
                </div>

                <div className="h-[600px] flex justify-evenly items-end">
                    <div className="flex-1 h-full flex flex-col justify-center items-start">
                        <div>
                            <p className="leading-[63px] font-[ClashDisplayBold] text-[3.05rem]">Grow your skills to advance your career path</p>
                        </div>
                        <div className="py-3 w-[400px]">
                            <p className="text-[13px] font-[SatoshiLight] text-[#E7E7E7]">Build Your Future With Our Quality Education. The Best And Largest All-In-One Online Tutoring Platform In The World</p>
                        </div>
                        <div className="py-3">
                            <button className="mr-5 font-[SatoshiMedium] text-[13px] py-[10px] px-[28px] text-neutral border-2 border-txtHeaderLight rounded-[4px]">Get Started Now</button>
                            <button className="font-[SatoshiMedium] text-[13px] py-[12px] px-[28px] bg-neutral text-bgPrimary rounded-[4px]">Enroll Now</button>
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

                    <div className="flex-1 w-[400px] h-full">
                        <img className="w-full h-full" src='/images/main.png' alt="7-good-reasons-why-choose-Canada-for-studying-abroad-University-Hub"/>
                    </div>
                </div>

            </div>
        </>
    )
}