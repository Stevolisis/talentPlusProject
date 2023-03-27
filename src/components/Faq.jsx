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
            <div className="px-4 sm:px-20 md:px-48 lg:px-72 py-12 md:py-16">
                <div className='hidden sm:block sm:absolute right-0 mt-[-80px]'>
                    <img className='w-12 md:w-14 ' src='/images/reviewright.png'/>
                </div> 
                <div className='absolute left-0 ml-[-13px] sm:ml-0 mt-[150px] sm:mt-[250px]'>
                    <img className='w-7 sm:w-12 md:w-12 ' src='/images/sec213zigyellow.png'/>
                </div> 
                <div className='absolute right-0 mr-2 sm:mr-[200px]'>
                    <img className='w-3 md:w-5 ' src='/images/purplecircle.png'/>
                </div> 
                <div className="sm:px-22 flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]">Frequently Asked Questions</h1>                   
                    <p className="px-7 sm:px-0 sm:w-[550px] text-center leading-4 sm:leading-6 py-3 text-[8px] sm:text-[13px] font-[SatoshiMedium] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>
                
                <div className="pt-2 md:pt-12">
                    {
                        faqList.map((list,i)=>{
                            return <Accordion key={i} id={i} question={list.question} answer={list.answer} toggle={toggle} setToggle={setToggle}/>
                        })
                    }
                </div>
                
                <div className='hidden sm:block sm:absolute left-0 mt-[-290px]'>
                    <img className='w-12 md:w-14 ' src='/images/reviewleft.png'/>
                </div> 
            </div>
        </>
    )
}