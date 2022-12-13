import Header from "./Header";
import LeftNavigationMenu from "./leftNavigationMenu";
import styles from '../../styles/Layout.module.css';
import { useState, useEffect } from "react";
import { THEMES } from '../../utils/colors';
import ThemeContext from "../../utils/ThemeContext";
import Head from 'next/head';

const Layout = ({ children }) => {

    const [leftNavBarMustPersist, setLeftNavBarMustPersist] = useState(true);

    const handleLeftNavigation = () => {
        const sideMenu = document.getElementById('side-menu')

        if (sideMenu.style.width !== '0px') {
            sideMenu.style.marginTop = '0px'
            sideMenu.style.width = '0px'
            setLeftNavBarMustPersist(false)
        } else {
            setLeftNavBarMustPersist(true)
            sideMenu.style.marginTop = '60px'
            sideMenu.style.width = '250px'
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
                <Head>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                </Head>
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