import React, { useState } from "react";
import { Link, Routes, BrowserRouter, Route } from "react-router-dom";
import { Forms } from "./Forms";
import { SubmittedData } from "./SubmittedData";

export const ParentForm = () => {
    const [data, setData] = useState({});

    return (
        <div>
            <BrowserRouter>
                <Link to="/" style={{background: "gray", textDecoration : "none", padding: "10px", borderRadius: "5px", color: "black"}}>Forms</Link>
                <Routes>
                    <Route path="/" element={<Forms setData={setData}/>}></Route>
                    <Route path="/submittedData" element={<SubmittedData data={data}/>}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}