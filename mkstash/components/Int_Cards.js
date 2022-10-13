

import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';



export default function interactive_Cards() {
    return (
            <div class ="row w-100">
                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-primary mb-3">
                        <button type="button" class="btn btn-primary w-100 h-100" data-bs-toggle="modal" data-bs-target="#ordersReceivedReport">
                            <div class="row">
                                <div class="col-8">    
                                    <span> 5390 </span> <MdGpsFixed /> 
                                    <br></br>
                                    <span> ORDERS RECEIVED </span>
                                </div>
                                <div class="col-4">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for orders received card */}

                    <div class="modal fade" id="ordersReceivedReport" tabindex="-1"  aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="ordersReceivedReport">Orders Received Report</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*end of orders card*/}

                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-primary mb-3">
                        <button type="button" class="btn btn-danger w-100 h-100" data-bs-toggle="modal" data-bs-target="#totalChargesReport">
                            <div class="row">
                                <div class="col-8">
                                    <span> 2390 </span> <MdGpsFixed />
                                    <br></br>
                                    <span> TOTAL CHARGES </span>
                                </div>
                                <div class="col-4">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for total charges card */}

                    <div class="modal fade" id="totalChargesReport" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="totalChargesReport"> Total Charges Report</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-4 col-md-12 h-25">
                    <div class="card text-bg-warning mb-3">
                    <button type="button" class="btn btn-success w-100 h-100" data-bs-toggle="modal" data-bs-target="#totalEarningsReport">
                            <div class="row">
                                <div class="col-8">
                                    <span> 2390 </span> <MdGpsFixed />
                                    <br></br>
                                    <span> TOTAL EARNINGS </span>
                                </div>
                                <div class="col-4">
                                    <BsPatchCheck size={56} />
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* Modal for total earnings card */}

                    <div class="modal fade" id="totalEarningsReport" tabindex="-1" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">
                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="totalEarningsReport"> Total Earnings Report</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div class="modal-body">
                                    ...
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" class="btn btn-primary">Understood</button>
                                </div>
                            </div>
                        </div>
                    </div> 
                </div>
         </div>
    )
}