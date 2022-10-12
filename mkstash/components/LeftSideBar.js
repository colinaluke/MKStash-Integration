import DL from '../styles/AdminDashboard.module.css'
import Link from 'next/link';
import Image from 'next/image'; 
import React from 'react';  

import {
    AiOutlineShoppingCart,
    AiOutlinePoweroff,
    AiOutlineSetting,
    AiOutlineDashboard,
    AiOutlineClockCircle,
} from 'react-icons/ai';
import { RiAdminLine } from 'react-icons/ri';
import { BsPiggyBank, BsBell, BsPatchCheck } from 'react-icons/bs';
import { IoChevronBackCircleOutline } from 'react-icons/io5';



export default function LeftNavBar() {
    return (
        <div>
            <span class="input-group-text" id="basic-addon1">
                <button class="btn btn-primary" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"> <IoChevronBackCircleOutline /> </button>
            </span>
            <div class="offcanvas offcanvas-start" data-bs-scroll="true" tabindex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel" style={{ width: '15rem' }}>
                <div class="offcanvas-header text-center">
                    <h5 class="offcanvas-title text-center" id="offcanvasWithBothOptionsLabel"> DTIF 2022 </h5>
                </div>
                <div class="offcanvas-body">
                    <ul className={"list-group list-group-flush"}>
                        <li class="list-group-item">
                            <Image
                                src="/images/maine_coon.jpg"
                                width={100}
                                height={100}
                                alt="maine_coon"
                                className={DL.borderImage}
                            />
                            <p class="h4">Maine Coon</p>
                        </li>

                        {/*<li className={`  list-group-item ${DL["group-item"]}` }>*/}
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <AiOutlineDashboard /> Dashboard </a>
                            </Link>
                        </li>
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <RiAdminLine /> Administrator </a>
                            </Link>
                        </li>
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <AiOutlineClockCircle /> Orders </a>
                            </Link>
                        </li>
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <AiOutlineShoppingCart /> Products </a>
                            </Link>
                        </li>
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <BsPiggyBank /> Earning Status </a>
                            </Link>
                        </li>
                        <li class="list-group-item border border-0">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <AiOutlineSetting /> Settings </a>
                            </Link>
                        </li>
                        <li class="list-group-item">
                            <Link href='/' >
                                <a className={DL.linkFormat}> <AiOutlinePoweroff /> Logout </a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}