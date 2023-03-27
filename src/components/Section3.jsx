import { MdOutlineCastForEducation, MdOutlineAccessTimeFilled, MdGroups2, MdOutlineLocalAtm } from "react-icons/md";


export default function Section3(){

    return(
        <>
            <section className="bg-bgWhole px-4 sm:px-12 md:px-24 py-12 md:py-16 pb-7 lg:pb-16 flex items-center flex-col lg:flex-row">
 
                <div className="flex-1">
                    <div>
                        <h1 className="text-center lg:text-left font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]">This Is Why We Are Best From Others</h1>
                        <p className="px-7 sm:px-0 text-center lg:text-left lg:pr-20 leading-4 sm:leading-6 lg:pb-7 text-[8px] sm:text-[13px] font-[SatoshiMedium] text-txtLight">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard
                            Definition. While There's No Standard Meaning For High Definition, Generally
                            Any Standard Video Image
                        </p>
                    </div>
                    <div className="py-5 sm:py-12">
                        <img className="w-full lg:w-[552px] lg:h-[354px]" src='/images/sec31.png' alt='Sec3'/>
                    </div>
                    <div className='absolute left-5 ml-[-20px] sm:ml-0 sm:mt-[-300px]'>
                        <img className='w-3 sm:w-6 mt-[420px] sm:mt-44' src='/images/greentriangle.png' alt='section21'/>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 flex-wrap lg:pl-24">
                    <div className="flex-1 px-4 rounded-md m-1 sm:m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subBlue rounded mb-2 mt-5 sm:mt-6 sm:mb-6 w-[31px] sm:w-9"><MdOutlineCastForEducation className="text-neutral text-[14px] sm:text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] py-1 text-bgSecondary text-[12px]">Experienced Mentors</p>
                            <p className="font-[SatoshiMedium] text-txtLight leading-4 sm:leading-6 text-[8px] sm:text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-1 sm:m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subGreen rounded mb-2 mt-5 sm:mt-6 sm:mb-6 w-[31px] sm:w-9"><MdOutlineAccessTimeFilled className="text-neutral text-[14px] sm:text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">One-On-One Meetings</p>
                            <p className="font-[SatoshiMedium] text-txtLight leading-4 sm:leading-6 text-[8px] sm:text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-1 sm:m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subPink rounded mb-2 mt-5 sm:mt-6 sm:mb-6 w-[31px] sm:w-9"><MdGroups2 className="text-neutral text-[14px] sm:text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">One-On-One Meetings</p>
                            <p className="font-[SatoshiMedium] text-txtLight leading-4 sm:leading-6 text-[8px] sm:text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-1 sm:m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subOrange rounded mb-2 mt-5 sm:mt-6 sm:mb-6 w-[31px] sm:w-9"><MdOutlineLocalAtm className="text-neutral text-[14px] sm:text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">Affordable Prices</p>
                            <p className="font-[SatoshiMedium] text-txtLight leading-4 sm:leading-6 text-[8px] sm:text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>


                </div>
                <div className='absolute right-1 sm:right-5 sm:mb-[-410px]'>
                        <img className='w-3 sm:w-5 mt-[800px] sm:mt-44' src='/images/purplecircle.png' alt='section21'/>
                </div>
            </section>
        </>
    )
}