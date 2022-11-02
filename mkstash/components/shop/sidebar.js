import React, { useState, useMemo } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { SidebarData } from './SidebarData';
import SubMenu from './SubMenu';
import GridLayout from './GridLayout.js'
import { ActiveContext } from "./ActiveContext.js"


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
    const providerValue = useMemo(() => ({ active, setActive }), [active, setActive]);

    return (
        <>
            <ActiveContext.Provider value={{ providerValue }}>
                <SidebarNav>
                    {SidebarData.map((item, index) => {
                        return <SubMenu item={item} key={index} />;
                    })}
                </SidebarNav>
                <div>
                    <div class="mx-5">
                       <h1>display here {active}</h1>

                        {active === "menshirt" && <GridLayout category="menshirt" />}
                       
                    </div>
                </div>
            </ActiveContext.Provider>
        </>
    );
};

export default Sidebar;
