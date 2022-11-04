import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import GridLayout from './GridLayout.js'
import Collection from './Collection.js'
import Search from './Search.js';
import Banner from './Banner.js';
import { ActiveContext } from "./ActiveContext.js"
import styles from '../../styles/navbar.module.css'

const SidebarNav = styled.nav`
  background: #15171c;
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({ sidebar }) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 10;
`;

const Sidebar = () => {
    const [active, setActive] = useState('');
    const providerValue = useMemo(() => ({active, setActive}), [active, setActive]);

    return (
        <>           
            <div>
                <div className={`row`}>                  
                    <ActiveContext.Provider value={providerValue}>
                        <div className={`${styles["shopcol"]}`}>
                            <Search />
                                <SidebarNav>
                                    {SidebarData.map((item, id) => {
                                        return <SubMenu item={item} key={id} />;
                                    })}
                            </SidebarNav>
                            <Collection />
                           
                        </div>
                            <div className="col">
                                {active === "menpants" && <GridLayout category="menpants" />}
                                {active === "menshirt" && <GridLayout category="menshirt" />}
                                {active === "menpolo" && <GridLayout category="menpolo" />}
                                {active === "menshorts" && <GridLayout category="menshorts" />}
                                {active === "menhoodies" && <GridLayout category="menhoodies" />} 
                            </div>
                    </ActiveContext.Provider>
                </div>
            </div>
        </>
    );
};

export default Sidebar;
