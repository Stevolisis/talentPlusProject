import { BiMinus, BiPlus } from "react-icons/bi";

export default function Accordion({question,answer,id,toggle,setToggle}){

    return(
        <>
            <div className="pt-5 sm:pt-7 pb-3 sm:pb-5 border-b border-b-[#EAEAEA]">

                <div className="flex justify-between items-center ">
                    <div className=""><p className={`text-${toggle===id ? 'bgPrimary' : 'bgSecondary'}
                     text-sm sm:text-xl font-[SatoshiBlack]`}>{question}</p></div>
                    <div>
                        <BiPlus size={20} onClick={()=>setToggle(id)} className={`${toggle===id ? 'hidden' : ''} cursor-pointer`}/> 
                        <BiMinus size={20} onClick={()=>setToggle(-1)} className={`${toggle===id ? '' : 'hidden'} cursor-pointer`}/>
                    </div>
                </div>

                <div className={`${toggle==id ? '' : 'hidden'}`}>
                    <p className="leading-5 py-1 sm:py-3 text-[9px] 
                    sm:text-[13px] font-[SatoshiMedium] text-txtLight">{answer}</p>
                </div>

            </div>
        </>
    )
}