import NavBar from '../../components/shop/navbar';
import ShopSection from '../../components/shop/shopSection';
import React, { useState } from 'react'
import styles from '../../styles/navbar.module.css';


const Shop = () => {
        const [visible, setVisible] = useState(true);
        const removeElement = () => {
            setVisible((prev) => !prev);
        };
 
    return (
        <div>
            <div>
                {visible && (
                    <div className={`text-center ${styles["top"]}`}>
                            Lorem ipsum dolor sit BLACK FRIDAY SALE! 30% tempor incididunt
                        <i onClick={removeElement} className={`bi bi-x-lg ${styles["xbutton"]}` }></i>
                    </div>
                )}
            </div>
            <NavBar />
            <ShopSection />
        </div>
        );
}

export default Shop;
