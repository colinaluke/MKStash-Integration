
import DL from '../../styles/AdminDashboard.module.css'
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React from 'react'
import OrdersTable from './OrdersTable'
import orderList from '../../lib/orderList.json'


export default function adminProductDashboard() {

    return (

        <div className={`container-fluid-md  ${DL["div.container-fluid-md"]}` }> 
         
                <Header />

            <NavBar />

                 <div className={ `container-fluid-md `} style={{ height: '1000px' }}> {/*height can be improved here*/}
                    {/* Left Column */}
                    <div className="row border bg-light m-0 p-0" id ="changeTheme">

                    <LeftBar />

                    {/* Right Column */}
                    <div class="col-lg-10 col-sm-8 h-100">
                        <div className="row border bg-light " id="changeTheme">
                                <Int_Cards />

                                <Graphs />

                                <div class="col">
                                <OrdersTable items={orderList} />                                

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