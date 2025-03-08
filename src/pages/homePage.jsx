import '../App.css';
import Accordion from "../components/accordion";
import Wrapper from "../components/wrapper";
import Web from "../components/webCards";
import UX from "../components/uxCards";
import Photography from "../components/photoCards";
import LandingCard from "../components/landingCard";
import Education from "../components/educationCards";
import Work from "../components/workCards";
import Volunteering from "../components/volunteerCards";

const Home = () => {
    return (
        <div className="homePage">
            <Wrapper>
                <LandingCard/>
        </Wrapper>

        <Wrapper>
           <h2 className="accordion-title">PORTFOLIO</h2>
            <Accordion title="WEB DEVELOPMENT & DESIGN" content={<Web/>}/>
            <Accordion title="USER EXPERIENCE DESIGN" content={<UX/>}/>
            <Accordion title="PHOTOGRAPHY" content={<Photography/>}/>
            <Accordion title="ILLUSTRATIONS" content="Art I've done"/>
        </Wrapper>

        <Wrapper>
            <h2 className="accordion-title">RESUME</h2>
            <Accordion title="EDUCATION" content={<Education/>}/>
            <Accordion title="WORK EXPERIENCE" content={<Work/>}/>
            <Accordion title="VOLUNTEERING" content={<Volunteering/>}/>
        </Wrapper>
      </div>
    );
}

export default Home;