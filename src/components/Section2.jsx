import { MdOutlineDescription,MdSettingsInputAntenna, MdMenuBook, MdCancel, MdOutlineSchedule, MdOutlineTurnedInNot, MdOutlineRotateRight, MdOutlineLocalAtm, MdOutlineAccessTimeFilled, MdVolumeUp } from 'react-icons/md';

export default function Section2(){

    return(
        <>
            <div className="flex p-32 bg-bgWhole">
                <div className='flex-1'>
                    <div>
                        <p className='font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]'>High quality video, audio & live classes</p>
                    </div>
                    <div>
                        <p className='text-[13px] font-[SatoshiLight] text-txtLight'>High-Defination Video Is Video Of Higher Resolution And Quality Than Standard Definition. While There’s No Standard Meaning For High Definition, Generally Any Standard Video Image</p>
                    </div>
                    <div>
                        <button>View Courses</button>
                    </div>
                    <div>
                        <div>
                            <MdVolumeUp/>
                        </div>
                    </div>
                </div>

                <div className='flex-2'>
                    <img src='/images/sec21.png' alt='section2'/>
                </div>
            </div>
        </>
    )
}