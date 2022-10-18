import Image from 'next/image'
import styles from '../styles/Banner.module.css'
import { useState } from 'react'
import { useRouter } from 'next/router'

const Banner = () => {
    const router = useRouter()
    const [text, setText] = useState("Lorem ipsum dolor sit amet");
    return <div>
        
        <div className={styles.container}>
            <Image src="/images/banner.svg" objectFit="cover" layout="fill" />
            <div className={ styles.textContainer }>
                <h1> {text}</h1>
                <button className={`btn-outline-dark ${styles.shopBtn}`} onClick={() => router.push('/') } > Shop Now </button>
            </div>
            
        </div>

    </div>
}

export default Banner