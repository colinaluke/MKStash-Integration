import ordersReceived from '../../lib/ordersReceived.json'

const handler = (req, res) => {
    const { query: { currentPage, perPage }, method } = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    let currentOrdersReceived = ordersReceived.find(orders => orders.date === 'November 2017')

    let allOrders = ordersReceived
    let data = {
        data: allOrders.slice((currentPage - 1) * perPage, currentPage * perPage),
        currentSales: `$ ${currentOrdersReceived.sales}`,
        count: allOrders.length,
        id: "total_sales",
        title: "Total Sales",
        color: "danger",
        icon: "bi bi-cash-stack"
    }

    return res.status(200).json(data)
}

export default handler