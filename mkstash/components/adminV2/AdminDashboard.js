
import LeftBar from './LeftBar'
import NavBar from './NavBar'
import Graphs from './Graphs'
import Int_Cards from './Int_Cards'
import Header from './Header'
import React, { useState, useEffect } from 'react'
import OrdersTable from './OrdersTable'
import UserTable from './UserTable'
import EarningsTable from './EarningsTable'
import adminLists from '../../lib/orderList.json'
import { ActiveContext } from './ActiveContext.js';

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
    const [content, setContent] = useState('main');

    useEffect(() => {

    }, [content])

    return (
        <ActiveContext.Provider value={{ content, setContent }}>            
            <div className={`container-fluid-md`}>

                <Header />
                <LeftBar />

                <div className="container-fluid-md m-0 p-0 gy-0" style={{ height: '1000px' }}> {/*height can be improved here*/}
                    <NavBar />
                    <div className={`row m-0 p-0 gy-0`}>
                        <div className="col-lg-2 col-md-2 h-100 gy-0">

                        </div>
                        <div className="col-lg-10 col-md-10 h-100 gy-0">
                            <div className="row border bg-light gy-0">

                                { content === "main" &&
                                    <>
                                        <Int_Cards />
                                        <Graphs />
                                        <OrdersTable orders={adminLists.orderList} products={adminLists.productList} />
                                    </>
                                }

                                { content === "UserTable" &&
                                        <UserTable orders={adminLists.orderList} />
                                }

                                {content === "EarningsTable" &&
                                        <EarningsTable orders={adminLists.orderList} products={adminLists.productList} />
                                }

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ActiveContext.Provider>       
       
    );
}