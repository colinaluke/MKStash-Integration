import React, { useState, useContext, useEffect} from 'react';
import styles from '../../styles/shop.module.css'
import activeContext from './SideBar.js';
import { ActiveContext } from './ActiveContext.js';


const SubMenu = ({item}) => {
    const [subnav, setSubnav] = useState(false);
    const showSubnav = () => setSubnav(!subnav);

    const { category, setCategory } = useContext(ActiveContext);
    /*useEffect(() => {
        window.addEventListener('click', (event) => {
            event.target.style.color = 'salmon';
        });
    }, []);*/
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
                            <li className={`${styles["sideitem"]}`} onClick={() => setCategory(item.category.toString())}>                               
                               {item.title}                            
                            </li>    
                        </ul>
                    );
                })}
        </>
    );
};

export default SubMenu;
