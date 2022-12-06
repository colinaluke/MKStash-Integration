import React from 'react';
import RightSideBar from './RightSideBar'
import NotifDrop from './NotifDrop'
import {
        AiOutlineMail
} from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';


export default function NavBar() {
    return (
            <nav class="navbar navbar-expand-md " id="changeTheme">
                <h1 class="navbar-brand text-dark text-center mt-2" style={{ width:'16rem'}}> DTIF 2022 </h1>
                <div class="input-group px-4">   
                    <input type="text" class="form-control" placeholder="Find project or clients" />
                        <div class="btn-group">
                            <NotifDrop icon={<BsBell />} notif={['s1', 's2', 's3']} />
                            <NotifDrop icon={<AiOutlineMail />} notif={['mail1', 'mail2', 'mail3']} />
                            <RightSideBar />
                        </div>
                </div>
  
          </nav>

    )
}