import React from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Child } from "./Child";

export const ParentRoute = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate replace to="/child" />}></Route>
                    <Route path="/child" element={<Child />}> 
                        <Route path="new-child" element={<div>Welcome new child</div>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    )
}