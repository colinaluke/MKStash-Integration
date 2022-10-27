import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import styles from '../../styles/navbar.module.css'

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const SubMenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false);

    const showSubnav = () => setSubnav(!subnav);

    return (
        <>
            <div className="">
                <a to={item.path} className={`${styles["sidecat"]}`}
                    onClick={item.subNav && showSubnav}>
                    <SidebarLabel>{item.title} <i className={`bi bi-chevron-down ${styles['sideicon']}`}></i></SidebarLabel></a>
                <div>
                    {item.subNav && subnav
                        ? item.iconOpened
                        : item.subNav
                            ? item.iconClosed
                            : null}
                </div>
            </div>
            {subnav &&
                item.subNav.map((item, index) => {
                    return (
                        <ul className={`${styles["sideul"]}`}>
                            <li to={item.path} key={index} className={`${styles["sideitem"]}`}>
                                <a>
                                    <SidebarLabel>{item.title}</SidebarLabel>
                                </a>
                            </li>
                        </ul>
                    );
                })}
        </>
    );
};

export default SubMenu;
