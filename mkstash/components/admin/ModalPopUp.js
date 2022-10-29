
import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import orderList from '../../lib/orderList.json'
import {ModalContext} from './ContextList.js'

export default function ModalPopUp(title) {

    const [modalOpen, setModalOpen] = useContext(ModalContext);

    return (
        <>
            <Modal
                title={title}
                centered
                open={modalOpen}
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
        </>
    )
       
}