import Image from 'next/image'

const UserOffCanvas = () => {
    return (
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div className="offcanvas-header">
                <h5 id="offcanvasRightLabel">User Profile</h5>
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body d-flex flex-column justify-content-between">
                <div>
                    <div className='row mb-4'>
                        <div className="col-5">
                            <Image src="/images/toArise.jpg" className='rounded' width={512} height={512} />
                        </div>
                        <div className="col-7">
                            <p className='fw-bold mb-1 fs-5'>Shionne Imerys</p>
                            <p className='mb-0 text-muted mb-1'>System Administrator</p>
                            <p className='mb-2 text-muted mb-3'><i className="bi bi-envelope-check-fill text-primary"></i> shionne@imerys.com</p>
                            <button className='btn btn-outline-primary fs-7 py-1 px-2'>Sign Out</button>
                        </div>
                    </div>

                    <hr />

                    <div className='mb-4'>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-1-square-fill fs-1 text-primary"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Profile</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Account settings and more</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-2-square-fill fs-1 text-warning"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Lorem ipsum dolor amet.</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-3-square-fill fs-1 text-success"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Lorem, ipsum.</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Lorem ipsum dolor sit amet consectetur.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-4-square-fill fs-1 text-danger"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Lorem ipsum dolor sit amet.</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Lorem, ipsum dolor.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-5-square-fill fs-1 text-info"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Lorem, ipsum dolor.</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Lorem ipsum dolor sit.</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-2">
                                <i className="bi bi-6-square-fill fs-1 text-secondary"></i>
                            </div>
                            <div className="col-10 d-flex flex-column justify-content-center">
                                <h6 className='mb-0 align-middle'>My Lorem ipsum dolor sit.</h6>
                                <p className='mb-0 align-middle text-muted fs-7'>Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                    </div>

                    <hr />
                </div>

                <div>
                    <p className='fs-7 text-muted text-center mb-0'>Copyright ©2022 MK Stash - All Rights Reserved.</p>
                </div>

            </div>
        </div>
    );
}

export default UserOffCanvas;