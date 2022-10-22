import styles from '../styles/Product.module.css'
import { useState, useEffect } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import Image from 'next/image'

const Products = () => {
    const headers = ["Newest", "Best Sellers", "On Sale", "All Products"]
    const [active, setActive] = useState('');
    const [products, setProducts] = useState([
        "prod1", "prod2", "prod3"
    ])
    const [display, setDisplay] = useState("")

    useEffect(() => {
        (active === '') ? setDisplay("Newest") : setDisplay(active)
        const e = document.getElementsByClassName("list-group-item")
        Array.from(e).map((x) => (x.id === active) ? x.classList.add("active") : x.classList.remove("active"))
    }, [active]);
    return (
        <div className={styles.container} id="container">
            <div>
                <h2>Our products</h2>
                <div className={ styles.menu }>
                    <ul className={`list-group list-group-horizontal justify-content-center`}>
                        {headers.map((header) => <button className={`list-group-item`} id={header} onClick={() => setActive(header)}> {header} </button>) }
                    </ul>
                </div>
            </div>

            <div>
                <Carousel 
                    infiniteLoop
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    renderArrowPrev={(onClickHandler, hasPrev, label) => {
                        return (
                            <div className={styles.btnContainer} style={{ left: '150px' }}>
                            <button
                                className={styles.btnStyle }
                                onClick={onClickHandler}
                                onKeyDown={onClickHandler}
                                value={label}
                                key={label}
                                tabIndex={0}
                            >
                                <Image src="/images/chevron-left.svg" objectFit="cover" layout="fill" />
                            </button>
                            </div>
                        );
                    }}
                    renderArrowNext={(onClickHandler, hasNext, label) => {
                        return (
                            <div className={styles.btnContainer} style={{ right: '150px' }}>
                                <button
                                    className={styles.btnStyle}
                                    onClick={onClickHandler}
                                    onKeyDown={onClickHandler}
                                    value={label}
                                    key={label}
                                    tabIndex={0}
                                >
                                    <Image src="/images/chevron-right.svg" objectFit="cover" layout="fill" />
                                </button>
                            </div>
                        );
                    }}>
                    {products.map((product) => (
                        <div className={styles.carouselContainer }>
                            <Image src={`/images/products/${display}/${product}.jpg`} objectFit="contain" layout="fill" alt={`${display} ${product}`}/>
                        </div>
                        ))}
                </Carousel>
            </div>
            
            

        </div>    
    )
}

export default Products