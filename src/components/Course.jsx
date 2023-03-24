import { TbCurrencyDollar } from "react-icons/tb";
import { MdStar, MdOutlineSchedule, MdOutlineMenuBook } from "react-icons/md";

export default function Course({filter}){
    const courseLists=[
        {image:'/images/courses1.png',title:'Introduction to user research in UX Design',category:'Design'},
        {image:'/images/courses2.png',title:'Introduction to new marketing audience',category:'Marketing'},
        {image:'/images/courses3.png',title:'Introduction to Html, CSS & Bootstrap',category:'Development'},
        {image:'/images/courses4.png',title:'Introduction to javascript, Git & Github',category:'Development'},
        {image:'/images/courses5.png',title:'Introduction to outroom marketing analysis',category:'Marketing'},
        {image:'/images/courses6.png',title:'Introduction to live marketing analysis',category:'Marketing'},
    ]

    return(
        <>
        {
            courseLists.filter(list=>{
                if(filter==='All') {
                    return filter
                }else return list.category===filter
            })
            .map((list,i)=>{
                return  <div key={i} className="p-4 mb-3 mx-2 rounded-2xl bg-neutral">
                            <div>
                                <img src={list.image} alt='courses'/>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="py-3">
                                    <p className="font-[SatoshiMedium] text-[10px] px-6 py-1 rounded-full bg-bgCourseBlue text-bgPrimary">{list.category}</p>
                                </div>

                                <div className="flex items-center text-[10px] font-[SatoshiMedium] text-txtLight">
                                    <p className="mr-2 flex items-center justify-center">
                                        4.7K <MdStar className="text-yellow-400 text-[12px]"/>
                                    </p>
                                    <p>(32.7K +)</p>
                                </div>
                            </div>

                            <div className="py-2">
                                <p className="text-lg leading-5 font-[ClashDisplaySemiBold] text-bgSecondary">{list.title}</p>
                            </div>

                            <div className="flex items-center">
                                <div>
                                    <MdOutlineSchedule/>
                                    <p>23hrs 50mins</p>
                                </div>

                                <div>
                                    <MdOutlineMenuBook/>
                                    <p>15 Lessons</p>
                                </div>
                            </div>

                            <div>
                                <div>
                                    <img src='/images/cs1.png' alt="victor"/>
                                    <p>Leonard Victor</p>
                                </div>
                                <div className="flex items-center">
                                    <TbCurrencyDollar/>15.00
                                </div>
                            </div>
                        </div>
            })
        }
        </>
    )
}