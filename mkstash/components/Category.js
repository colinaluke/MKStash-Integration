import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Category.module.css'

const Category = () => {
    const [desc, setDesc] = useState('Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua')
    const [guarantees, setGuarantees] = useState([
        { filename: "QA", text: "Quality Assurance" },
        { filename: "Shipping", text: "Fast Shipping" },
        { filename: "Support", text: "Support 24/7" },
        {filename: "Return", text: "Simple Return"}
    ])
    const [categories, setCategories] = useState([
        "men", "women", "accessories", "shoes"
    ])

    return (
        <div className={styles.categoryBody }>
            <div>
                <h2>Shop by Categories</h2>
                <p> { desc }</p>
            </div>

            <div className={`container ${styles.categories}`}>
                <div className="row">
                    {categories.map((category) => (
                        <Link href='/'>
                            <div className={`col-sm ${styles.imageContainer}`}>
                                <Image src={`/images/Categories/${category}.jpg`} objectFit="contain" layout="fill" className={styles.img} />
                                <button className={styles.label}>{ category.toUpperCase() }</button>
                            </div>
                        </Link>
                        ))}
                </div>
            </div>

            <div className={`container ${styles.guarantees}`} >
                <div className="row">
                    {guarantees.map((guarantee) => (
                        <div className="col-sm">
                            <Image src={`/images/Categories/${guarantee.filename}.png`} height={40} width={45} />
                            <span className={styles.guarantext}><h5 style={{ maxWidth: "100px" }}>{guarantee.text}</h5></span>
                        </div>
                        ))}
                </div>
            </div>
        </div>
        )
}

export default Category