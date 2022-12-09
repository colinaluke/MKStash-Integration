
import { Button, notification } from 'antd';

// notif pop up on the side

export default function NotifDrop({ icon, notif }) {
    return (
        <>
            <button type="button" class="btn btn-light dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                {icon}
            </button>

            <ul class="dropdown-menu dropdown-menu-end dropdown-menu-lg-start">
                <li><a class="dropdown-item" href="#">{notif[0]}</a></li>
                <li><a class="dropdown-item" href="#">{notif[1]}</a></li>
                <li><a class="dropdown-item" href="#">{notif[2]}</a></li>
            </ul>
        </>
    );
}