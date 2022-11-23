import React, { useState, useMemo, useContext } from 'react';
import { ActiveContext } from "./ActiveContext.js"
import styles from '../../styles/shop.module.css'
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import GridLayout from './GridLayout.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Price from './Price.js';
import Sort from './Sort.js'


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
        setMinPrice('');
        setMaxPrice('');
    }

    return (
        <ActiveContext.Provider value={{ providerValue, search, setSearch, collection, setCollection, category, setCategory, sort, setSort, minPrice, setMinPrice, maxPrice, setMaxPrice }}>                   
            <div>                
                <div className="row">
                    <div className="col">
                        <nav className={`${styles["shopfilter"]}`}>
                            <div className="container">
                                <a className="navbar-brand" href="#"></a>
                                <p className={`${styles["filter"]} navbar-toggler`} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                    <span className={`${styles["sidetitle"]}`}> <i className="bi bi-list"></i>Filter</span>
                                </p>
                                <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                                    <div className={`${styles["closebtn"]} offcanvas-header`}>
                                        <button type="button" className={`btn-close`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                    </div>
                                    <div className="offcanvas-body">
                                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                            <li className="nav-item">
                                                <Search />
                                            </li>
                                            <li className="nav-item">
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
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="offcanvas-header">
                                        <i data-bs-dismiss="offcanvas" aria-label="Close" className={`bi bi-arrow-bar-left`} style={{ fontSize: "20px" } }></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                    <div className={`col ${styles['sortbar']}`}>
                        <Sort />
                    </div>
                </div>
                <div className={`row ${styles["shoprow"]}`}>                            
                    <div className={`${styles["shopcol"]} col`}>
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
