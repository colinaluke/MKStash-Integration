import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'

const NavBar2 = () => {
    const [showShop, setShowShop] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [scroll, setScroll] = useState("");

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div>
            {scroll <= 40 && (
                <div className="container-flex">
                    <div className={`container ${styles['navcontainer1']}`}>
                         <div className = "row">
                            <div className={`col ${styles['navlinks']}`}>
                                <Link href="/"><p>Login</p></Link>
                                <Link href="/"><p>Create an account</p></Link>
                            </div>
                            <div className={`col ${styles['navlogo']}`}>
                                <a href="/"><Image src="/images/MKStash.svg" height={38} width={135}></Image></a>
                            </div>
                            <div className={`col ${styles['navicons']}`}>
                                {!showSearch && (<i className="bi bi-search" onClick={() => setShowSearch(true)}></i>)}
                                {showSearch && (
                                    <div className={styles.navsearchbar}>
                                        <div className={styles.navarrow}><i className="bi bi-arrow-right" onClick={() => setShowSearch(false)}></i></div>
                                        <input type="text" className="form-control" placeholder="Search product here.."></input>
                                        <div className={styles.navsearchicon}><i className="bi bi-search" onClick={() => setShowSearch(false)}></i></div>
                                    </div>
                                )}
                                <div>
                                    <i className="bi bi-heart"></i>
                                    <span className={`badge rounded-pill bg-danger ${styles["navnotif"]}`}>0</span>
                                </div>
                                <div>
                                    <i className="bi bi-cart"></i>
                                    <span className={`badge rounded-pill bg-danger ${styles["navnotif"]}`}>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <Link href="/shop"><p>Shop</p></Link><i className="bi bi-chevron-down" onClick={() => setShowShop(e => !e)}></i>

                        <p>Collection</p><i className="bi bi-chevron-down" onClick={() => setShowCollection(e => !e)}></i>
                        <Link href="/contact_us"><p>Contact Us</p></Link>
                    </div>
                    {showShop && (
                        <div className={styles.navshop}>
                            <div className={styles.navdrop}>
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
                        <div className={styles.navcollection}>
                            <div className={styles.navdropcol}>
                                <ul>
                                    <li>On Sale!</li>
                                    <li>New Arrival</li>
                                    <li>Best Seller</li>
                                    <li>Branded</li>
                                    <li>Surplus</li>
                                </ul>
                            </div>
                        </div>
                    )
                    }
                </div>
            )}

            {scroll > 40 && (
                <div className={`container-flex ${styles['containerscroll']}`}>
                    <div className={`container ${styles['navcontainer1']}`}>
                        <div className="row">
                            <div className={`col ${styles['navlinks']}`}>
                                <Link href="/"><p>Login</p></Link>
                                <Link href="/"><p>Create an account</p></Link>
                            </div>
                            <div className={`col ${styles['navlogo']}`}>
                                <a href="/"><Image src="/images/MKStash.svg" height={38} width={135}></Image></a>
                            </div>
                            <div className={`col ${styles['navicons']}`}>
                                {!showSearch && (<i className="bi bi-search" onClick={() => setShowSearch(true)}></i>)}
                                {showSearch && (
                                    <div className={styles.navsearchbar}>
                                        <div className={styles.navarrow}><i className="bi bi-arrow-right" onClick={() => setShowSearch(false)}></i></div>
                                        <input type="text" className="form-control" placeholder="Search product here.."></input>
                                        <div className={styles.navsearchicon}><i className="bi bi-search" onClick={() => setShowSearch(false)}></i></div>
                                    </div>
                                )}
                                <div>
                                    <i className="bi bi-heart"></i>
                                    <span className={`badge rounded-pill bg-danger ${styles["navnotif"]}`}>0</span>
                                </div>
                                <div>
                                    <i className="bi bi-cart"></i>
                                    <span className={`badge rounded-pill bg-danger ${styles["navnotif"]}`}>0</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div className={styles.item}>
                        <Link href="/shop"><p>Shop</p></Link><i className="bi bi-chevron-down" onClick={() => setShowShop(e => !e)}></i>

                        <p>Collection</p><i className="bi bi-chevron-down" onClick={() => setShowCollection(e => !e)}></i>
                        <Link href="/contact_us"><p>Contact Us</p></Link>
                    </div>
                    {showShop && (
                        <div className={styles.navshop}>
                            <div className={styles.navdrop}>
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
                        <div className={styles.navcollection}>
                            <div className={styles.navdropcol}>
                                <ul>
                                    <li>On Sale!</li>
                                    <li>New Arrival</li>
                                    <li>Best Seller</li>
                                    <li>Branded</li>
                                    <li>Surplus</li>
                                </ul>
                            </div>
                        </div>
                    )
                    }
                </div>
            )}
        </div>
    );
}
export default NavBar2;
