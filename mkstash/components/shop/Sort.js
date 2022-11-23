import React, { Component, useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'
import { ActiveContext } from './ActiveContext.js';

const Sort = () => {
    const { sort, setSort } = useContext(ActiveContext);
    const [isSort, setIsSort] = useState('');

    const sortBy = (e) => {
        setSort(e.target.value);
    }
    useEffect(() => {
        setIsSort(sort)
    }, [sort])

    return (
        <div>
            <div className={`${styles["sortgroup"]} sticky-top`}>
                <div>
                    <div className={`${styles["sidetitle"]}`}>
                        Sort by
                    </div>
                    <div >
                        <select className={`${styles["sort"]}`} onChange={sortBy} value={isSort}>
                            <option value="none">none</option>
                            <option value="name">Name (A-Z)</option>
                            <option value="price">Price (Lowest-Highest)</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sort