
import Image from 'next/image';
import DL from '../styles/AdminDashboard.module.css'
import Link from 'next/link';
import React from 'react';
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import ProductTable from './Product_Table'

export default function adminProductDashboard() {
    return (

        <div className={`container-fluid-md  ${DL["div.container-fluid-md"]}` }> 
         
            <Header />
         
            <NavBar />
                 <div className={`card`} style={{ height: '1000px' }}> {/*height can be improved here*/}
                    {/* Left Column */}
                    <div class="row border bg-light card-body m-0 p-0">

                    <LeftBar />

                    {/* Right Column */}
                    <div class="col-md-10 h-100">
                        <div class="row border bg-light ">
                                <Int_Cards />

                                <Graphs />

                                <div class="col">
                                    <ProductTable />
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