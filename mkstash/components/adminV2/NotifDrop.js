
import { handleClick } from './AdminDashboard'
import Image from 'next/image'

export default function NotifDrop({ icon, notif, isColor }) {
    return (
        <>
            <button type="button" class="btn dropdown-toggle border border-1 rounded-pill mx-1 " data-bs-toggle="dropdown" aria-expanded="false">
                {icon}
            </button>

            {(isColor) == false ?
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">{notif[0]}</a></li>
                    <li><a class="dropdown-item" href="#">{notif[1]}</a></li>
                    <li><a class="dropdown-item" href="#">{notif[2]}</a></li>
                </ul>

                :
                <ul class="dropdown-menu ">
                    <li>
                        <button className="btn btn-light m-2 text-start" onClick={() => handleClick("rgb(247, 143, 30)", "rgb(120, 200, 159)")} style={{'width':'12rem'}}>
                            <Image
                                src="/images/orange_poppy.png"
                                width={20}
                                height={20}
                                className="mt-1 me-1"
                            />
                                Orange Tree Poppy
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-light m-2 text-start" onClick={() => handleClick("rgb(172, 209, 233)", "rgb(232, 208, 169)")} style={{ 'width': '12rem' }}>
                            <Image
                                src="/images/regent_blue.png"
                                width={20}
                                height={20}
                                className="mt-1  me-1"
                            />
                                Regent St Blue
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-light m-2 text-start" onClick={() => handleClick("rgb( 176, 229, 124)", "rgb(255, 240, 170)")} style={{ 'width': '12rem' }}>
                            <Image
                                src="/images/yellow_green.png"
                                width={20}
                                height={20}
                                className="mt-1  me-1"
                            />
                                Yellow Green
                        </button>
                    </li>
                    <li>
                        <button className="btn btn-success m-2 ms-5" onClick={() => handleClick("rgb( 255, 255, 255)", "rgb( 255, 255, 255)")}> Back to OG </button></li>
                </ul>

             }
           
        </>
    );
}