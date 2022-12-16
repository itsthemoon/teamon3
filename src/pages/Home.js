import HeaderBoxes from "../components/Home/HeaderBoxes";
import ScrollRow from "../components/Home/ScrollRow";
import './Home.css';

function Home() {
    const firstHeader = "Have your own startup?";
    const firstText = "Click here to apply to put your startup on ___. We accept startups at all stages (even just ideas)";
    const secondHeader = "Looking to join a startup?";
    const secondText = "Are you ready to put your skills to use? Click here to join a startup!";

    return(
        <>
        <div className="hero">
                <h1 id="main-quote">"I'd rather have an A Team with a B idea than a B Team with an A idea..."</h1>
                <p className="description">Are you a student looking for a way to get involved with college 
                startups on campus? Or are you a college startup in need of talented, motivated team members?
                 Our platform is here to help! We connect students with college startups looking for members, 
                 providing opportunities for students to gain valuable experience and finding startups the right
                  people to take them that extra step. By using our platform, students can find startups that 
                  align with their interests and goals, and startups can find students with the skills and 
                  passion they need to succeed.</p>
                <div className="header-divs">
                    <HeaderBoxes header={firstHeader} text={firstText} />
                    <HeaderBoxes header={secondHeader} text={secondText} />
                </div>
        </div>
            <ScrollRow />
            <ScrollRow />
            <ScrollRow />
        </>
    )
}

export default Home;