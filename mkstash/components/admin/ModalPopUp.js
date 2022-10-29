
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import orderList from '../../lib/orderList.json'

export default function ModalPopUp(title) {

    const [modalOpen, setModalOpen] = useState(false);

    return (

        <Modal
            title={title}
            centered
            visible={modalOpen}
            onOk={() => setModalOpen(false)}
            onCancel={() => setModalOpen(false)}
        >
            <button class="btn btn-primary" onClick={() => window.location.replace("#ordersTable")}>
                Go to orders table
            </button>
            {/*{filter === null  }*/}
            <p>some contents...</p>
            <p>some contents...</p>
        </Modal>

        )
       
}