import sales from '../../lib/sales.json'

const handler = (req, res) => {
    
    // the dummy data only has "January 2010" to "December 2017"
    // the dummy data used does not contain dates, thus,
    // `dates` in this context is not useful
    const { query: {
        startingDate,
        endingDate,
        startingMonth,
        endingMonth,
        startingYear,
        endingYear
    }, method } = req


    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    const startingPeriod = `${startingMonth} ${startingYear}`
    const endingPeriod = `${endingMonth} ${endingYear}`

    const startIndex = sales.findIndex(sale => sale.Date === startingPeriod)
    const endIndex = sales.findIndex(sale => sale.Date === endingPeriod)

    let data = []
    if (startIndex === -1) {
        data = sales.slice(-1, endIndex)
    } else if (endIndex === -1) {
        data = sales.slice(startIndex, endIndex != -1 ? endIndex + 1 : sales.length)
    } else {
        data = sales.slice(startIndex, endIndex + 1)
    }

    return res.status(200).json({data})
}

export default handler