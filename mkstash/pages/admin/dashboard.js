import Layout from "../../components/admin/Layout";
import { useState, useRef, useEffect } from "react";
import LineGraph from '../../components/admin/LineChart'
import DataTable from "../../components/admin/Table";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

import useChart from "../../customHook/useChart";

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

    const lineRef = useRef(null)
    const pieRef = useRef(null)

    useChart(lineRef, {
        type: "line", //type of chart (line, pie, bar)
        data: data1,
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: "#ff0000",
                },
            },
            scales: {
                yAxis: {
                    beginAtZero: true,

                },
                xAxis: {
                    beginAtZero: true,
                    grid: {
                        display: false,
                    }
                }
            },
        },
    });

    useChart(pieRef, {
        type: "doughnut", //type of chart (line, pie, bar)
        data: data2,
        options: {
            legend: {
                display: true,
                labels: {
                    fontColor: "#ff0000",
                },
            },
            
        },
    });

    return (
        <Layout>
            <div className="container py-4">
                <div className="row mb-4">
                    <div className="col">
                        <div className="card text-white bg-primary bg-gradient mb-0">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Products Sold</p>
                                    <h3 className="card-text text-white">4</h3>
                                </div>
                                <div className="col-3">
                                    <span><i class="bi bi-bag-check fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-success bg-gradient mb-0">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Orders Received</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i class="bi bi-cart-check fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-warning bg-gradient mb-0">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Active Users</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i class="bi bi-person fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card text-white bg-danger bg-gradient mb-0">
                            <div className="card-body row">
                                <div className="col-9">
                                    <p className="card-title">Total Sales</p>
                                    <h3 className="card-text text-white">943</h3>
                                </div>
                                <div className="col-3">
                                    <span><i class="bi bi-cash-stack fs-1"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-8">
                        <div className="d-flex align-items-center justify-content-center text-white bg-white p-4 rounded" style={{ "height": "100%" }}>
                            {/* Placeholder */}
                            {/* <LineGraph /> */}
                            <canvas id="lineChart" ref={lineRef} width={256} height={124} />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="d-flex align-items-center justify-content-center bg-white text-white p-4 rounded" style={{ "height": "100%" }}>
                            {/* Placeholder */}
                            <canvas id="pieChart" ref={pieRef} width={256} height={124} />
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="d-flex align-items-center justify-content-center bg-white text-white rounded" style={{ "height": "100%", "width": "100%" }}>
                            {/* Placeholder */}
                            <DataTable></DataTable>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Dashboard;