import Head from 'next/head';
import Image from 'next/image';
import DL from '../styles/adminPDashboard.module.css'
import Link from 'next/link';
import React from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

// Chart JS imports and register
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

//Icon from React Icons
import {
    AiOutlineShoppingCart,
    AiOutlinePoweroff,
    AiOutlineSetting,
    AiOutlineDashboard,
    AiOutlineClockCircle,
    AiOutlineMail
} from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';
import { MdGpsFixed } from 'react-icons/md';
import { BsPiggyBank, BsBell, BsPatchCheck } from 'react-icons/bs';
import { IoChevronBackCircleOutline } from 'react-icons/io5';


export const siteTitle = 'MKStash - Admin Product Dashboard'

const linedata = {
    labels: ['1st', '2nd', '3rd', '4th', '5th', '6th', '7th'],
    datasets: [
        {
            label: 'Product Sales',
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

                                        <li className={ `list-group-item ${DL["li.list-group-item"]}` }>
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <AiOutlineDashboard /> Dashboard </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <RiAdminLine /> Administrator </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <AiOutlineClockCircle /> Orders </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <AiOutlineShoppingCart /> Products </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <BsPiggyBank /> Earning Status </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <AiOutlineSetting /> Settings </a>
                                            </Link>
                                        </li>
                                        <li class="list-group-item">
                                            <Link href='/' >
                                                <a className={DL.linkFormat}> <AiOutlinePoweroff /> Logout </a>
                                            </Link>
                                        </li>  
                                    </ul>
                                </div>
                        </div>
                        {/* end of Left Column */}

                        {/* Right Column */}
                        <div class="col-md-10 h-100">
                            <nav class="navbar bg-light p-0 m-0 ">
                                    <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions">Enable both scrolling & backdrop</button>

                                    <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
                                        <div class="offcanvas-header">
                                            <h5 class="offcanvas-title" id="offcanvasWithBothOptionsLabel">Backdrop with scrolling</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                        </div>
                                        <div class="offcanvas-body">
                                            <p>Try scrolling the rest of the page to see this option in action.</p>
                                        </div>
                                    </div>
                                    <div class="input-group">
                                        <span class="input-group-text" id="basic-addon1"> <a href ="/"> <IoChevronBackCircleOutline /> </a> </span>
                                        <input type="text" class="form-control" placeholder="Find project or clients"/>
                                        <span class="input-group-text" id="basic-addon1"> <a href="/"> <BsBell /> </a> </span>
                                        <span class="input-group-text" id="basic-addon1"> <a href="/">  <AiOutlineMail /> </a> </span>
                                        <span class="input-group-text" id="basic-addon1"> <a href="/"> <AiOutlineSetting /> </a>  </span>
                                    </div>
                            </nav>

                           
                            <div class="row p-4 border bg-light">
                                <div class="col-4 h-25">
                                     
                                    <div class="card text-bg-primary mb-3">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p> <span> 5390 </span> <MdGpsFixed /> </p> 
                                                    <span> ORDERS RECEIVED </span>
                                                </div>
                                                
                                                <div class="col-4">
                                                    <BsPatchCheck size={56} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card text-bg-primary mb-3">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p> <span> 2390 </span> <MdGpsFixed /> </p>
                                                    <span> TOTAL CHARGES </span>
                                                </div>

                                                <div class="col-4">
                                                    <BsPatchCheck size={56} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-4">
                                    <div class="card text-bg-primary mb-3">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-8">
                                                    <p> <span> $2947 </span> <MdGpsFixed /> </p>
                                                    <span> TOTAL EARNINGS </span>
                                                </div>

                                                <div class="col-4">
                                                    <BsPatchCheck size={56} />
                                                </div>
                                            </div>
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