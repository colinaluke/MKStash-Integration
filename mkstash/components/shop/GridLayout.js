import productList from '../../lib/shopproducts.json'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../../styles/shop.module.css';

export default function GridLayout({ category, collection, search, sort, minPrice, maxPrice }) {

    const [products, setProducts] = useState([]);

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
            <div className="row">
                {products.length === 0 ?
                    (<div className="col"> <h6 className={`${styles['h6']}`}>Showing result 0 of 0</h6>
                        <div className={`${styles['noresult']}`}>
                            <h1 className={`${styles['h1']}`}>No results found.</h1>
                        </div>
                        </div>)
                    : products && products.map((item, index) => {
                    return (
                        <div className="col" key={index}>
                            <div className = "card-group">
                                <div className={`card ${styles["card"]}`}>
                                    <Image
                                        src={item.image}
                                        width={250}
                                        height={250}
                                    />
                                    <div className="card-body">
                                        <h5 className={`${styles['h5']} card-title`}>{item.name}</h5>
                                        <h6 className={`${styles['h6']} card-subtitle mb-2 text-muted`}><i className="bi bi-tags-fill"></i>{item.price}</h6>
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