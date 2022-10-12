import Layout from "../../components/admin/Layout";
import { useState, useRef, useEffect } from "react";
import DemoLine from "../../components/admin/LineGraph";
import DemoPie from "../../components/admin/PieChart";
import DataTable from "../../components/admin/Table";

const data1 = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            fill: false,
            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const data2 = {
    labels: [
        'Red',
        'Blue',
        'Yellow'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56'
        ]
    }]
};

const Dashboard = () => {

    return (
        <Layout>
            <div className="container py-4">
                <div className="row mb-4">
                    <div className="col">
                        <div className="card text-white bg-primary bg-gradient mb-0 shadow">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Products Sold</p>
                                    <h3 className="card-text text-white">4</h3>
                                </div>
                                <div className="col-3">
                                    <span><i className="bi bi-bag-check fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-success bg-gradient mb-0 shadow">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Orders Received</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i className="bi bi-cart-check fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-warning bg-gradient mb-0 shadow">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Active Users</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i className="bi bi-person fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-danger bg-gradient mb-0 shadow">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Total Sales</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i className="bi bi-cash-stack fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-12 col-xl-8 col-lg-7 mb-4 mb-lg-0">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                            <DemoLine></DemoLine>
                        </div>
                    </div>
                    <div className="col-12 col-xl-4 col-lg-5">
                        <div className="card text-black bg-light rounded px-0 shadow-lg h-100">
                            <DemoPie></DemoPie>
                        </div>

                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="card text-black bg-light rounded px-0 h-100 shadow-lg">
                        <DataTable></DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;