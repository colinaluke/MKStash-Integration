
import DL from '../../styles/AdminDashboard.module.css'
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React from 'react'
import OrdersTable from './OrdersTable'
import orderList from '../../lib/orderList.json'


export const handleClick = theme => {
    let elem = document.querySelectorAll('#changeTheme')
    console.log(elem)
    for (let i = 0; i < elem.length; i++) {
        elem[i].style.background = theme;
    }
};


export default function adminProductDashboard() {

    return (

        <div className={`container-fluid-md`}> 
         
                <Header />

                <NavBar />

                 <div className={ `container-fluid-md m-0 p-0 gy-0`} style={{ height: '1000px' }}> {/*height can be improved here*/}
                    {/* Left Column */}
                <div className={`row m-0 p-0 gy-0` }>

                    <LeftBar />

                    {/* Right Column */}
                    <div class="col-lg-10 col-md-8 h-100 gy-0">
                        <div className="row bg-light gy-0">
                                <Int_Cards />

                                <Graphs />

                                <div class="col p-0" id="changeTheme">
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