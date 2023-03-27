import { FaDollarSign } from "react-icons/fa";
import { MdStar, MdOutlineSchedule, MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

export default function Course({filter,courseLists}){

    return(
        <>
        {
            courseLists.filter(list=>{
                if(filter==='All') {
                    return filter
                }else return list.category===filter
            })
            .map((list,i)=>{
                return  <Link to='/' key={i} className="px-2 py-4 sm:px-4 mb-2 sm:mb-3 mx-1 sm:mx-[11px] rounded sm:rounded-2xl bg-neutral">
                            <div>
                                <img src={list.image} alt='courses'/>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="py-1 sm:py-3">
                                    <p className="font-[SatoshiMedium] text-[6px] sm:text-[10px] px-3 sm:px-6 py-0.5 sm:py-1 rounded-full bg-bgCourseBlue text-bgPrimary">{list.category}</p>
                                </div>

                                <div className="flex items-center text-[6px] sm:text-[10px] font-[SatoshiMedium] text-txtLight">
                                    <p className="mr-1 sm:mr-2 flex items-center justify-center">
                                        {list.rating.rate} <MdStar className="text-yellow-400 text-[8px] sm:text-[12px]"/>
                                    </p>
                                    <p>({list.rating.population})</p>
                                </div>
                            </div>

                            <div className="py-1 sm:py-2">
                                <p className="line-clamp-2 text-[12px] sm:text-lg leading-3 sm:leading-5 font-[ClashDisplaySemiBold] text-bgSecondary">
                                    {list.title}
                                </p>
                            </div>

                            <div className="flex items-center font-[SatoshiMedium] text-[6px] sm:text-[13px] justify-between text-txtLight">
                                <div className="flex items-center">
                                    <MdOutlineSchedule className="text-[6px] sm:text-[17px] mr-2"/>
                                    <p>{list.duration}</p>
                                </div>

                                <div className="flex items-center">
                                    <MdOutlineMenuBook className="text-[6px] sm:text-[17px] mr-2"/>
                                    <p>{list.lessons} Lessons</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-4 sm:pt-7 pb-1 sm:pb-2">
                                <div className="flex items-center">
                                    <img className="w-5 h-5 sm:w-8 sm:h-8 rounded-full" src={list.author.profile_img} alt="victor"/>
                                    <p className="ml-1 sm:ml-2 text-[6px] sm:text-xs font-[SatoshiBold] text-black">{list.author.name}</p>
                                </div>
                                <div className="flex items-center font-[ClashDisplaySemiBold] text-bgPrimary">
                                    <FaDollarSign className="text-[10px] mt-[-1px] sm:mt-0 sm:text-[16px] font-bold"/>
                                    <p className="ml-[-2px] sm:ml-[-4px] text-[10px] sm:text-base">{list.price}.00</p>
                                </div>
                            </div>
                        </Link>
            })
        }
        </>
    )
}