import { MdOutlineDescription,MdSettingsInputAntenna, MdMenuBook, MdCancel, MdOutlineSchedule, MdOutlineTurnedInNot, MdOutlineRotateRight, MdOutlineLocalAtm, MdOutlineAccessTimeFilled, MdVolumeUp } from 'react-icons/md';

export default function Section2(){

    return(
        <>
            <section className="flex px-14 md:px-32 pb-10 bg-bgWhole items-center flex-col lg:flex-row">
                
                <div className='flex-1 flex flex-col justify-center items-center pb-7 lg:py-0'>
                    <div className='pt-12 md:pt-20 lg:pt-32'>
                        {/* <div className='absolute'>
                            <img className='w-12 mt-44' src='/images/sec213ziggreen.png' alt='section21'/>
                        </div> */}
                        <h1 className='text-center lg:text-left lg:pr-12 font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]'>High quality video, audio & live classes</h1>
                    </div>
                    <div>
                        <p className='text-center lg:text-left lg:pr-32 leading-6 py-3 text-[13px] font-[SatoshiLight] text-txtLight'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                    </div>
                    <div className='py-5 lg:py-3'>
                        <button className='rounded bg-bgPrimary font-[SatoshiBold] py-[12px] px-[28px] text-[12px] text-neutral'>View Courses</button>
                    </div>

                    <div className='py-2 lg:pr-32 flex flex-wrap justify-center lg:justify-start'>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseGreen rounded-sm mx-3'>
                                <MdVolumeUp className='text-[12px] text-iconCourseGreen'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[13px]'>Audio Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseOrange rounded-sm mx-3'>
                                <MdSettingsInputAntenna className='text-[12px] text-iconCourseOrange'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[13px]'>Live Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCoursePurple rounded-sm mx-3'>
                                <MdSettingsInputAntenna className='text-[12px] text-iconCoursePurple'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[13px]'>Recorded Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseBlue rounded-sm mx-3'>
                                <MdOutlineDescription className='text-[12px] text-iconCourseBlue'/>
                            </p>
                            <p className='font-[SatoshiBold] text-bgSecondary text-[13px]'>50+ Notes</p>
                        </div>
                    </div>
                </div>

                <div className='flex-2 flex lg:items-end pl-1'>
                    <div>
                    <img className='' src='/images/sec21.png' alt='section21'/>
                    </div>
                    {/* <div className='absolute right-0'>
                        <img className='w-12 h-12 mt-44' src='/images/sec213ziggreen.png' alt='section21'/>
                    </div>
                    <div className='absolute right-0'>
                        <img className='w-20 h-20 mt-44' src='/images/sec213donut.png' alt='section21'/>
                    </div> */}
                    <div className='absolute'>
                        <img className='w-[220px] h-[62px] ml-[-70px]' src='/images/sec22.png' alt='section22'/>
                        <img className='mt-[100px] ml-[-150px] mb-[-80px] w-[310px] min-w-[310px]  h-[200px]' src='/images/sec23.png' alt='section23'/>
                    </div>
                    
                </div>
            </section>
            
        </>
    )
}