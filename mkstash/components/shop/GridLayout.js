import productList from '../../lib/shopproducts.json'
import Image from 'next/image'

export default function GridLayout(prop) {

    const filtered = productList.filter(item => item.category == prop.category)

    return (
        <>
            <div class="container">
                <div class="row">
                    {filtered.map((item) => {
                        return (
                            <>
                                <div class="col">
                                    <div class="card" style={{ width: "18rem" }}>
                                        <Image
                                            src={item.image}
                                            width={500}
                                            height={500}
                                        />
                                        <div class="card-body">
                                            <h5 class="card-title">{item.name}</h5>
                                            <h6 class="card-subtitle mb-2 text-muted">{item.price}</h6>
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