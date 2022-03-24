import React, { useState } from "react";
import { Navigate } from "react-router";

export const Forms = ({ setData }) => {
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);

    const changeHandler = (e) => {
        let value = e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        })
    }

    const submitHandler = () => {
        setSubmitted(true);
        setData(formData);
    }

    if (submitted) {
        return <Navigate to="submittedData" />
    }

    return (
        <>
            <form className="form-group" style={{ marginLeft: "30px", marginTop: "30px"}} onSubmit={submitHandler}>
                <div className="form-row">
                    <div className="col-5">
                        <label>Name</label>
                        <input type="text" name="name" onChange={changeHandler} className="form-control" value={formData.name}></input>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-5">
                        <label>Age</label>
                        <input type="text" name="age" onChange={changeHandler} className="form-control" value={formData.age}></input>
                    </div>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Pass</label>
                    <input type="checkbox" name="pass" onChange={changeHandler} className="form-check-input"
                        disabled={formData.fail} value={formData.pass}></input>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Fail</label>
                    <input type="checkbox" name="fail" onChange={changeHandler} className="form-check-input"
                        disabled={formData.pass} value={formData.fail}></input>
                </div>
                <div className="form-check">
                    <label className="form-check-label">First class</label>
                    <input type="radio" name="aboveFifty" onChange={changeHandler} className="form-check-input"
                        disabled={formData.belowFifty} value={formData.aboveFifty}></input>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Second class</label>
                    <input type="radio" name="belowFifty" onChange={changeHandler} className="form-check-input"
                        disabled={formData.aboveFifty} value={formData.belowFifty}></input>
                </div>
                <br></br>
                <button type="submit">Submit</button>
            </form>
        </>
    )
}