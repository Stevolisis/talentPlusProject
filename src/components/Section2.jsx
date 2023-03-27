import { MdOutlineDescription,MdSettingsInputAntenna, MdMenuBook, MdCancel, MdOutlineSchedule, MdOutlineTurnedInNot, MdOutlineRotateRight, MdOutlineLocalAtm, MdOutlineAccessTimeFilled, MdVolumeUp } from 'react-icons/md';

export default function Section2(){

    return(
        <>
            <section className="flex px-5 sm:px-14 md:px-32 pb-7 sm:pb-10 bg-bgWhole items-center flex-col lg:flex-row">
                
                <div className='flex-1 flex flex-col justify-center items-center pb-7 lg:py-0'>
                    <div className='pt-10 sm:pt-12 md:pt-20 lg:pt-32 flex'>
                        <img className='absolute w-7 h-7 sm:w-12 sm:h-12 mt-[-16px] sm:mt-[-28px] ml-[-8px] sm:ml-[-32px]' src='/images/textcrown.png' alt='section21'/>
                        <h1 className='text-center lg:text-left lg:pr-12 font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]'>High quality video, audio & live classes</h1>
                    </div>
                    <div>
                        <p className='text-center lg:text-left lg:pr-32 leading-4 sm:leading-6 py-3 text-[8px] sm:text-[13px] font-[SatoshiMedium] text-txtLight'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                    </div>
                    <div className='py-5 lg:py-3'>
                        <button className='rounded bg-bgPrimary font-[SatoshiBold] py-2 sm:py-[12px] px-4 sm:px-[28px] text-[8px] sm:text-[12px] text-neutral'>View Courses</button>
                    </div>

                    <div className='py-2 lg:pr-32 flex flex-wrap justify-center lg:justify-start'>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-2 pl-1.5 pr-10 sm:py-4 sm:pl-2 sm:pr-10 w-auto'>
                            <p className='p-[4px] sm:p-[6px] bg-bgCourseGreen rounded-sm mx-3'>
                                <MdVolumeUp className='text-[9px] sm:text-[12px]  sm: text-iconCourseGreen'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[8px] sm:text-[13px]'>Audio Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-2 pl-1.5 pr-10 sm:py-4 sm:pl-2 sm:pr-10 w-auto'>
                            <p className='p-[4px] sm:p-[6px] bg-bgCourseOrange rounded-sm mx-3'>
                                <MdSettingsInputAntenna className='text-[9px] sm:text-[12px] text-iconCourseOrange'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[8px] sm:text-[13px]'>Live Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-2 pl-1.5 pr-10 sm:py-4 sm:pl-2 sm:pr-10 w-auto'>
                            <p className='p-[4px] sm:p-[6px] bg-bgCoursePurple rounded-sm mx-3'>
                                <MdSettingsInputAntenna className='text-[9px] sm:text-[12px] text-iconCoursePurple'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[8px] sm:text-[13px]'>Recorded Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-2 pl-1.5 pr-10 sm:py-4 sm:pl-2 sm:pr-10 w-auto'>
                            <p className='p-[4px] sm:p-[6px] bg-bgCourseBlue rounded-sm mx-3'>
                                <MdOutlineDescription className='text-[9px] sm:text-[12px] text-iconCourseBlue'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[8px] sm:text-[13px]'>50+ Notes</p>
                        </div>
                    </div>
                </div>


                <div className='flex-1 flex lg:items-end lg:pt-32'>
                    <div className='lg:ml-[-80px]'>
                        <img className='' src='/images/Section2main2.png' alt='Section2main'/>
                    </div>
                    
                </div>
                <div className='absolute right-0 mt-[400px] sm:mt-0 sm:mb-[-500px]'>
                    <img className='w-7 sm:w-10' src='/images/sec213halfcircle.png'/>
                </div>
                <div className='absolute right-0 mt-[300px] md:mt-[-450px]'>
                    <img className='w-7 md:w-10' src='/images/sec213ziggreen.png'/>
                </div>
            </section>
            
        </>
    )
}