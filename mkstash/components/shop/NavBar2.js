import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'

const NavBar2 = () => {
    const [showShop, setShowShop] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [scroll, setScroll] = useState("");

    const handleScroll = () => {
        setScroll(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <div>
            {scroll <= 40 && (
                <div className="container-flex">
                    <div classNamr = "container">
                         <div className = "row">
                            <div className = "col">
                                <Link href="/"><p>Login</p></Link>
                                <Link href="/"><p>Create an account</p></Link>
                            </div>
                            <div className="col">
                                <Link href="/"><Image src="/images/MKStash.svg" height={38} width={135}></Image></Link>
                            </div>
                            <div className="col">
                                3
                            </div>
                        </div>
                    </div>
                    <hr />
                </div>
             )}
        </div>
    );
}
export default NavBar2;
