import productList from '../../lib/shopproducts.json'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../../styles/shop.module.css';

export default function GridLayout({ category, collection, search, sort, minPrice, maxPrice}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category && collection.length > 0) {
            const catcol = productList.filter(item => item.category === category && collection.includes(item.collection))
            setProducts(catcol);
            if (search) {
                const catcolsearch = catcol.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                setProducts(catcolsearch);
                if (sort) {
                    sortBy(sort)
                    if (sort == 'none') {
                        setProducts(catcolsearch)
                        return
                    }
                    return
                }
                return
            }
            if (sort) {
                sortBy(sort)
                if (sort == 'none') {
                    setProducts(catcol)
                    return
                }
                return
            }
            return
        }

        if (category) {
            const cat = productList.filter(item => item.category == category)
            setProducts(cat);
            if (search) {
                const catsearch = cat.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                setProducts(catsearch);
                if (sort) {
                    sortBy(sort)
                    if (sort == 'none') {
                        setProducts(catsearch)
                        return
                    }
                    return
                }
                return
            }
            if (sort) {
                sortBy(sort)
                if (sort == 'none') {
                    setProducts(cat)
                    return
                }
                return
            }
            return
        }

        if (collection.length > 0) {
            const col = productList.filter(item => collection.includes(item.collection))
            setProducts(col);
            if (search) {
            const colsearch = col.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                setProducts(colsearch);
                if (sort) {
                    sortBy(sort)
                    if (sort == 'none') {
                        setProducts(colsearch)
                        return
                    }
                    return
                }
            return
            }
            if (sort) {
                sortBy(sort)
                if (sort == "none") {
                    setProducts(col);
                    return
                }
                return
            }
            return
        }

        if (search) {
            const searchedObjects = productList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setProducts(searchedObjects);
            if (category) {
                const seacat = searchedObjects.filter(item => item.category == category)
                setProducts(seacat);
                return
            }
            if (collection.length > 0) {
                const seacol = searchedObjects.filter(item => collection.includes(item.collection))
                setProducts(seacol);
                return
            }
            if (sort) {
                sortBy(sort)
                if (sort == 'none') {
                    setProducts(searchedObjects)
                    return
                }
                return
            }
            return
        }
        
        if (sort) {
            sortBy(sort)
            if (sort == "none") {
                setProducts(productList);
                return
            }
            return
        }

        if (minPrice && maxPrice) {
            const pricefilter = productList.filter(item => item.price < parseInt(maxPrice) && item.price > parseInt(minPrice))
            setProducts(pricefilter)
        }

        setProducts(productList);
    }, [category, collection, search, sort, minPrice, maxPrice])

    const sortBy = (sort) => {
        if (sort == "name") {
            const sortName = [...products].sort((a, b) => a.name.localeCompare(b.name));
            console.log(sortName)
            setProducts(sortName);
            return
        }
        if (sort == "price") {
            const sortPrice = [...products].sort((a, b) => parseInt(a.price) - parseInt(b.price));
            setProducts(sortPrice);
            return
        }
        return
    }

    return (
        <div className="">
            <div className="row">
                {products && products.map((item, index) => {
                    return (
                        <div className="col-3" key={index}>
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
                    )
                })}
            </div>
        </div>
    )
}