import React, { Component, useState, useContext, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import styles from '../../styles/shop.module.css'
import { ActiveContext } from './ActiveContext.js';



const Collection = () => {
    const { collection, setCollection } = useContext(ActiveContext);
    const [isOnsaleCheck, setisOnsaleCheck] = useState(false);
    const [isNewArrival, setisNewArrival] = useState(false);
    const [isBestSeller, setisBestSeller] = useState(false);
    const [isBranded, setisBranded] = useState(false); 
    const [isSurplus, setisSurplus] = useState(false);

    const onCheck = (e) => {
        const { name, value } = e.target;
        let y = collection.filter(x => x !== value);

        if (name == "onsale") {
            if (isOnsaleCheck) {
                setisOnsaleCheck(false);              
                setCollection(y);
            } else {
                setisOnsaleCheck(true);               
                setCollection([...y, value]);
            }
        } else if (name == "newarrival") {
            if (isNewArrival) {
                setisNewArrival(false);                
                setCollection(y);
            } else {
                setisNewArrival(true);
                setCollection([...y, value]);
            }
        } else if (name == "bestseller") {
            if (isBestSeller) {
               setisBestSeller(false);
                setCollection(y);
            } else {
                setisBestSeller(true);
                setCollection([...y, value]);
            }
        } else if (name == "branded") {
            if (isBranded) {
                setisBranded(false);
                setCollection(y);
            } else {
                setisBranded(true);
                setCollection([...y, value]);
            }
        } else if (name == "surplus") {
            if (isSurplus) {
                setisSurplus(false);
                setCollection(y);
            } else {
                setisSurplus(true);
                setCollection([...y, value]);
            }
        }
    }

    useEffect(() => {
        setisOnsaleCheck(collection.includes("onsale"))
        setisNewArrival(collection.includes("newarrival"))
        setisBestSeller(collection.includes("bestseller"))
        setisBranded(collection.includes("branded"))
        setisSurplus(collection.includes("surplus"))
    },[collection])

    return (
        <div className=''>
            <div className={`${styles["sidetitle"]}`}>
                Collection
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="onsale" name="onsale" id="onsale" onChange={onCheck} checked={isOnsaleCheck}></input>
                <label className="form-check-label" htmlFor="onsale">
                    On Sale!
                </label>
            </div>
            <div className="form-check">
                <input className={`form-check-input ${styles["redcheck"]}`} type="checkbox" value="newarrival" name="newarrival" id="newarrival" onChange={onCheck} checked={isNewArrival}></input>
                <label className="form-check-label" htmlFor="newarrival">
                    New Arrival
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="bestseller" name="bestseller" id="bestseller" onChange={onCheck} checked={isBestSeller}></input>
                <label className="form-check-label" htmlFor="bestseller">
                    Best Seller
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="branded" name="branded" id="branded" onChange={onCheck} checked={isBranded}></input>
                <label className="form-check-label" htmlFor="branded">
                    Branded
                </label>
            </div>
            <div className="form-check">
                <input className="form-check-input" type="checkbox" value="surplus" name="surplus" id="surplus" onChange={onCheck} checked={isSurplus}></input>
                <label className="form-check-label" htmlFor="surplus">
                    Surplus
                </label>
            </div>
        </div>
    );
}

export default Collection