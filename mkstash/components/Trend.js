import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Trend.module.css'

const Trend = () => {
    const [products, setProducts] = useState([
        { name: "Pique Short Sleeve Polo Shirt", price: "590.00", filename: "prod1" },
        { name: "Lined Crew Neck Short Sleeve T-Shirt", price: "390.00", filename: "prod2" },
        { name: "Dry Stretch Easy Shorts", price: "790.00", filename: "prod3" }
    ])
    return (
        <div className={styles.trendBody }>
            <h2> Latest Trend </h2>
            <div className={`container ${styles.container}`}>
                <div className={`row ${styles.row}`}>
                    {products.map((product) => (
                        <Link href="/">
                            <div className={`col-xs-12 col-sm-12 col-md-12 col-lg-4 ${styles.products}`} >
                                <Image src={`/images/Latest trends/${product.filename}.jpg`} objectFit="contain" layout="fill" />
                                <div className={styles.productDesc}>
                                    <h4>{product.name}</h4>
                                    <p> ₱ {product.price} </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
        )
}

export default Trend