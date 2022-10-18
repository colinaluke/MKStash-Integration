import productsSold from '../../lib/productSold.json'

const handler = (req, res) => {
    const { query: { currentPage, perPage }, method } = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    let data = productsSold.find(product => product.date === 'October 2017')
    let products = data.products.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        date: data.date,
        count: data.count,
        data: products,
        id: "products_sold",
        title: "Products Sold",
        color: "primary",
        icon: "bi bi-bag-check"
    })
}

export default handler