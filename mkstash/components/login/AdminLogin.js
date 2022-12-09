import styles from '../../styles/Login.module.css'
import Image from 'next/image'
import { useState } from 'react'

const AdminLogin = ({ innerRef, setShowAdminLogin, router }) => {
    const [loading, setLoading] = useState(0)

    return <div className={styles.loginOverlay}>
        <div className={styles.adminLogin} ref={innerRef}>
            <h2> Choose Dashboard </h2>
            <label> Which dashboard do you want to access? </label>
            <button className={styles.submitBtn} onClick={() => {
                setLoading(1) 
                router.push('admin/dashboard')
            }}> 
                {(loading == 1)? 
                    (<div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>) : "Dashboard 1 "
                }
            </button>
            <button className={styles.submitBtn} onClick={() => {
                setLoading(2)
                router.push('admin/dashboardD2')
            }}> 
                {(loading == 2)?
                    (<div className="spinner-border spinner-border-sm" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div>) : "Dashboard 2"

                }
            </button>
            <div className={styles.closeBtn}>
                <Image src="/images/x.svg" height={25} width={25} onClick={() => setShowAdminLogin(false)}  />
            </div>
        </div>
    </div>
}

export default AdminLogin