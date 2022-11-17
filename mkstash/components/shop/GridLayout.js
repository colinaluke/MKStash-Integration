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
        <div className={`${styles['grid']}`}>
            <div className="row">
                {products.length === 0 ?
                    (<div> <h6>Showing result 0 of 0</h6>
                    <div className="text-center position-absolute top-50 start-50 translate-middle">
                        <h1>No results found.</h1>
                        </div>
                        </div>)
                    : products && products.map((item, index) => {
                    return (
                        <div className="col-3" key={index}>
                            <div>
                                <div className={`card ${styles["card"]}`} style={{ width: "12rem" }}>
                                    <Image
                                        src={item.image}
                                        width={250}
                                        height={250}
                                    />
                                    <div className="card-body">
                                        <h5 className="card-title">{item.name}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted"><i className="bi bi-tags-fill"></i>{item.price}</h6>
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