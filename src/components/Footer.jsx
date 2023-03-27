import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){

    return( 
    <>
        <footer className="bg-bgSecondary text-neutral px-4 sm:px-16 md:px-24 pt-10 sm:pt-28 pb-24 flex flex-col sm:flex-row flex-wrap lg:flex-row justify-between">
            <div className="sm:mx-3 my-4 sm:my-0"> 
                <div>
                    <h2 className="py-2 font-[AmazingKids] text-3xl sm:text-4xl text-neutral">Tech Time</h2>
                    <p className="w-48 leading-6 text-[13px] font-[SatoshiMedium]">Reach out to any one of our social media neworks</p>
                </div>
                <div className="py-4 flex sm:justify-between text-emailInputGrayIcons">
                    <FaFacebook className="mr-4 sm:mr-0 text-[22px] sm:text-[24px]"/>
                    <FaTwitter className="mx-4 sm:mx-0 text-[22px] sm:text-[24px]"/>
                    <FaYoutube className="mx-4 sm:mx-0 text-[22px] sm:text-[24px]"/>
                    <FaInstagram className="mx-4 sm:mx-0 text-[22px] sm:text-[24px]"/>
                    <FaDiscord className="mx-4 sm:mx-0 text-[22px] sm:text-[24px]"/>
                </div>
            </div>

            <div className="sm:mx-3 my-4 sm:my-0">
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-xl sm:text-2xl">Useful Links</h2>
                </div>
                <div className="py-5 font-[SatoshiMedium] text-[13px] sm:text-lg">
                    <Link to='/' className="block my-2">Home</Link>
                    <Link to='/' className="block my-2">About Us</Link>
                    <Link to='/' className="block my-2">Our Courses</Link>
                    <Link to='/' className="block my-2">Testimonials</Link>
                    <Link to='/' className="block my-2">Our Community</Link>
                </div>
            </div>

            <div className="sm:mx-3 my-4 sm:my-0">
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-xl sm:text-2xl">Community</h2>
                </div>
                <div className="py-5 font-[SatoshiMedium] text-[13px] sm:text-lg">
                    <Link className="block my-2" to='/'>Help Centers</Link>
                    <Link className="block my-2" to='/'>Patners</Link>
                    <Link className="block my-2" to='/'>Suggestion</Link>
                    <Link className="block my-2" to='/'>Blog</Link>
                    <Link className="block my-2" to='/'>Newsletter</Link>
                </div>
            </div>

            <div className="sm:mx-3 my-4 sm:my-0">
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-xl sm:text-2xl">Subscribe Us</h2>
                </div>
                <div className="py-5 font-[SatoshiMedium] flex">
                    <input type='email' placeholder="Nft123@gmail.com" 
                    className="border placeholder-[#424141] outline-none border-bgPrimary
                    w-[70%] sm:w-[213px] bg-emailInputGrayIcons 
                    py-[13px] px-5 md:py-2 md:px-3 text-[11px]"/>
                    <button className=" bg-bgPrimary py-2 px-4 md:py-[9px] md:px-3 text-[9px] sm:text-[11px] rounded-sm">Send Message</button>
                </div>
            </div>
        </footer>
    </>
    )
}