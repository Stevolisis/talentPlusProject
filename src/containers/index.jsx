import Courses from "../components/Courses";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import Patners from "../components/Patners";
import Reviews from "../components/Reviews";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";
import Section4 from "../components/Section4";


export default function Index(){

    return(
        <>
            <Section1/>
            <Patners/>
            <Section2/>
            <Section3/>
            <Courses/>
            <Reviews/>
            <Section4/>
            <Faq/>
            <Footer/>
        </>
    )
}