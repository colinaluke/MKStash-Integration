import Head from 'next/head';
import Image from 'next/image';
import DL from '../styles/adminPDashboard.module.css'
import Link from 'next/link';
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    ArcElement
);

export const siteTitle = 'MKStash - Admin Product Dashboard'

const linedata = {
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

const doughnutdata = {
    labels: [
        'Red',
        'Green',
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

export default function adminProductDashboard() {
    return (

        <div className={`container-fluid-md  ${DL["div.container-fluid-md"]}` }> 
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Admin Product Dashboard"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
                {/*<div className={`container-fluid text-center ${DL["div.container-fluid-md"]}`}>*/}

            <div className={`card text-center`} style={{ height: '800px' }}> {/*height can be improved here*/}

                    {/* Left Column */}
                    <div class="row p-4 border bg-light card-body">
                        <div class="col-md-2">
                                <div class="card h-100">
                                    <div class="card-header">
                                        DTIF 2022
                                    </div>
                                        <ul className={"list-group list-group-flush"}>
                                        <li class="list-group-item">
                                    <Image
                                        src="/images/maine_coon.jpg"
                                        width={144}
                                        height={144}
                                        layout="responsive"
                                        alt="maine_coon"
                                        className={DL.borderImage}
                                            />
                                            <p class="h4">Maine Coon</p>
                                        </li>

                                        {/*<li class="list-group-item">Maine Coon</li>*/}
                                        <li className= "list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Dashboard </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Aadministrator </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Orders </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Products </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Earning Status </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Settings </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> Logout </a>
                                            </Link>
                                        </li>  
                                    </ul>
                                </div>
                        </div>
                        {/* end of Left Column */}

                        {/* Right Column */}
                        <div class="col-md-10 h-100">
                            <nav class="navbar bg-light">
                                    {/* add a back button or icon here*/}
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" class="form-control" placeholder="Find project or clients"/>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                            </nav>

                           
                            <div class="row p-4 border bg-light">
                                <div class="col-4 h-25">
                                    {/*<div class="p-4 border bg-light">Total Orders Received</div>*/}
                                    <div class="card text-bg-primary mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Orders Received</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card text-bg-primary mb-3" >
                                        <div class="card-body">
                                            <h5 class="card-title">Total Charges</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card text-bg-primary mb-3">
                                        <div class="card-body">
                                            <h5 class="card-title">Total Earnings</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-8">
                                    <div class="p-4 border bg-light">
                                        <Line
                                            data={linedata}
                                            width={400}
                                            height={'180rem'}
                                        />
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="p-4 border bg-light">
                                        <Doughnut
                                            data={doughnutdata}
                                            width={400}
                                            height={'180rem'}
                                        />
                                    </div>
                                </div>

                                <div class="col">
                                    <div class="p-4 mt-4 border bg-light">
                                        <nav class="navbar bg-light">
                                            <div class="container-fluid">
                                                <h1 class="navbar-brand" href="#">
                                                    Table format/user data</h1>

                                                {/* Dropdown */}
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Sort by list
                                                    </button>
                                                    <ul class="dropdown-menu">
                                                        <li><a class="dropdown-item" href="#">Action</a></li>
                                                        <li><a class="dropdown-item" href="#">Another action</a></li>
                                                        <li><a class="dropdown-item" href="#">Something else here</a></li>
                                                    </ul>
                                                </div>
                                                {/* end of Dropdown */}

                                            </div>
                                        </nav> 

                                        {/* Table */}
                                        <table class="table">
                                            <thead>
                                                <tr>
                                                    <th scope="col">Product</th>
                                                    <th scope="col">Customer</th>
                                                    <th scope="col">Location</th>
                                                    <th scope="col">Quantity</th>
                                                    <th scope="col">Status</th>
                                                    <th scope="col">Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {/* Map retrieved data from the db here */}
                                            </tbody>
                                        </table>
                                        {/* end Table */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* end Right Column */}
                    </div>
                </div>
                {/* end Container-fluid */}
        </div>
    );
}