import React, { useRef } from "react";
import './contact.css'; 
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_h3brqil', 'template_35n03h4', form.current, 'ZV-u3LdjSwTvR1P0a')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert("Email Sent");
        }, (error) => {
            console.log(error.text);
        });
    };
    return (
        <section id="contact">
            <div>
                <h1 className="name sectionTitle">Contact Me</h1>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" className="contactName" placeholder="Your Name" name="from_name"/>
                    <input type="email" className="email" placeholder="Your Email" name="from_email"/>
                    <textarea name="message" rows="5" className="message" placeholder="Message"/>
                    <button type="submit" value="Send" className="submitButton">Submit</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;