import React, { useState, useEffect, useRef } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shopnavbar.module.css'

const NavBar2 = () => {
    const [showCollection, setShowCollection] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [scroll, setScroll] = useState("");
    const [windowWidth, setWindowWidth] = useState(0);

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    
    const handleWinWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWinWidth)
        return () => window.removeEventListener("resize", handleWinWidth);
    });
   
    return (
        <div>
            {(scroll <= 40) && (
                <div className="container-flex">
                    <div className={`container ${styles['navcontainer1']}`}>
                         <div className = "row">
                            <div className={`col ${styles['navlinks']}`}>
                                <Link href="/"><p>Login</p></Link>
                                <Link href="/"><p>Create an account</p></Link>
                            </div>
                            <div className={`${styles['navlogo']} `}>
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
                    <div className={`${styles['item']}`}>
                        <div>
                            <span>Shop
                                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-chevron-down" style={{ "fontSize": "1.3vh", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                                </a>
                                <div className={`dropdown-menu ${styles["dropdownmenu"]}`}>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Men</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Women</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Accessories</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Shoes</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Bags</li>
                                    </ul>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>T-shirt</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>T-shirt</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Necklace</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Sandals</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Handbags</li>
                                    </ul>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Polo</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Dress</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Bracelet</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Sneakers</li>
                                    </ul>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Earrings</li>
                                    </ul>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Shorts</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Shorts</li>
                                    </ul>
                                    <ul className="list-group list-group-horizontal">
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Hoodies</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Hoodies</li>
                                    </ul>
                                </div>
                            </span>
                            <span>Collections
                                <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="bi bi-chevron-down" style={{ "fontSize": "11px", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                                </a>
                                <div className={`dropdown-menu ${styles["dropdownmenu2"]}`}>
                                    <ul style={{ "padding": '0' }}>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>On Sale!</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>New Arrival</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Best Seller</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Branded</li>
                                        <li className={`dropdown-item ${styles["dropdownitem"]}`}>Surplus</li>
                                    </ul>
                                </div>
                            </span>
                            <span>Contact Us</span>
                        </div>
                    </div>

                </div>
            )}

            {(scroll > 40) && (
                <div className={`container`}>
                    <div className={`container position-fixed sticky-top ${styles['navcontainer2']}`}>
                        <div className="container">
                            <div className="row">
                                <div className={`${styles['navlogo']} `}>
                                    <a href="/"><Image src="/images/MKStash.svg" height={38} width={135}></Image></a>
                                </div>
                                <div className={`${styles['item2']} col`}> 
                                    <div>
                                        <span>Shop
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-chevron-down" style={{ "fontSize": "1.3vh", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                                            </a>
                                            <div className={`dropdown-menu ${styles["dropdownmenu"]}`}>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Men</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Women</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Accessories</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Shoes</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Bags</li>
                                                </ul>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>T-shirt</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>T-shirt</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Necklace</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Sandals</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Handbags</li>
                                                </ul>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Polo</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Dress</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Bracelet</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Sneakers</li>
                                                </ul>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Earrings</li>
                                                </ul>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Shorts</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Shorts</li>
                                                </ul>
                                                <ul className="list-group list-group-horizontal">
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Hoodies</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Hoodies</li>
                                                </ul>
                                            </div>
                                        </span>
                                        <span>Collections
                                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                <i className="bi bi-chevron-down" style={{ "fontSize": "11px", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                                            </a>
                                            <div className={`dropdown-menu ${styles["dropdownmenu2"]}`}>
                                                <ul style={{ "padding": '0' }}>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>On Sale!</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>New Arrival</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Best Seller</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Branded</li>
                                                    <li className={`dropdown-item ${styles["dropdownitem"]}`}>Surplus</li>
                                                </ul>
                                            </div>
                                        </span>
                                        <span>Contact Us</span>
                                    </div>
                                </div>
                                <div className={`col ${styles['navicons']}`}>
                                    {!showSearch && (<i className="bi bi-search" onClick={() => setShowSearch(true)}></i>)}
                                    {showSearch && (
                                        <div className={styles.navsearchbar}>
                                            <i className={`${styles['navarrow']} bi bi-arrow-right`} onClick={() => setShowSearch(false)}></i>
                                            <input type="text" className={`${styles['input']} form-control`} placeholder="Search product here.."></input>
                                            <i className={`${styles['navsearchicon']} bi bi-search`} onClick={() => setShowSearch(false)}></i>
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
                    </div>
                </div>
            )}
        </div>
    );
}
export default NavBar2;
