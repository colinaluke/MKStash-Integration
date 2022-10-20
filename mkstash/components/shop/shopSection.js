import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'

const ShopSection = () => {

    const [menSide, setMenSide] = useState(false);

    const menClick = event => {
        setMenSide(current => !current);
        // setIsShown(true);
    };


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
                    Men<i onClick={menClick} className={`bi bi-chevron-down ${styles["iconshop"]}`}></i>                                     
                        <div className={` `} style={{ "position": "absolute" }}>
                            <ul className="list-group">
                                <li className={` ${styles["dropdownitem"]} `}>T-shirt</li>
                                <li className={` ${styles["dropdownitem"]} `}>Polo</li>
                                <li className={` ${styles["dropdownitem"]} `}>Pants</li>
                                <li className={` ${styles["dropdownitem"]} `}>Shorts</li>
                                <li className={` ${styles["dropdownitem"]} `}>Hoodies</li>
                            </ul>
                        </div>
                </div>               
            </div>
        </div>
    );
}

export default ShopSection 