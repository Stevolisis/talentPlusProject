
export default function Section4(){

    return(
        <>
            <div className="flex flex-col justify-center items-center p-16 bg-[url('/images/communitywave.png')] bg-cover bg-bgPrimary text-neutral">
                <div className="text-neutral flex flex-col justify-center items-center">
                    <p className="text-sm font-[SatoshiMedium]">JOIN OUR COMMUNITY</p>
                    <p className="py-3  px-12 md:px-40 text-[43px] leading-[50px] font-[ClashDisplayBold] text-center">Are you ready to connect with the future talent of the tech world</p>
                    <p className="font-[SatoshiLight] text-[13px]">Meet Up With Other Techstars And Grow Together</p>
                </div>

                <div>
                    <img className="w-[760px] h-[355px]" src='/images/communitymain.png' alt="community"/>
                </div>

                <div className="pt-7">
                    <button className="px-6 py-3 bg-neutral rounded text-bgPrimary text-xs font-[SatoshiMedium]">Join Our Community</button>
                </div>
            </div>
        </>
    )
}