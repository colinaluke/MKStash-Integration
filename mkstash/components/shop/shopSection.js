import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
import SideBar from './SideBar.js'

const ShopSection = () => {

    const [menSide, setMenSide] = useState(false);

    const menClick = event => {
        setMenSide(current => !current);
    };


    return (
        <div className={`container py-4`} style={{ "fontSize": "14px"}} >
            <div >
                <div className={`${styles["sidetitle"]}`}>
                    Search
                </div>
                <div className="">
                    <input type="input" className={`${styles["searchbarside"]} input-group-text`} tabIndex="1" placeholder="Search items here..." maxLength="" id="search_prod">
                    </input>
                </div>
                <div className={`${styles["sidetitle"]}`}>
                    Categories
                </div>
            </div>
            <SideBar />
            <div className={`${styles["sidetitle"]}`}>
                Collection
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="onsale"></input>
                    <label class="form-check-label" for="onsale">
                        On Sale!
                    </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="newarrival"></input>
                <label class="form-check-label" for="newarrival">
                    New Arrival
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="bestseller"></input>
                <label class="form-check-label" for="bestseller">
                    Best Seller
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="branded"></input>
                <label class="form-check-label" for="branded">
                    Branded
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="surplus"></input>
                <label class="form-check-label" for="surplus">
                    Surplus
                </label>
            </div>
        </div>
    );
}

export default ShopSection 