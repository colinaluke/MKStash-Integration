import React, { Component, useState } from 'react';
import styles from '../../styles/shop.module.css';

export default function Banner() {
    const [visible, setVisible] = useState(true);
    const removeElement = () => {
        setVisible((prev) => !prev);
    };
    return (
        <div>
            {visible && (
                <div className={`text-center ${styles["top"]}`}>
                    <div className="container">
                        Lorem ipsum dolor sit BLACK FRIDAY SALE! 30% tempor incididunt
                        <i onClick={removeElement} className={`bi bi-x-lg ${styles["xbutton"]}`}></i>
                    </div>
                </div>
            )}
        </div>
    );
}