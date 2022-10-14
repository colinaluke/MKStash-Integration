﻿

import DL from '../styles/AdminDashboard.module.css'
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import ProductTable from './Product_Table'
import React from 'react'


export default function adminProductDashboard() {

    return (

        <div className={`container-fluid-md  ${DL["div.container-fluid-md"]}` }> 
         
                <Header />

                <NavBar />
                <div className={`card`} style={{ height: '1000px' }}> {/*height can be improved here*/}
                    {/* Left Column */}
                    <div className="row border bg-light card-body m-0 p-0" id ="changeTheme">

                    <LeftBar />

                    {/* Right Column */}
                    <div class="col-md-10 h-100">
                        <div className="row border bg-light " id="changeTheme">
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