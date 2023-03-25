import { FaDiscord, FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

export default function Footer(){

    return( 
    <>
        <footer className="bg-bgSecondary text-neutral px-24 py-28 flex justify-between">
            <div>
                <div>
                    <h2 className="font-[AmazingKids] text-4xl text-neutral">Tech Time</h2>
                    <p>Reach out to any one of our social media neworks</p>
                </div>
                <div>
                    <FaFacebook/>
                    <FaTwitter/>
                    <FaYoutube/>
                    <FaInstagram/>
                    <FaDiscord/>
                </div>
            </div>

            <div>
                <div>
                    <h2>Useful Links</h2>
                </div>
                <div>
                    <p>Home</p>
                    <p>About Us</p>
                    <p>Our Courses</p>
                    <p>Testimonials</p>
                    <p>Our Community</p>
                </div>
            </div>

            <div>
                <div>
                    <h2>Community</h2>
                </div>
                <div>
                    <p>Help Centers</p>
                    <p>Patners</p>
                    <p>Suggestion</p>
                    <p>Blog</p>
                    <p>Newsletter</p>
                </div>
            </div>

            <div>
                <div>
                    <h2>Subscribe Us</h2>
                </div>
                <div>
                    <input type='email' placeholder="Nft123@gmail.com"/>
                    <button>Send Message</button>
                </div>
            </div>
        </footer>
    </>
    )
}