import styles from '../../styles/Login.module.css'
import Image from 'next/image'

const AdminLogin = ({ innerRef, setShowAdminLogin, router }) => {
    return <div className={styles.loginOverlay}>
        <div className={styles.adminLogin} ref={innerRef}>
            <h2> Choose Dashboard </h2>
            <label> Which dashboard do you want to access? </label>
            <button className={styles.submitBtn} onClick={() => router.push('admin/dashboard')} > Dashboard 1 </button>
            <button className={styles.submitBtn} onClick={() => router.push('dashboardD2')}> Dashboard 2 </button>
            <div className={styles.closeBtn}>
                <Image src="/images/x.svg" height={25} width={25} onClick={() => setShowAdminLogin(false)}  />
            </div>
        </div>
    </div>
}

export default AdminLogin