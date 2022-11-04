import productList from '../../lib/shopproducts.json'
import Image from 'next/image'

import styles from '../../styles/navbar.module.css';

export default function GridLayout(prop) {

    const filtered = productList.filter(item => item.category == prop.category)

    return (
        <>
            <div className="">
                <div className="row">
                    {filtered.map((item) => {
                        return (
                            <>
                                <div className="col">
                                    <div className={`card ${styles["card"]}`} style={{ width: "12rem" }}>
                                        <Image
                                            src={item.image}
                                            width={250}
                                            height={250}
                                        />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted"><i class="bi bi-tags-fill"></i>{item.price}</h6>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })}
                </div>
            </div>
        </>

    )
}