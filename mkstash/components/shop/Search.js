import React, { Component, useState, useContext } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'
import { ActiveContext } from './ActiveContext.js';

const Search = () => {
    const { search, setSearch } = useContext(ActiveContext);
    return (
        <div>
            <div>
                <div className={`${styles["sidetitle"]}`}>
                    Search
                </div>
                <div className="">
                    <input type="input" className={`${styles["searchbarside"]} input-group-text`} tabIndex="1" onChange={(e) => setSearch(e.target.value)} placeholder="Search items here..." maxLength="" id="search_prod">
                    </input>
                </div>
            </div>
            <div className={`${styles["sidetitle"]}`}>
                Categories
            </div>
        </div>
    );
}

export default Search