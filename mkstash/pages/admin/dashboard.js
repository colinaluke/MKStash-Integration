import Layout from '../../components/admin/Layout'
import { useState, useRef, useEffect } from 'react'
import DemoLine from '../../components/admin/LineGraph'
import DemoPie from '../../components/admin/PieChart'
import DataTable from '../../components/admin/Table'
import Card from '../../components/admin/Card'
import sales from '../../lib/sales.json'
import orders from '../../lib/orders.json'
import products from '../../lib/products.json'
import productsSold from '../../lib/productSold.json'
import  ordersReceived from '../../lib/ordersReceived.json'
import activeUsers from '../../lib/activeUser.json'

export const getServerSideProps = () => {

    let currentProductSold = productsSold.find(product => product.date === 'October 2017')
    currentProductSold = {
        ...currentProductSold,
        id: "products_sold",
        title: "Products Sold",
        color: "primary",
        icon: "bi bi-bag-check"
    }

    let currentOrdersReceived = ordersReceived.find(orders => orders.date === 'November 2017')
    currentOrdersReceived = {
        ...currentOrdersReceived,
        id: "orders_received",
        title: "Orders Received",
        color: "success",
        icon: "bi bi-cart-check"

    }

    let currentActiveUsers = activeUsers.find(datum => datum.year === '2017')
    currentActiveUsers = {
        ...currentActiveUsers,
        count: currentActiveUsers.activeUsers.length,
        id: "active_users",
        title: "Active Users",
        color: "warning",
        icon: "bi bi-person"
    }

    let currentTotalSales = ordersReceived
    currentTotalSales = {
        data: [...currentTotalSales],
        currentSales: `$ ${currentOrdersReceived.sales}`,
        id: "total_sales",
        title: "Total Sales",
        color: "danger",
        icon: "bi bi-cash-stack"
    }


    return {
        props: {
            currentProductSold,
            currentOrdersReceived,
            currentActiveUsers,
            currentTotalSales
        }
    }
}

const Dashboard = ({ currentProductSold, currentOrdersReceived, currentActiveUsers, currentTotalSales }) => {

    const [productSold, setProductSold] = useState(currentProductSold);
    const [ordersReceived, setOrdersReceived] = useState(currentOrdersReceived);
    const [activeUsers, setActiveUsers] = useState(currentActiveUsers);
    const [totalSales, setTotalSales] = useState(currentTotalSales);


    return (
        <Layout>
            <div className="container py-4">
                <div className="row mb-4">
                    <Card data={productSold}></Card>
                    <Card data={ordersReceived}></Card>
                    <Card data={activeUsers}></Card>
                    <Card data={totalSales}></Card>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-xl-8 col-lg-7 mb-4 mb-lg-0">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                            <DemoLine sales={sales}></DemoLine>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-5">
                        <div className="card text-black bg-light rounded px-0 shadow-lg h-100">
                            <DemoPie orders={orders}></DemoPie>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                            <DataTable products={products}></DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;