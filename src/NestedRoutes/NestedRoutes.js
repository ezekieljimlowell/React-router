import React from "react";
import { Outlet, useParams, BrowserRouter, Routes, Route, Link } from "react-router-dom";

export default function NestedRoutes() {
    return (
        <>
            <h1>Nested Route</h1>
            <BrowserRouter>
                <Link to="invoice">Invoice</Link>
                <Link to="parts">Parts</Link>
                <Routes>
                    <Route path="invoice" element={<Invoice />}>
                    </Route>
                    <Route path="parts" element={<Parts />}></Route>
                    <Route path="invoice/:model" element={<Tractor />}></Route>

                </Routes>
            </BrowserRouter>
        </>
    )
}

function Invoice() {
    return (
        <>
            <div>Invoice</div>
            <Link to="/invoice/tractor">Tractor</Link>
        </>
    )
}

function Tractor() {
    let { model } = useParams();
    console.log(model);

    return (
        <>
            <div>Tractor's invoices</div>
            <div>{model}</div>
        </>
    )
}

function Parts() {
    return (
        <>
            <div>Invoices for parts</div>
        </>
    )
}