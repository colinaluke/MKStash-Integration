
import React from 'react';
import 'antd/dist/antd.css';
import orderList from '../../lib/orderList.json';
import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

export default function ModalPopUp({ title, filter }) {

    const trueValue = true;
 

    const paidStatus = orderList.filter(e => e.status === "Paid");
        let totalEarning = 0;
        paidStatus.map(value => {
            totalEarning += value.profit;
        });

    const customerList = orderList.map(element => (
        {
            customerName: element.customerName,
            location: element.location
        }));

    const filteredCList = customerList.filter(function(e) {
        let key = e.customerName + '|' + e.location
       
        if (!this[key]) {   
            this[key] = true
            return true
        }
    }, Object.create(null));


    const customerSet = new Set(customerList.map(obj => obj.customerName));

    //value on the Int_Cards
    const totalUsers = customerSet.size;

    const orderSize = orderList.length;
    return (
        <>
            <div class="col-lg-4 col-md-4 h-25 mt-0">
                <div class="card text-bg-primary my-3">
                    <button type="button" class="btn btn-light w-100 h-100" id="changeTheme" data-status="active" data-bs-toggle="modal" data-bs-target={ `#${title}` }>
                        <div class="row">
                            <div class="col-8">
                                <div class="card-body text-start d-sm-inline-block">
                                    <h5 class="card-title text-dark fw-bold d-md-inline-block"> {title.replace('_', ' ')} <MdGpsFixed class="overflow-hidden" /> </h5>
                                    <p class="card-text-dark "> 
                                        {(title === "ORDERS_RECEIVED") ? orderSize : (title === "TOTAL_USERS") ? totalUsers: totalEarning}
                                    </p>
                                </div>
                            </div>
                            <div class="col-4 pt-3">
                                <BsPatchCheck class="overflow-hidden" size='5vw' />
                            </div>
                        </div>
                    </button>
                </div>

                <div class="modal fade" id={ title } aria-labelledby={ title } aria-hidden="true">
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

                                {filter === "CUSTOMERS" && filteredCList.map((user, index) => (
                                        <>
                                            <ul class="list-group d-flex justify-content-center text-center border border-3" key={index} >
                                                <li class="list-group-item fw-bold"> User Details </li>
                                                <li class="list-group-item">Name : {user.customerName}</li>
                                                <li class="list-group-item"><MdGpsFixed /> Location: {user.location}</li>
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