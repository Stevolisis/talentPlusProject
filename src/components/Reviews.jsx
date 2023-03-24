

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
            <div className="pt-16 pb-10 bg-bgWhole">
                <div className="px-24 flex justify-center items-center flex-col">
                    <h1 className="text-center font-[ClashDisplayBold] text-bgSecondary text-[2.7rem] leading-[55px]">What Our Clients Are Saying</h1>                   
                    <p className="w-[550px] text-center leading-6 py-3 text-[13px] font-[SatoshiLight] text-txtLight">
                    High-Defination Video Is Video Of Higher Resolution And Quality Than Standard 
                    Definition. While There's No Standard Meaning For High Definition, Generally Any Standard Video Image.
                    </p>
                </div>

                <div className="py-7 overflow-x-auto flex scroll-smooth scrollbar-hide">
                    {
                        reviewList.map((review,i)=>{
                            return  <div key={i} className='bg-neutral px-5 py-7 w-[460px] min-w-[460px] mx-2 rounded-3xl'>
                                        <div>
                                            <p className="font-[SatoshiLight] text-txtLight leading-5 text-[11px]">{review.comment}</p>
                                        </div>
                                        <div className="flex items-center rounded-full pt-3">
                                            <div className="">
                                                <img className="w-[39px] h-[39px] rounded-full" src={review.author.profile_img} alt='review'/>
                                            </div>
                                            <div className="ml-2 ">
                                                <p className="text-[11px] font-[SatoshiBold] text-black">{review.author.name}</p>
                                                <p className="text-[10px] font-[SatoshiLight] text-txtLight">{review.author.position}</p>
                                            </div>
                                        </div>
                                    </div>
                        })
                    }
                </div>                
            </div>

        </>
    )
}