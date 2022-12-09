import React from 'react';
import RightSideBar from './RightSideBar'
import NotifDrop from './NotifDrop'
import {
    AiOutlineMail,
    AiOutlineBgColors
} from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';


export default function NavBar() {
    return (
            <nav class="navbar navbar-expand-md " id="changeTheme">
                <h1 class="navbar-brand text-dark text-center mt-2" style={{ width:'16rem'}}> DTIF 2022 </h1>
                <div class="input-group px-4">   
                    <input type="text" class="form-control" placeholder="Find project or clients" />
                     <div class="btn-group">
                        <NotifDrop icon={<AiOutlineBgColors />} notif={['mail1', 'mail2', 'mail3']} isColor={true}/>
                        <NotifDrop icon={<BsBell />} notif={['Notif 1', 'Notif 2', 'Notif 3']} isColor={false} />
                        <NotifDrop icon={<AiOutlineMail />} notif={['Mail 1', 'Mail 2', 'Mail 3']} isColor={false} />

                        <RightSideBar />
                        </div>
                </div>
  
          </nav>

    )
}