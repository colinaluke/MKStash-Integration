import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Navigation.module.css";
import React, {useState} from "react";

const Navigation = () => {

    const [showShop, setShowShop] = useState(false);

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
                {showShop && (
                        <div className={styles.successOverlay}>
                           <div className={styles.innerOverlay}>
                                <h2>Message Sent!</h2>
                                <br/>
                            </div>
                        </div>
                        )
                }
                <p>Collection</p><i class="bi bi-chevron-down"></i>
                <Link href="/contact_us"><p>Contact Us</p></Link>
            </div>
        </div>
    );
}

export default Navigation;