import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'

const ShopSection = () => {
    return (
        <div className={`container py-4`} style={{ "fontSize": "14px"}} >
            <div >
                <div style={{ "color": "rgb(208, 61, 71)"} }>
                    Search
                </div>
                <div className={`${styles[" searchbarside"]}` }>
                    <input type="input" class="input-group-text" tabindex="1" placeholder="Search items here..." maxlength="" id="search_prod">
                    </input>
                </div>
                <div style={{ "color": "rgb(208, 61, 71)" }}>
                    Categories
                </div>
                <div>
                    <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Men <i className="bi bi-chevron-down" style={{ "fontSize": "11px", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                    </a>
                    <div className={`dropdown-menu ${styles["dropdownmenu"]}`}>
                        <ul className="list-group">
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Men</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Women</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Accessories</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Shoes</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Bags</li>
                        </ul>
                    </div>
                </div>
                <div>
                    <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Women <i className="bi bi-chevron-down" style={{ "fontSize": "11px", "margin": "0px 15px 0px 10px", "color": "black" }}></i>
                    </a>
                    <div className={`dropdown-menu ${styles["dropdownmenu"]}`}>
                        <ul className="list-group">
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Men</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Women</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Accessories</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Shoes</li>
                            <li className={`dropdown-item ${styles["dropdownitem"]} ${styles["dropdownitemtop"]}`}>Bags</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShopSection;