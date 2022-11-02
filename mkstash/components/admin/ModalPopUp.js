
import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import orderList from '../../lib/orderList.json'
import { ModalContext } from './ContextList.js'
import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

    

export default function ModalPopUp({ title, filter }) {

    const { modalOpen, setModalOpen } = useContext(ModalContext);
    const trueValue = true;
 
    const customerList = orderList.map(element => (
        {
            customerName: element.customerName,
            location: element.location
        }));

    const paidStatus = orderList.filter(e => e.status === "Paid");
    console.log(paidStatus);
        let totalEarning = 0;
        paidStatus.map(value => {
            totalEarning += value.profit;
        });
/*    const unique = customerList.filter(e => {
        let key = e.customerName + '|' + e.location
        if (!this[key]) {
            this[key] = true
            return true
        }
    });
    const t = orderList.map(element => element).filter(unique)
    console.log(t);*/

    const customerSet = new Set(customerList.map(obj => obj.customerName));

    //value on the Int_Cards
    const totalUsers = customerSet.size;

    const orderSize = orderList.length;
    return (
        <>
            <div class="col-lg-4 col-md-12 h-25 mt-0">
                <div class="card text-bg-primary my-3">
                    <button type="button" class="btn btn-light w-100 h-100" onClick={() => setModalOpen(trueValue)} id="changeTheme" data-status="active" data-bs-toggle="modal" data-bs-target={ `#${title}` }>
                        <div class="row">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title text-dark"> {title.replace('_', ' ')} <MdGpsFixed /> </h5>
                                    <p class="card-text-dark"> 
                                        {(title === "ORDERS_RECEIVED") ? orderSize : (title === "TOTAL_CUSTOMERS") ? totalUsers: totalEarning}
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 pt-3">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </button>
                </div>

                <div class="modal fade" id={ title } tabindex="-3" aria-labelledby={ title } aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{ title.replace('_', ' ') }</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body ">

                                {filter === "ORDERS" &&
                                    <div class="d-flex justify-content-center">
                                        <button class="btn btn-primary " onClick={() => window.location.replace("#ordersTable")}>
                                            Go to orders table
                                        </button>
                                    </div>  
                                }

                                {filter === "CUSTOMERS" && [...customerSet].map((user, index) => (
                                        <>
                                            <ul class="list-group d-flex justify-content-center text-center" key={index} >
                                                <li class="list-group-item">{user}</li>
                                            </ul>
                                        </>
                                    ))
                                }

                                {filter === "EARNINGS" && paidStatus.map((e, index) => (
                                    <>
                                        <ul class="list-group w-100" key={index} >
                                            <div class="dropdown m-2 d-flex justify-content-center" >
                                                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                    Profit: {e.profit}
                                                </button>
                                                <ul class="dropdown-menu ">
                                                    <li><a class="dropdown-item" href="#">Product Name: {e.productName}</a></li>
                                                    <li><a class="dropdown-item" href="#">Price: {e.productPrice}</a></li>
                                                    <li><a class="dropdown-item" href="#">Quantity: {e.quantity}</a></li>
                                                </ul>
                                            </div>
                                        </ul>
                                    </>
                                ))
                                }

                            </div>
                            <div class="modal-footer">
                             
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
       
}