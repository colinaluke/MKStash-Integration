import Image from 'next/image'
import styles from '../../styles/leftNavigationMenu.module.css'

const LeftNavigationMenu = ({ leftNavBarMustPersist }) => {

    return (
        <div id="side-menu" className={styles.sidemenu} style={{ "width": leftNavBarMustPersist ? '250px' : '0px' }}>
            <div className='row mb-4'>
                <div className="col px-0 d-flex justify-content-center">
                    <Image src="/images/MKStash.svg" className='bg-light rounded-circle' width={90} height={90} />
                </div>
            </div>
            <div className="row mt-4">
                <div className="col">
                    <div className='text-white'>
                        <div className="list-group">
                            <a href="#" className="list-group-item list-group-item-action py-4 border-top rounded-0 active" aria-current="true">
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Dashboard
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 rounded-0">
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 2
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 rounded-0" >
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 3
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 rounded-0">
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 4
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 rounded-0" >
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 5
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 rounded-0">
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 6
                            </a>
                            <a href="#" className="list-group-item list-group-item-action py-4 border-bottom rounded-0" >
                                <span><i className="bi bi-speedometer2 me-4"></i></span>
                                Link 7
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default LeftNavigationMenu;