
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React from 'react'
import OrdersTable from './OrdersTable'
import orderList from '../../lib/orderList.json'
import styles from '../../styles/jed.module.css'


export const handleClick = (theme, activeTheme) => {
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

        <div className={`container-fluid-md`} style={{'overflow-x': 'hidden'}}>

            <Header />

            <NavBar />

            <div className={`container-fluid-md p-0 gy-0 ${styles['parent']}`}> {/*height can be improved here*/}
                <LeftBar />
                <div className="row">
                    <div className="col-0 col-lg-2 px-0">

                    </div>
                    <div className="col-12 col-lg-10 px-0">
                        <div className={`${styles['content']}`}>
                            <div className="border bg-light gy-0">
                                <Int_Cards />

                                <Graphs />

                                <OrdersTable items={orderList} />
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className={`d-flex justify-content-end`}>
                    <div className={`${styles['content']}`}>
                        <div className="border bg-light gy-0">
                            <Int_Cards />

                            <Graphs />

                            <OrdersTable items={orderList} />
                        </div>
                    </div>
                </div> */}
                {/* <div className={`row m-0 p-0 gy-0` }>
                    <LeftBar />
                    <div class="col-lg-10 col-md-10 h-100 gy-0">
                        <div className="row border bg-light gy-0">
                                <Int_Cards />

                                <Graphs />

                                <OrdersTable items={orderList} /> 
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
}