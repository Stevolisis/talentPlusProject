import { MdOutlineDescription,MdSettingsInputAntenna, MdMenuBook, MdCancel, MdOutlineSchedule, MdOutlineTurnedInNot, MdOutlineRotateRight, MdOutlineLocalAtm, MdOutlineAccessTimeFilled, MdVolumeUp } from 'react-icons/md';

export default function Section2(){

    return(
        <>
            <div className="flex px-32 pb-28 bg-bgWhole items-center">
                <div className='flex-1'>
                    <div className='pt-32'>
                        <p className='pr-12 font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]'>High quality video, audio & live classes</p>
                    </div>
                    <div>
                        <p className='pr-32 leading-6 py-3 text-[13px] font-[SatoshiLight] text-txtLight'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                    </div>
                    <div className='py-3'>
                        <button className='rounded-[4px] bg-bgPrimary font-[SatoshiMedium] py-[12px] px-[28px] text-[12px] text-neutral'>View Courses</button>
                    </div>
                    <div className='py-2 pr-32 flex flex-wrap'>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseGreen rounded-[2px] mx-3'>
                                <MdVolumeUp className='text-[12px] text-iconCourseGreen'/>
                            </p>
                            <p className='font-[SatoshiMedium] text-bgSecondary text-[13px]'>Audio Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseOrange rounded-[2px] mx-3'>
                                <MdSettingsInputAntenna className='text-[12px] text-iconCourseOrange'/>
                            </p>
                            <p className='font-[SatoshiMedium] text-bgSecondary text-[13px]'>Live Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCoursePurple rounded-[2px] mx-3'>
                                <MdSettingsInputAntenna className='text-[12px] text-iconCoursePurple'/>
                            </p>
                            <p className='font-[SatoshiMedium] text-bgSecondary text-[13px]'>Recorded Classes</p>
                        </div>
                        <div className='mr-4 mb-4 rounded-[5px] flex items-center bg-neutral py-4 pl-2 pr-10 w-auto'>
                            <p className='p-[6px] bg-bgCourseBlue rounded-[2px] mx-3'>
                                <MdOutlineDescription className='text-[12px] text-iconCourseBlue'/>
                            </p>
                            <p className='font-[SatoshiMedium] text-bgSecondary text-[13px]'>50+ Notes</p>
                        </div>
                    </div>
                </div>

                <div className='flex-2 flex items-end pl-1'>
                    <div><img className='w-[480px] h-[410px] min-w-[480px]' src='/images/sec21.png' alt='section21'/></div>
                    <div className='absolute'>
                        <img className='w-[220px] h-[62px] ml-[-70px]' src='/images/sec22.png' alt='section22'/>
                        <img className='mt-[100px] ml-[-150px] mb-[-80px] w-[310px] min-w-[310px]  h-[200px]' src='/images/sec23.png' alt='section23'/>
                    </div>
                </div>
            </div>
        </>
    )
}