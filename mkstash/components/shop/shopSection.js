import Navbar from '../../components/Navbar'
import SideBar from './SideBar.js'
import Footer from '../Footer.js'
import React, { useEffect, useState } from 'react'
import { FaveContext } from "./FaveContext.js"

const ShopSection = () => {
    const [ heartNotif, setHeartNotif ] = useState(0);
    const [ cartNotif, setCartNotif] = useState(0);

    useEffect(() => {
        const heartNum = localStorage.getItem('heartNum')
        if (heartNum) {
            setHeartNotif(heartNum)
            return
        }
    }, [])


    return (
            <FaveContext.Provider value={{ heartNotif, setHeartNotif, cartNotif, setCartNotif } }>
                <div>
                    <Navbar />

                    <Footer />
                </div>
            </FaveContext.Provider>
    );
}
export default ShopSection 