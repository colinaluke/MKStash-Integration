import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Login.module.css'
import stylesForm from "../styles/Signup.module.css";
import { useState, useEffect } from 'react' 
import { useRouter } from 'next/router'

const resetPassword = () => {
    const [newPass, setNewPass] = useState('')
    const [confPass, setConftPass] = useState('')
    const [errMsg, setErrMsg] = useState('')
    const [logging, setLogging] = useState(0)
    const [windowWidth, setWindowWidth] = useState(0)
    const [err, setErr] = useState(0)
    const router = useRouter()
    const baseURL = 'http://localhost:3000'
    const url = new URL(`${baseURL}${router.asPath}`)
    const token = url.searchParams.get('token')
    const [showCrit, setShowCrit] = useState(false);
    const [error, setError] = useState({
        pwd: '',
        cpass: ''
    })
    const [showSuccess, setShowSuccess] = useState(false)
    const [load, setLoad] = useState(1)

    const handleReset = async (e) => {
        e.preventDefault()
        setLogging(1)
        const { msg, err} = await verifyTok()

        if(newPass != confPass) {
            setLogging(0)
            return
        } 
        if(!err) {
            const options = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({token: msg, pass: newPass})
            }
            const res = await fetch('/api/reset-password', options);
            const { message, err } = await res.json()
            setErr(err)
        }
        setShowSuccess(true);
        setLogging(0)
    }
    const passHandler = (e) => {
        setNewPass(e.target.value)
        validateInput(e)
    }
    const confPassHandler = (e) => {
        setConftPass(e.target.value)
        validateInput(e)
    }

    const handleWinWidth = () => {

        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    const verifyTok = async() => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({token: token})
        }
        const res = await fetch('/api/verifyToken', options);
        const { msg, err } = await res.json()
        setErr({msg, err})
        setLoad(0)
        return {msg, err}
    }

    useEffect(() => {
        verifyTok()
    }, [])

    useEffect(() => {
        window.addEventListener("resize", handleWinWidth)
        return () => window.removeEventListener("resize", handleWinWidth);
    }, []);

    const onInputFocus = e => {
        setShowCrit(true)
    }

    const validateInput = e => {
        let { name, value } = e.target
        var lower = /[a-z]/g;
        var upper = /[A-Z]/g;
        var numbers = /[0-9]/g;
        var special = /[!#$%&? "]/g;
        var letter = document.getElementById("letter");
        var capital = document.getElementById("capital");
        var number = document.getElementById("number");
        var symbol = document.getElementById("symbol");

        if(newPass != confPass) {

        }

        setError(prev => {
            const stateObj = { ...prev, [name]: ''};

            switch(name) {
                case "pwd": 
                    if(!value) {
                        stateObj["cpass"] = ''
                        letter.classList.remove(stylesForm.valid);
                        letter.classList.add(stylesForm.invalid);

                        capital.classList.remove(stylesForm.valid);
                        capital.classList.add(stylesForm.invalid);

                        number.classList.remove(stylesForm.valid);
                        number.classList.add(stylesForm.invalid);

                        symbol.classList.remove(stylesForm.valid);
                        symbol.classList.add(stylesForm.invalid);
                    } else {
                        if(confPass && value !== confPass) {
                            stateObj["cpass"] = "Passwords don't match!";
                        } else {
                            stateObj["cpass"] = ''
                        }
                        
                        if (value.match(lower)) {
                            letter.classList.remove(stylesForm.invalid);
                            letter.classList.add(stylesForm.valid);
                        } else {
                            letter.classList.remove(stylesForm.valid);
                            letter.classList.add(stylesForm.invalid);
                        }

                        if (value.match(upper)) {
                            capital.classList.remove(stylesForm.invalid);
                            capital.classList.add(stylesForm.valid);
                        } else {
                            capital.classList.remove(stylesForm.valid);
                            capital.classList.add(stylesForm.invalid);
                        }

                        if (value.match(numbers)) {
                            number.classList.remove(stylesForm.invalid);
                            number.classList.add(stylesForm.valid);
                        } else {
                            number.classList.remove(stylesForm.valid);
                            number.classList.add(stylesForm.invalid);
                        }

                        if (value.match(special)) {
                            symbol.classList.remove(stylesForm.invalid);
                            symbol.classList.add(stylesForm.valid);
                        } else {
                            symbol.classList.remove(stylesForm.valid);
                            symbol.classList.add(stylesForm.invalid);
                        }
                    }
                    break;
                
                case "cpass":
                    if (!value) {
                        stateObj[name] = " ";
                    } if (newPass && value !== newPass) {
                        stateObj[name] = "Passwords don't match!";
                    } else {
                        stateObj[name] = ""
                    }
                    break;
                default:
                    break;
            }
            return stateObj;
        })
    }

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
                    <h2>Reset Password</h2>
                    { (load)?
                            (
                                <div className="spinner-border spinner-border-sm" role="status">
                                    <span className="visually-hidden">Loading...</span>
                                </div>
                            ) :
                        (err.err)?
                            (
                                <div style={{ 'padding': '20px' }}>
                                    <h5 style={{ 'color': 'red', 'margin': '0' }}> {err.msg} </h5>
                                </div>
                            ) 
                    : 
                    (
                    <form onSubmit={handleReset}>
                        <div className={`form-group ${styles.formBox}`} >
                                <label> Enter New Password </label>
                                <input className="form-control" 
                                        type="password" 
                                        name="pwd" 
                                        placeholder="Enter new password..." 
                                        value={newPass} 
                                        onChange={passHandler} 
                                        onBlur={validateInput} 
                                        onFocus={onInputFocus} 
                                        pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,12}"
                                        minLength="6"
                                        maxLength="12"
                                        required />
                            </div>
                            <div className={`form-group ${styles.formBox}`} >
                                <label> Confirm password </label>
                                <input className="form-control" 
                                        type="password" 
                                        name="cpass" 
                                        placeholder="Confirm password..." 
                                        value={confPass} 
                                        onChange={confPassHandler} 
                                        onBlur={validateInput} 
                                        onFocus={validateInput} 
                                        minLength="6"
                                        maxLength="12"
                                        required />
                                {error.cpass && <span className={stylesForm.err}>{error.cpass}</span>}
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
                                </div>) : "Reset"
                            }
                            </button>
                            {showCrit &&
                                <div id="crit">
                                    <p id="letter" className={stylesForm.invalid}>Min. of 1 lowercase character</p>
                                    <p id="capital" className={stylesForm.invalid}>Min. of 1 uppercase character</p>
                                    <p id="number" className={stylesForm.invalid}>Min. of 1 number character</p>
                                    <p id="symbol" className={stylesForm.invalid}>Min. of 1 special character</p>
                                </div>
                            }
                    </form>
                    )}

                    {showSuccess && (
                    <div className={`${stylesForm.successOverlay}`}>
                        <div className={`${stylesForm.innerOverlay}`}>
                            <h2>Password Reset</h2>
                            <p>Your password has been successfully reset. Please use your new password to log in to your account.</p>
                            <button onClick={() => { router.push('/login'); }} className={stylesForm.submitBtn}>Close</button>
                        </div>
                    </div>
                    )}
                </div>
            </div>
        </div>
    </div>
}

export default resetPassword;