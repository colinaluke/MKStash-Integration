import Image from "next/image";
import styles from "../styles/Signup.module.css";
import React, { useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

export default function Signup() {
    const [input, setInput] = useState({
        fname: '',
        lname: '',
        email: '',
        contactnum: '',
        gender: '',
        pass: '',
        cpass: ''
    });

    const [error, setError] = useState({
        fname: '',
        lname: '',
        email: '',
        contactnum: '',
        gender: '',
        pass: '',
        cpass: ''
    })

    const [showSuccess, setShowSuccess] = useState(false);
    const [showCrit, setShowCrit] = useState(false);

    const addUserHandler = async (data) => {
        const response = await fetch("/api/signup", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "content-Type": "application/json"
            }
        })
        const { message } = await response.json();
        console.log(message);
    }

    const onInputFocus = e => {
        setShowCrit(true);
    }

    const onInputBlur = e => {
        validateInput(e);
        setShowCrit(false);
    }

    const onInputChange = e => {
        const { name, value } = e.target;

        if (name == "contactnum") {
            value = value.replace(/[^0-9]/g, '').replace(/(\..*)\./g, '$1');
        } else if (name == "fname" || name == "lname") {
            value = value.replace(/[^A-Za-z]/g, '').replace(/(\..*)\./g, '$1');
        }

        setInput(prev => ({
            ...prev,
            [name]: value
        }));

        validateInput(e);

    }

    const validateInput = e => {
        let { name, value } = e.target;

        var lower = /[a-z]/g;
        var upper = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var special = /[!#$%&? "]/g;

        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var symbol = document.getElementById("symbol");

        setError(prev => {
            const stateObj = { ...prev, [name]: "" };

            switch (name) {

                case "pass":
                    if (!value) {
                        stateObj["cpass"] = "";
                        letter.classList.remove(styles.valid);
                        letter.classList.add(styles.invalid);

                        capital.classList.remove(styles.valid);
                        capital.classList.add(styles.invalid);

                        number.classList.remove(styles.valid);
                        number.classList.add(styles.invalid);

                        symbol.classList.remove(styles.valid);
                        symbol.classList.add(styles.invalid);
                    } else {
                        stateObj["cpass"] = "Passwords don't match!";
                        if (value.match(lower)) {
                            letter.classList.remove(styles.invalid);
                            letter.classList.add(styles.valid);
                        } else {
                            letter.classList.remove(styles.valid);
                            letter.classList.add(styles.invalid);
                        }

                        if (value.match(upper)) {
                            capital.classList.remove(styles.invalid);
                            capital.classList.add(styles.valid);
                        } else {
                            capital.classList.remove(styles.valid);
                            capital.classList.add(styles.invalid);
                        }

                        if (value.match(numbers)) {
                            number.classList.remove(styles.invalid);
                            number.classList.add(styles.valid);
                        } else {
                            number.classList.remove(styles.valid);
                            number.classList.add(styles.invalid);
                        }

                        if (value.match(special)) {
                            symbol.classList.remove(styles.invalid);
                            symbol.classList.add(styles.valid);
                        } else {
                            symbol.classList.remove(styles.valid);
                            symbol.classList.add(styles.invalid);
                        }
                    }
                    break;

                case "cpass":
                    if (!value) {
                        stateObj[name] = " ";
                    } if (input.pass && value !== input.pass) {
                        stateObj[name] = "Passwords don't match!";
                    } else if (!input.pass && value) {
                        stateObj[name] = "Passwords don't match!";
                    }
                    break;

                default:
                    break;
            }

            return stateObj;
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addUserHandler(input);
        setShowSuccess(true);
        console.log(input);
    }

    return (
        <>
            <NavBar></NavBar>
            <div onSubmit={handleSubmit} className={styles.container}>
                <Image src="/images/MKstash.svg" width={150} height={75} />
                <h2>Hi there, welcome!</h2>
                <form>
                    <div className={styles.contain}>
                        <h3>Basic Information</h3>
                        <div className={styles.form}>
                            <p>
                                <label> First Name </label>
                                <input className="form-control" value={input.fname} onChange={onInputChange} onBlur={validateInput} type="input" name="fname" maxLength="30" placeholder="Enter your first name..." required />
                            </p>
                            <p>
                                <label> Last Name </label>
                                <input className="form-control" value={input.lname} onChange={onInputChange} onBlur={validateInput} type="input" name="lname" maxLength="30" placeholder="Enter your last name..." required />
                            </p>
                            <p><label> Email Address </label>
                                <input className="form-control" value={input.email} onChange={onInputChange} onBlur={validateInput} type="email" name="email" placeholder="Enter your email address..." required />
                            </p>
                            <p>
                                <label> Contact Number </label>
                                <input className="form-control" value={input.contactnum} onChange={onInputChange} onBlur={validateInput} type="input" name="contactnum" maxLength="10" placeholder="Enter your contact number..." required />
                            </p>
                            <p>
                                <label> Gender </label>
                                <select className="form-control" value={input.gender} onChange={onInputChange} onBlur={validateInput} name="gender" required>
                                    <option hidden>Choose a gender...</option>
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
                                    value={input.pass}
                                    onChange={onInputChange}
                                    onBlur={onInputBlur}
                                    onFocus={onInputFocus}
                                    name="pass"
                                    placeholder="Enter your password..."
                                    required
                                    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}"
                                    minLength="6"
                                    maxLength="12"
                                />
                                {showCrit &&
                                    <div id="crit">
                                        <p id="letter" className={styles.invalid}>Min. of 1 lowercase character</p>
                                        <p id="capital" className={styles.invalid}>Min. of 1 uppercase character</p>
                                        <p id="number" className={styles.invalid}>Min. of 1 number character</p>
                                        <p id="symbol" className={styles.invalid}>Min. of 1 special character</p>
                                    </div>
                                }
                            </p>
                            <p>
                                <label>Confirm Password </label>
                                <input
                                    className="form-control"
                                    type="password"
                                    value={input.cpass}
                                    onChange={onInputChange}
                                    onBlur={validateInput}
                                    onFocus={validateInput}
                                    name="cpass"
                                    placeholder="Enter your password again..."
                                    required
                                    minLength="6"
                                    maxLength="12"
                                />
                                {error.cpass && <span className={styles.err}>{error.cpass}</span>}
                            </p>
                        </div>
                    </div>
                    <button type="submit" className={styles.submitBtn}> Signup </button>
                </form>
                {showSuccess && (
                    <div className={styles.successOverlay}>
                        <div className={styles.innerOverlay}>
                            <h2>Email Verification</h2>
                            <p>Confirmation email has been sent. Please check your email and confirm to proceed.</p>
                            <br />
                            <button onClick={() => { setShowSuccess(false); window.location.reload(false); }} className={styles.submitBtn}>Close</button>
                        </div>
                    </div>
                )
                }
            </div>
            <Footer></Footer>
        </>
    );
}