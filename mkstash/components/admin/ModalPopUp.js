
import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import orderList from '../../lib/orderList.json'
import { ModalContext } from './ContextList.js'
import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

export default function ModalPopUp(title) {

    const { modalOpen, setModalOpen } = useContext(ModalContext);

    return (
        <>
            <div class="col-lg-4 col-md-12 h-25 mt-0">
                <div class="card text-bg-primary my-3">
                    <button type="button" class="btn btn-light w-100 h-100" onClick={() => setModalOpen(true)} id="changeTheme" data-status="active">
                        <div class="row">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title text-dark"> {title.title} <MdGpsFixed /> </h5>
                                    <p class="card-text-dark"> 5390 </p>
                                </div>
                            </div>
                            <div class="col-4 pt-3">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </button>
                </div>
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
            </div>
        </>
    )
       
}