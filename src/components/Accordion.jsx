import { BiMinus, BiPlus } from "react-icons/bi";

export default function Accordion({question,answer,id,toggle,setToggle}){

    return(
        <>
            <div className="mx-44 py-5 border-b border-b-[#EAEAEA]">

                <div className="flex justify-between items-center ">
                    <div className=""><p className={`text-${toggle===id ? 'bgPrimary' : 'bgSecondary'} text-lg font-[SatoshiBlack]`}>{question}</p></div>
                    <div>
                        <BiPlus size={20} onClick={()=>setToggle(id)} className={`${toggle===id ? 'hidden' : ''} cursor-pointer`}/> 
                        <BiMinus size={20} onClick={()=>setToggle(-1)} className={`${toggle===id ? '' : 'hidden'} cursor-pointer`}/>
                    </div>
                </div>

                <div className={`${toggle==id ? '' : 'hidden'}`}>
                    <p className="leading-5 py-3 text-[13px] font-[SatoshiLight] text-txtLight">{answer}</p>
                </div>

            </div>
        </>
    )
}