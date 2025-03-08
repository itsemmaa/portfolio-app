import headshot from "../assets/headshot.jpg";

const About = () => {
    return (
        <div className="aboutPage">
            <img className="headshot" src={headshot} alt="Emma Barnett"/>

            <div className="aboutMe">
                <h1>Hello!</h1>
                <h2>I'm Emma Barnett.</h2>
                <p>I’m a web developer and user interface designer. I recently graduated from Purdue University in 2025 with a Bachelors in Web Programming and Design and a minor in Psychology. I use my skills and education to make brands creative vision come to life. I love every step of the process from user experience research, to designing interfaces, to creating the final product. </p>
            </div>
        </div>
    );
}

export default About;