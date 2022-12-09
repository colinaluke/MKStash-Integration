
import { Button, notification } from 'antd';
import { handleClick } from './AdminDashboard'

export default function NotifDrop({ icon, notif, isColor }) {
    return (
        <>
            <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {icon}
            </button>

            {(isColor) == false ?
                <ul class="dropdown-menu dropdown-menu-end">
                    <li><a class="dropdown-item" href="#">{notif[0]}</a></li>
                    <li><a class="dropdown-item" href="#">{notif[1]}</a></li>
                    <li><a class="dropdown-item" href="#">{notif[2]}</a></li>
                </ul>

                :
                <ul class="dropdown-menu justify-content-center">
                    <li>
                        <button className="btn btn-light m-2" onClick={() => handleClick("rgb(247, 143, 30)", "rgb(120, 200, 159)")}>
                            <img src="https://www.colorcombos.com/images/colors/hex/F78F1E.png" /> Orange Tree Poppy </button></li>
                    <li>
                        <button className="btn btn-light m-2" onClick={() => handleClick("rgb(172, 209, 233)", "rgb(232, 208, 169)")}>
                            <img src="https://www.colorcombos.com/images/colors/hex/ACD1E9.png" /> Regent St Blue </button> </li>
                    <li>
                        <button className="btn btn-light m-2" onClick={() => handleClick("rgb( 176, 229, 124)", "rgb(255, 240, 170)")}>
                            <img src="https://www.colorcombos.com/images/colors/hex/B0E57C.png" /> Yellow Green </button></li>
                    <li>
                        <button className="btn btn-success m-2 ms-5" onClick={() => handleClick("rgb( 255, 255, 255)", "rgb( 255, 255, 255)")}> Back to OG </button></li>
                </ul>

             }
           
        </>
    );
}