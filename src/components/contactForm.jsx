const ContactForm = () => {
    return (
        <form className="contactForm">
            <input type="text" name="name" placeholder="Name" required/>
            <input type="email" name="email" placeholder="Email" required/>
            <input type="text" name="subject" placeholder="Subject" required/>
            <textarea name="message" placeholder="Your Message" maxLength={200} required/>

            <button type="submit">Send</button>
            
        </form>
    );
}

export default ContactForm;