import { useState } from "react"
import Accordion from "./Accordion"

export default function Faq(){
    const [toggle,setToggle]=useState(0);

    const faqList=[
        {
            question:'Is there a free trial available?',
            answer:'High-definition video is video of hiher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        },
        {
            question:'Can i change my plan later?',
            answer:'High-definition video is video of higher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        },
        {
            question:'Are the course lifetime?',
            answer:'High-definition video is video of higher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        },
        {
            question:'Do i get certified after taking courses?',
            answer:'High-definition video is video of higher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        },
        {
            question:'How do i reach out to mentors?',
            answer:'High-definition video is video of higher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        },
        {
            question:'Do we get job ready after taking courses?',
            answer:'High-definition video is video of higher resolution and quality than standard definition. High-definition video is video of higher resolution and quality than standard definition. Build your future with our quality education. The best and largest all-in-one online tutoring platform in the world.'
        }
    ]

    return(
        <>
            <div className="px-24 py-16 bg-bgWhole">
                <div className="px-24 flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]">Frequently Asked Questions</h1>                   
                    <p className="w-[550px] text-center leading-6 py-3 text-[13px] font-[SatoshiLight] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>
                
                <div className="pt-12">
                    {
                        faqList.map((list,i)=>{
                            return <Accordion key={i} id={i} question={list.question} answer={list.answer} toggle={toggle} setToggle={setToggle}/>
                        })
                    }
                </div>
            </div>
        </>
    )
}