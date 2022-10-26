import productsSold from '../../lib/productSold.json'

const handler = (req, res) => {

    // products_sold dummy data only contain "month year"
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
    const startIndex = productsSold.findIndex(e => e.date === startingPeriod)
    const endIndexdata = productsSold.findIndex(e => e.date === endingPeriod)
    
    let sliced = []
    if (startIndex === -1) {
        sliced = productsSold.slice(-1, endIndexdata)
    } else if (endIndexdata === -1) {
        sliced = productsSold.slice(startIndex, endIndexdata != -1 ? endIndexdata + 1 : productsSold.length)
    } else {
        sliced = productsSold.slice(startIndex, endIndexdata + 1)
    }

    let data = {
        date: '',
        count: 0,
        products: []
    }
    sliced.forEach(slice => {
        data.date += slice.date + ' ',
        data.count += slice.count,
        data.products = [...data.products, ...slice.products]
    })
    
    let products = data.products.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        date: data.date,
        count: data.count,
        data: products,
        id: "products_sold",
        title: "Products Sold",
        color: "secondary",
        icon: "bi bi-bag-check"
    })
}

export default handler