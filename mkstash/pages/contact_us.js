import React, {useState} from "react";
import styles from "../styles/Contact.module.css";
import axios from 'axios';
import Footer from '../components/footer.js'
import Navigation from "../components/navigation";

export default function Contact(){
    
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        contactnum: '',
        message: ''
      });

    const [showSuccess, setShowSuccess] = useState(false);
    const [res, setRes] = useState(false);

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

    const onInputChange = e => {
        const { name, value } = e.target;

        if (name == "contactnum"){
            value = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
        } else if(name == "fname" || name == "lname"){
            value = value.replace(/[^A-Za-z]/g, '').replace(/(\..*)\./g, '$1');
        } else if(name == "email"){
            checkEmail(value);
        }

        setInput(prev => ({
          ...prev,
          [name]: value
        }));        
      }

      const selectCountry = e => {
        const val = e.target.value;
        const telbox = document.getElementById("contact");

        if( val == "ph"){
            telbox.value = "63";
        }else{
            telbox.value = "1";
        }
      }

      const checkEmail = async (email) => {
		try {
			const res = await axios.get(`/api/validate`, {
				params: {email}
			});
			const {data} = res;
            if(data.block==true){
                setRes(data);
            }else{
                setRes(false);
            }
		} catch (err) {
			console.log(err);
		}
	};

      const handleSubmit = (e) => {
        e.preventDefault();
        addContactHandler(input);
        setShowSuccess(true);
        console.log(input);
        }

    return(
        <div>
            <Navigation/>
            <div onSubmit={handleSubmit} className={styles.container}>
                <h2>Contact Us!</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.</p>
                <form>
                <div className={styles.contain}>
                    <div className={styles.form}>
                        <p>
                            <label> First Name </label>
                            <input className="form-control" value={input.fname} onChange={onInputChange} type="text" name="fname" maxLength="30" placeholder="Enter your first name..." required />
                        </p>
                        <p>
                            <label> Last Name </label>
                            <input className="form-control" value={input.lname} onChange={onInputChange} type="text" name="lname" maxLength="30" placeholder="Enter your last name..." required />
                        </p>
                        <div><label> Email Address {res && (<span>is invalid.</span>)}</label>
                            <input className="form-control" value={input.email} onChange={onInputChange} type="email" name="email" placeholder="Enter your email address..." required />
                        </div>
                        <div>
                            <label> Contact Number </label>
                            
                            <div className={styles.contact}>
                                    <select className="form-control" onChange={selectCountry} name="countrycode" required>
                                        <option hidden>+?</option>
                                        <option value="ph">🇵🇭 +63</option>
                                        <option value="us">🇺🇸 +1</option>     
                                    </select>
                                    <input className="form-control" value={input.contactnum} onChange={onInputChange} id="contact" type="tel" name="contactnum" maxLength="13" placeholder="Enter your contact number..." required />
                                
                            </div>
                        </div>
                    </div>
                        <p>
                            <label> Message </label>
                            <textarea className="form-control" value={input.message} onChange={onInputChange} type="input" name="message" placeholder="Write your message here..." required />
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
            <Footer/>
        </div>
    );
}