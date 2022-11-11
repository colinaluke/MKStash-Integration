import React, { Component, useState, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
import { ActiveContext } from './ActiveContext.js';

const Sort = () => {
    const { sort, setSort } = useContext(ActiveContext);

    const sortBy = (e) => {
        setSort(e.target.value);
    }

    return (
        <div className={` ${styles["sortgroup"]}`}>
            <div className={`${styles["sidetitle"]}`}>
                Sort by
            </div>
            <select className={`${styles["sort"]}`} onChange={sortBy}>
                <option value="none">none</option>
                <option value="name" >Name (A-Z)</option>
                <option value="price">Price (Lowest-Highest)</option>
             </select>
        </div>
    );
}

export default Sort