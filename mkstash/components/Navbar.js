import Image from 'next/image'
import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Banner from './Banner'
import styles from '../styles/Navbar.module.css'

const NavBar = () => {
    const shop = useRef(null)
    const collection = useRef(null)
    const [heartNotif, setHeartNotif] = useState(0)
    const [cartNotif, setCartNotif] = useState(0)
    const [showBanner, setShowBanner] = useState(true)
    const [showSearch, setShowSearch] = useState(false)
    const [showShop, setShowShop] = useState(false)
    const [showCollection, setShowCollection] = useState(false)
    const shopData = {
        title: ["Men", "Women", "Accessories", "Shoes", "Bags"],
        data: [
            ["T-shirt", "Polo", "Pants", "Shorts", "Hoodies"],
            ["T-shirt", "Pants", "Shorts", "Hoodies"],
            ["Necklace", "Bracelet", "Earrings"],
            ["Sandals", "Sneakers"],
            ["Handbag"]
        ]
    }
    const collectionData = [
        "On Sale!", "New Arrival", "Best Seller", "Branded", "Surplus"
    ]
    const [text, setText] = useState('Lorem ipsum dolor sit BLACK FRIDAY SALE! 30% tempor incididunt.')
    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    const handleScroll = () => {
        console.log(window.scrollY)
        setClientWindowHeight(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const [windowWidth, setWindowWidth] = useState(0);
    const handleWinWidth = () => {
        console.log(window.innerWidth);
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        setWindowWidth(window.innerWidth)
    }, []);

    useEffect(() => {
        window.addEventListener("resize", handleWinWidth)
        return () => window.removeEventListener("resize", handleWinWidth);
    });

    useEffect(() => {
        if (!showShop) return;
        var initial = 0
        function handleClick(event) {
            if (initial++ && shop.current && !shop.current.contains(event.target)) {
                setShowShop(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showShop]);

    useEffect(() => {
        if (!showCollection) return;
        var initial = 0
        function handleClick(event) {
            if (initial++ && collection.current && !collection.current.contains(event.target)) {
                setShowCollection(false);
            }
        }
        window.addEventListener("click", handleClick);
        return () => window.removeEventListener("click", handleClick);
    }, [showCollection]);

    return (
        <div className={ styles.navContainer }>
            {showBanner && <Banner setShowBanner={setShowBanner} text={text} />}

            {(clientWindowHeight > 100 || windowWidth < 992) && (
                <div className={`${styles.navbarBody} bg-light` }>
                <nav  className={`${styles.navbar} navbar navbar-expand-lg navbar-light bg-light`}>
                        <a className={`navbar-brand ${styles.logo}`} href="/" style={{width: '150px'} }>
                            <div className={styles.logoContainer }>
                                <Image src="/images/MKStash.svg" objectFit="contain" layout="fill" />
                            </div>
                        </a>    
                    <button style={{position: 'absolute', left: '10px'}} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <ul className={`navbar-nav mr-auto collapse navbar-collapse ${styles.navbarNav}`} id="navbarNav">
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={styles.link}>Shop</a>
                                </Link>
                                <button onClick={() => setShowShop(e => !e)} className={`btn dropdown-toggle dropdown-toggle-split ${styles.btn}`} data-toggle="dropdown" />
                                {showShop && (
                                    <div ref={shop} className={`row justify-content-md-center text-center py-4 ${styles.shop}`}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    {shopData.title.map(x => <td>{x}</td>)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shopData.data.map((x) =>
                                                    <tr>
                                                        {x.map(item => <Link href="#"><td>{item}</td></Link>)}
                                                    </tr>)}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item dropdown">
                                <Link href="/">
                                    <a className={styles.link}>Collection</a>
                                </Link>
                                <button onClick={() => setShowCollection(e => !e)} className={`btn dropdown-toggle dropdown-toggle-split ${styles.btn}`} data-toggle="dropdown" />
                                {showCollection && (
                                    <div ref={collection} className={styles.collection}>
                                        <ul className="list-group list-group-vertical">
                                            {collectionData.map(x => <Link href="#"><li className="dropdown-item bg-transparent"> {x} </li></Link>)}
                                        </ul>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Contact Us </a>
                            </li>
                            <li className={`nav-item ${styles.account}`}>
                                <a className="nav-link" href="#"> Login </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#"> Create an account </a>
                            </li>
                        </ul>

                    <div className={`${styles.logListContainer}`}>
                        <ul className={`navbar-nav mr-auto ${styles.logList}`}>
                            <li className={`nav-item ${styles.icons}`}>
                                <div>
                                    {!showSearch && (<Image src="/images/search.svg" height={25} width={25} onClick={() => setShowSearch(true)} />)}
                                    {showSearch && (
                                        <div className={`input-group mb-3"  ${styles.searchContainer}`}>
                                            <div className="input-group-prepend">
                                                <button type="button" className={`btn btn-primary ${styles.hideBtn}`} onClick={() => setShowSearch(false)}>
                                                    <Image src="/images/arrow-right.svg" height={20} width={20} />
                                                </button>
                                            </div>

                                            <div className="input-group-prepend">
                                                <div className="form-outline">
                                                    <input type="search" placeholder="Search product here..." className={`${styles.search}`} />
                                                </div>
                                            </div>

                                            <div className="input-group-prepend">
                                                <button type="button" className={`${styles.searchBtn} btn btn-primary`}>
                                                    <Image src="/images/search-white.svg" height={20} width={20} onClick={() => setShowSearch(true)} />
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </li>
                            <li className={`nav-item ${styles.icons}`}>
                                <div>
                                    <Link href='/'><Image src="/images/heart.svg" height={25} width={25} className={styles.iconImage} /></Link>
                                    <span className={styles.notifBadge}> {heartNotif} </span>
                                </div>
                            </li>
                            <li className={`nav-item ${styles.icons}`}>
                                <div>
                                    <Link href='/'><Image src="/images/cart.svg" height={25} width={25} className={styles.iconImage} /></Link>
                                    <span className={styles.notifBadge}> {cartNotif} </span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>)}

            {clientWindowHeight <= 100 && windowWidth >= 992 && (
                <div className={`${styles.navbarExpandedBody} bg-light` }>
                <nav className={`${styles.navbarExpanded} navbar navbar-expand-lg navbar-light bg-light`}>
                    <div className="row" style={{width: '100%'}}>
                        <div className="col">
                                <button style={{ position: 'absolute', left: '10px' }} className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navExpandNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                            <ul className="navbar-nav mr-auto" id="navExpandNav">
                                <li className="nav-item px-1">
                                    <a className="nav-link" href="#"> Login </a>
                                </li>
                                <li className="nav-item px-1">
                                    <a className="nav-link" href="#"> Create an account </a>
                                </li>
                                <div className={styles.spacing2 }>
                                    <a className="navbar-brand px-5" href="/"><Image src="/images/MKStash.svg" height={50} width={130} /></a>
                                </div>
                                <li className={`nav-item ${styles.icons} px-1`}>
                                    <div>
                                        {!showSearch && (<Image src="/images/search.svg" height={25} width={25} onClick={() => setShowSearch(true)} />)}
                                        {showSearch && (
                                            <div className={`input-group mb-3"  ${styles.searchContainerExp}`}>
                                                <div className="input-group-prepend">
                                                    <button type="button" className={`btn btn-primary ${styles.hideBtn}`} onClick={() => setShowSearch(false)}>
                                                        <Image src="/images/arrow-right.svg" height={20} width={20} />
                                                    </button>
                                                </div>

                                                <div className="input-group-prepend">
                                                    <div className="form-outline">
                                                        <input type="search" placeholder="Search product here..." className={`form-control ${styles.search}`} />
                                                    </div>
                                                </div>

                                                <div className="input-group-prepend">
                                                    <button type="button" className={`${styles.searchBtn} btn btn-primary`}>
                                                        <Image src="/images/search-white.svg" height={20} width={20} onClick={() => setShowSearch(true)} />
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </li>
                                <li className={`nav-item ${styles.icons} px-1`}>
                                    <div>
                                        <Link href='/'><Image src="/images/heart.svg" height={25} width={25} className={styles.iconImage} /></Link>
                                        <span className={styles.notifBadge}> {heartNotif} </span>
                                    </div>
                                </li>
                                <li className={`nav-item ${styles.icons} px-1`}>
                                    <div>
                                        <Link href='/'><Image src="/images/cart.svg" height={25} width={25} className={styles.iconImage} /></Link>
                                        <span className={styles.notifBadge}> {cartNotif} </span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <hr/>
                        <ul className="navbar-nav mr-auto" style={{justifyContent: 'center'} }>
                            <li className="nav-item dropdown px-2">
                                <Link href="/">
                                    <a className={styles.link}>Shop</a>
                                </Link>
                                <button onClick={() => setShowShop(e => !e)} className={`btn dropdown-toggle dropdown-toggle-split ${styles.btn}`} data-toggle="dropdown" />
                                {showShop && (
                                    <div ref={shop} className={`row justify-content-md-center text-center py-4 ${styles.shop}`}>
                                        <table>
                                            <thead>
                                                <tr>
                                                    {shopData.title.map(x => <td>{x}</td>)}
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {shopData.data.map((x) =>
                                                    <tr>
                                                        {x.map(item => <Link href="#"><td>{item}</td></Link>)}
                                                    </tr>)}
                                            </tbody>
                                        </table>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item dropdown px-2">
                                <Link href="/">
                                    <a className={styles.link}>Collection</a>
                                </Link>
                                <button onClick={() => setShowCollection(e => !e)} className={`btn dropdown-toggle dropdown-toggle-split ${styles.btn}`} data-toggle="dropdown" />
                                {showCollection && (
                                    <div ref={collection} className={styles.collection}>
                                        <ul className="list-group list-group-vertical">
                                            {collectionData.map(x => <Link href="#"><li className="dropdown-item bg-transparent"> {x} </li></Link>)}
                                         </ul>
                                    </div>
                                )}
                            </li>
                            <li className="nav-item px-2">
                                <a className="nav-link" href="#"> Contact Us </a>
                            </li>
                        </ul>
                    </div>
                    </nav>
                </div>)}
        </div> 
    )
}

export default NavBar