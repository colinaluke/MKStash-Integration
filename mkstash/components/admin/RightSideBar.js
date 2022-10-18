
import Image from 'next/image'; 
import React, { useState } from 'react';  
import { AiOutlineSetting } from 'react-icons/ai';
import { handleClick } from './AdminDashboard'

export default function RightSideBar() {

    return (
        <> 
            <button class="btn btn-light border-0" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight"> <AiOutlineSetting /> </button>
            <div class="offcanvas offcanvas-end border-0" data-bs-scroll="true" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
                <div class="offcanvas-header">
                    <h5 class="offcanvas-title" id="offcanvasRightLabel">Profile Page</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div class="offcanvas-body">
                    <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <Image
                                    src="/images/maine_coon.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>
                            <div class="carousel-item">
                                <Image
                                    src="/images/dog.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>
                            <div class="carousel-item">
                                <Image
                                    src="/images/cat_angry.jpg"
                                    width={350}
                                    height={350}
                                    alt="maine_coon"
                                />
                            </div>  
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev" >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next" >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>

                {/*    
                    <div className={`isActive ?  bg-primary : ${DL["theme-sunset"]} `}>
                        sample theme
                    </div>*/}

                    {/*Theme changers*/}

                    <div class="btn-group">
                        <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            Themes
                        </button>
                        <ul class="dropdown-menu">
                            <li><button className="btn btn-danger m-2" onClick={() => handleClick("rgb(215, 76, 110, 1)")}> Click to change to light red </button></li>
                            <li> <button className="btn btn-success m-2" onClick={() => handleClick("rgb(136, 224, 124, 1)")}> Click to change to light green </button> </li>
                            <li><button className="btn btn-primary m-2" onClick={() => handleClick("rgb( 115, 220, 228, 1)")}> Click to change to light green </button></li>
                            <li><button className="btn btn-warning m-2" onClick={() => handleClick("rgb( 255, 255, 255, 1)")}> Click to change back to original </button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}