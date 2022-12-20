import React from 'react';
import RightSideBar from './RightSideBar'
import NotifDrop from './NotifDrop'
import {
    AiOutlineMail,
    AiOutlineBgColors
} from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';
import Image from 'next/image'


export default function NavBar() {
    return (
            <div className="row" id="changeTheme">
                <div className="col-2">
 {/*                   <Image src="/images/MKStash.svg" className= 'ms-4 p-4' width={200} height={80} />*/}
                </div>
                <div className="col-10 p-3 mt-2">
                    <div class="input-group">
                        <input type="text" class="form-control mx-1" placeholder="Find project or clients" />
                        <div class="btn-group">
                            <NotifDrop icon={<AiOutlineBgColors />} notif={['mail1', 'mail2', 'mail3']} isColor={true} />
                            <NotifDrop icon={<BsBell />} notif={['Notif 1', 'Notif 2', 'Notif 3']} isColor={false} />
                            <NotifDrop icon={<AiOutlineMail />} notif={['Mail 1', 'Mail 2', 'Mail 3']} isColor={false} />

                            <RightSideBar />
                        </div>
                    </div>
                </div>
            </div>
    )
}