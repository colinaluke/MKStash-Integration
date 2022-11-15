import React, { Component, useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'
import { ActiveContext } from './ActiveContext.js';

const Price = () => {
    const { minPrice, setMinPrice } = useContext(ActiveContext);
    const { maxPrice, setMaxPrice } = useContext(ActiveContext);
    const [isMinPrice, setIsMinPrice] = useState('');
    const [isMaxPrice, setIsMaxPrice] = useState('');

    const onMinPrice = (e) => {
        setMinPrice(e.target.value)
    }
    const onMaxPrice = (e) => {
        setMaxPrice(e.target.value)
    }

    useEffect(() => {
        setIsMinPrice(minPrice);
        setIsMaxPrice(maxPrice);
    },[minPrice, maxPrice])

    return (
        <div>
            <div className={`${styles["sidetitle"]}`}>
                Price
            </div>
            <div className="row">
                <div className="col">
                    <input type="number" className={`${styles["price"]} form-control`} onChange={onMinPrice} value={isMinPrice}></input>
                </div>
                <div className="col">
                    <input type="number" className={`${styles["price"]} form-control`} onChange={onMaxPrice} value={isMaxPrice}></input>
                </div>
            </div>
        </div>
    );
}

export default Price