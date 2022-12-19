import { useState } from 'react'
import styles from '../../styles/Login.module.css'
import Image from 'next/image'

const ForgotPassword = ({ innerRef, setShowForgot }) => {
    const [msg, setMsg] = useState('');
    const [load, setLoad] = useState(0);
    const sendMail = async (e) => {
        e.preventDefault();
        setLoad(1)
        const { email } = e.target
        const data = {
            email: email.value,
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch('/api/mailer', options);
        const { message } = await res.json();
        setLoad(0)
        setMsg(message)
    } 

    return <div className={styles.forgotOverlay}>
        <div className={styles.forgotPassword} ref={innerRef}>
            <h2> Forgot Password </h2>
            <form onSubmit={ sendMail } className={styles.forgotForm}>
                <div className="form-group">
                    <label> Enter the email address associated with your account.</label>
                    <input className="form-control" type="email" placeholder="Enter your email address..." required name="email" />
                </div>

                <button type="submit" className={styles.submitBtn} style={{ "marginTop": "10px" }}> 
                {(load == 1)? ( 
                    <div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>) : "Submit"
                }
                 </button>
                {msg && (
                    <p> {msg} </p>
                )}
            </form>
            <div className={styles.closeBtn}>
                <Image src="/images/x.svg" height={25} width={25} onClick={() => setShowForgot(false)}  />
            </div>
        </div>
    </div>
}

export default ForgotPassword