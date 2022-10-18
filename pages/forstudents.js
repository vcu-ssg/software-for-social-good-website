import Navbar from "../components/Navbar";
import ForStudentsLanding from "../components/ForStudentsLanding";
import PageDividerTitle from "../components/PageDividerTitle";

export default function forstudents()
{
    return(
        <div>
            <Navbar/>
            <ForStudentsLanding/>
            <PageDividerTitle text="Student Voices"/>
        </div>
    )
}