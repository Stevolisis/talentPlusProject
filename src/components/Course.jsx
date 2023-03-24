import { FaDollarSign } from "react-icons/fa";
import { MdStar, MdOutlineSchedule, MdOutlineMenuBook } from "react-icons/md";

export default function Course({filter}){
    const courseLists=[
        {image:'/images/courses1.png',title:'Introduction to user research in UX Design',category:'Design',
        author:{name:'Leonard Victor', profile_img:'/images/cs1.png'},lessons:15,
        duration:'23hrs 50mins',rating:{rate:'4.7k',population:'32.7k+'},price:15.00},

        {image:'/images/courses2.png',title:'Introduction to new marketing audience',category:'Marketing',
        author:{name:'Jeffrey Williams', profile_img:'/images/cs2.png'},lessons:22,
        duration:'23hrs 50mins',rating:{rate:'4.7k',population:'8.7k+'},price:32.00},

        {image:'/images/courses3.png',title:'Introduction to Html, CSS & Bootstrap',category:'Development',
        author:{name:'Claretta Mason', profile_img:'/images/cs3.png'},lessons:55,
        duration:'45hrs 50mins',rating:{rate:'4.7k',population:'12.7k+'},price:55.00},

        {image:'/images/courses4.png',title:'Introduction to javascript, Git & Github',category:'Development',
        author:{name:'Jessica Duke', profile_img:'/images/cs4.png'},lessons:15,
        duration:'30hrs 50mins',rating:{rate:'4.7k',population:'32.7k+'},price:45.00},

        {image:'/images/courses5.png',title:'Introduction to outroom marketing analysis',category:'Marketing',
        author:{name:'Samuel Jacobs', profile_img:'/images/cs5.png'},lessons:26,
        duration:'33hrs 50mins',rating:{rate:'4.7k',population:'4.7k+'},price:25.00},

        {image:'/images/courses6.png',title:'Introduction to live marketing analysis',category:'Marketing',
        author:{name:'Adam Smith', profile_img:'/images/cs6.png'},lessons:32,
        duration:'10hrs 50mins',rating:{rate:'4.7k',population:'15.7k+'},price:25.00},
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
                return  <div key={i} className="p-4 mb-3 mx-[11px] rounded-2xl bg-neutral">
                            <div>
                                <img src={list.image} alt='courses'/>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="py-3">
                                    <p className="font-[SatoshiMedium] text-[10px] px-6 py-1 rounded-full bg-bgCourseBlue text-bgPrimary">{list.category}</p>
                                </div>

                                <div className="flex items-center text-[10px] font-[SatoshiMedium] text-txtLight">
                                    <p className="mr-2 flex items-center justify-center">
                                        {list.rating.rate} <MdStar className="text-yellow-400 text-[12px]"/>
                                    </p>
                                    <p>({list.rating.population})</p>
                                </div>
                            </div>

                            <div className="py-2">
                                <p className="text-lg leading-5 font-[ClashDisplaySemiBold] text-bgSecondary">{list.title}</p>
                            </div>

                            <div className="flex items-center font-[SatoshiMedium] text-[13px] justify-between text-txtLight">
                                <div className="flex items-center">
                                    <MdOutlineSchedule className="text-[17px] mr-2"/>
                                    <p>{list.duration}</p>
                                </div>

                                <div className="flex items-center">
                                    <MdOutlineMenuBook className="text-[17px] mr-2"/>
                                    <p>{list.lessons} Lessons</p>
                                </div>
                            </div>

                            <div className="flex justify-between items-center pt-7 pb-2">
                                <div className="flex items-center">
                                    <img className="w-8 h-8 rounded-full" src={list.author.profile_img} alt="victor"/>
                                    <p className="ml-2 text-xs font-[SatoshiBold] text-black">{list.author.name}</p>
                                </div>
                                <div className="flex items-center font-[ClashDisplaySemiBold] text-bgPrimary">
                                    <FaDollarSign className=" font-bold"/>
                                    <p className="ml-[-4px]">{list.price}.00</p>
                                </div>
                            </div>
                        </div>
            })
        }
        </>
    )
}