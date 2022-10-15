import activeUser from '../../lib/activeUser.json'

const handler = (req, res) => {
    const { query: { currentPage, perPage }, method } = req

    if (method !== 'GET') {
        return res.status(200).json({
            "method": method,
            "msg": "Invalid method for this route."
        })
    }

    let data = activeUser.find(datum => datum.year === '2017')
    let users = data.activeUsers.slice((currentPage - 1) * perPage, currentPage * perPage)
    return res.status(200).json({
        year: data.year,
        count: data.activeUsers.length,
        data: users,
        id: "active_users",
        title: "Active Users",
        color: "warning",
        icon: "bi bi-person"
    })
}

export default handler