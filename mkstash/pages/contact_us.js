import React, {useState} from "react";
import { useReducer } from "react";
import { useRouter } from 'next/router';
import styles from "../styles/Contact.module.css";

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function Contact(){
    
    const router = useRouter();
    const [showSuccess, setShowSuccess] = useState(false);

    const addContactHandler = async (data) => {
        const response = await fetch("/api/contact", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "content-Type" : "application/json"
            }
        }) 
        const {message} = await response.json();
        console.log(message);
    }

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        addContactHandler(formData);
        setShowSuccess(true);
        console.log(formData);
    }

    return(
        <div onSubmit={handleSubmit} className={ styles.container }>
            <h2>Contact Us!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <form>
            <div className={styles.contain}>
                <div className={styles.form}>
                    <p>
                        <label> First Name </label>
                        <input className="form-control" onChange={setFormData} type="text" name="fname" placeholder="Enter your first name..." required />
                    </p>
                    <p>
                        <label> Last Name </label>
                        <input className="form-control" onChange={setFormData} type="text" name="lname" placeholder="Enter your last name..." required />
                    </p>
                    <p><label> Email Address </label>
                        <input className="form-control" onChange={setFormData} type="email" name="email" placeholder="Enter your email address..." required />
                    </p>
                    <p>
                        <label> Contact Number </label>
                        <input className="form-control" onChange={setFormData} type="tel" name="contactnum" placeholder="Enter your contact number..." required />
                    </p>
                </div>
                    <p>
                        <label> Message </label>
                        <textarea className="form-control" onChange={setFormData} type="input" name="message" placeholder="Write your message here..." required />
                    </p>
                </div>
                <button type="submit" className={styles.submitBtn}> Send </button>
                </form>
                {showSuccess && (
                        <div className={styles.successOverlay}>
                           <div className={styles.innerOverlay}>
                                <h2>Message Sent!</h2>
                                <br/>
                                <button onClick={()=>{setShowSuccess(false); window.location.reload(false);}} className={styles.submitBtn}>Close</button>
                            </div>
                        </div>
                        )
                }
        </div>
    );
}