
import React, { useState, useMemo } from 'react';
import 'antd/dist/antd.css';        
import CardModalPopUp from './ModalPopUp.js'
import {ModalContext} from './ContextList.js'

export default function interactive_Cards() {
    const [modalOpen, setModalOpen] = useState(false);
    const modalProviderValue = useMemo(() => ({ modalOpen, setModalOpen }), [modalOpen, setModalOpen]);


    return (
        <ModalContext.Provider value={modalProviderValue}>
            <div class="row w-100 m-0 p-0" id="changeTheme">

                    {/*ORDERS RECEIVED card*/}
                    <CardModalPopUp title="ORDERS_RECEIVED" filter="ORDERS" />

                    {/*TOTAL CUSTOMERS card*/}
                    <CardModalPopUp title="TOTAL_CUSTOMERS" filter="CUSTOMERS"/>

                    {/*TOTAL EARNINGS card*/}
                    <CardModalPopUp title="TOTAL_EARNINGS" filter="EARNINGS" />
               

            </div>
        </ModalContext.Provider>
        
    )
}