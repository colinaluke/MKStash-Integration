import React, { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import ForgotPassword from '../components/login/ForgotPassword'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import AdminLogin from '../components/login/AdminLogin'

const login = () => {
    const forgot = useRef(null)
    const adminLog = useRef(null)
    const router = useRouter()
    const [user, setUser] = useState({
        email: '',
        password: ''
    });
    const [showForgot, setShowForgot] = useState(false)
    const [showAdminLogin, setShowAdminLogin] = useState(false)
    const [errMsg, setErrMsg] = useState('')
    const [logging, setLogging] = useState(0)

    const changeHandler = async (e) => {
        const { name, value } = e.target;
        setUser(user => ({
            ...user, [name]: value
        }))
    }

    const handleLogin = async (e) => {
        e.preventDefault();
        setLogging(1)
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
        setLogging(0)
        const { message, err, role } = await res.json();
        (err)? setErrMsg(message) : (role === "admin")
            ? setShowAdminLogin(true)
            : router.push('/')
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

    useEffect(() => {
        if (!showAdminLogin) return;
        var initial = 0
        function handleClick(event) {
            if (initial++ && adminLog.current && !adminLog.current.contains(event.target)) {
                setShowAdminLogin(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showAdminLogin]);

    const [windowWidth, setWindowWidth] = useState(0);
    const handleWinWidth = () => {
        console.log(window.innerWidth);
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWinWidth)
        return () => window.removeEventListener("resize", handleWinWidth);
    });

    return <div className={ styles.container } >
        <Head>
            <title>MKStash</title>
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={`row ${styles.customRow}` }>
            {(windowWidth > 765) && 
                <div className={`col ${styles.imgContainer}` } >
                    <Image src="/images/login.jpg" objectFit="cover" layout="fill" />
                </div>
            }
            
            <div className={`col-3 ${styles.rightPane}` }>
                <div className={` ${styles.loginForm}` }>
                    <Image src="/images/MKstash.svg" width={150} height={75} />
                    <h2>Welcome back!</h2>
                    <form onSubmit={handleLogin}>
                        <div className={`form-group ${styles.formBox}`} >
                            <label> Email Address </label>
                            <input className="form-control" type="email" name="email" placeholder="Enter your email address..." value={user.email} onChange={changeHandler} required />
                        </div>
                        <div className={`form-group ${styles.formBox}`} >
                            <label> Password </label>
                            <input className="form-control" type="password" name="password" placeholder="Enter your email password..." value={user.password} onChange={changeHandler} required />
                        </div>
                        {errMsg && (
                            <div className="text-danger">
                                <p className="font-weight-bold"> {errMsg}</p>
                            </div>
                        )
                        }
                        <button type="submit" className={styles.submitBtn }> 
                        {(logging == 1)? ( 
                            <div className="spinner-border spinner-border-sm" role="status">
                                <span className="visually-hidden">Loading...</span>
                            </div>) : "Login"
                        }
                        </button>
                    </form>

                    <button onClick={() => setShowForgot(e => !e)} className={ styles.forgotBtn }> Forgot Password </button>
                    {showForgot &&
                        (<ForgotPassword innerRef={forgot} setShowForgot={ setShowForgot }/>)
                    }
                    {showAdminLogin &&
                        (<AdminLogin innerRef={adminLog} setShowAdminLogin={ setShowAdminLogin } router = {router} />)
                    }
                                
                    <hr />
                
                    <div className={styles.socialLinks}>
                        <div>Login using</div>
                        <span>
                            <button onClick={() => router.push('https://www.facebook.com') }> Facebook </button>
                            <button onClick={() => router.push('https://www.google.com')}> Google </button>
                        </span>
                    </div>
                    Don't have an account? Sign up <Link href="/signup"> here </Link>
                </div>
            </div>
        </div>
    </div>
}

export default login;