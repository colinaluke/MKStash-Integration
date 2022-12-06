import products from '../../lib/products.json'

const handler = (req, res) => {
    const { query: {currentPage, perPage}, method }  = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    const data = products.products.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        data: data,
        total: products.total
    })
}

export default handler