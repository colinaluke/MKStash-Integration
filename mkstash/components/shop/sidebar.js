import React, { useState, useMemo, useContext } from 'react';
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import GridLayout from './GridLayout.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Banner from './Banner.js';
import ActiveContext from "./ActiveContext.js"
import styles from '../../styles/navbar.module.css'


const Sidebar = () => {
    const [active, setActive] = useState('');
    const providerValue = useMemo(() => ({active, setActive}), [active, setActive]);

    const [collection, setCollection] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [sort, setSort] = useState('');
     
    return (
        <ActiveContext.Provider value={{ providerValue, collection, setCollection, category, setCategory, sort, setSort, price, setPrice }}>          
            <div>
                <div className={`row`}>                  
                    
                    <div className={`${styles["shopcol"]}`}>
                        <Search />
                            <div>
                                {SidebarData.map((item, id) => {
                                    return <SubMenu item={item} key={id} />;
                                })}
                            </div>
                        <Collection />
                           
                    </div> 
                        <div className="col">
                            {active === "menpants" && <GridLayout category="menpants" />}
                            {active === "menshirt" && <GridLayout category="menshirt" />}
                            {active === "menpolo" && <GridLayout category="menpolo" />}
                            {active === "menshorts" && <GridLayout category="menshorts" />}
                            {active === "menhoodies" && <GridLayout category="menhoodies" />} 
                    </div>
                    </div>
                </div>     
        </ActiveContext.Provider>
    );
};

export default Sidebar;
