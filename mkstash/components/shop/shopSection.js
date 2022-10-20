import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
import SideBar from '../../components/shop/sidebar';

const ShopSection = () => {

    const [menSide, setMenSide] = useState(false);

    const menClick = event => {
        setMenSide(current => !current);
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
            </div>
            <SideBar />
        </div>
    );
}

export default ShopSection 