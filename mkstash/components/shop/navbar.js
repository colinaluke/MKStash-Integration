import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'

const NavBar = () => {
    const [isShown, setIsShown] = useState(false);

    const handleClick = event => {
        setIsShown(current => !current);
        // setIsShown(true);
    };

    return (
        <div style={{ "fontSize": "14px" }}>
            <div style={{ "borderBottom": "1px solid rgb(212, 212, 212)" }}>
                <div className={`container text-center py-4 ${styles["topnav"]}`}>
                    <div className="row" >
                        <div className="col position-relative">
                            <div className="position-absolute top-50 start-0 translate-middle-y">
                                <a href='/' className={styles.link}>Login</a>           <a href='/' className={styles.link}>Create an Account</a>
                            </div>
                        </div>
                      
                        <a className='col col-lg-2' href='/'>
                                <Image src="/images/MKStash.svg" height={38} width={135} style={{ "cursor": "pointer" }}></Image>
                            </a>
                        
                        <div className="col position-relative">
                            <div className="position-absolute top-50 end-0 translate-middle-y">
                                {isShown && (
                                    <div className={`input-group float-start ${styles["searchbar"]}`}>
                                        <i onClick={handleClick} className="input-group-text bi bi-arrow-right"></i>
                                        <input type="text" className="form-control" placeholder="Search product here.."></input>
                                    </div>
                                )}
                                <button className={`${isShown ? 'input-group-text' : ''} ${styles["searchb"]}`} style={{ "backgroundColor": isShown ? 'rgb(208, 61, 71)' : 'none', 'color': isShown ? '#FFFFFF !important' : 'none' }}> <i onClick={handleClick} className={`bi bi-search ${styles["icons"]}`} style={{ 'color': isShown ? 'white' : 'none' }}> </i></button>
                                <a href="">
                                    <i className={`bi bi-heart ${styles["icons"]}`}></i>
                                    <span className={`position-absolute badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                                </a>
                                <span style={{ "marginRight": "3px" }}>     </span>
                                <a href="">
                                    <i className={`bi bi-cart ${styles["icons"]}`} ></i>
                                    <span className={`position-absolute badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="justify-content-md-center text-center py-4">
                <div>
                    <span>Shop
                        <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <i className="bi bi-chevron-down" style={{ "fontSize": "11px", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
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
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}> </li>
                            </ul>
                            <ul className="list-group list-group-horizontal">
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}>Pants</li>
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}>Earrings</li>
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}> </li>
                                <li className={`dropdown-item ${styles["dropdownitem"]}`}> </li>
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
    );
}
export default NavBar;
