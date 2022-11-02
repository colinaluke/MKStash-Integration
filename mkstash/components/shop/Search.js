import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'

const Search = () => {
    return (
        <div>
            <div>
                <div className={`${styles["sidetitle"]}`}>
                    Search
                </div>
                <div className="">
                    <input type="input" className={`${styles["searchbarside"]} input-group-text`} tabIndex="1" placeholder="Search items here..." maxLength="" id="search_prod">
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