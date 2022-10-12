import DL from '../styles/AdminDashboard.module.css'
import React from 'react';
import LeftSideBar from './LeftSideBar'
import RightSideBar from './RightSideBar'

import {
        AiOutlineMail
} from 'react-icons/ai';
import { BsBell } from 'react-icons/bs';

export default function NavBar() {
    return (
         <nav class="navbar navbar-expand-lg bg-primary">
            <div class="container-fluid position-relative">
                <a class="navbar-brand text-dark" href="#" style={{ width:'17rem'}}> DTIF 2022 </a>
                    <div class="input-group p-0">
                        <LeftSideBar />

                        <input type="text" class="form-control" placeholder="Find project or clients" />
                        <span class="input-group-text" id="basic-addon1"> <a href="/"> <BsBell /> </a> </span>
                        <span class="input-group-text" id="basic-addon1"> <a href="/">  <AiOutlineMail /> </a> </span>

                        <RightSideBar />
                </div>
            </div>
          </nav>
    )
}