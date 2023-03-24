import { MdOutlineCastForEducation, MdOutlineAccessTimeFilled, MdGroups2, MdOutlineLocalAtm } from "react-icons/md";


export default function Section3(){

    return(
        <>
            <section className="bg-bgWhole px-24 py-16 flex items-center">
                <div className="flex-1">
                    <div>
                        <h1 className="font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]">This Is Why We Are Best From Others</h1>
                        <p className="pr-20 leading-6 pb-7 text-[13px] font-[SatoshiLight] text-txtLight">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard
                            Definition. While There's No Standard Meaning For High Definition, Generally
                            Any Standard Video Image
                        </p>
                    </div>
                    <div>
                        <img className="w-[552px] h-[354px]" src='/images/sec31.png' alt='Sec3'/>
                    </div>
                </div>

                <div className="flex-1 grid grid-cols-2 flex-wrap pl-24">
                    <div className="flex-1 px-4 rounded-md m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subBlue rounded-[4px] my-6 w-9"><MdOutlineCastForEducation className="text-neutral text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] py-1 text-bgSecondary t2xt-[12px]">Experienced Mentors</p>
                            <p className="font-[SatoshiLight] text-txtLight leading-6 text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subGreen rounded-[4px] my-6 w-9"><MdOutlineAccessTimeFilled className="text-neutral text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">One-On-One Meetings</p>
                            <p className="font-[SatoshiLight] text-txtLight leading-6 text-[11px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subGreen rounded-[4px] my-6 w-9"><MdGroups2 className="text-neutral text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">One-On-One Meetings</p>
                            <p className="font-[SatoshiLight] text-txtLight leading-6 text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>

                    <div className="flex-1 px-4 rounded-md m-2 bg-neutral pb-6">
                        <div className="p-2 bg-subGreen rounded-[4px] my-6 w-9"><MdOutlineLocalAtm className="text-neutral text-[18px]"/></div>
                        <div>
                            <p className="font-[SatoshiBold] text-bgSecondary text-[12px]">Affordable Prices</p>
                            <p className="font-[SatoshiLight] text-txtLight leading-6 text-[10px]">High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                                Definition. High-Defination Video Is Video Of Higher Resolution And Quality
                                Than Standard Definition. 
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}