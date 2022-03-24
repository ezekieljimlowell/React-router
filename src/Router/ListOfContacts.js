import React from "react";
import { Route, Routes, useParams } from "react-router-dom";

export const ListOfContacts = ({ match }) => {
    let name = useParams();
    console.log(name);

    return (
        <>
            <div>Name: {name.name}</div>
        </>
    )
}
