import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import UserOffCanvas from './UserOffCanvas'
import { useContext } from 'react'
import ThemeContext from '../../utils/ThemeContext'


const Header = ({ handleLeftNavigation, leftNavBarMustPersist }) => {

    const { selectTheme } = useContext(ThemeContext)


    return (
        <nav id="nav" className={`navbar navbar-expand-lg navbar-dark bg-primary fixed-top ${styles['content']}`} style={{ "transition": "margin-left 0.5s", "marginLeft": leftNavBarMustPersist ? "250px" : "0px", "zIndex": '1000' }}>
            <div className="container-fluid text-white">

                <div className="d-flex">
                    {/* Button for Left Navigation Menu */}
                    <button className="btn btn-primary me-4" onClick={() => handleLeftNavigation()}>&#9776;</button>

                    <Link href="/admin/dashboard">
                        <a className="navbar-brand text-white" href="">Dashboard</a>
                    </Link>
                </div>

                <div className="d-flex">

                    <ul className="navbar-nav me-auto my-lg-0 flex-row">
                        <li className="nav-item mx-2">

                            <div className="dropdown dropstart">
                                <a className="nav-link active" role="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-current="page"><i className="bi bi-palette-fill" style={{ "fontSize": "18px" }}></i></a>
                                <ul className="dropdown-menu position-absolute top-100 end-0" aria-labelledby="dropdownMenuButton1">
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => selectTheme('velvet')}>
                                            <span className='px-2 border rounded me-2' style={{ "backgroundColor": "#d03d47" }}></span> Velvet (Default)
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => selectTheme('royal')}>
                                            <span className='px-2 border rounded me-2' style={{ "backgroundColor": "#002B5B" }}></span> Royal Blue
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => selectTheme('earth')}>
                                            <span className='px-2 border rounded me-2' style={{ "backgroundColor": "#9e7676" }}></span> Earth
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="#" onClick={() => selectTheme('verdant')}>
                                            <span className='px-2 border rounded me-2' style={{ "backgroundColor": "#6CC4A1" }}></span> Verdant
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li className="nav-item mx-2">
                            <a className="nav-link active" role="button" aria-current="page"><i className="bi bi-bell-fill" style={{ "fontSize": "18px" }}></i></a>
                        </li>
                        <a className="nav-link mx-2" id="user-drop-down" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">
                            <Image src="/images/toArise.jpg" className={styles.avatar} width={25} height={25} />
                        </a>

                    </ul>
                </div>
            </div>


            <UserOffCanvas></UserOffCanvas>


        </nav>
    );
}

export default Header;