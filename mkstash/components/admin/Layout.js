import Header from "./Header";
import LeftNavigationMenu from "./leftNavigationMenu";
import styles from '../../styles/Layout.module.css';
import { useState, useEffect } from "react";
import { THEMES } from '../../utils/colors';
import ThemeContext from "../../utils/ThemeContext";

const Layout = ({ children }) => {

    const [leftNavBarMustPersist, setLeftNavBarMustPersist] = useState(true);

    const handleLeftNavigation = () => {
        const sideMenu = document.getElementById('side-menu')
        const pgContent = document.getElementById('pg-content')
        const nav = document.getElementById('nav')

        const width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

        // if small screen
        if (width <= 768) {
            pgContent.style.marginLeft = '0px'
            if (sideMenu.style.width !== '0px') {
                nav.style.marginLeft = '0px'
                sideMenu.style.width = '0px'
                sideMenu.style.zIndex = '0'
            } else {
                sideMenu.style.width = '250px'
                sideMenu.style.zIndex = '10000'
            }
            return
        }


        if (sideMenu.style.width !== '0px') {
            sideMenu.style.width = '0px'
            pgContent.style.marginLeft = '0px'
            nav.style.marginLeft = '0px'
            setLeftNavBarMustPersist(false)
        } else {
            setLeftNavBarMustPersist(true)

            sideMenu.style.width = '250px'
            pgContent.style.marginLeft = '250px'
            nav.style.marginLeft = '250px'
        }
    }

    const [theme, setTheme] = useState('velvet')

    useEffect(() => {
        const chosenTheme = localStorage.getItem('theme')
        if (!chosenTheme) {
            setTheme('velvet')
            THEMES['velvet']()
            return
        }
        setTheme(chosenTheme)
        THEMES[chosenTheme]()
    })

    const selectTheme = (theme) => {
        THEMES[theme]()
        setTheme(theme)
    }



    return (
        <ThemeContext.Provider value={{theme, selectTheme}}>
            <div>
                <LeftNavigationMenu leftNavBarMustPersist={leftNavBarMustPersist} handleLeftNavigation={handleLeftNavigation}></LeftNavigationMenu>
                <div id="pg-content" className={`${styles['pg-content']} relative`} style={{ "marginLeft": leftNavBarMustPersist ? "250px" : "0px" }}>
                    <Header handleLeftNavigation={handleLeftNavigation} leftNavBarMustPersist={leftNavBarMustPersist}></Header>
                    <div className="mt-4 py-4">
                        {children}
                    </div>
                </div>
            </div>
        </ThemeContext.Provider>
    );
}

export default Layout;