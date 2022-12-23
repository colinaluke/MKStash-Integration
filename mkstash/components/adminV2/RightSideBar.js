
import Image from 'next/image'; 
import React from 'react';  
import { AiOutlineSetting } from 'react-icons/ai';

export default function RightSideBar() {

    return (
        <> 
            <button className="btn border border-1 rounded-pill mx-1" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <AiOutlineSetting /> </button>
            <div className="offcanvas offcanvas-end border-0" data-bs-scroll="true" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="offcanvasRightLabel">Profile Page</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <Image
                                    src="/images/maine_coon.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src="/images/dog.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>
                            <div className="carousel-item">
                                <Image
                                    src="/images/cat_angry.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>  
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}