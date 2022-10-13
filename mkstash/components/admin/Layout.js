import Header from "./Header";
import LeftNavigationMenu from "./leftNavigationMenu";
import styles from '../../styles/Layout.module.css';
import { useEffect, useState } from "react";

const Layout = ({ children }) => {

    const [leftNavBarMustPersist, setLeftNavBarMustPersist] = useState(true);

    useEffect(() => {
        setLeftNavBarMustPersist(localStorage.getItem('leftNavBarMustPersist'))
    }, [])

    const handleLeftNavigation = () => {
        const sideMenu = document.getElementById('side-menu')
        const pgContent = document.getElementById('pg-content')
        const nav = document.getElementById('nav')
        if (sideMenu.style.width !== '0px') {
            sideMenu.style.width = '0px'
            pgContent.style.marginLeft = '0px'
            nav.style.marginLeft = '0px'
            localStorage.setItem('leftNavBarMustPersist', false)
        } else {
            localStorage.setItem('leftNavBarMustPersist', true)

            sideMenu.style.width = '250px'
            pgContent.style.marginLeft = '250px'
            nav.style.marginLeft = '250px'
        }
    }
    return (
        <div>
            <LeftNavigationMenu leftNavBarMustPersist={leftNavBarMustPersist}></LeftNavigationMenu>
            <div id="pg-content" className={`${styles['pg-content']} relative`} style={{"marginLeft": leftNavBarMustPersist ? "250px" : "0px"}}>
                <Header handleLeftNavigation={handleLeftNavigation} leftNavBarMustPersist={leftNavBarMustPersist}></Header>
                <div className="mt-4 py-4">
                    {children}
                </div>
            </div>
        </div>
    );
}

export default Layout;