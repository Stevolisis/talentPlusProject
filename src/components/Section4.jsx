
export default function Section4(){

    return(
        <>
            <div className="flex flex-col justify-center items-center py-12 sm:py-16 px-4 sm:px-12 md:px-16 bg-[url('/images/communitywave.png')] bg-cover bg-bgPrimary text-neutral">
                <div className="text-neutral flex flex-col justify-center items-center">
                    <p className="text-[9px] sm:text-[13px] font-[SatoshiMedium]">JOIN OUR COMMUNITY</p>
                    <p className="py-1 sm:py-3 sm:px-12 md:px-40 text-2xl sm:text-[43px] leading-[30px] sm:leading-[50px] font-[ClashDisplayBold] text-center">Are you ready to connect with the future talent of the tech world</p>
                    <p className="font-[SatoshiMedium] text-[9px] sm:text-[13px]">Meet Up With Other Techstars And Grow Together</p>
                </div>

                <div>
                    <img className="w-[760px] h-[180px] sm:h-[300px] md:h-[355px]" src='/images/communitymain.png' alt="community"/>
                </div>

                <div className="pt-7">
                    <button className="px-5 sm:px-6 py-2 sm:py-3 bg-neutral rounded text-bgPrimary text-[9px] sm:text-xs font-[SatoshiMedium]">Join Our Community</button>
                </div>
            </div>
        </>
    )
}