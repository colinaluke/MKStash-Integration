import Navbar from '../../components/Navbar'
import SideBar from './SideBar.js'
import Footer from '../Footer.js'
import React, { useEffect, useState } from 'react'
import { ActiveContext } from "./ActiveContext.js"

const ShopSection = () => {
    const [ heartNotif, setHeartNotif ] = useState(0);
    const [ cartNotif, setCartNotif] = useState(0);
    const [ cartList, setCartList] = useState([]);


    useEffect(() => {
        console.log(heartNotif)
    }, [heartNotif])

    return (
        <ActiveContext.Provider value={{ heartNotif, setHeartNotif, cartNotif, setCartNotif, cartList, setCartList }}>
            <div>
                <Navbar />
                {console.log({ heartNotif })}
            
               <Footer />
            </div>
        </ActiveContext.Provider>
    );
}
export default ShopSection 