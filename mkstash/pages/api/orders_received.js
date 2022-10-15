import ordersReceived from '../../lib/ordersReceived.json'

const handler = (req, res) => {
    const { query: { currentPage, perPage }, method } = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    let data = ordersReceived.find(orders => orders.date === 'November 2017')
    let orders = data.orders.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        date: data.date,
        count: data.count,
        sales: data.sales,
        data: orders,
        id: "orders_received",
        title: "Orders Received",
        color: "success",
        icon: "bi bi-cart-check"
    })
}

export default handler