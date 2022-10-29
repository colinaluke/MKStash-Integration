
import React, { useContext } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import orderList from '../../lib/orderList.json'
import { ModalContext } from './ContextList.js'
import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

    

export default function ModalPopUp({ title, filter }) {

    const { modalOpen, setModalOpen } = useContext(ModalContext);
    const trueValue = true;

    return (
        <>
            <div class="col-lg-4 col-md-12 h-25 mt-0">
                <div class="card text-bg-primary my-3">
                    <button type="button" class="btn btn-light w-100 h-100" onClick={() => setModalOpen(trueValue)} id="changeTheme" data-status="active" data-bs-toggle="modal" data-bs-target={ `#${title}` }>
                        <div class="row">
                            <div class="col-8">
                                <div class="card-body text-start">
                                    <h5 class="card-title text-dark"> {title.replace('_', ' ')} <MdGpsFixed /> </h5>
                                    <p class="card-text-dark"> 5390 </p>
                                </div>
                            </div>
                            <div class="col-4 pt-3">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </button>
                </div>
{/*
                <Modal
                    title={ title }
                    centered
                    open={modalOpen}
                    onOk={() => setModalOpen(false)}
                    onCancel={() => setModalOpen(false)}
                >
                    {filter === "ORDERS" &&
                        <button class="btn btn-primary" onClick={() => window.location.replace("#ordersTable")}>
                        Go to orders table
                        </button>
                    }
                 
                */}{/*{filter === null  }*/}{/*
                <p>some contents...</p>
                <p>some contents...</p>
                </Modal>
*/}
                <div class="modal fade" id={ title } tabindex="-3" aria-labelledby={ title } aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="exampleModalLabel">{ title.replace('_', ' ') }</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                {filter === "ORDERS" &&
                                    <button class="btn btn-primary" onClick={() => window.location.replace("#ordersTable")}>
                                        Go to orders table
                                    </button>
                                }
                                <p>some contents...</p>
                                <p>some contents...</p>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
       
}