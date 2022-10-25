import React, {useState} from "react";
import { useReducer } from "react";
import { useRouter } from 'next/router';
import { connectToDatabase } from "../libs/mongodb";
import styles from "../styles/Contact.module.css";

const formReducer = (state,event) => {
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function Test({properties}){

    const router = useRouter();
    const [errMsg, setErrMsg] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);

    const addTodoHandler = async (data) => {
        const response = await fetch("/api/test", {
            method: "POST", 
            body: JSON.stringify(data),
            headers: {
                "content-Type" : "application/json"
            }
        }) 
        const {message} = await response.json();
        setErrMsg(message);
        router.push("/test");
    }

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        //if(Object.keys(formData).length==0) return console.log("No form data.");
        addTodoHandler(formData);
        setShowSuccess(true);
        console.log(formData);
    }

    //if(Object.keys(formData).length>0) return <Success message={"Data added!"}></Success>;

    return(
        <div>
            <form onSubmit={handleSubmit}>
            <div>
                <div>
                    <p>
                        <label> First Name </label>
                        <input className="form-control" onChange={setFormData} type="text" name="fname" placeholder="Enter your first name..." required />
                    </p>
                    <p>
                        <label> Last Name </label>
                        <input className="form-control" onChange={setFormData} type="text" name="lname" placeholder="Enter your last name..." required />
                    </p>
                    <p><label> Email Address 
                        {errMsg && (
                            <div>{errMsg}</div>
                        )
                        }
                    </label>
                        <input className="form-control" onChange={setFormData} type="email" name="email" placeholder="Enter your email address..." required />
                    </p>
                    <p>
                        <label> Contact Number </label>
                        <input className="form-control" onChange={setFormData} type="tel" name="contactnum" placeholder="Enter your contact number..." required />
                    </p>
                </div>
                    <p>
                        <label> Message </label>
                        <textarea className="form-control" onChange={setFormData} type="input" name="message" placeholder="Write your message here..." required />
                    </p>
                </div>
                <button type="submit"> Send </button>
                </form>
                <hr/>
                <hr/>
                {showSuccess && (
                        <div className={styles.successOverlay}>
                            Message Sent!
                            <button onClick={()=>setShowSuccess(false)}>Close</button>
                        </div>
                        )
                }
            {properties && properties.map(property =>(
                <div>
                    <p>{property.fname}</p>
                    <p>{property.lname}</p>
                    <p>{property.email}</p>
                    <p>{property.message}</p>
                    <hr />
                </div>
            ))}
        </div>
    );
}

export async function getServerSideProps(context){
    const { db } = await connectToDatabase();
    const data = await db.collection("feedback").find({}).limit(10).toArray();

    const properties = JSON.parse(JSON.stringify(data));
    const filtered = properties.map(property =>{
        return{
            _id: property._id,
            fname: property.fname,
            lname: property.lname,
            email: property.email,
            contactnum: property.contactnum,
            message: property.message
        }
    })

    return {
        props: { properties: filtered},
    }
}