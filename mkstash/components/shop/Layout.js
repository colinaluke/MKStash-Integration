import React, { Component, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css';
import NavBar from '../../components/shop/navbar';
import ShopSection from '../../components/shop/ShopSection';
import SideBar from './SideBar.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Banner from './Banner.js';

export default function Layout({ children }) {
    return (
        <div>
           <Banner />
            <NavBar />
            <div className={`container py-4`} style={{ "fontSize": "14px" }}>
                <Search />
                <SideBar />
                <main>{children}</main>
                <Collection />
                <div>
                    {
                        data && data.map(product => {
                            return (
                                <div className="card" key={product.id}>
                                    <Image className="card-img-top" src={product.image} width="100px" height="250px" />
                                    {product.name} <br></br>
                                    P{product.price}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
  );
}