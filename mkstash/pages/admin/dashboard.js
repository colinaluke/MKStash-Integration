import Layout from '../../components/admin/Layout'
import { useState, useEffect } from 'react'
import DemoLine from '../../components/admin/LineGraph'
import DemoPie from '../../components/admin/DoughnutChart'
import DataTable from '../../components/admin/Table'
import Card from '../../components/admin/Card'
import Api from '../../services/api'
import CalendarPicker from '../../components/admin/CalendarPicker'


const dflt = {
    params: {
        currentPage: 1, perPage: 2,
        startingDate: 1,
        endingDate: 31,
        startingMonth: 'October',
        endingMonth: 'November',
        startingYear: 2017,
        endingYear: 2017
    }
}
export const getServerSideProps = async () => {


    // table
    const productResponse = await Api().get('/products', { params: { currentPage: 1, perPage: 10 } })

    // card 1
    const productSoldResponse = await Api().get('/products_sold', dflt)

    // card 2
    const ordersReceivedResponse = await Api().get('/orders_received', dflt)

    // card 3
    const activeUsersResponse = await Api().get('/active_users', dflt)

    // card 4
    const totalSalesResponse = await Api().get('/total_sales', dflt)

    // doughnut
    const ordersStatsResponse = await Api().get('/orders_stats', {
        params: {
            startingDate: 20,
            endingDate: 20,
            startingMonth: 'October',
            endingMonth: 'November',
            startingYear: 2017,
            endingYear: 2017
        }
    })

    // line
    const salesStatsResponse = await Api().get('/sales_stats', {
        params: {
            startingDate: 20,
            endingDate: 20,
            startingMonth: 'January',
            endingMonth: 'December',
            startingYear: 2010,
            endingYear: 2017
        }
    })

    return {
        props: {
            currentProductSold: productSoldResponse.data,
            currentOrdersReceived: ordersReceivedResponse.data,
            currentActiveUsers: activeUsersResponse.data,
            currentTotalSales: totalSalesResponse.data,
            products: productResponse.data,
            currentOrdersStats: ordersStatsResponse.data,
            currentsalesStats: salesStatsResponse.data
        }
    }
}

const Dashboard = ({
    currentProductSold,
    currentOrdersReceived,
    currentActiveUsers,
    currentTotalSales,
    currentOrdersStats,
    currentsalesStats,
    products
}) => {

    const [productSold, setProductSold] = useState(currentProductSold);
    const [ordersReceived, setOrdersReceived] = useState(currentOrdersReceived);
    const [activeUsers, setActiveUsers] = useState(currentActiveUsers);
    const [totalSales, setTotalSales] = useState(currentTotalSales);
    const [ordersStats, setOrdersStats] = useState(currentOrdersStats);
    const [salesStats, setSalesStats] = useState(currentsalesStats);
    const [cardParams, setCardParams] = useState({
        currentPage: 1, perPage: 2,
        startingDate: 1,
        endingDate: 31,
        startingMonth: 'October',
        endingMonth: 'November',
        startingYear: 2017,
        endingYear: 2017
    })

    const handleDateChangeForCards = async (values) => {
        // default
        if (values === null) {
            const res = await Api().get('/products_sold', dflt)
            setProductSold(res.data)

            const res1 = await Api().get('/orders_received', dflt)
            setOrdersReceived(res1.data)

            const res2 = await Api().get('/active_users', dflt)
            setActiveUsers(res2.data)

            const res3 = await Api().get('/total_sales', dflt)
            setTotalSales(res3.data)

            setCardParams(dflt.params)
            return
        }

        const { dates, months, years } = values
        const params = {
            currentPage: 1, perPage: 2,
            startingDate: dates[0],
            endingDate: dates[1],
            startingMonth: months[0],
            endingMonth: months[1],
            startingYear: years[0],
            endingYear: years[1]
        }

        setCardParams(params)

        // update card 1
        const res = await Api().get('/products_sold', { params })
        setProductSold(res.data)

        // update card 2
        const res1 = await Api().get('/orders_received', { params })
        setOrdersReceived(res1.data)


        // update card 3
        const res2 = await Api().get('/active_users', { params })
        setActiveUsers(res2.data)

        // update card 4
        const res3 = await Api().get('/total_sales', { params })
        setTotalSales(res3.data)

    }

    return (
        <Layout>
            <div className="container py-4">
                <div className="card p-3 bg-primary bg-gradient mb-4 shadow">
                    <div className="row mb-3">
                        <div className="col d-flex justify-content-end">
                            <CalendarPicker handleDateChange={handleDateChangeForCards}></CalendarPicker>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-6 col-xl-3">
                            {/* October 2017 to December 2017 only, per the dummy data */}
                            <Card data={productSold} total={productSold.count} cardParams={cardParams}></Card>
                        </div>
                        <div className="col-6 col-xl-3">
                            {/* October 2017 to December 2017 only, per the dummy data */}
                            <Card data={ordersReceived} total={ordersReceived.count} cardParams={cardParams}></Card>
                        </div>
                        <div className="col-6 col-xl-3">
                            {/* 2015, 2016, 2017 only, per the dummy data */}
                            <Card data={activeUsers} total={activeUsers.count} cardParams={cardParams}></Card>
                        </div>
                        <div className="col-6 col-xl-3">
                            {/* October 2017 to December 2017 only, per the dummy data */}
                            <Card data={totalSales} total={totalSales.count} cardParams={cardParams}></Card>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-xl-8 col-lg-7 mb-4 mb-lg-0">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                            <DemoLine sales={salesStats} setSalesStats={setSalesStats}></DemoLine>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-5">
                        <div className="card text-black bg-light rounded px-0 shadow-lg h-100">
                            <DemoPie orders={ordersStats} setOrdersStats={setOrdersStats}></DemoPie>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                            <DataTable
                                products={products.data}
                                total={products.total}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;