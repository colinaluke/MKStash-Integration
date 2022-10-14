import Image from "next/image";
import styles from "../styles/Contact.module.css";

export default function Contact(){
    return(
        <div className={ styles.container }>
            <h2>Contact Us!</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
            <form>
            <div className={styles.contain}>
                <div className={styles.form}>
                    <p>
                        <label> First Name </label>
                        <input className="form-control" type="input" name="fname" placeholder="Enter your first name..." required />
                    </p>
                    <p>
                        <label> Last Name </label>
                        <input className="form-control" type="input" name="lname" placeholder="Enter your last name..." required />
                    </p>
                    <p><label> Email Address </label>
                        <input className="form-control" type="email" name="email" placeholder="Enter your email address..." required />
                    </p>
                    <p>
                        <label> Contact Number </label>
                        <input className="form-control" type="tel" name="contactnum" placeholder="Enter your contact number..." required />
                    </p>
                </div>
                    <p>
                        <label> Message </label>
                        <textarea className="form-control" type="input" name="message" placeholder="Write your message here..." required />
                    </p>
                </div>
                <button type="submit" className={styles.submitBtn}> Send </button>
                </form>
        </div>
    );
}