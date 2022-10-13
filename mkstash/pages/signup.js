import Image from "next/image";
import styles from "../styles/Signup.module.css";

export default function Register(){
    return(
        <div className={ styles.container }>
            <Image src="/images/MKstash.svg" width={150} height={75} />
            <h2>Hi there, welcome!</h2>
            <form>
            <div className={styles.contain}>
            <h3>Basic Information</h3>
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
                        <input className="form-control" type="input" name="contact" placeholder="Enter your contact number..." required />
                    </p>
                    <p>
                        <label> Gender </label>
                        <select className="form-control" name="gender" required>
                            <option selected hidden>Choose a gender...</option>
                            <option>Male</option>
                            <option>Female</option>     
                        </select>
                    </p>
                </div>
                </div>
                <div className={styles.contain}>
                <h3>Account Information</h3>
                <div className={styles.form}>
                    <p>
                        <label>Password </label>
                        <input
                            className="form-control"
                            type="password" 
                            name="password"
                            placeholder="Enter your password..." 
                            required
                            minlength="6"
                            maxlength="12"
                        />
                    </p>
                    <p>
                        <label>Confirm Password </label>
                        <input
                            className="form-control"
                            type="password" 
                            name="cpassword"
                            placeholder="Enter your password again..." 
                            required
                            minlength="6"
                            maxlength="12"
                        />
                    </p>                    
                </div>
                </div>
                <button type="submit" className={styles.submitBtn}> Signup </button>
                </form>
        </div>
    );
}