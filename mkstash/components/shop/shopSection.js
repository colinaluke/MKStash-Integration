import React, { Component, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import NavBar from '../../components/shop/navbar';
import SideBar from './SideBar.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Banner from './Banner.js';
import GridLayout from './GridLayout.js';
import data from '../../lib/shopproducts.json';

const ShopSection = () => {
   
    return (       
        <div>
            <Banner />
            <NavBar />
            <div className={`container py-4`} style={{ "fontSize": "14px" }}>
                <SideBar />
            </div>
           
        </div>
    );
}
export default ShopSection 