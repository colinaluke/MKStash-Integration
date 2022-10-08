import Head from 'next/head';
import Image from 'next/image';
import DL from '../styles/adminPDashboard.module.css'
import Link from 'next/link';

export const siteTitle = 'MKStash - Admin Product Dashboard'

export default function adminProductDashboard({ children, home }) {
    return (
        /* <div className={ `container ${DL.container}` } >*/
         <div className={ `container-fluid` } >

            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Admin Product Dashboard"
                />
                <meta name="og:title" content={siteTitle} />
            </Head>
           
            <main>
                <div class={`container-fluid text-center`}>

                    {/* Left Column */}
                    <div class="row p-4 border bg-light">
                        <div class="col">
                            <nav class="navbar bg-light">
                                <div class="container-fluid">
                                    <a class="navbar-brand" href="#">DTIF 2022</a>
                                </div>
                            </nav>  
                            <div class="p-4 border bg-light">
                                <Image
                                    src="/images/maine_coon.jpg"
                                    width={144}
                                    height={144}
                                    alt="maine_coon"
                                />

                                <p class="h4">Maine Coon</p>

                                <ul class="list-group">
                                    <li class="list-group-item">Dashboard</li>
                                    <li class="list-group-item">Administrator</li>
                                    <li class="list-group-item">Orders</li>
                                    <li class="list-group-item">Products</li>
                                    <li class="list-group-item">Earning Status</li>
                                    <li class="list-group-item">Settings</li>
                                    <li class="list-group-item">Logout</li>   
                                </ul>

                            </div>
                        </div>
                        {/* end of Left Column */}

                        {/* Right Column */}
                        <div class="col-10">
                            <nav class="navbar bg-light">
                                <div class="container-fluid">
                                    {/* add a back button or icon here*/}
                                    <div class="input-group mb-3">
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <input type="text" class="form-control" placeholder="Find project or clients"/>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                        <span class="input-group-text" id="basic-addon1">@</span>
                                    </div>
                                </div>
                            </nav>

                           
                            <div class="row p-4 border bg-light">
                                <div class="col-4">
                                    <div class="p-4 border bg-light">Total Orders Received</div>
                                </div>
                                <div class="col-4">
                                    <div class="p-4 border bg-light">Total Charges</div>
                                </div>
                                <div class="col-4">
                                    <div class="p-4 border bg-light">Total Earnings</div>
                                </div>

                                <div class="col-8">
                                    <div class="p-4 border bg-light"> Line graph </div>
                                </div>
                                <div class="col-4">
                                    <div class="p-4 border bg-light">Graph here</div>
                                </div>

                                <div class="col">
                                    <div class="p-4 border bg-light">
                                        <nav class="navbar bg-light">
                                            <div class="container-fluid">
                                                <a class="navbar-brand" href="#">Table format/user data</a>

                                                {/* Dropdown */}
                                                <div class="dropdown">
                                                    <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Dropdown button
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
            </main>
        </div>
    );
}