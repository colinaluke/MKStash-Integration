import React, { Component, useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'
import { ActiveContext } from './ActiveContext.js';

const Search = () => {
    const { search, setSearch } = useContext(ActiveContext);
    const [searchInput, setSearchInput] = useState('');

    const searchItems = (e) => {
        setSearch(e.target.value);
    }
    useEffect(() => {
      setSearchInput(search)
    }, [search])

   
    return (
        <div>
            <div>
                <div className={`${styles["sidetitle"]}`}>
                    Search
                </div>
                <div className="">
                    <input type="input" className={`${styles["searchbarside"]} input-group-text`} tabIndex="1" onChange={searchItems} value={searchInput}  placeholder="Search items here..." id="search_prod">
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