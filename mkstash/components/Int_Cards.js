

import { MdGpsFixed } from 'react-icons/md';
import { BsPatchCheck } from 'react-icons/bs';

export default function interactive_Cards() {
    return (
            <div class ="row">
            <div class="col-4 h-25">
                <div class="card text-bg-primary mb-3">
                    <div class="card-body" >
                        <div class="row">
                            <div class="col-8">
                                <p> <span> 5390 </span> <MdGpsFixed /> </p>
                                <span> ORDERS RECEIVED </span>
                            </div>
                            <div class="col-4 overflow-auto">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-bg-primary mb-3">
                    <div class="card-body">
                        <div class="row " style={{ display: 'flex' }} >
                            <div class="col-8">
                                <p> <span> 2390 </span> <MdGpsFixed /> </p>
                                <span> TOTAL CHARGES </span>
                            </div>

                            <div class="col-4 overflow-auto">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-4">
                <div class="card text-bg-primary mb-3">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-8">
                                <p> <span> $2947 </span> <MdGpsFixed /> </p>
                                <span> TOTAL EARNINGS </span>
                            </div>

                            <div class="col-4 overflow-auto">
                                <BsPatchCheck size={56} />
                            </div>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}