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
import { BsPiggyBank, } from 'react-icons/bs';

export default function LeftBar() {
    return (
        <div class="col-md-2 m-0 p-0">
            <div class="card h-100 text-center">
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
                    <li class="list-group-item border border-0 active bg-light">
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
    )
}