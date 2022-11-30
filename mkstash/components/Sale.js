import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Sales.module.css'

const Sale = () => {
    const [event, setEvent] = useState('Black Friday Sale')
    const [sale, setSale] = useState('Up to 70% off!')
    const [saleDesc, setSaleDesc] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.')

    return (
        <div>
            <div className={styles.container }>
                <Image src="/images/sale.jpg" objectFit="cover" layout="fill" />
                <div className={styles.textContainer }>
                    <h1>{event}</h1>
                    <h3> {sale}</h3>
                    <p> {saleDesc}</p>
                    <Link href="/"><button className={`btn-outline-dark ${styles.shopBtn}`} > Shop Now </button></Link>
                </div>
            </div>
        </div>
        )
}

export default Sale