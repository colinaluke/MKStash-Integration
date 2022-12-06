import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/contact/Navigation.module.css";
import React, {useState, useEffect} from "react";

const Navigation = () => {

    const [showShop, setShowShop] = useState(false);
    const [showCollection, setShowCollection] = useState(false);
    const [showSearch, setShowSearch] = useState(false);
    const [isScrolled, setIsScrolled] = useState("");
    const [showMenu, setShowMenu] = useState(false);
    
    const handleScroll = () => {
        setIsScrolled(window.scrollY);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    });

    const handleShopMenu = (e) => {
        setShowShop(e => !e);
        setShowMenu(e => !e);
    }

    const handleColMenu = (e) => {
        setShowCollection(e => !e);
        setShowMenu(e => !e);
    }

    return(
        <div>
            {isScrolled <= 40 && (
                <div className={styles.container}>
                <div className={styles.contain}>
                    <div className={styles.item}>
                        <Link href="/"><p>Login</p></Link>
                        <Link href="/signup"><p>Create an account</p></Link>             
                    </div>
                    
                    <div className={styles.item}>
                        <Link href="/"><Image src="/images/MKstash.svg" width={125} height={75} style={{ "cursor": "pointer" }}/></Link>
                    </div>

                    <div className={styles.item}>
                        {showSearch && (
                                    <div className={styles.search}>
                                        <div className={styles.arrow}><i class="bi bi-arrow-right"></i></div>
                                        <input type="text" className="form-control" placeholder="Search product here.."></input>
                                        <div className={styles.searchico}><i class="bi bi-search" onClick={()=>setShowSearch(e => !e)}></i></div>
                                    </div>
                        )}
                        <div className={styles.icon}>
                            <i class="bi bi-search"  onClick={()=>setShowSearch(e => !e)}></i>
                        </div>
                        <div className={styles.icon}>
                            <i class="bi bi-heart"></i>
                            <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                        </div>
                        <div className={styles.icon}>
                            <i class="bi bi-cart"></i>
                            <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className={styles.item}>
                    <Link href="/shop"><p>Shop</p></Link><i class="bi bi-chevron-down" onClick={()=>setShowShop(e => !e)}></i>
                    
                    <p>Collection</p><i class="bi bi-chevron-down" onClick={()=>setShowCollection(e => !e)}></i>
                    <Link href="/contact_us"><p>Contact Us</p></Link>
                </div>
                {showShop && (
                            <div className={styles.successOverlay}>
                            <div className={styles.innerOverlay}>
                                <div className={styles.columns}>
                                    <ul>
                                        <li><b>Men</b></li>
                                        <li>T-shirt</li>
                                        <li>Polo</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>
                                        <li>Hoodies</li>
                                    </ul>
                                    <ul>
                                        <li><b>Women</b></li>
                                        <li>T-shirt</li>
                                        <li>Dress</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>
                                        <li>Hoodies</li>
                                    </ul>
                                    <ul>
                                        <li><b>Accessories</b></li>
                                        <li>Necklace</li>
                                        <li>Bracelets</li>
                                        <li>Earrings</li>
                                    </ul>
                                    <ul>
                                        <li><b>Shoes</b></li>
                                        <li>Sandals</li>
                                        <li>Sneakers</li>
                                    </ul>
                                    <ul>
                                        <li><b>Bags</b></li>
                                        <li>Handbags</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                            )
                    }
                    {showCollection && (
                            <div className={styles.successOverlay2}>
                            <div className={styles.innerOverlay}>
                                    <ul>
                                        <li>On Sale!</li>
                                        <li>New Arrival</li>
                                        <li>Best Seller</li>
                                        <li>Branded</li>
                                        <li>Surplus</li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                            )
                    }
                </div>
            )}

            
            {isScrolled > 40 && (
                <div className={styles.container2}>
                <div className={styles.contain2}>
                    <div className={styles.item}>
                        <Link href="/"><Image src="/images/MKstash.svg" width={125} height={75} style={{ "cursor": "pointer" }}/></Link>
                        <Link href="/shop"><p>Shop</p></Link><i class="bi bi-chevron-down" onClick={()=>setShowShop(e => !e)}></i>
                        <p>Collection</p><i class="bi bi-chevron-down" onClick={()=>setShowCollection(e => !e)}></i>
                        <Link href="/contact_us"><p>Contact Us</p></Link>          
                    </div>

                    <div className={styles.item}>
                        <Link href="/"><p>Login</p></Link>
                        <Link href="/signup"><p>Create an account</p></Link>   
                        {showSearch && (
                                    <div className={styles.search}>
                                        <div className={styles.arrow}><i class="bi bi-arrow-right"></i></div>
                                        <input type="text" className="form-control" placeholder="Search product here.."></input>
                                        <div className={styles.searchico}><i class="bi bi-search" onClick={()=>setShowSearch(e => !e)}></i></div>
                                    </div>
                        )}
                        <div className={styles.icon}>
                            <i class="bi bi-search"  onClick={()=>setShowSearch(e => !e)}></i>
                        </div>
                        <div className={styles.icon}>
                            <i class="bi bi-heart"></i>
                            <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                        </div>
                        <div className={styles.icon}>
                            <i class="bi bi-cart"></i>
                            <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                        </div>
                    </div>
                </div>
                <div className={styles.item}>
                </div>
                {showShop && (
                            <div className={styles.successOverlay}>
                            <div className={styles.innerOverlay}>
                                <div className={styles.columns}>
                                    <ul>
                                        <li><b>Men</b></li>
                                        <li>T-shirt</li>
                                        <li>Polo</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>
                                        <li>Hoodies</li>
                                    </ul>
                                    <ul>
                                        <li><b>Women</b></li>
                                        <li>T-shirt</li>
                                        <li>Dress</li>
                                        <li>Pants</li>
                                        <li>Shorts</li>
                                        <li>Hoodies</li>
                                    </ul>
                                    <ul>
                                        <li><b>Accessories</b></li>
                                        <li>Necklace</li>
                                        <li>Bracelets</li>
                                        <li>Earrings</li>
                                    </ul>
                                    <ul>
                                        <li><b>Shoes</b></li>
                                        <li>Sandals</li>
                                        <li>Sneakers</li>
                                    </ul>
                                    <ul>
                                        <li><b>Bags</b></li>
                                        <li>Handbags</li>
                                    </ul>
                                    </div>
                                </div>
                            </div>
                    )}
                    {showCollection && (
                            <div className={styles.successOverlay2}>
                            <div className={styles.innerOverlay}>
                                    <ul>
                                        <li>On Sale!</li>
                                        <li>New Arrival</li>
                                        <li>Best Seller</li>
                                        <li>Branded</li>
                                        <li>Surplus</li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                            )
                    }
                </div>
            )}
            <div className={styles.mobile}>
                <div className={styles.container3}>
                    <div className={styles.contain2}>
                        <div className={styles.item}>
                            <div className={styles.menu}>
                                <i class="bi bi-list" onClick={()=>setShowMenu(e => !e)}></i> 
                            </div>                           
                        </div>
                        <div className={styles.item}>
                            <Link href="/"><Image src="/images/MKstash.svg" width={110} height={70} style={{ "cursor": "pointer" }}/></Link>
                            {showSearch && (
                                        <div className={styles.search}>
                                            <div className={styles.arrow}><i class="bi bi-arrow-right"></i></div>
                                            <input type="text" className="form-control" placeholder="Search product here.."></input>
                                            <div className={styles.searchico}><i class="bi bi-search" onClick={()=>setShowSearch(e => !e)}></i></div>
                                        </div>
                            )}
                        </div>
                        <div className={styles.items}>
                            <div className={styles.icon}>
                                <i class="bi bi-search"  onClick={()=>setShowSearch(e => !e)}></i>
                            </div>
                            <div className={styles.icon}>
                                <i class="bi bi-heart"></i>
                                <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                            </div>
                            <div className={styles.icon}>
                                <i class="bi bi-cart"></i>
                                <span className={`badge rounded-pill bg-danger ${styles["notif"]}`}>0</span>
                            </div>
                        </div>
                    </div>
                </div>
                {showMenu && (
                    <div className={styles.sidebar}>
                        <ul>
                            <li onClick={handleShopMenu}>Shop</li>
                            <li onClick={handleColMenu}>Collection</li>
                            <li><Link href="/contact_us">Contact Us</Link></li>
                            <br/>
                            <li><Link href="/">Login</Link></li>
                            <li><Link href="/signup">Create an account</Link></li>
                        </ul>
                    </div>
                )}
                {showShop && (
                    <div className={styles.side}>
                        <div className={styles.menuarrow} onClick={handleShopMenu}><i class="bi bi-arrow-left"></i> Back to Menu</div>
                    <div className={styles.sidecol}>
                        <ul>
                            <li><b>Men</b></li>
                            <li>T-shirt</li>
                            <li>Polo</li>
                            <li>Pants</li>
                            <li>Shorts</li>
                            <li>Hoodies</li>
                            <br/>
                        </ul>
                        <ul>
                            <li><b>Women</b></li>
                            <li>T-shirt</li>
                            <li>Dress</li>
                            <li>Pants</li>
                            <li>Shorts</li>
                            <li>Hoodies</li>
                        </ul>
                        <ul>
                            <li><b>Accessories</b></li>
                            <li>Necklace</li>
                            <li>Bracelets</li>
                            <li>Earrings</li>
                        </ul>
                        <ul>
                            <li><b>Shoes</b></li>
                            <li>Sandals</li>
                            <li>Sneakers</li>
                        </ul>
                        <ul>
                            <li><b>Bags</b></li>
                            <li>Handbags</li>
                        </ul>
                    </div>
                    </div>
                )}
                    {showCollection && (
                        <div className={styles.side2}>
                            <div className={styles.menuarrow} onClick={handleColMenu}><i class="bi bi-arrow-left"></i> Back to Menu</div>
                            <div>
                                    <ul>
                                        <li>On Sale!</li>
                                        <li>New Arrival</li>
                                        <li>Best Seller</li>
                                        <li>Branded</li>
                                        <li>Surplus</li>
                                    </ul>
                                    <br/>
                                </div>
                            </div>
                            )
                    }
            </div>
        </div>
    );
}

export default Navigation;