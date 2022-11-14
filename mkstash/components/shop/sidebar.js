import React, { useState, useMemo, useContext } from 'react';
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import GridLayout from './GridLayout.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Price from './Price.js';
import Sort from './Sort.js'
import { ActiveContext } from "./ActiveContext.js"
import styles from '../../styles/shop.module.css'


const Sidebar = () => {
    const [active, setActive] = useState('');
    const providerValue = useMemo(() => ({active, setActive}), [active, setActive]);

    const [search, setSearch] = useState('');
    const [collection, setCollection] = useState([]);
    const [category, setCategory] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [sort, setSort] = useState('');

    const resetAll = () => {
        setCollection([]);
        setSearch('');
        setCategory('');
        setSort('');
    }

    return (
        <ActiveContext.Provider value={{ providerValue, search, setSearch, collection, setCollection, category, setCategory, sort, setSort, minPrice, setMinPrice, maxPrice, setMaxPrice }}>                   
            <div>             
                <Sort />
                <div className={`row`}>         
                    <div className={`${styles["shopcol"]}`}>
                       <Search />
                        <div>
                            {SidebarData.map((item, id) => {
                                return <SubMenu item={item} key={id} />;
                            })}
                        </div>
                        <Price />
                        <Collection /> 
                        <div>
                            <button type="reset" className={`${styles["resetb"]}`} onClick={resetAll}>Reset</button>
                        </div>
                    </div> 
                    <div className="col">
                        <GridLayout category={category} collection={collection} search={search} sort={sort} minPrice={minPrice} maxPrice={maxPrice} />
                    </div>
                </div>
            </div>     
        </ActiveContext.Provider>
    );
};

export default Sidebar;
