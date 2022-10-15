import styles from '../styles/Navbar.module.css'
import Image from 'next/image'

const Banner = ({ setShowBanner, text }) => {
    return (
        <div className={ styles.banner }>
            <p>
                <span> { text } </span>
                <button className={ styles.bannerBtn }>
                    <Image src="/images/x.svg" height={20} width={20} onClick={() => setShowBanner(false)} />
                </button>
            </p>
        </div> 
    )
}

export default Banner