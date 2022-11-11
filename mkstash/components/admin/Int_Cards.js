
import React from 'react';
import 'antd/dist/antd.css';        
import CardModalPopUp from './ModalPopUp.js'

export default function interactive_Cards() {

    return (
            <div class="row w-100 m-0 p-0" id="changeTheme">

                    {/*ORDERS RECEIVED card*/}
                    <CardModalPopUp title="ORDERS_RECEIVED" filter="ORDERS" />

                    {/*TOTAL CUSTOMERS card*/}
                    <CardModalPopUp title="TOTAL_USERS" filter="CUSTOMERS"/>

                    {/*TOTAL EARNINGS card*/}
                    <CardModalPopUp title="TOTAL_EARNINGS" filter="EARNINGS" />
               

            </div>
        
    )
}