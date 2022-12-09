
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React from 'react'
import OrdersTable from './OrdersTable'
import orderList from '../../lib/orderList.json'


export const handleClick = (theme, activeTheme)=> {
    let elem = document.querySelectorAll('#changeTheme')
    elem = Array.from(elem);
    elem.forEach(changeTheme);

    function changeTheme(item, index, arr) {
        arr[index].style.background = theme;
    }

    const ArrayDom = elem.map(element =>
    ({
        element: element,
        status: element.dataset.status,
    }));

    const activeStatus = ArrayDom.filter(item => item.status == "active");
        activeStatus.map(i => {
            i.element.style.background = activeTheme;
        })

    }



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
                    <div class="col-lg-10 col-md-10 h-100 gy-0">
                        <div className="row border bg-light gy-0">
                                <Int_Cards />

                                <Graphs />

                                <OrdersTable items={orderList} /> 

                        </div>

                       
                    </div>
                        {/* end Right Column */}
                    </div>
                </div>
                {/* end Container-fluid */}
        </div>
    );
}