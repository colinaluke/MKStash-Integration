import React, { Component } from 'react'
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../../styles/navbar.module.css'

class NavBar extends React.Component {
    render() {
        return (
            <div className={styles.page}>
                <div className={styles.container}>
                    <div className="container text-center py-4" >                       
                        <div className="row" >
                            <div className="col">
                                <a href='/' className={styles.link}>Login</a>      <a href='/' className={styles.link}>Create and Account</a>
                            </div>
                            <div className="col">
                                <a href='/'>
                                    <Image src="/images/MKStash.svg" height={38} width={135} style = {{"cursor":"pointer"}}></Image>
                                </a>
                            </div>
                            <div className="col">
                                <i className="bi bi-search" style={{ "fontSize": "20px" }}></i>
                                &nbsp;
                                <i className="bi bi-heart" style={{ "fontSize": "20px" }}></i>
                                &nbsp;
                                <i className="bi bi-cart" style={{ "fontSize": "20px" }}></i>
                            </div>
                        </div>
                    </div>                 
                </div>
                <div className="row justify-content-md-center text-center py-4">
                    <p> <span className={styles.span}>Shop
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-chevron-down" style={{ "fontSize": "11px" }}></i>
                        </a>
                        <div class="dropdown-menu" style={{ "fontSize":"14px"}}>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item w-25 p-3"><b>Men</b></li>
                                <li class="dropdown-item w-25 p-3">Women</li>
                                <li class="dropdown-item w-25 p-3">Accessories</li>
                                <li class="dropdown-item flex-fill w-25 p-3 ">Shoes</li>
                                <li class="dropdown-item flex-fill w-25 p-3">Bags</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item flex-fill w-25 p-3">T-shirt</li>
                                <li class="dropdown-item flex-fill w-25 p-3">T-shirt</li>
                                <li class="dropdown-item flex-fill w-25 p-3">Necklace</li>
                                <li class="dropdown-item flex-fill w-25 p-3">Sandals</li>
                                <li class="dropdown-item flex-fill w-25 p-3">Handbags</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item flex-fill">Polo</li>
                                <li class="dropdown-item flex-fill">Dress</li>
                                <li class="dropdown-item flex-fill">Bracelet</li>
                                <li class="dropdown-item flex-fill">Sneakers</li>
                                <li class="dropdown-item flex-fill"> </li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item flex-fill">Pants</li>
                                <li class="dropdown-item flex-fill">Pants</li>
                                <li class="dropdown-item flex-fill">Earrings</li>
                                <li class="dropdown-item flex-fill"> </li>
                                <li class="dropdown-item flex-fill"> </li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item flex-fill">Shorts</li>
                                <li class="dropdown-item flex-fill">Shorts</li>
                            </ul>
                            <ul class="list-group list-group-horizontal">
                                <li class="dropdown-item flex-fill">Hoodies</li>
                                <li class="dropdown-item flex-fill">Hoodies</li>
                            </ul>
                            </div>
                        </span>
                        <span className={styles.span}>Collections
                            <a href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i class="bi bi-chevron-down" style={{ "fontSize": "11px" }}></i>
                            </a>
                            <div class="dropdown-menu">
                                <ul>
                                    <li class="list-group-item">On Sale!</li>
                                    <li class="list-group-item">New Arrival</li>
                                    <li class="list-group-item">Best Seller</li>
                                    <li class="list-group-item">Branded</li>
                                    <li class="list-group-item">Surplus</li>
                                </ul>
                            </div>
                        </span>
                        <span className={styles.span}>Contact Us</span>
                    </p>
                </div>
            </div>
        )
    }
}

export default NavBar;
