import React, { useState, useContext } from 'react';
import Link from 'next/link';
import styles from '../../styles/navbar.module.css'
import activeContext from './SideBar.js';
import { ActiveContext } from './ActiveContext.js';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const { active, setActive } = useContext(ActiveContext);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <> 
            <a className={`${styles["sidecat"]}`}
                onClick={item.subNav && showSubnav}>
                {item.title} <i className={`bi bi-chevron-down ${styles['sideicon']}`}></i></a>
            <div>
                {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                        ? item.iconClosed
                        : null}
            </div>
           
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <ul className={`${styles["sideul"]}`} key={index}>
                            <li className={`${styles["sideitem"]}`} onClick={() => setActive(item.category.toString())}>                               
                               {item.title}                            
                            </li>    
                        </ul>
                    );
                })}
        </>
    );
};

export default SubMenu;
