
import Image from 'next/image';
import DL from '../styles/AdminDashboard.module.css'
import Link from 'next/link';
import React from 'react';
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'

export default function adminProductDashboard() {
    return (

        <div className={`container-fluid-md  ${DL["div.container-fluid-md"]}` }> 

            <Header />

                 <div className={`card`} style={{ height: '1000px' }}> {/*height can be improved here*/}

                    <NavBar />
                    
                    {/* Left Column */}
                    <div class="row border bg-light card-body m-0 p-0">

                    <LeftBar />

                    {/* Right Column */}
                    <div class="col-md-10 h-100">
                        <div class="row p-4 border bg-light">
                                <Int_Cards />

                                <Graphs />

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