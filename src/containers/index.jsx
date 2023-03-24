import Courses from "../components/Courses";
import Patners from "../components/Patners";
import Section1 from "../components/Section1";
import Section2 from "../components/Section2";
import Section3 from "../components/Section3";


export default function Index(){

    return(
        <>
            <Section1/>
            <Patners/>
            <Section2/>
            <Section3/>
            <Courses/>
        </>
    )
}