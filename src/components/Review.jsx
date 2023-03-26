
export default function Review({reviewList}){

    return(
        <>
        {
            reviewList.map((review,i)=>{
                return  <div key={i} className='bg-neutral px-5 py-7 w-[332px] min-w-[332px] md:w-[420px] md:min-w-[420px] lg:w-[460px] lg:min-w-[460px] mx-2 rounded-3xl'>
                            <div>
                                <p className="font-[SatoshiLight] text-txtLight leading-4 sm:leading-5 text-[9px] sm:text-[11px]">{review.comment}</p>
                            </div>
                            <div className="flex items-center rounded-full pt-3">
                                <div className="">
                                    <img className="w-7 h-7 sm:w-[39px] sm:h-[39px] rounded-full" src={review.author.profile_img} alt='review'/>
                                </div>
                                <div className="ml-2 ">
                                    <p className="text-[9px] sm:text-[11px] font-[SatoshiBold] text-black">{review.author.name}</p>
                                    <p className="text-[8px] sm:text-[10px] font-[SatoshiLight] text-txtLight">{review.author.position}</p>
                                </div>
                            </div>
                        </div>
            })
        }
        </>
    )
}