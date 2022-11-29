import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ForgotPassword from '../components/login/ForgotPassword'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Login.module.css'

const login = () => {
    const forgot = useRef(null)
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [showForgot, setShowForgot] = useState(false)
    const [errMsg, setErrMsg] = useState('')

    const changeHandler = async (e) => {
        const { name, value } = e.target;
        setUser(user => ({
            ...user, [name]: value
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        const { email, password } = e.target
        const data = {
            email: email.value,
            password: password.value
        }
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        }
        const res = await fetch('/api/login', options);
        const { message, err } = await res.json();
        (err)? setErrMsg(message) : router.push('/')
    } 

    useEffect(() => {
        if (!showForgot) return;
        var initial = 0
        function handleClick(event) {
            if (initial++ && forgot.current && !forgot.current.contains(event.target)) {
                setShowForgot(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showForgot]);

    return <div className={ styles.container } >
        <div className={`row ${styles.customRow}` }>
            <div className={`col ${styles.imgContainer}` } >
                <Image src="/images/login.jpg" objectFit="cover" layout="fill" />
            </div>
        
            <div className={`col-3 ${styles.rightPane}` }>
                <div className={` ${styles.loginForm}` }>
                    <Image src="/images/MKstash.svg" width={150} height={75} />
                    <h2>Welcome back!</h2>
                    <form onSubmit={handleLogin}>
                        <div className="form-group" className={ styles.formBox }>
                            <label> Email Address </label>
                            <input className="form-control" type="email" name="email" placeholder="Enter your email address..." value={user.email} onChange={changeHandler} required />
                        </div>
                        <div className="form-group" className={styles.formBox}>
                            <label> Password </label>
                            <input className="form-control" type="password" name="password" placeholder="Enter your email password..." value={user.password} onChange={changeHandler} required />
                        </div>
                        {errMsg && (
                            <div className="text-danger">
                                <p className="font-weight-bold"> {errMsg}</p>
                            </div>
                        )
                        }
                        <button type="submit" className={styles.submitBtn }> Login </button>
                    </form>

                    <button onClick={() => setShowForgot(e => !e)} className={ styles.forgotBtn }> Forgot Password </button>
                    {showForgot &&
                        (<ForgotPassword innerRef={forgot} />)
                    }
                    
                    <hr />
                
                    <div className={styles.socialLinks}>
                        <div>Login using</div>
                        <span>
                            <button onClick={() => router.push('https://www.facebook.com') }> Facebook </button>
                            <button onClick={() => router.push('https://www.google.com')}> Google </button>
                        </span>
                    </div>
                    Don't have an account? Sign up <Link href="#"> here </Link>
                </div>
            </div>
        </div>
    </div>
}

export default login;