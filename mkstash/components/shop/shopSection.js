import Navbar from '../../components/Navbar'
import SideBar from './SideBar.js'
import Footer from '../Footer.js'
import React, { useEffect, useState } from 'react'
import { FaveContext } from "./FaveContext.js"

const ShopSection = () => {
    const [ heartNotif, setHeartNotif ] = useState(0);
    const [ cartNotif, setCartNotif] = useState(0);
    const [ cartList, setCartList] = useState([]);


    useEffect(() => {
        console.log(heartNotif)
    }, [heartNotif])

    return (
       
            <div>
                <Navbar />
            
               <Footer />
            </div>
    );
}
export default ShopSection 