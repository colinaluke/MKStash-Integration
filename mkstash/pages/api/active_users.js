import activeUser from '../../lib/activeUser.json'

const handler = (req, res) => {

    // dummy data only contain year
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

    const startIndex = activeUser.findIndex(e => e.year === startingYear)
    const endIndexdata = activeUser.findIndex(e => e.year === endingYear)

    let sliced = []
    if (startIndex === -1) {
        sliced = activeUser.slice(-1, endIndexdata)
    } else if (endIndexdata === -1) {
        sliced = activeUser.slice(startIndex, endIndexdata != -1 ? endIndexdata + 1 : activeUser.length)
    } else {
        sliced = activeUser.slice(startIndex, endIndexdata + 1)
    }

    let data = {
        year: '',
        count: 0,
        data: []
    }
    sliced.forEach(slice => {
        data.year += slice.year + ' ',
        data.count += slice.count,
        data.data = [...data.data, ...slice.activeUsers]
    })

    let users = data.data.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        year: data.year,
        count: data.data.length,
        data: users,
        id: "active_users",
        title: "Active Users",
        color: "warning",
        icon: "bi bi-person"
    })
}

export default handler