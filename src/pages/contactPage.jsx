import '../App.css';
import Wrapper from "../components/wrapper";
import ContactForm from "../components/contactForm";
import contactBackground from "../assets/contactBackground.jpg";

const Contact = () => {
    return (
        <div className="contactPage">

<img className="photo" src={contactBackground} alt="Background Photo"/>

            <div className="contactInfo">
                <h1>Contact Emma</h1>
                <h2>By Email</h2>
                <p>emmabarnett817@gmail.com</p>
                <h2>By Form</h2>
                <p>Use the contact form to send me a message. <br/> I'll get back to you within 24 business hours.</p>
            </div>

                <ContactForm/>
        </div>
    );
}

export default Contact;