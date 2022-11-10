import productList from '../../lib/shopproducts.json'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import styles from '../../styles/navbar.module.css';

export default function GridLayout({ category, collection, search}) {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category && collection.length > 0) {
            const catcol = productList.filter(item => item.category === category && collection.includes(item.collection))
            setProducts(catcol);
            return
        }
        if (category) {
            const cat = productList.filter(item => item.category == category)
            setProducts(cat);
            if (search) {
                const searchedObjects = productList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
                setProducts(searchedObjects);
                return
            }
            return
        }
        if (collection.length > 0) {
            const col = productList.filter(item => collection.includes(item.collection))
            setProducts(col);
            if (search) {
            const searchedObjects = productList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setProducts(searchedObjects);
            return
        }
            return
        }
        if (search) {
            const searchedObjects = productList.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
            setProducts(searchedObjects);
            return
        }


        setProducts(productList);
    }, [category, collection, search])
 
    return (
        <>
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
        </>

    )
}