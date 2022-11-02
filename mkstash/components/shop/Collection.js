import React, { Component, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/navbar.module.css'


const Collection = () => {



    return (
        <div className=''>
            <div className={`${styles["sidetitle"]}`}>
                Collection
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="onsale"></input>
                <label className="form-check-label" for="onsale">
                    On Sale!
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="newarrival"></input>
                <label className="form-check-label" for="newarrival">
                    New Arrival
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="bestseller"></input>
                <label className="form-check-label" for="bestseller">
                    Best Seller
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="branded"></input>
                <label className="form-check-label" for="branded">
                    Branded
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="surplus"></input>
                <label className="form-check-label" for="surplus">
                    Surplus
                </label>
            </div>
        </div>
    );
}

export default Collection