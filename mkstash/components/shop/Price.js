import React, { Component, useState, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
import { ActiveContext } from './ActiveContext.js';

const Price = () => {
    const { price, setPrice } = useContext(ActiveContext);
    const [isMinPrice, setIsMinPrice] = useState();
    const [isMaxPrice, setIsMaxPrice] = useState();
    const minPrice = (e) => {
        setIsMinPrice(e.target.value)
    }
    const maxPrice = (e) => {
        setIsMaxPrice(e.target.value)
        
    }
    return (
        <div>
            <div className={`${styles["sidetitle"]}`}>
                Price
            </div>
            <div className="row">
                <div className="col">
                    <input type="number" className={`${styles["price"]} form-control`} onChange={minPrice}/>
                    
                </div>
                <div className="col">
                    <input type="number" className={`${styles["price"]} form-control`} onChange={maxPrice} />
                </div>
            </div>
        </div>
    );
}

export default Price