import Review from "./Review"


export default function Reviews(){
    const reviewList=[
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'Bella Moon',
                position:"Product Designer",
                profile_img:'/images/review1.png'
            }
        },
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'Samuel Fortune',
                position:"Product Designer",
                profile_img:'/images/review2.png'
            }
        },
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'Bryce Jayson',
                position:"Product Designer",
                profile_img:'/images/review3.png'
            }
        },
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'Donald Dihno',
                position:"Product Designer",
                profile_img:'/images/cs3.png'
            }
        },
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'Jeniffer Lopez',
                position:"Product Designer",
                profile_img:'/images/cs1.png'
            }
        },
        {
            comment:"High-Defination Video is video of higher resolution and quality than standard definition. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World. High-Defination Video is video of higher resolution and quality than standard definition. Build Your Future with Our Quality Education. The Best and Largest All-In-One Online Tutoring Platform in the World.",
            author:{
                name:'James Hulk',
                position:"Product Designer",
                profile_img:'/images/cs2.png'
            }
        }
    ]

    return(
        <>
            <div className="sm:py-10 sm:px-12 pt-12 sm:pt-16 pb-7 sm:pb-10 bg-bgWhole"> 

                <div className="px-4 sm:px-12 md:px-24 flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-2xl sm:text-[2.7rem] leading-[35px] sm:leading-[55px]">What Our Clients Are Saying</h1>                   
                    <p className="px-7 sm:px-0 sm:w-[550px] text-center leading-4 sm:leading-6 py-3 text-[8px] sm:text-[13px] font-[SatoshiLight] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>

                <div className="py-5 sm:py-7 overflow-x-auto flex scroll-smooth scrollbar-hide">
                    <Review reviewList={reviewList}/>
                </div>   
           
            </div>

        </>
    )
}