
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React from 'react'
import OrdersTable from './OrdersTable'
import UserTable from './UserTable'
import adminLists from '../../lib/orderList.json'


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



export default function adminProductDashboard({ main }) {
  
    return (
       
        <div className={`container-fluid-md`}> 
         
            <Header />

            <NavBar />

            <div className={ `container-fluid-md m-0 p-0 gy-0`} style={{ height: '1000px' }}> {/*height can be improved here*/}
                <div className={`row m-0 p-0 gy-0` }>
                    <LeftBar />
                    <div className="col-lg-10 col-md-10 h-100 gy-0">
                        <div className="row border bg-light gy-0">

                            {
                                main === "yes" && 
                                    <>
                                        <Int_Cards />
                                        <Graphs />
                                        <OrdersTable orders={adminLists.orderList} products={adminLists.productList} /> 
                                    </>
                            }

                            {
                                main === "UserTable" &&
                                <UserTable orders={adminLists.orderList} products={adminLists.productList} /> 
                            }
                                
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}