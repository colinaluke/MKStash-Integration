import React from 'react';
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'
import NotifDrop from './NotifDrop'
import {
        AiOutlineMail
} from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';

export default function NavBar() {
    return (
        <nav class="navbar navbar-expand-md bg-primary">
            <div class="container-fluid position-relative">
                <a class="navbar-brand text-dark" href="#" style={{ width:'17rem'}}> DTIF 2022 </a>
                    <div class="input-group p-0">
                        <LeftSideBar />
                        <input type="text" class="form-control" placeholder="Find project or clients" />
                        <NotifDrop icon={<BsBell />} notif={['s1', 's2', 's3']} />
                        <NotifDrop icon={<AiOutlineMail />} notif={['mail1', 'mail2', 'mail3']} />
                        <RightSideBar />
                </div>
            </div>
          </nav>
    )
}