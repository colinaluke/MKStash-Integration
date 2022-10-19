import Layout from '../../components/admin/Layout'
import { useState, useRef, useEffect } from 'react'
import DemoLine from '../../components/admin/LineGraph'
import DemoPie from '../../components/admin/DoughnutChart'
import DataTable from '../../components/admin/Table'
import Card from '../../components/admin/Card'
import sales from '../../lib/sales.json'
import orders from '../../lib/orders.json'
import  ordersReceived from '../../lib/ordersReceived.json'
import activeUsers from '../../lib/activeUser.json'
import Api from '../../services/api'

export const getServerSideProps = async () => {

    const productResponse = await Api().get('/products', { params: {currentPage: 1, perPage: 10} })

    const currentProductSold = await Api().get('/products_sold', { params: {currentPage: 1, perPage: 2} })
    
    const currentOrdersReceived = await Api().get('/orders_received', { params: {currentPage: 1, perPage: 2} })
    
    const currentActiveUsers = await Api().get('/active_users', { params: {currentPage: 1, perPage: 2} })
    
    const currentTotalSales = await Api().get('/total_sales', { params: {currentPage: 1, perPage: 2} })

    return {
        props: {
            currentProductSold: currentProductSold.data,
            currentOrdersReceived: currentOrdersReceived.data,
            currentActiveUsers: currentActiveUsers.data,
            currentTotalSales: currentTotalSales.data,
            products: productResponse.data
        }
    }
}

const Dashboard = ({ 
    currentProductSold, 
    currentOrdersReceived, 
    currentActiveUsers, 
    currentTotalSales,
    products 
}) => {

    const [productSold, setProductSold] = useState(currentProductSold);
    const [ordersReceived, setOrdersReceived] = useState(currentOrdersReceived);
    const [activeUsers, setActiveUsers] = useState(currentActiveUsers);
    const [totalSales, setTotalSales] = useState(currentTotalSales);

    return (
        <Layout>
            <div className="container py-4">
                <div className="row mb-4">
                    <Card data={productSold} total={productSold.count}></Card>
                    <Card data={ordersReceived} total={ordersReceived.count}></Card>
                    <Card data={activeUsers} total={activeUsers.count}></Card>
                    <Card data={totalSales} total={totalSales.count}></Card>
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