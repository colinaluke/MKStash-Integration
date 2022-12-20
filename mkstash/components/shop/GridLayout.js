import productList from '../../lib/shopproducts.json'
import Image from 'next/image'
import { useEffect, useState, useContext } from 'react';
import styles from '../../styles/shop.module.css';

import { ActiveContext } from "./ActiveContext.js"

export default function GridLayout({ category, collection, search, sort, minPrice, maxPrice }) {

    const [products, setProducts] = useState([]);
   /* const { heartNotif, setHeartNotif } = useContext(ActiveContext);
    const { cartNotif, setCartNotif } = useContext(ActiveContext);
*/
    const [state, setState] = useState(true);
    const [counter, setCounter] = useState(0);

    function toggle() {

        setState(!state);
        if (state === true) {
            setCounter(counter + 1);

        } else {
            setCounter(counter - 1);

        }
    }
    useEffect(() => {

        var filteredProducts = productList;

        if (category) {
            filteredProducts = filteredProducts.filter(item => item.category == category)
        }

        if (collection.length > 0) {
            filteredProducts = filteredProducts.filter(item => collection.includes(item.collection))
        }

        if (search) {
            filteredProducts = filteredProducts.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
        }

        if (minPrice) {
            filteredProducts = filteredProducts.filter(item => parseInt(item.price) >= parseInt(minPrice))
        }

        if (maxPrice) {
            filteredProducts = filteredProducts.filter(item => parseInt(item.price) <= parseInt(maxPrice))
        }

        if (sort) {
            if (sort == "name") {
                filteredProducts = [...filteredProducts].sort((a, b) => a.name.localeCompare(b.name));
            }
            if (sort == "price") {
                filteredProducts = [...filteredProducts].sort((a, b) => parseInt(a.price) - parseInt(b.price));
            }
        }

        setProducts(filteredProducts);
        return;
        
    }, [category, collection, search, sort, minPrice, maxPrice])

    return (
        <div className={``}>
            Counter:
            {counter}
            <div className="row">
                {products.length === 0 ?
                (<div className="col"> <h6 className={`${styles['h6']}`}>Showing result 0 of 0</h6>
                    <div className={`${styles['noresult']}`}>
                        <h1 className={`${styles['h1']}`}>No results found.</h1>
                    </div>
                    </div>)
                : products && products.map((item, index) => {
                return (
                    <div className={`col ${styles['grid']}`} key={index}>
                        <div className={`card-group ${styles['grid']}`}>
                            <div className={`card ${styles["card"]}`}>
                                <div>
                                    <h5 className={`${styles['h5a']}`}>{item.cat}</h5>
                                </div>
                                <Image data-bs-toggle="modal" data-bs-target={`#${item.id}`}
                                    src={item.image}
                                    width={250}
                                    height={250}
                                />
                                <div className="card-body">
                                    <h5 className={`${styles['h5']} card-title`}>{item.name}</h5>
                                    <h6 className={`${styles['h6']} card-subtitle mb-2 text-muted`}>PHP {item.price}</h6>
                                    <div className={`${styles['gicon']}`}>
                                        <div className="Favorite" onClick={toggle} id="clicks">
                                            {state ? <span><i className="bi bi-heart"></i></span> : <span><i className="bi bi-heart-fill" style={{"color":"red"} }></i></span>}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal fade" id={`${item.id}`} tabIndex="-1" aria-labelledby={`for-${item.id}`} aria-hidden="true">
                                <div className="modal-dialog modal-dialog-centered">
                                    <div className={`${styles['modal']} modal-content`}>
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Product Details</h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <span><h5>{item.name}</h5>
                                                <b> Color: </b>{item.color} <br></br>
                                                <b>Design/Print:</b> {item.print} <br></br>
                                                <b>Material:</b> {item.textile} <br></br>
                                                <b>Description:</b> {item.description} <br></br>
                                                Item is <i>{item.col}</i>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    )
                })}
            </div>
        </div>
    )
}