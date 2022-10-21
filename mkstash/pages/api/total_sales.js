import ordersReceived from '../../lib/ordersReceived.json'

const handler = (req, res) => {

    // dummy data contains "month year"
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

    let allOrders = {
        date: `${startingPeriod} ${endingPeriod}`,
        count: sliced.length,
        sales: sliced.reduce((prev, cur) => (prev + cur.sales), 0),
        data: sliced.slice((currentPage - 1) * perPage, currentPage * perPage)
    }

    let data = {
        data: allOrders.data,
        currentSales: `$ ${allOrders.sales}`,
        count: allOrders.count,
        id: "total_sales",
        title: "Total Sales",
        color: "danger",
        icon: "bi bi-cash-stack"
    }

    return res.status(200).json(data)
}

export default handler