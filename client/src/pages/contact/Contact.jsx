import React, { useState } from "react";
import "./styles.css";
import { saveContact } from "../../api";

const Contact = () => {
    const [message,setMessage]=useState("");
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        message: ""
    })
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const data=await saveContact(contactDetails);
            setMessage("Message sent.");
            setContactDetails({
                name:"",
                email:"",
                message:""
            });
        } catch (error) {
            setMessage("Message didnt saved.");
            console.log({ error });
        }
    }
    return (
        <div>
            <div className="form">
                 <h3>Contact Us</h3>
                <form  onSubmit={handleSubmit}>
                    <p style={{color:"#111333",textAlign:"center"}}>{message}</p>
                    <input
                        type="text"
                        name="name"
                        onChange={(e) => { setContactDetails({ ...contactDetails, name: e.target.value }) }}
                        value={contactDetails.name}
                        placeholder="Your Full Name"
                        required
                        autoComplete="off"
                    />
                    <input
                        type="email"
                        name="email"
                        value={contactDetails.email}
                        onChange={(e) => { setContactDetails({ ...contactDetails, email: e.target.value }) }}
                        placeholder="Your Email"
                        required
                        autoComplete="off"
                    />
                    <textarea
                        name="message"
                        value={contactDetails.message}
                        onChange={(e) => { setContactDetails({ ...contactDetails, message: e.target.value }) }}

                        placeholder="Your Message"
                        required
                        rows="4"
                        autoComplete="off"
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Contact