import React from "react";
import { Link, Outlet } from "react-router-dom";

export const Child = () => {
    return (
        <>
            <h3>Child route inside child</h3>
            <Link to="new-child">New Child</Link>
            <Outlet />
        </>
    )
}