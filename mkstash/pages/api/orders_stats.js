import orders from '../../lib/orders.json'

const MONTHS_VALUE = {
    "January": 0,
    "February": 1,
    "March": 2,
    "April": 3,
    "May": 4,
    "June": 5,
    "July": 6,
    "August": 7,
    "September": 8,
    "October": 9,
    "November": 10,
    "December": 11
}

const handler = (req, res) => {

    // the dummy data only has 2016 and 2017
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

    const tempStats = []

    // get the periods within startingYear and endingYear
    const periods = orders.filter(order => parseInt(order.year) >= parseInt(startingYear) && parseInt(order.year) <= parseInt(endingYear))
    periods.forEach(period => {
        Object.keys(period.stats).forEach(key => {

            //     if year is same with startingYear and endingYear
            //      year === startingYear and year === endingYear
            //      get only months in-between
            //        months >= startingMonth and months <= endingMonth
            if (parseInt(period.year) === parseInt(startingYear) && 
                parseInt(period.year) === parseInt(endingYear)) {
                if (MONTHS_VALUE[key] >= MONTHS_VALUE[startingMonth] &&
                    MONTHS_VALUE[key] <= MONTHS_VALUE[endingMonth]) {
                    tempStats.push(period.stats[key])
                }
                return
            }

            //      if year is same with startingYear
            //       year === startingYear
            //         get only month >= startingMonth
            if (parseInt(period.year) === parseInt(startingYear)) {
                if (MONTHS_VALUE[key] >= MONTHS_VALUE[startingMonth]) {
                    tempStats.push(period.stats[key])
                }
                return
            }

            //      if year is greater than startingYear but less than endingYear
            //      year > startingyear
            //          get all months
            if (parseInt(period.year) > parseInt(startingYear) &&
                parseInt(period.year) < parseInt(endingYear)) {
                tempStats.push(period.stats[key])
                return
            }

            //      if year is same with endingYear
            //      year === endingYear
            //          get only month <= endingMonth
            if (parseInt(period.year) === parseInt(endingYear)) {
                if (MONTHS_VALUE[key] <= MONTHS_VALUE[endingMonth]) {
                    tempStats.push(period.stats[key])
                }
                return
            }
        })
    })

    const data = tempStats.reduce((prev, cur) => {
        prev[0].value += cur[0].value
        prev[1].value += cur[1].value
        prev[2].value += cur[2].value
        return prev

    }, [{'type': 'Orders', value: 0}, {'type': 'Pending', value: 0}, {'type': 'Delivered', value: 0}])

    return res.status(200).json({
        data
    })
}

export default handler