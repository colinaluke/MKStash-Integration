import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/Header.module.css'
import UserOffCanvas from './UserOffCanvas'

const Header = ({ handleLeftNavigation }) => {
    return (
        <nav id="nav" className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" style={{ "transition":"margin-left 0.5s"}}>
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
                            <a className="nav-link active" role="button" aria-current="page"><i className="bi bi-palette-fill" style={{ "fontSize": "18px" }}></i></a>
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