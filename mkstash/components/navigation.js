import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import React, {useState} from "react";

const Navigation = () => {

    const [showShop, setShowShop] = useState(false);
    const [showCollection, setShowCollection] = useState(false);

    return(
        <div className={styles.container}>
            <div className={styles.contain}>
                <div className={styles.item}>
                    <Link href="/"><p>Login</p></Link>
                    <Link href="/signup"><p>Create an account</p></Link>             
                </div>
                
                <div className={styles.item}>
                    <Link href="/"><Image src="/images/MKstash.svg" width={125} height={75}/></Link>
                </div>

                <div className={styles.item}>
                    <i class="bi bi-search"></i>
                    <i class="bi bi-heart"></i>
                    <i class="bi bi-cart"></i>
                </div>
            </div>
            <hr/>
            <div className={styles.item}>
                <Link href="/shop"><p>Shop</p></Link><i class="bi bi-chevron-down" onClick={()=>setShowShop(true)}></i>
                
                <p>Collection</p><i class="bi bi-chevron-down" onClick={()=>setShowCollection(true)}></i>
                <Link href="/contact_us"><p>Contact Us</p></Link>
            </div>
            {showShop && (
                        <div className={styles.successOverlay}>
                           <div className={styles.innerOverlay}>
                            <div className={styles.columns}>
                                <ul>
                                    <li><b>Men</b></li>
                                    <li>T-shirt</li>
                                    <li>Polo</li>
                                    <li>Pants</li>
                                    <li>Shorts</li>
                                    <li>Hoodies</li>
                                </ul>
                                <ul>
                                    <li><b>Women</b></li>
                                    <li>T-shirt</li>
                                    <li>Dress</li>
                                    <li>Pants</li>
                                    <li>Shorts</li>
                                    <li>Hoodies</li>
                                </ul>
                                <ul>
                                    <li><b>Accessories</b></li>
                                    <li>Necklace</li>
                                    <li>Bracelets</li>
                                    <li>Earrings</li>
                                </ul>
                                <ul>
                                    <li><b>Shoes</b></li>
                                    <li>Sandals</li>
                                    <li>Sneakers</li>
                                </ul>
                                <ul>
                                    <li><b>Bags</b></li>
                                    <li>Handbags</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        )
                }
                {showCollection && (
                        <div className={styles.successOverlay2}>
                           <div className={styles.innerOverlay}>
                                <ul>
                                    <li>On Sale!</li>
                                    <li>New Arrival</li>
                                    <li>Best Seller</li>
                                    <li>Branded</li>
                                    <li>Surplus</li>
                                </ul>
                                <br/>
                            </div>
                        </div>
                        )
                }
        </div>
    );
}

export default Navigation;