import ordersReceived from '../../lib/ordersReceived.json'

const handler = (req, res) => {

    // dummy data only contain "month year"
    const { query: {
        currentPage,
        perPage,
        startingDate,
        endingDate,
        startingMonth,
        endingMonth,
        startingYear,
        endingYear,
    }, method } = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    const startingPeriod = `${startingMonth} ${startingYear}`
    const endingPeriod = `${endingMonth} ${endingYear}`
    const startIndex = ordersReceived.findIndex(e => e.date === startingPeriod)
    const endIndexdata = ordersReceived.findIndex(e => e.date === endingPeriod)

    let sliced = []
    if (startIndex === -1) {
        sliced = ordersReceived.slice(-1, endIndexdata)
    } else if (endIndexdata === -1) {
        sliced = ordersReceived.slice(startIndex, endIndexdata != -1 ? endIndexdata + 1 : ordersReceived.length)
    } else {
        sliced = ordersReceived.slice(startIndex, endIndexdata + 1)
    }

    let data = {
        date: '',
        count: 0,
        sales: '',
        orders: []
    }
    sliced.forEach(slice => {
        data.date += slice.date + ' ',
        data.count += slice.count,
        data.sales += slice.sales,
        data.orders = [...data.orders, ...slice.orders]
    })

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