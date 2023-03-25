import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer(){

    return( 
    <>
        <footer className="bg-bgSecondary text-neutral px-24 pt-28 pb-24 flex justify-between">
            <div>
                <div>
                    <h2 className="py-2 font-[AmazingKids] text-4xl text-neutral">Tech Time</h2>
                    <p className="leading-6 text-[13px] font-[SatoshiLight]">Reach out to any one of our social media neworks</p>
                </div>
                <div className="py-4 flex justify-between text-emailInputGrayIcons">
                    <FaFacebook size={23}/>
                    <FaTwitter size={23}/>
                    <FaYoutube size={23}/>
                    <FaInstagram size={23}/>
                    <FaDiscord size={23}/>
                </div>
            </div>

            <div>
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-2xl">Useful Links</h2>
                </div>
                <div className="py-5 font-[SatoshiLight] text-lg">
                    <Link to='/' className="block my-2">Home</Link>
                    <Link to='/' className="block my-2">About Us</Link>
                    <Link to='/' className="block my-2">Our Courses</Link>
                    <Link to='/' className="block my-2">Testimonials</Link>
                    <Link to='/' className="block my-2">Our Community</Link>
                </div>
            </div>

            <div>
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-2xl">Community</h2>
                </div>
                <div className="py-5 font-[SatoshiLight] text-lg">
                    <Link className="block my-2" to='/'>Help Centers</Link>
                    <Link className="block my-2" to='/'>Patners</Link>
                    <Link className="block my-2" to='/'>Suggestion</Link>
                    <Link className="block my-2" to='/'>Blog</Link>
                    <Link className="block my-2" to='/'>Newsletter</Link>
                </div>
            </div>

            <div>
                <div>
                    <h2 className="font-[ClashDisplaySemiBold] text-2xl">Subscribe Us</h2>
                </div>
                <div className="py-5 font-[SatoshiLight]">
                    <input type='email' placeholder="Nft123@gmail.com" 
                    className="border placeholder:[#424141] outline-none border-bgPrimary w-[213px] bg-emailInputGrayIcons 
                    py-2 px-3 text-[11px]"/>
                    <button className=" bg-bgPrimary py-[9px] px-3 text-[11px] rounded-sm">Send Message</button>
                </div>
            </div>
        </footer>
    </>
    )
}