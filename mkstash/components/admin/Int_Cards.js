
import React, { useState } from 'react';
import 'antd/dist/antd.css';
import { Modal } from 'antd';
import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

export default function interactive_Cards() {
    const [modalOrdersOpen, setModalOrdersOpen] = useState(false);
    const [modalChargesOpen, setModalChargesOpen] = useState(false);
    const [modalEarningsOpen, setModalEarningsOpen] = useState(false);

    return (
            <div class ="row w-100 m-0 p-0">
                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-primary mb-3">
                        <button type="button" class="btn btn-primary w-100 h-100" onClick={() => setModalOrdersOpen(true)}>
                            <div class="row">
                                <div class="col-8">    
                                    <div class="card-body text-start">
                                        <h5 class="card-title text-light">ORDERS RECEIVED <MdGpsFixed /> </h5>
                                        <p class="card-text"> 5390 </p>
                                    </div>
                                </div>
                                <div class="col-4 pt-3">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for orders received card */}

                    <Modal
                        title="Orders Received"
                        centered
                        visible={modalOrdersOpen}
                        onOk={() => setModalOrdersOpen(false)}
                        onCancel={() => setModalOrdersOpen(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>

                </div>
                {/*end of orders card*/}

                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-primary mb-3">
                    <button type="button" class="btn btn-danger w-100 h-100" onClick={() => setModalChargesOpen(true)}>
                            <div class="row">
                                <div class="col-8">
                                    <div class="card-body text-start">
                                        <h5 class="card-title text-light">TOTAL CHARGES <MdGpsFixed /> </h5>
                                        <p class="card-text"> 2390 </p>
                                    </div>
                                </div>
                                <div class="col-4 pt-3">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for total charges card */}

                    <Modal
                        title="Total Charges"
                        centered
                        visible={modalChargesOpen}
                        onOk={() => setModalChargesOpen(false)}
                        onCancel={() => setModalChargesOpen(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal>
                </div>

                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-warning mb-3">
                    <button type="button" class="btn btn-success w-100 h-100" onClick={() => setModalEarningsOpen(true)}>
                            <div class="row">
                                <div class="col-8">
                                    <div class="card-body text-start">
                                        <h5 class="card-title text-light"> TOTAL EARNINGS <MdGpsFixed /> </h5>
                                        <p class="card-text"> 2390 </p>
                                    </div>
                                </div>
                                <div class="col-4 pt-3">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for total earnings card */}

                    <Modal
                        title="Total Earnings"
                        centered
                        visible={modalEarningsOpen}
                        onOk={() => setModalEarningsOpen(false)}
                        onCancel={() => setModalEarningsOpen(false)}
                    >
                        <p>some contents...</p>
                        <p>some contents...</p>
                        <p>some contents...</p>
                    </Modal> 
                </div>
         </div>
    )
}